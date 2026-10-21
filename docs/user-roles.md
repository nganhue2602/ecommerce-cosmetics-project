
# USER ROLES

## 1. Người dùng

### 1.1. Các vai trò người dùng

Để đáp ứng quy trình vận hành và đặt dịch vụ giặt ủi trong phạm vi MVP, hệ thống **WASHUP** xác định ba vai trò người dùng chính:

- **Khách chưa đăng nhập (Guest)**
- **Khách hàng (Customer)**
- **Quản trị viên (Admin)**

Mỗi vai trò được phân quyền phù hợp với nhiệm vụ và phạm vi sử dụng nhằm bảo đảm hệ thống hoạt động đúng quy trình và hạn chế truy cập trái phép.

### 1.2. Nhiệm vụ và quyền hạn của từng vai trò

**Bảng 1. Vai trò và quyền hạn người dùng trong hệ thống WASHUP**

| Vai trò | Nhiệm vụ chính | Quyền hạn dự kiến |
|---|---|---|
| **Khách chưa đăng nhập (Guest)** | Tìm hiểu dịch vụ, bảng giá và quy trình đặt giặt. | Xem trang chủ, danh mục dịch vụ, bảng giá; tìm kiếm, lọc và xem chi tiết dịch vụ; đăng ký và đăng nhập. |
| **Khách hàng (Customer)** | Đặt dịch vụ giặt ủi, thanh toán và theo dõi đơn hàng. | Quản lý hồ sơ và địa chỉ; chọn dịch vụ, đặt lịch nhận/giao; áp dụng voucher; tạo đơn và thanh toán trực tuyến; xem lịch sử, trạng thái và hủy đơn hợp lệ của chính mình; đăng xuất. |
| **Quản trị viên (Admin)** | Vận hành website và xử lý đơn hàng. | Quản lý dịch vụ, bảng giá, mùi hương, voucher, quy tắc phí giao nhận, khách hàng và đơn hàng; cập nhật trạng thái xử lý; xem dashboard thống kê; đăng xuất. |

*Nguồn: Nhóm tác giả tự tổng hợp.*

### 1.3. Giới hạn phân quyền trong MVP

Trong phiên bản đầu tiên, WASHUP chỉ triển khai ba vai trò trên nhằm bảo đảm phạm vi phù hợp với thời gian thực hiện đồ án.

- **Khách chưa đăng nhập:** Chỉ được truy cập những thông tin công khai về dịch vụ và bảng giá.
- **Khách hàng:** Được quản lý thông tin cá nhân và các đơn hàng thuộc tài khoản của mình, không được truy cập dữ liệu của khách hàng khác.
- **Quản trị viên:** Được truy cập các chức năng quản trị để quản lý dịch vụ và xử lý đơn hàng theo quyền được cấp.

Hoạt động giao nhận thực tế được mô phỏng nên **chưa cần bổ sung vai trò tài xế hoặc nhân viên giao nhận**. Hệ thống chỉ vận hành theo mô hình một trung tâm giặt ủi nên **chưa cần vai trò đối tác tiệm giặt**.

Trong MVP, quản trị viên đồng thời đảm nhiệm việc xử lý đơn hàng. Vai trò tài xế và đối tác tiệm giặt sẽ được xem xét khi dự án mở rộng.
