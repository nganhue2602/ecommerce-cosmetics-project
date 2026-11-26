# Checklist Bàn giao Tài liệu & Chuẩn bị Slide (WASHUP)

Tài liệu này tổng hợp trạng thái các tệp phục vụ ghép báo cáo Word (Chương 1–5) và danh sách minh chứng sẵn sàng cho buổi dựng slide ngày 29/11/2026.

## 1. Checklist tài liệu theo chương

- **Chương 1 (Giới thiệu):**
  - [x] `ch1/1.1-boi-canh.md` (Ngân Huệ)
  - [x] `ch1/1.2-ly-do.md` (Quỳnh Như)
  - [x] `ch1/1.3-muc-tieu.md` (Ngân Huệ)
  - [x] `ch1/1.4-ke-thua.md` (Thảo Nguyên)
  - [x] `ch1/tai-lieu-tham-khao.md`
- **Chương 2 (Cơ sở lý thuyết & Thiết kế):**
  - [x] `ch2/2.1-khai-niem.md` (Kim Thư — đã hoàn thành theo bảng kế hoạch)
  - [ ] `ch2/2.2-quy-trinh.md` (Thùy Duyên)
  - [ ] `ch2/2.3-cong-cu.md` (Hà My)
  - [ ] `ch2/2.4-khoi-tao.md` (Ngân Huệ)
  - [ ] `ch2/2.5-co-so-du-lieu.md` (Anh Thư)
  - [ ] `ch2/2.6-du-lieu-mau.md` (Anh Thư)
  - [ ] `ch2/2.7-phan-quyen.md` (Hà My)
  - [ ] `ch2/2.8-tich-hop-trang.md` (Thảo Nguyên)
- **Chương 3 (Xây dựng chức năng cơ bản):**
  - [ ] `ch3/3.1-bieu-mau.md` (Quỳnh Như)
  - [ ] `ch3/3.2-xac-minh-don.md` (Thùy Duyên)
  - [ ] `ch3/3.3-luu-danh-gia.md` (Thùy Duyên)
  - [x] `ch3/3.4-admin-ui.md` (Kim Thư — kèm ảnh chụp thực tế)
  - [ ] `ch3/3.5-kiem-duyet.md` (Ngân Huệ)
  - [ ] `ch3/3.6-hien-thi.md` (Thảo Nguyên)
  - [ ] `ch3/3.7-loc-va-trung-binh.md` (Thảo Nguyên)
  - [ ] `ch3/3.8-thu-nghiem.md` (Yến Trân)
- **Chương 4 (Chức năng mở rộng, Thống kê & Kiểm thử):**
  - [ ] `ch4/4.1.1-luu-anh.md` (Hà My)
  - [ ] `ch4/4.1.2-giao-dien-anh.md` (Quỳnh Như)
  - [ ] `ch4/4.2.1-huu-ich.md` (Thùy Duyên)
  - [ ] `ch4/4.2.2-tuong-tac.md` (Quỳnh Như)
  - [ ] `ch4/4.3.1-bao-cao.md` (Thùy Duyên)
  - [ ] `ch4/4.3.2-phan-hoi.md` (Ngân Huệ)
  - [x] `ch4/4.3.3-giao-dien-xu-ly.md` (Kim Thư — kèm ảnh chụp thực tế)
  - [ ] `ch4/4.4-nguoi-dung.md` (Hà My)
  - [x] `ch4/4.5-theo-doi.md` (Kim Thư — thẻ KPI trạng thái)
  - [ ] `ch4/4.6-thong-ke.md` (Anh Thư)
  - [ ] `ch4/4.7.1-dashboard.md` (Thảo Nguyên)
  - [ ] `ch4/4.7.2-doi-chieu.md` (Anh Thư)
  - [ ] `ch4/4.8-case-study.md` (Yến Trân)
  - [ ] `ch4/4.9-responsive.md` (Thảo Nguyên)
  - [ ] `ch4/4.10.1-testcases.md` (Yến Trân)
  - [ ] `ch4/4.10.2-khac-phuc.md` (Yến Trân)
- **Chương 5 (Kết luận & Hướng phát triển):**
  - [ ] `ch5/5.1-ket-qua.md` (Ngân Huệ)
  - [ ] `ch5/5.2-gia-tri.md` (Quỳnh Như)
  - [ ] `ch5/5.3-han-che.md` (Yến Trân)
  - [ ] `ch5/5.4-huong-phat-trien.md` (Ngân Huệ)

## 2. Danh sách hình ảnh phục vụ ghép Word & làm Slide

- `docs/hethongdanhgia/images/admin-reviews-index.png` — Giao diện hàng đợi kiểm duyệt đánh giá và 5 thẻ KPI trạng thái (`/AdminReviews/Index`).
- `docs/hethongdanhgia/images/admin-reviews-image-preview.png` — Bộ lọc `Chờ duyệt (Pending)` và hộp thoại xem trước ảnh đính kèm.
- `docs/hethongdanhgia/images/admin-reviews-reject-modal.png` — Hộp thoại nhập lý do từ chối đánh giá.
- `docs/hethongdanhgia/images/admin-reviews-reports.png` — Giao diện xử lý báo cáo vi phạm (`Keep`/`Hide`) và khung phản hồi của Admin (`/AdminReviews/Reports`).

## 3. Lưu ý khi ghép bản Word cuối cùng (CD28-47)

1. Kiểm tra lại toàn bộ đường dẫn ảnh khi chuyển nội dung từ Markdown sang Word để giữ nguyên số thứ tự Hình/Bảng liên tục theo từng chương.
2. Chỉ ghi nhận là **"đã chạy thực tế"** đối với các chức năng đã có kết quả kiểm thử và ảnh chụp từ commit tích hợp cuối cùng; phần nào chỉ mới hoàn thiện giao diện hoặc đang chờ ghép backend cần ghi rõ trạng thái thực tế.
3. Gắn liên kết repository GitHub (`https://github.com/nganhue2602/ecommerce-cosmetics-project`) và mã commit/PR minh chứng ở mục phụ lục hoặc chú thích hình.
