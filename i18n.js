(() => {
  const translations = {
    'Từ điển Anh – Việt':'English–Vietnamese dictionary', 'Từ điển':'Dictionary', 'Tra từ':'Look up', 'Tra từ tiếng Anh hoặc tìm theo nghĩa tiếng Việt trong kho từ của app.':'Look up English words or search by Vietnamese meaning in the app word bank.', 'Nhập từ tiếng Anh hoặc nghĩa tiếng Việt…':'Enter an English word or Vietnamese meaning…', 'Gõ từ tiếng Anh hoặc nghĩa tiếng Việt để bắt đầu tra.':'Type an English word or Vietnamese meaning to look it up.', 'Tải thêm từ để tra':'Download more words', 'Nút này sẽ thêm bộ từ vào sổ học với trạng thái “Từ mới”.':'This adds the word bank to your study list as new words.', '🔊 Đọc nghĩa tiếng Việt':'🔊 Read Vietnamese meaning',
    'Trình duyệt này chưa hỗ trợ nhập bằng giọng nói.':'This browser does not support voice input.', 'Đang nghe… Hãy nói một câu ngắn.':'Listening… Say a short sentence.', 'Đã nhận giọng nói, đang dịch…':'Speech recognized; translating…', 'Chưa được cấp quyền microphone.':'Microphone permission was not granted.', 'Không thể bắt đầu nhận giọng nói. Hãy thử lại.':'Could not start speech recognition. Please try again.', 'Không nhận được chữ trong ảnh.':'No text could be recognized in the image.', 'Camera chưa sẵn sàng.':'Camera is not ready yet.', 'Không kết nối được dịch vụ dịch.':'Could not connect to the translation service.', 'Dịch vụ đang bận. Vui lòng đợi rồi thử lại.':'The translation service is busy. Please wait and try again.',
    'Dịch & đọc':'Translate & listen', 'Dịch':'Translate', 'Dịch Anh ↔ Việt bằng văn bản hoặc lấy chữ từ ảnh.':'Translate English ↔ Vietnamese with text or extract text from an image.', 'Chiều dịch':'Direction', 'Văn bản cần dịch':'Text to translate', 'Bản dịch':'Translation', 'Chọn ảnh':'Choose image', 'Nhập hoặc dán văn bản ở đây…':'Enter or paste text here…', 'Bản dịch sẽ hiện ở đây.':'Your translation will appear here.', 'English → Tiếng Việt':'English → Vietnamese', 'Tiếng Việt → English':'Vietnamese → English', '⇄ Đổi chiều':'⇄ Swap languages', '🔊 Đọc văn bản':'🔊 Read source', '🔊 Đọc bản dịch':'🔊 Read translation', '🎙 Nói':'🎙 Speak', '📷 Chụp ảnh':'📷 Take photo', 'Chụp ảnh để nhận dạng chữ':'Take a photo to recognize text', 'Chụp & nhận dạng':'Capture & recognize', 'Xóa':'Clear', 'Sao chép':'Copy', 'Đã sao chép bản dịch.':'Translation copied.', 'Chưa có bản dịch để sao chép.':'There is no translation to copy.', 'Chưa có văn bản để đọc.':'There is no text to read.', 'Chưa có bản dịch để đọc.':'There is no translation to read.', 'Nhập văn bản cần dịch trước nhé.':'Enter text to translate first.', 'Dịch vụ miễn phí bên ngoài: giới hạn 5.000 ký tự mỗi ngày. Văn bản chỉ được gửi khi anh bấm “Dịch”.':'Free external translation: limited to 5,000 characters per day. Text is sent only after you select “Translate”.', 'Dịch xong. Hạn mức miễn phí ẩn danh là 5.000 ký tự/ngày.':'Translation complete. Anonymous free use is limited to 5,000 characters per day.', 'Đang dịch… Văn bản sẽ được gửi tới MyMemory.':'Translating… Text will be sent to MyMemory.', 'Mỗi ngày dịch vụ miễn phí cho phép tối đa khoảng 5.000 ký tự.':'Free service allows up to about 5,000 characters per day.', 'OCR nhận dạng ảnh trên thiết bị; ảnh không được gửi lên máy chủ dịch.':'OCR recognizes images on this device; images are not sent to the translation server.', 'Muốn nói tiếng Việt và dịch sang Anh: chọn “Tiếng Việt → English”, bấm “Nói”; app sẽ tự nhận giọng và dịch.':'To speak Vietnamese and translate it to English, choose “Vietnamese → English” and tap “Speak”; the app will recognize and translate it automatically.', 'Đọc giọng nói bằng tính năng có sẵn trên thiết bị. OCR nhận dạng ảnh trên thiết bị; ảnh không được gửi lên máy chủ dịch. Nhận dạng giọng nói có thể dùng dịch vụ trực tuyến của trình duyệt.':'Read aloud uses your device voices. OCR runs on your device; images are not sent to the translation server. Speech recognition may use your browser’s online service.', 'Chưa được cấp quyền camera. Hãy cho phép trong trình duyệt.':'Camera permission was not granted. Allow it in your browser.', 'Camera cần quyền thiết bị và kết nối HTTPS.':'Camera access requires device permission and HTTPS.', 'Không mở được camera. Có thể chọn ảnh từ thiết bị thay thế.':'Could not open the camera. You can choose an image from your device instead.', 'Đã lấy chữ từ ảnh. Anh có thể sửa nội dung rồi bấm “Dịch”.':'Text extracted from image. Review it, then select “Translate”.', 'Chưa nhận dạng được chữ. Hãy thử ảnh rõ nét, đủ sáng và chụp thẳng.':'Could not recognize text. Try a clear, well-lit, straight-on image.', 'Ảnh được xử lý ngay trên thiết bị.':'Image is processed on this device.',
    '✓ Đã nhớ':'✓ Remembered', '↻ Ôn lại':'↻ Review again', 'Từ tiếp theo →':'Next word →',
    'Cỡ chữ giao diện':'Interface text size', 'Chọn kích thước phù hợp với màn hình.':'Choose a size that fits your screen.',
    'Hủy':'Cancel', 'Đóng':'Close', 'Kho từ tiếng Anh mở rộng':'Expanded English word bank', 'Tải miễn phí một lần, gồm nhiều nghìn từ theo nhiều chủ đề. Cần kết nối Internet.':'Free one-time download with thousands of words across many topics. Internet required.', 'Tải kho từ':'Download word bank', 'Nguồn:':'Source:', 'giấy phép CC BY-SA 4.0. Nghĩa tiếng Việt do AI tạo, chưa được người rà soát; dữ liệu đã lọc trùng và gắn chủ đề cho app.':'licensed under CC BY-SA 4.0. Vietnamese meanings are AI-generated and not human-reviewed; entries were deduplicated and tagged for this app.', 'Hiển thị tối đa 100 từ; file xuất gồm toàn bộ sổ từ.':'Showing up to 100 words; exports include your full vocabulary list.',
    '5 phút':'5 minutes', '10 phút':'10 minutes', '15 phút':'15 minutes', '85%':'85%', '100%':'100%', '125%':'125%', '150%':'150%', '50%':'50%',
    'Góc học ngoại ngữ của bạn':'Your language-learning space', 'Tổng quan':'Overview', 'Từ vựng':'Vocabulary', 'Kiểm tra':'Quiz', 'Báo cáo':'Reports', 'Cài đặt':'Settings',
    'Học chậm mà đều 🌱':'Steady learning 🌱', 'mỗi ngày thêm một từ':'one new word every day', 'Một lượt nhỏ hôm nay giúp từ mới ở lại lâu hơn. Dữ liệu được lưu trên thiết bị này.':'A little practice today helps new words stick. Your data is saved on this device.',
    'Chào anh, mình học nhé?':'Ready to learn today?', 'Tiếng Anh · Hôm nay':'English · Today', 'Mỗi ngày một chút,':'A little each day,', 'tiếng Anh tiến một bước.':'one step further in English.', 'Học từ mới, nghe cách phát âm và ôn lại đúng lúc. Không áp lực — mình cứ bắt đầu thôi.':'Learn new words, hear how they sound, and review at the right time. No pressure—let’s begin.', 'Bắt đầu học':'Start learning', 'Làm bài kiểm tra':'Take a quiz', 'từ cần ôn hôm nay':'words due today',
    'Đã thuộc':'Mastered', 'từ vựng':'words', 'Đang học':'Learning', 'Đã ôn hôm nay':'Reviewed today', 'lượt ôn':'reviews', 'Chuỗi học':'Learning streak', 'ngày liên tục':'days in a row', 'Lượt học tiếp theo':'Next up', 'Tiến độ học từ':'Vocabulary progress', 'Từ đã thuộc trên tổng số từ trong danh sách':'Words mastered out of all words in your list', 'Ôn tập gần đây':'Recent reviews', 'lượt':'reviews', 'Chưa có lượt ôn nào. Học thử một từ nhé.':'No reviews yet. Try studying a word.', 'Thêm từ đầu tiên để bắt đầu học.':'Add your first word to get started.',
    'Sổ từ vựng':'Vocabulary list', 'Học từ mới, ôn lại và quản lý danh sách của anh.':'Learn new words, review them, and manage your list.', '＋ Thêm từ':'＋ Add word', 'Tìm từ, nghĩa, chủ đề…':'Search words, meanings, topics…', 'Tất cả trạng thái':'All statuses', 'Từ mới':'New', 'Mọi chủ đề':'All topics', 'Nhập CSV':'Import CSV', 'Không tìm thấy từ phù hợp.':'No matching words found.', 'Ôn':'Review', 'Chưa phân loại':'Uncategorized',
    'Thêm từ mới':'Add a new word', 'Từ tiếng Anh *':'English word *', 'Phiên âm, ví dụ /ˈhɑːbɪt/':'Pronunciation, e.g. /ˈhɑːbɪt/', 'Nghĩa tiếng Việt *':'Meaning in Vietnamese *', 'Câu ví dụ tiếng Anh':'Example sentence in English', 'Dịch câu ví dụ':'Example translation', 'Chủ đề, ví dụ Daily life':'Topic, e.g. Daily life', 'Lưu từ':'Save word', 'Đã thêm từ vào sổ.':'Word added to your list.',
    'Kiểm tra nhanh':'Quick quiz', 'Chọn nghĩa đúng để xem mình nhớ từ đến đâu.':'Choose the correct meaning to see how well you remember.', 'Chọn nghĩa tiếng Việt phù hợp':'Choose the correct Vietnamese meaning', 'Hoàn thành bài kiểm tra':'Quiz complete', 'câu đúng':'correct answers', 'Tốt lắm! Anh đang nhớ từ khá chắc.':'Great work! You are remembering these words well.', 'Tiếp tục ôn những từ vừa nhầm, lần sau sẽ tốt hơn.':'Review the words you missed and you’ll do better next time.', 'Làm bài khác':'Try another quiz', 'Cần ít nhất 2 từ để tạo bài kiểm tra. Hãy thêm từ vào sổ trước nhé.':'Add at least 2 words to your list before starting a quiz.', 'Chính xác!':'Correct!', 'Chưa đúng. Đáp án:':'Not quite. The answer is:', 'Câu tiếp theo →':'Next question →', 'Xem kết quả':'See results',
    'Báo cáo học tập':'Learning report', 'Xem tiến độ và tải dữ liệu để lưu hoặc chia sẻ.':'View your progress and download a copy to keep or share.', 'Tổng số từ':'Total words', 'từ trong sổ':'in your list', 'Tỉ lệ đã thuộc':'Mastered', 'trên tổng từ':'of all words', 'Tổng lượt ôn':'Total reviews', 'lượt đã ghi nhận':'recorded reviews', 'Điểm kiểm tra TB':'Average quiz score', 'chưa làm bài':'no quizzes yet', 'bài đã làm':'quizzes completed', 'Tiến độ làm chủ từ vựng':'Vocabulary mastery progress', 'đã thuộc':'mastered', 'đang học':'learning', 'từ mới':'new', 'Danh sách từ trong báo cáo':'Words in this report', 'Trạng thái':'Status', 'Lượt ôn':'Reviews', 'Xuất báo cáo':'Export report', 'PDF':'PDF', 'Mở hộp thoại in trên thiết bị, chọn “Save as PDF”.':'Open the print dialog and choose “Save as PDF”.', 'Tạo PDF':'Create PDF', 'Word':'Word', 'Tải báo cáo định dạng DOC có thể mở bằng Word.':'Download a DOC report that opens in Word.', 'Tải Word':'Download Word file', 'Excel':'Excel', 'Tải CSV tương thích Excel với danh sách từ và tiến độ.':'Download a CSV with your vocabulary and progress.', 'Tải Excel (CSV)':'Download Excel (CSV)',
    'Điều chỉnh nhịp học theo cách phù hợp với anh.':'Set a learning rhythm that works for you.', 'Nhắc học':'Study reminders', 'Bật nhắc học':'Enable reminders', 'Hiện thông báo khi đến giờ (khi ứng dụng đang mở).':'Show a reminder when it is time (while the app is open).', 'Lặp lại mỗi':'Repeat every', 'Thời gian giữa hai lượt nhắc.':'Time between reminders.', 'Số từ mỗi lượt':'Words per reminder', 'Từ mới hoặc từ đến hạn ôn trong một lượt.':'New or due words included in each reminder.', 'Cho phép thông báo':'Allow notifications', 'Yêu cầu quyền từ trình duyệt hoặc hệ điều hành.':'Request permission from your browser or device.', 'Cho phép':'Allow', 'Đã cho phép':'Allowed', 'Quyền thông báo đã được bật. Khi app đang mở, app sẽ hiện nhắc theo khoảng thời gian đã chọn.':'Notifications are enabled. Reminders will appear at the selected interval while the app is open.', 'Thông báo đang bị chặn. Anh có thể bật lại trong cài đặt trình duyệt.':'Notifications are blocked. You can re-enable them in your browser settings.', 'Thông báo chưa được cấp quyền. Bấm “Cho phép” để bật.':'Notifications are not enabled. Select “Allow” to turn them on.',
    'Dữ liệu và sổ từ':'Data and vocabulary', 'Ngôn ngữ giao diện':'Display language', 'Chọn ngôn ngữ hiển thị cho ứng dụng.':'Choose the app display language.', 'Tiếng Việt':'Vietnamese', 'Ngôn ngữ đang học':'Language you are learning', 'Có thể mở rộng thêm ngôn ngữ ở các phiên bản sau.':'More languages can be added in future versions.', 'Sao lưu dữ liệu':'Back up data', 'Tải bản sao từ vựng và tiến độ ra JSON.':'Download your vocabulary and progress as a JSON backup.', 'Tải bản sao':'Download backup', 'Khôi phục dữ liệu':'Restore data', 'Nhập bản JSON đã sao lưu từ app.':'Restore a JSON backup from the app.', 'Chọn file':'Choose file', 'Thêm từ bằng CSV':'Add words with CSV', 'Cột: word, phonetic, meaning, example, translation, topic.':'Columns: word, phonetic, meaning, example, translation, topic.', 'Chọn CSV':'Choose CSV', 'Xóa tiến độ và khôi phục từ mẫu':'Clear progress and restore sample words', 'Thông tin phiên bản & phát hành':'Version and release information', 'Phiên bản':'Version', 'Bản app đang cài.':'App version currently installed.', 'Mã phiên':'Build ID', 'Mã lần phát hành hiện tại.':'Identifier for this release.', 'Thời điểm phát hành':'Release time', 'Giờ Việt Nam (GMT+7).':'Vietnam time (GMT+7).', 'App designer':'App designer', 'Kiểm tra cập nhật':'Check for updates', 'Đang tải…':'Loading…', 'Chưa có thông tin':'Information unavailable',
    'Đã nhớ':'Remembered', 'Ôn lại':'Review again', 'Tốt lắm! Từ này sẽ quay lại sau 7 ngày.':'Great! This word will return in 7 days.', 'Đã ghi nhận là đã thuộc.':'Marked as mastered.', 'Đã lên lịch ôn lại.':'Added to your review schedule.', 'Đã đưa từ vào danh sách ôn lại.':'Added to your review list.', 'Đã khôi phục bộ từ mẫu.':'Sample vocabulary restored.', 'File sao lưu không hợp lệ.':'This backup file is not valid.', 'Trình duyệt này không hỗ trợ thông báo.':'This browser does not support notifications.', 'Đã bật thông báo.':'Notifications enabled.', 'Chưa cấp quyền thông báo.':'Notification permission was not granted.', 'Đã khôi phục bản sao.':'Backup restored.', 'Kéo xuống để kiểm tra bản cập nhật':'Pull down to check for updates', '↓ Thả để kiểm tra cập nhật':'↓ Release to check for updates', '↓ Kéo thêm để kiểm tra':'↓ Pull further to check', '✓ Thả để kiểm tra cập nhật':'✓ Release to check for updates', 'Xóa toàn bộ từ đã thêm và tiến độ? Sổ từ sẽ quay lại bộ mẫu.':'Delete all added words and progress? The sample list will be restored.',
    '5 phút':'5 minutes', '10 phút':'10 minutes', '15 phút':'15 minutes', '30 phút':'30 minutes', '1 giờ':'1 hour', '90 phút':'90 minutes', '2 giờ':'2 hours', '3 giờ':'3 hours', 'Tất cả trạng thái':'All statuses', 'Đang kiểm tra…':'Checking…', 'App đang ở phiên bản mới nhất.':'You have the latest version.', 'Thiết bị đang ngoại tuyến. Kết nối mạng rồi thử lại nhé.':'You are offline. Connect to the internet and try again.', 'Chưa kiểm tra được phiên bản trên máy chủ.':'Could not check the published version.', 'Chưa kiểm tra được cập nhật. Thử lại sau nhé.':'Could not check for updates. Please try again.', 'Đang kết nối':'Connecting', 'Đang cập nhật…':'Updating…', 'Có bản mới trên GitHub nhưng chưa cài được. Kiểm tra repo đã nhận đủ file trong ZIP rồi thử lại.':'A newer version is on GitHub, but it could not be installed. Make sure all files from the ZIP were added to the repository, then try again.'
  };

  let language = 'vi';
  try {
    const saved = JSON.parse(localStorage.getItem('myenglish-vocab-v1') || 'null');
    language = saved?.settings?.uiLanguage === 'en' ? 'en' : 'vi';
  } catch {}

  const originals = new WeakMap();
  const translate = value => {
    const text = String(value).trim();
    if (translations[text]) return translations[text];
    let match = text.match(/^Câu (\d+) \/ (\d+)$/);
    if (match) return `Question ${match[1]} of ${match[2]}`;
    match = text.match(/^Đúng (\d+)$/);
    if (match) return `Correct: ${match[1]}`;
    match = text.match(/^Đến giờ học (\d+) từ mới 🌱$/);
    if (match) return `Time to study ${match[1]} new words 🌱`;
    match = text.match(/^Có bản MyEnglish v(.+?)\. Đang cập nhật…$/);
    if (match) return `MyEnglish v${match[1]} is available. Updating…`;
    match = text.match(/^Đang tải bản v(.+?)…$/);
    if (match) return `Downloading version ${match[1]}…`;
    match = text.match(/^Đã thêm (\d+) từ mới\.$/);
    if (match) return `Added ${match[1]} new words.`;
    match = text.match(/^Đã khôi phục (\d+) từ và thay dữ liệu hiện tại\?$/);
    if (match) return `Restore ${match[1]} words and replace current data?`;
    match = text.match(/^(\d+) đã thuộc · (\d+) đang học · (\d+) từ mới$/);
    if (match) return `${match[1]} mastered · ${match[2]} learning · ${match[3]} new`;
    if (text.startsWith('Nghe ')) return 'Listen to ' + text.slice(5).toLowerCase();
    if (text.startsWith('Chính xác! ')) return 'Correct! ' + text.slice('Chính xác! '.length);
    if (text.startsWith('Chưa đúng. Đáp án: ')) return 'Not quite. The answer is: ' + text.slice('Chưa đúng. Đáp án: '.length);
    return value;
  };

  function apply() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest('script,style')) continue;
      let state = originals.get(node);
      if (!state) {
        state = { source: node.nodeValue, output: node.nodeValue };
        originals.set(node, state);
      } else if (node.nodeValue !== state.output) {
        state.source = node.nodeValue;
      }
      const original = state.source;
      const trimmed = original.trim();
      const translated = language === 'en' ? translate(trimmed) : trimmed;
      const leading = original.match(/^\s*/)?.[0] || '';
      const trailing = original.match(/\s*$/)?.[0] || '';
      const value = leading + translated + trailing;
      if (node.nodeValue !== value) node.nodeValue = value;
      state.output = value;
    }
    document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(element => {
      for (const attr of ['placeholder','aria-label','title']) {
        const value = element.getAttribute(attr);
        if (value === null) continue;
        const key = `data-i18n-${attr}`;
        if (!element.hasAttribute(key)) element.setAttribute(key, value);
        const original = element.getAttribute(key);
        const translated = language === 'en' ? translate(original) : original;
        if (value !== translated) element.setAttribute(attr, translated);
      }
    });
    const select = document.querySelector('#uiLanguage');
    if (select && select.value !== language) select.value = language;
    document.documentElement.lang = language;
  }

  window.MyEnglishI18n = {
    apply,
    locale: () => language === 'en' ? 'en-US' : 'vi-VN',
    t: value => language === 'en' ? translate(value) : value,
    setLanguage(value) { language = value === 'en' ? 'en' : 'vi'; apply(); document.title = language === 'en' ? 'MyEnglish — Learn a little every day' : 'MyEnglish — Học một chút mỗi ngày'; }
  };

  apply();
  document.title = language === 'en' ? 'MyEnglish — Learn a little every day' : 'MyEnglish — Học một chút mỗi ngày';
  new MutationObserver(() => apply()).observe(document.body, { subtree: true, childList: true });
})();
