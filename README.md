# MyEnglish

MyEnglish là app học từ vựng cá nhân, ưu tiên miễn phí, chạy dạng PWA trên điện thoại và desktop.

Phiên bản hiện tại: v1.0.2 · Build 2026-11-21.3 · Phát hành 21/11/2026 17:30 (GMT+7).

## Chạy thử

Phục vụ thư mục này qua HTTPS hoặc localhost (Service Worker/PWA cần secure context), sau đó mở `index.html`. Có thể cài app từ menu trình duyệt.

## Bản đầu

- Bộ từ tiếng Anh mẫu, thêm từ thủ công, nhập CSV.
- Nghe từ và câu ví dụ bằng giọng đọc có sẵn trên thiết bị (Web Speech API).
- Ôn tập, trạng thái từ, bài kiểm tra trắc nghiệm và dashboard tiến độ.
- Xuất danh sách CSV tương thích Excel, báo cáo DOC mở bằng Word, và in thành PDF.
- Dữ liệu ở localStorage của trình duyệt; có sao lưu/khôi phục JSON.
- Nhắc học mặc định mỗi 60 phút, 5 từ mỗi lượt. Trong bản này đồng hồ chỉ chạy khi trang/app đang mở; gửi đúng giờ khi app đóng cần dịch vụ push phía máy chủ.
- Bộ biểu tượng PWA gồm favicon, Apple touch icon, kích thước 48–512px và maskable 512px.
- Kiểm tra/cập nhật phiên bản trong Cài đặt hoặc kéo xuống ở màn Tổng quan.

## CSV nhập từ

Header: `word,phonetic,meaning,example,translation,topic`. Dòng có `word` và `meaning` là bắt buộc. Mã hóa UTF-8.

## Phát hành

Sau mỗi bản phát hành, đồng bộ `version.json`, cache name trong `sw.js`, rồi đóng gói các file của thư mục này. Chưa cấu hình hosting hoặc push server.
