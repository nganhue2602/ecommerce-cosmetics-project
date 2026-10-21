
# USER ROLES

## 1. Vai trò người dùng trong hệ thống

### 1.1. Tổng quan

Trong phạm vi MVP, WASHUP xác định 3 vai trò người dùng chính:

- Khách chưa đăng nhập (Guest).
- Khách hàng (Customer).
- Quản trị viên (Admin).

Việc phân quyền nhằm bảo đảm mỗi đối tượng được sử dụng đúng chức năng và không truy cập dữ liệu ngoài phạm vi được cấp phép.

### 1.2. Bảng vai trò và quyền hạn

**Bảng 1.1. Vai trò người dùng của hệ thống WASHUP**

| Vai trò | Nhiệm vụ chính | Quyền hạn |
|---|---|---|
| **Guest** | Tìm hiểu dịch vụ, bảng giá và quy trình đặt giặt. | Xem trang chủ, danh mục, bảng giá, tìm kiếm, lọc và xem chi tiết dịch vụ; đăng ký và đăng nhập. |
| **Customer** | Đặt dịch vụ, thanh toán và theo dõi đơn hàng. | Quản lý hồ sơ, địa chỉ; chọn dịch vụ, đặt lịch; áp dụng voucher; tạo đơn, thanh toán; xem lịch sử, trạng thái và hủy đơn hợp lệ của chính mình. |
| **Admin** | Vận hành website và xử lý đơn hàng. | Quản lý dịch vụ, bảng giá, mùi hương, voucher, phí giao nhận, khách hàng và đơn hàng; cập nhật trạng thái; xem dashboard thống kê. |

*Nguồn: Nhiệm vụ 5 – Bảng vai trò người dùng của Nhóm 6.*

### 1.3. Giới hạn vai trò trong MVP

Hoạt động giao nhận được mô phỏng nên hệ thống chưa triển khai tài khoản tài xế hoặc nhân viên giao nhận.

WASHUP chỉ phục vụ một trung tâm giặt ủi trong MVP, vì vậy chưa triển khai vai trò đối tác tiệm giặt.

Admin đảm nhiệm các nghiệp vụ xử lý đơn hàng. Các vai trò khác sẽ được xem xét trong giai đoạn mở rộng.

---

## 2. Vai trò và trách nhiệm thành viên dự án

### 2.1. Danh sách thành viên

Nhóm 6 gồm 8 thành viên. Công việc giai đoạn khởi tạo được phân chia theo các nhiệm vụ của đề bài.

**Bảng 2.1. Phân công trách nhiệm Nhóm 6**

| Thành viên | Vai trò phụ trách | Trách nhiệm |
|---|---|---|
| **Quỳnh Như** | Phân tích ý tưởng kinh doanh | Xác định đề tài, vấn đề kinh doanh, khách hàng mục tiêu và giải pháp. |
| **Hà My** | Phân tích phạm vi | Xác định chức năng trong và ngoài MVP. |
| **Anh Thư** | Phân tích đối thủ và quy định AI | Khảo sát 3 website, lập bảng so sánh và xây dựng AGENTS.md. |
| **Thảo Nguyên** | Phân tích yêu cầu bằng AI | Tổng hợp kết quả phân tích từ công cụ AI thứ nhất. |
| **Kim Thư** | Phản biện yêu cầu bằng AI | Phản biện và tổng hợp quyết định của nhóm. |
| **Thùy Duyên** | Phân tích người dùng và chức năng | Xác định vai trò, quyền hạn và yêu cầu chức năng. |
| **Yến Trân** | Phân tích quy trình nghiệp vụ | Xây dựng quy trình đặt dịch vụ, quản trị đơn hàng và sơ đồ. |
| **Ngân Huệ** | Lập kế hoạch và quản lý GitHub | Tổng hợp phân công, kế hoạch, repository và GitHub Issues. |

*Nguồn: Bảng phân công công việc của Nhóm 6.*

### 2.2. Nguyên tắc phối hợp

- Mỗi nhiệm vụ có một người chịu trách nhiệm chính.
- Mỗi thành viên phải có kết quả công việc cụ thể.
- Các thành viên hỗ trợ nhau trong quá trình phát triển, tích hợp và kiểm thử.
- Không giao toàn bộ việc lập trình cho một thành viên hoặc AI.
- Mỗi thành viên phải có khả năng giải thích phần việc mình phụ trách.

### 2.3. Phân công giai đoạn tiếp theo

Các vai trò UI/UX, Frontend, Backend/Database và QA/Integration sẽ được phân công sau khi nhóm đánh giá năng lực lập trình và thống nhất kế hoạch phát triển.

Thông tin chi tiết về công việc, thời hạn và tiến độ được quản lý trong [PROJECT_PLAN.md](../PROJECT_PLAN.md).

---

## 3. Tài liệu liên quan

- [Giới thiệu dự án](../README.md)
- [Yêu cầu hệ thống](../REQUIREMENTS.md)
- [Kế hoạch thực hiện](../PROJECT_PLAN.md)
- [Quy trình nghiệp vụ](business-workflow.md)
