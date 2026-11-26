# Hệ thống Đánh giá và Nhận xét Sản phẩm/Dịch vụ – WASHUP

Thư mục `docs/hethongdanhgia/` lưu trữ toàn bộ tài liệu phân tích, thiết kế, hướng dẫn cài đặt, bằng chứng kiểm thử và nội dung báo cáo Word (Chương 1 đến Chương 5) cho đề tài **Phát triển hệ thống đánh giá và nhận xét sản phẩm, dịch vụ trong thương mại điện tử** trên nền tảng **WASHUP**.

## 1. Hướng dẫn chạy bản demo ASP.NET Core MVC

1. Mở terminal tại thư mục gốc repository (`Washup.sln`) hoặc `src/Washup.Web/`.
2. Kiểm tra môi trường .NET SDK (dự án sử dụng `.NET 10.0`):
   ```bash
   dotnet --version
   ```
3. Biên dịch toàn bộ solution:
   ```bash
   dotnet build Washup.sln
   ```
4. Chạy ứng dụng web:
   ```bash
   dotnet run --project src/Washup.Web/Washup.Web.csproj
   ```
5. Mở trình duyệt truy cập địa chỉ hiển thị trên console (ví dụ `http://localhost:5099`).

## 2. Các phân hệ phát triển mới và thành viên phụ trách

| Phân hệ | Thành phần chính | PIC phụ trách |
|---|---|---|
| **Nền tảng & Tích hợp** | Solution `Washup.Web`, điều phối nhánh, `AdminReviewsController`, xử lý phản hồi & tổng hợp | Ngân Huệ |
| **Cơ sở dữ liệu & Analytics** | Models (`Review`, `ReviewImage`, `HelpfulVote`, `ReviewReport`, `AdminReply`), migration/seed SQLite, 5 truy vấn thống kê | Anh Thư |
| **Giao diện Dịch vụ & Dashboard** | Chuyển trang chi tiết dịch vụ (`Detail.cshtml`), hiển thị/lọc đánh giá công khai, `Analytics.cshtml`, kiểm tra responsive | Thảo Nguyên |
| **Biểu mẫu & Tương tác Khách** | Partial `_ReviewForm.cshtml`, chọn sao, xem trước ảnh, nút Hữu ích & modal Báo cáo vi phạm | Quỳnh Như |
| **Nghiệp vụ Đánh giá & Báo cáo** | Kiểm tra điều kiện đơn hoàn thành (`ReviewEligibilityService`), lưu `Pending`, toggle `HelpfulVote`, tiếp nhận `ReviewReport` | Thùy Duyên |
| **Bảo mật, Ảnh & Phân quyền** | Công cụ môi trường, Identity/Cookie auth, `[Authorize]`, lưu trữ ảnh an toàn (`ReviewImageStorage`), khóa/mở quyền user | Hà My |
| **Giao diện Admin & Tài liệu Word** | Thuật ngữ (2.1), giao diện `AdminReviews/Index.cshtml`, `Reports.cshtml`, `_StatusKpiCards.cshtml`, tổng hợp Word & bàn giao | Kim Thư |
| **Kiểm thử & Đảm bảo chất lượng** | Ma trận kiểm thử (`TC01–TC15`), kiểm thử E2E, log bug, Case Study WASHUP & hạn chế demo | Yến Trân |

## 3. Quy chuẩn trình bày tài liệu & trích dẫn nguồn

- **Cấu trúc Heading:** Phân cấp thống nhất theo Chương 1 – Chương 5 (`# X.Y. Tiêu đề mục`, `## X.Y.Z. Tiểu mục`).
- **Đánh số hình ảnh và bảng biểu:**
  - Hình ảnh lưu tại `docs/hethongdanhgia/images/` với tên tệp rõ nghĩa, không chứa khoảng trắng.
  - Mọi hình ảnh phải là ảnh chụp thực tế từ ứng dụng chạy thật hoặc mã nguồn/CSDL thật; ghi chú thích dạng `*Hình X.Y. Mô tả ngắn.*` ngay bên dưới ảnh.
  - Bảng biểu ghi chú thích dạng `*Bảng X.Y. Mô tả ngắn.*` ngay bên dưới bảng.
- **Trích dẫn tài liệu tham khảo (chuẩn APA 7th):**
  - Trích dẫn trong bài theo dạng `(Tác giả, Năm)`.
  - Danh mục tài liệu tham khảo đầy đủ đặt tại [tai-lieu-tham-khao.md](ch1/tai-lieu-tham-khao.md) và tổng hợp cuối báo cáo Word; các nguồn lặp lại phải thống nhất tên tác giả, năm và gắn liên kết URL đầy đủ.
