# MyEnglish

MyEnglish là app học từ vựng cá nhân, ưu tiên miễn phí, chạy dạng PWA trên điện thoại và desktop.

Phiên bản hiện tại: v1.0.9 · Build 2026-11-22.1 · Phát hành 22/11/2026 20:32 (GMT+7).

## Chạy thử

Phục vụ thư mục này qua HTTPS hoặc localhost (Service Worker/PWA cần secure context), sau đó mở `index.html`. Có thể cài app từ menu trình duyệt.

## Bản đầu

- Bộ từ tiếng Anh mẫu, thêm từ thủ công, nhập CSV.
- Nghe từ và câu ví dụ bằng giọng đọc có sẵn trên thiết bị (Web Speech API).
- Ôn tập, trạng thái từ, bài kiểm tra trắc nghiệm và dashboard tiến độ.
- Xuất danh sách CSV tương thích Excel, báo cáo DOC mở bằng Word, và in thành PDF.
- Dữ liệu ở localStorage của trình duyệt; có sao lưu/khôi phục JSON.
- Nhắc học có chu kỳ từ 5 phút đến 3 giờ, 5 từ mỗi lượt. Nhắc cục bộ chỉ chạy khi app mở.
- Bộ biểu tượng PWA gồm favicon, Apple touch icon, kích thước 48–512px và maskable 512px.
- Kiểm tra/cập nhật phiên bản trong Cài đặt hoặc kéo xuống ở màn Tổng quan.
- Giao diện chọn Tiếng Việt hoặc English; dữ liệu từ vựng giữ nguyên nội dung đã nhập.
- Ngày đầy đủ và đồng hồ chạy theo giờ địa phương, định dạng 24 giờ có giây.
- Có thể tải kho từ tiếng Anh mở rộng miễn phí trong Cài đặt; cần kết nối Internet lần đầu. Nguồn dữ liệu: [thichhoc-dict](https://github.com/thichhoc-org/thichhoc-dict), giấy phép CC BY-SA 4.0; bản dịch tiếng Việt chưa được người rà soát.

## CSV nhập từ

Header: `word,phonetic,meaning,example,translation,topic`. Dòng có `word` và `meaning` là bắt buộc. Mã hóa UTF-8.

## Phát hành

Sau mỗi bản phát hành, đồng bộ `version.json`, `release.js`, cache name trong `sw.js`, rồi đóng gói các file của thư mục này.
