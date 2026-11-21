(() => {
  let checking = false;
  let reloading = false;
  const button = document.querySelector('#checkUpdateBtn');
  const status = document.querySelector('#updateStatus');

  if ('serviceWorker' in navigator) navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (reloading) return;
    reloading = true;
    setTimeout(() => location.reload(), 300);
  });

  function waitForInstall(worker, timeout = 12000) {
    if (!worker || worker.state === 'activated' || worker.state === 'redundant') return Promise.resolve();
    return new Promise(resolve => {
      const finish = () => { clearTimeout(timer); worker.removeEventListener('statechange', onChange); resolve(); };
      const onChange = () => { if (worker.state === 'activated' || worker.state === 'redundant') finish(); };
      const timer = setTimeout(finish, timeout);
      worker.addEventListener('statechange', onChange);
    });
  }

  function isNewerVersion(remote, current) {
    const a = String(remote || '').split('.').map(Number);
    const b = String(current || '').split('.').map(Number);
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      const difference = (a[i] || 0) - (b[i] || 0);
      if (difference) return difference > 0;
    }
    return false;
  }

  async function checkForUpdate(silent = false) {
    if (checking) return;
    checking = true;
    if (!silent && button) { button.disabled = true; button.textContent = 'Đang kiểm tra…'; }
    if (!silent && status) status.textContent = 'Đang kết nối';
    try {
      if (!navigator.onLine) throw new Error('Thiết bị đang ngoại tuyến. Kết nối mạng rồi thử lại nhé.');
      const response = await fetch(`./version.json?check=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error('Chưa kiểm tra được phiên bản trên máy chủ.');
      const published = await response.json();
      const currentVersion = window.MyEnglishRelease?.version || (document.querySelector('#appVersion')?.textContent || '').replace(/^v/, '').trim();
      let registration = null;
      let workerChanged = false;
      let previousActive = null;

      if ('serviceWorker' in navigator) {
        registration = await navigator.serviceWorker.getRegistration('./');
        if (!registration) registration = await navigator.serviceWorker.register('./sw.js');
        previousActive = registration.active;
        await registration.update();
        await waitForInstall(registration.installing);
        workerChanged = Boolean(registration.active && registration.active !== previousActive);
      }

      const versionAvailable = isNewerVersion(published.version, currentVersion);
      if (versionAvailable && registration && previousActive && !workerChanged) {
        throw new Error('Có bản mới trên GitHub nhưng chưa cài được. Kiểm tra repo đã nhận đủ file trong ZIP rồi thử lại.');
      }

      if (versionAvailable || workerChanged) {
        if (!silent && status) status.textContent = `Đang tải bản v${published.version}…`;
        if (!silent && button) button.textContent = 'Đang cập nhật…';
        if (!silent && typeof toast === 'function') toast(`Có bản MyEnglish v${published.version}. Đang cập nhật…`);
        if (!registration) setTimeout(() => location.reload(), 600);
        else setTimeout(() => { if (!reloading && registration.active !== previousActive) location.reload(); }, 1800);
      } else {
        const text = 'App đang ở phiên bản mới nhất.';
        if (!silent && status) status.textContent = text;
        if (!silent && typeof toast === 'function') toast(text);
      }
    } catch (error) {
      const text = error?.message || 'Chưa kiểm tra được cập nhật. Thử lại sau nhé.';
      if (!silent && status) status.textContent = text;
      if (!silent && typeof toast === 'function') toast(text);
    } finally {
      checking = false;
      if (!silent && button) { button.disabled = false; button.textContent = 'Kiểm tra cập nhật'; }
    }
  }

  button?.addEventListener('click', () => checkForUpdate());
  window.addEventListener('load', () => setTimeout(() => checkForUpdate(true), 1200), { once: true });

  const hint = document.querySelector('#pullUpdateHint');
  let touchStartY = null;
  let pullDistance = 0;
  document.addEventListener('touchstart', event => {
    if (document.querySelector('#page-home')?.classList.contains('active') && window.scrollY <= 2 && event.touches.length === 1) {
      touchStartY = event.touches[0].clientY;
      pullDistance = 0;
    } else touchStartY = null;
  }, { passive: true });
  document.addEventListener('touchmove', event => {
    if (touchStartY === null || !document.querySelector('#page-home')?.classList.contains('active')) return;
    pullDistance = Math.max(0, event.touches[0].clientY - touchStartY);
    if (pullDistance > 24) {
      hint?.classList.add('show');
      if (hint) hint.textContent = pullDistance >= 88 ? '✓ Thả để kiểm tra cập nhật' : '↓ Kéo thêm để kiểm tra';
    }
    if (pullDistance >= 88 && event.cancelable) event.preventDefault();
  }, { passive: false });
  const finishPull = () => {
    if (touchStartY !== null && pullDistance >= 88) checkForUpdate();
    touchStartY = null;
    pullDistance = 0;
    setTimeout(() => hint?.classList.remove('show'), 300);
  };
  document.addEventListener('touchend', finishPull, { passive: true });
  document.addEventListener('touchcancel', finishPull, { passive: true });
})();
