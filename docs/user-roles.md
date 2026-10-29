# USER ROLES – WASHUP

## 1. Người dùng

### 1.1. Các vai trò người dùng

**WASHUP** là sàn thương mại điện tử dịch vụ, đóng vai trò trung gian kết nối khách hàng với nhiều tiệm giặt ủi độc lập trên cùng một nền tảng.

Để đáp ứng mô hình này, hệ thống xác định bốn vai trò người dùng chính:

- **Khách chưa đăng nhập (Guest)**
- **Khách hàng (Customer)**
- **Chủ tiệm giặt ủi (Seller)**
- **Quản trị viên (Admin)**

Guest là người truy cập chưa đăng nhập. Ba vai trò sử dụng tài khoản gồm Customer, Seller và Admin.

Mỗi vai trò được phân quyền phù hợp với nhiệm vụ và phạm vi sử dụng. Chủ tiệm trực tiếp quản lý dịch vụ và xử lý đơn hàng của tiệm mình; quản trị viên quản lý và giám sát hoạt động của toàn bộ sàn.

### 1.2. Nhiệm vụ và quyền hạn của từng vai trò

**Bảng 1. Vai trò và quyền hạn người dùng trong hệ thống WASHUP**

| Vai trò | Nhiệm vụ chính | Quyền hạn dự kiến |
|---|---|---|
| **Khách chưa đăng nhập (Guest)** | Tìm hiểu dịch vụ và các tiệm giặt ủi trên nền tảng. | Xem trang chủ, danh sách tiệm, danh sách dịch vụ, bảng giá và chi tiết dịch vụ; tìm kiếm, lọc và so sánh các lựa chọn; đăng ký hoặc đăng nhập. |
| **Khách hàng (Customer)** | Lựa chọn dịch vụ, đặt hàng và theo dõi đơn hàng. | Quản lý hồ sơ và địa chỉ; thêm dịch vụ vào giỏ hàng; đặt dịch vụ từ một hoặc nhiều tiệm; áp dụng voucher; lựa chọn phương thức thanh toán; xem lịch sử và trạng thái đơn hàng; hủy đơn theo điều kiện; xem thông tin ghi nhận tình trạng quần áo và gửi phản hồi phù hợp. |
| **Chủ tiệm giặt ủi (Seller)** | Kinh doanh dịch vụ và xử lý đơn hàng của tiệm mình. | Đăng ký tiệm để quản trị viên xét duyệt; quản lý hồ sơ tiệm, dịch vụ, giá, mô tả, thời gian xử lý và khu vực phục vụ; xem và tiếp nhận đơn hàng thuộc tiệm; cập nhật trạng thái đơn; ghi nhận tình trạng quần áo trước và sau khi giặt, đính kèm hình ảnh khi cần. |
| **Quản trị viên (Admin)** | Quản lý và giám sát hoạt động của toàn bộ sàn. | Quản lý tài khoản; xét duyệt và quản lý các tiệm tham gia; quản lý danh mục, voucher và quy tắc chung; theo dõi đơn hàng và tình trạng thanh toán; xử lý phản hồi, kiểm tra thông tin dịch vụ và xem dashboard thống kê cơ bản. |

*Nguồn: README.md của dự án WASHUP, mục 3.1. Bảng vai trò người dùng.*

### 1.3. Giới hạn phân quyền trong MVP

Trong phiên bản MVP, WASHUP kết nối nhiều tiệm giặt trên cùng một nền tảng. Quyền hạn được phân chia theo từng vai trò và phạm vi dữ liệu liên quan.

- **Khách chưa đăng nhập (Guest):** Được xem thông tin công khai về các tiệm, dịch vụ và bảng giá; tìm kiếm, lọc, so sánh các lựa chọn; đăng ký hoặc đăng nhập. Không có quyền quản lý gian hàng hoặc truy cập thông tin đơn hàng riêng của người dùng.
- **Khách hàng (Customer):** Được quản lý hồ sơ, địa chỉ, giỏ hàng và các đơn hàng thuộc tài khoản của mình; xem thông tin tình trạng quần áo và gửi phản hồi liên quan đến đơn của mình. Không được quản lý dịch vụ của tiệm hoặc truy cập đơn hàng của khách hàng khác.
- **Chủ tiệm giặt ủi (Seller):** Được đăng ký tiệm để xét duyệt; quản lý hồ sơ, dịch vụ, bảng giá và đơn hàng thuộc tiệm mình. Không được chỉnh sửa thông tin, dịch vụ hoặc đơn hàng thuộc tiệm khác. Việc tham gia sàn phải qua bước phê duyệt của Admin.
- **Quản trị viên (Admin):** Được quản lý tài khoản và phân quyền; duyệt, từ chối hoặc khóa tiệm theo quy định; quản lý danh mục, voucher và quy tắc chung; theo dõi toàn bộ đơn hàng, kiểm tra thông tin thanh toán, xử lý phản hồi và xem dashboard của nền tảng.

Việc tiếp nhận và cập nhật tiến độ xử lý đơn hàng thuộc trách nhiệm của chủ tiệm cung cấp dịch vụ. Admin thực hiện quản lý và giám sát toàn sàn; mỗi chủ tiệm chịu trách nhiệm xử lý các đơn hàng của tiệm mình.

Điều kiện hủy đơn được thực hiện theo quy định của hệ thống. README hiện chưa nêu cụ thể trạng thái hoặc thời điểm được phép hủy, nên tài liệu này không tự bổ sung điều kiện hủy đơn mới.

### 1.4. Phân quyền đối với đơn hàng từ nhiều tiệm

Khách hàng có thể lựa chọn dịch vụ từ một hoặc nhiều tiệm trong cùng một giỏ hàng. Khi giỏ hàng có dịch vụ từ nhiều tiệm, hệ thống tạo **một đơn hàng tổng** và **các đơn hàng thành phần theo từng tiệm**.

Mỗi đơn hàng thành phần có thông tin dịch vụ, chi phí và trạng thái xử lý riêng. Quyền theo dõi và xử lý được phân chia như sau:

- **Khách hàng:** Theo dõi đơn hàng tổng và các đơn hàng thành phần thuộc tài khoản của mình.
- **Chủ tiệm:** Chỉ tiếp nhận và cập nhật các đơn hàng thành phần thuộc tiệm mình; không cập nhật đơn hàng của tiệm khác.
- **Admin:** Theo dõi toàn bộ đơn hàng, kiểm tra tình trạng thanh toán và giám sát trạng thái xử lý của các tiệm.

Trong MVP, quy trình này có thể được mô phỏng bằng dữ liệu và trạng thái đơn hàng mà không cần tích hợp đơn vị giao hàng bên ngoài.

### 1.5. Quyền ghi nhận và xem tình trạng quần áo

Theo các chức năng F17–F18 trong README.md, chủ tiệm ghi nhận tình trạng quần áo trước và sau khi giặt, còn khách hàng xem thông tin và gửi phản hồi liên quan đến đơn hàng của mình.

- **Trước khi giặt:** Chủ tiệm ghi nhận số lượng, loại quần áo và những tình trạng cần lưu ý; có thể đính kèm hình ảnh.
- **Sau khi giặt:** Chủ tiệm cập nhật tình trạng quần áo sau khi hoàn thành dịch vụ.
- **Khách hàng:** Xem lại thông tin được ghi nhận và gửi phản hồi khi phát hiện vấn đề.
- **Admin:** Xử lý phản hồi trong phạm vi quản lý và giám sát hoạt động của nền tảng.

Chức năng này tập trung vào lưu trữ, hiển thị thông tin và tiếp nhận phản hồi; chưa yêu cầu xây dựng quy trình bồi thường hoặc xử lý khiếu nại phức tạp.

### 1.6. Vai trò và chức năng chưa triển khai trong MVP

Hoạt động giao nhận có thể được mô phỏng, vì vậy MVP chưa bắt buộc triển khai vai trò tài xế riêng. Quản lý tài xế, điều phối giao nhận, theo dõi vị trí theo thời gian thực và tích hợp đơn vị giao hàng bên ngoài thuộc nhóm chức năng phát triển sau.

**Chủ tiệm giặt ủi (Seller) là vai trò thuộc MVP**, không phải vai trò chờ bổ sung ở giai đoạn mở rộng.

Chức năng đánh giá, xếp hạng và nhận xét tiệm sau khi hoàn thành đơn hàng (F26) được README xếp ngoài MVP. Chức năng này được phân biệt với việc khách hàng xem tình trạng quần áo và gửi phản hồi ở F18, vốn đã nằm trong phạm vi MVP.

## 2. Tài liệu tham chiếu

- [README.md – Giới thiệu, vai trò và chức năng của WASHUP](../README.md)
