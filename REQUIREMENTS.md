
# REQUIREMENTS – WASHUP

## 1. Mục tiêu dự án

### 1.1. Mục tiêu tổng quát

**WASHUP** là sàn thương mại điện tử kết nối khách hàng với nhiều tiệm giặt ủi độc lập trên cùng một nền tảng. Website cho phép khách hàng tìm kiếm, xem thông tin, so sánh giá cả và lựa chọn dịch vụ từ các tiệm khác nhau; đồng thời hỗ trợ đặt dịch vụ, thanh toán, theo dõi đơn hàng và quản lý thông tin giao nhận trực tuyến.

Dự án hướng đến giải quyết những bất tiện khi khách hàng phải tìm kiếm từng tiệm giặt ủi, liên hệ hỏi giá, sắp xếp lịch giao nhận và theo dõi tình trạng quần áo qua nhiều kênh riêng lẻ. Đồng thời, WASHUP tạo thêm kênh kinh doanh trực tuyến cho các tiệm giặt ủi, giúp họ giới thiệu dịch vụ, tiếp cận khách hàng và quản lý đơn hàng của tiệm mình.

### 1.2. Mục tiêu cụ thể

- **Tập trung thông tin dịch vụ:** Cho phép khách hàng xem danh sách nhiều tiệm giặt ủi, thông tin dịch vụ, bảng giá, thời gian xử lý và khu vực phục vụ trên cùng một website.
- **Hỗ trợ lựa chọn dịch vụ:** Cung cấp chức năng tìm kiếm, lọc và so sánh dịch vụ giữa các tiệm để khách hàng lựa chọn phù hợp với nhu cầu và ngân sách.
- **Đơn giản hóa quy trình đặt hàng:** Hỗ trợ khách hàng chọn dịch vụ từ một hoặc nhiều tiệm, nhập thông tin giao nhận, chọn khung giờ và xác nhận đơn hàng.
- **Quản lý đơn hàng đa tiệm:** Tự động tách đơn hàng thành các đơn thành phần theo từng tiệm khi khách hàng đặt dịch vụ từ nhiều tiệm trong cùng một lần.
- **Minh bạch chi phí:** Hiển thị giá dịch vụ, phí giao nhận, khoản giảm giá và tổng chi phí dự kiến trước khi khách hàng xác nhận đơn.
- **Hỗ trợ kinh doanh cho tiệm giặt ủi:** Cho phép chủ tiệm đăng ký tham gia sàn, quản lý hồ sơ tiệm, dịch vụ, bảng giá và đơn hàng thuộc tiệm mình.
- **Tăng tính minh bạch trong quá trình xử lý:** Cho phép chủ tiệm ghi nhận tình trạng quần áo trước và sau khi giặt, kèm hình ảnh khi cần, để khách hàng theo dõi và gửi phản hồi.
- **Hỗ trợ quản trị hệ thống:** Cho phép quản trị viên xét duyệt tiệm, quản lý tài khoản, giám sát đơn hàng và theo dõi các chỉ số thống kê cơ bản.

### 1.3. Giá trị mang lại

**Đối với khách hàng:**

- Tiết kiệm thời gian tìm kiếm và liên hệ nhiều tiệm giặt ủi.
- Dễ dàng so sánh giá cả, dịch vụ và thời gian xử lý trước khi đặt hàng.
- Chủ động lựa chọn dịch vụ, địa chỉ và khung giờ giao nhận phù hợp.
- Theo dõi đơn hàng và thông tin tình trạng quần áo trên cùng một nền tảng.

**Đối với chủ tiệm giặt ủi:**

- Có thêm kênh giới thiệu dịch vụ và tiếp cận khách hàng trực tuyến.
- Chủ động quản lý thông tin tiệm, bảng giá và dịch vụ của mình.
- Tiếp nhận, cập nhật và theo dõi các đơn hàng thuộc tiệm.
- Có cơ sở ghi nhận tình trạng quần áo để tăng tính minh bạch khi cung cấp dịch vụ.

**Đối với quản trị viên:**

- Quản lý tập trung tài khoản và các tiệm tham gia sàn.
- Giám sát hoạt động đặt hàng, thanh toán và xử lý đơn.
- Theo dõi số lượng đơn hàng, doanh thu ghi nhận và các chỉ số hoạt động cơ bản.

## 2. Phạm vi

### 2.1. Trong phạm vi

WASHUP tập trung triển khai các chức năng cốt lõi của sàn thương mại điện tử đa nhà cung cấp dịch vụ giặt ủi trong giai đoạn MVP.

- **Website công khai:** Hiển thị trang chủ, danh sách tiệm giặt ủi, danh sách dịch vụ, bảng giá và thông tin chi tiết của từng tiệm.
- **Tìm kiếm và so sánh dịch vụ:** Hỗ trợ tìm kiếm, lọc và so sánh các dịch vụ theo loại dịch vụ, giá cả, thời gian xử lý và thông tin tiệm.
- **Quản lý tài khoản:** Hỗ trợ đăng ký, đăng nhập, đăng xuất và phân quyền cho khách hàng, chủ tiệm và quản trị viên.
- **Đăng ký và quản lý tiệm:** Cho phép chủ tiệm gửi thông tin đăng ký; quản trị viên xét duyệt trước khi tiệm được kinh doanh trên nền tảng.
- **Quản lý dịch vụ:** Cho phép mỗi chủ tiệm thêm, sửa, ẩn dịch vụ và cập nhật mô tả, đơn giá, đơn vị tính, thời gian xử lý và khu vực phục vụ.
- **Giỏ hàng và đặt hàng:** Cho phép khách hàng chọn dịch vụ từ một hoặc nhiều tiệm, nhập thông tin giao nhận và lựa chọn khung giờ được thiết lập sẵn.
- **Tách đơn hàng theo tiệm:** Khi giỏ hàng có dịch vụ từ nhiều tiệm, hệ thống tạo đơn hàng tổng và các đơn hàng thành phần tương ứng với từng tiệm. Mỗi tiệm quản lý trạng thái đơn hàng thành phần của mình.
- **Tính chi phí:** Tính tiền dịch vụ, phí giao nhận và khoản giảm giá theo các quy tắc đã cấu hình.
- **Voucher và khuyến mãi:** Hỗ trợ nhập mã giảm giá, kiểm tra điều kiện và tính lại tổng chi phí.
- **Thanh toán:** Hỗ trợ phương thức thanh toán phù hợp với phạm vi đồ án, chẳng hạn thanh toán khi nhận hàng và một phương thức thanh toán thử nghiệm.
- **Theo dõi và quản lý đơn hàng:** Cho phép khách hàng xem lịch sử, chi tiết và trạng thái đơn; chủ tiệm xử lý đơn thuộc tiệm mình; quản trị viên giám sát đơn hàng trên toàn hệ thống.
- **Ghi nhận tình trạng quần áo:** Cho phép chủ tiệm ghi nhận số lượng, loại quần áo và tình trạng cần lưu ý trước khi giặt; cập nhật tình trạng sau khi giặt; đính kèm hình ảnh khi cần để khách hàng xem và phản hồi.
- **Đánh giá dịch vụ:** Cho phép khách hàng đánh giá tiệm sau khi đơn hàng hoàn thành theo điều kiện của hệ thống.
- **Quản trị hệ thống:** Hỗ trợ quản lý tài khoản, xét duyệt tiệm, quản lý danh mục dịch vụ, voucher và theo dõi đơn hàng.
- **Dashboard thống kê:** Hiển thị các chỉ số cơ bản như số lượng đơn hàng, trạng thái đơn và doanh thu ghi nhận.
- **Yêu cầu kỹ thuật:** Giao diện đáp ứng nhiều kích thước màn hình, kiểm tra dữ liệu đầu vào, phân quyền truy cập và tổ chức mã nguồn rõ ràng.

### 2.2. Ngoài phạm vi

Các chức năng sau chưa được triển khai trong MVP và chỉ được xem xét khi các chức năng cốt lõi đã hoàn thiện:

- **Gói giặt ủi định kỳ:** Đăng ký gói theo tuần/tháng, tự động gia hạn và thanh toán định kỳ.
- **Tích điểm và chương trình thành viên:** Tích lũy điểm, đổi thưởng, giới thiệu bạn bè và các chương trình khách hàng thân thiết nâng cao.
- **AI nhận diện và tư vấn:** Nhận diện vết bẩn qua hình ảnh, ước tính khối lượng quần áo bằng AI hoặc chatbot tư vấn tự động.
- **Mã QR theo từng công đoạn:** Quét mã để theo dõi quần áo qua từng bước xử lý.
- **Định giá linh hoạt:** Tự động thay đổi giá theo giờ cao điểm, nhu cầu hoặc năng lực xử lý của tiệm.
- **Tích hợp đơn vị giao hàng bên ngoài:** Kết nối API với các đơn vị giao hàng, phân công tài xế và theo dõi vị trí theo thời gian thực.
- **Thông báo nâng cao:** Gửi SMS, thông báo đẩy hoặc các loại thông báo cần dịch vụ bên ngoài nếu chưa đủ nguồn lực triển khai.
- **Ứng dụng di động riêng:** Phát triển ứng dụng độc lập cho iOS hoặc Android.
- **Phân tích marketing nâng cao:** Triển khai hệ thống phân tích hành vi, phễu chuyển đổi và các công cụ marketing chuyên sâu.
- **Quy trình xử lý khiếu nại phức tạp:** Bồi thường, hoàn tiền theo nhiều cấp độ hoặc giải quyết tranh chấp giữa khách hàng và tiệm.

Các chức năng ngoài MVP không thuộc yêu cầu bắt buộc của phiên bản đầu tiên.

## 3. Người dùng

### 3.1. Các vai trò người dùng

WASHUP xác định bốn vai trò người dùng chính:

1. **Khách chưa đăng nhập (Guest).**
2. **Khách hàng (Customer).**
3. **Chủ tiệm giặt ủi (Seller).**
4. **Quản trị viên (Admin).**

Mỗi vai trò được cấp quyền phù hợp với nhiệm vụ và phạm vi quản lý nhằm bảo đảm dữ liệu được truy cập đúng đối tượng.

### 3.2. Nhiệm vụ và quyền hạn

**Bảng 3.1. Vai trò và quyền hạn người dùng**

| Vai trò | Nhiệm vụ chính | Quyền hạn |
|---|---|---|
| **Guest** | Tìm hiểu các tiệm và dịch vụ trên sàn. | Xem trang chủ, danh sách tiệm, danh sách dịch vụ, bảng giá và chi tiết dịch vụ; tìm kiếm, lọc và so sánh; đăng ký hoặc đăng nhập. |
| **Customer** | Lựa chọn dịch vụ, đặt hàng và theo dõi đơn hàng. | Quản lý hồ sơ và địa chỉ; sử dụng giỏ hàng; đặt dịch vụ từ một hoặc nhiều tiệm; áp dụng voucher; thanh toán; xem lịch sử và trạng thái đơn của mình; hủy đơn theo điều kiện; xem ghi nhận tình trạng quần áo và gửi phản hồi; đánh giá sau khi đơn hoàn thành. |
| **Seller** | Kinh doanh dịch vụ và xử lý đơn hàng của tiệm mình. | Đăng ký tiệm; quản lý hồ sơ, dịch vụ, bảng giá và khu vực phục vụ; xem và cập nhật đơn hàng thuộc tiệm; ghi nhận tình trạng quần áo trước và sau khi giặt; xem đánh giá liên quan đến tiệm theo chức năng được cung cấp. |
| **Admin** | Quản lý và giám sát toàn bộ sàn. | Quản lý tài khoản; duyệt, từ chối hoặc khóa tiệm; quản lý danh mục, voucher và quy tắc chung; giám sát đơn hàng và thanh toán; xử lý phản hồi theo phạm vi hệ thống; xem dashboard thống kê. |

*Nguồn: Nhóm tác giả tự tổng hợp.*

### 3.3. Quy tắc phân quyền

- **Guest:** Chỉ được xem thông tin công khai; không được tạo đơn hàng hoặc truy cập thông tin cá nhân của người khác.
- **Customer:** Chỉ được xem và quản lý hồ sơ, địa chỉ và đơn hàng thuộc tài khoản của mình.
- **Seller:** Chỉ được chỉnh sửa thông tin, dịch vụ và xử lý đơn hàng thuộc tiệm mình quản lý; không được truy cập dữ liệu riêng của tiệm khác.
- **Admin:** Được truy cập các chức năng quản trị và giám sát toàn hệ thống theo quyền được cấp.
- **Trạng thái tiệm:** Chỉ các tiệm đã được phê duyệt mới được hiển thị như nhà cung cấp đang hoạt động và tiếp nhận đơn hàng.
- **Trạng thái đơn hàng:** Mỗi đơn hàng thành phần được xử lý theo tiệm tương ứng. Chủ tiệm không được tự ý thay đổi đơn hàng thuộc tiệm khác.
- **Giao nhận:** Trong MVP, việc giao nhận được mô phỏng bằng thông tin địa chỉ, khung giờ và trạng thái; chưa bắt buộc triển khai tài khoản tài xế riêng.

## 4. Yêu cầu chức năng

### 4.1. Quy ước

Mỗi yêu cầu chức năng được xác định bằng mã, tên chức năng, mô tả, người sử dụng, mức độ ưu tiên và tiêu chí nghiệm thu.

- **Bắt buộc:** Cần triển khai để hoàn thiện quy trình cốt lõi của MVP.
- **Tùy chọn:** Chỉ triển khai sau khi các chức năng bắt buộc đã hoạt động ổn định.
- **Nâng cao:** Chưa triển khai trong MVP, định hướng phát triển sau.

Tiêu chí nghiệm thu dưới đây là cơ sở để nhóm kiểm thử chức năng trước khi xác nhận hoàn thành.

### 4.2. Yêu cầu tài khoản và tra cứu dịch vụ

**Bảng 4.1. Yêu cầu chức năng tài khoản và tra cứu dịch vụ**

| Mã | Tên chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F01 | Đăng ký, đăng nhập, đăng xuất | Cho phép người dùng tạo tài khoản và truy cập hệ thống theo vai trò được cấp. | Customer, Seller, Admin | Bắt buộc | Đăng ký hợp lệ thành công; thông tin không hợp lệ được thông báo; đăng nhập đúng tài khoản; đăng xuất kết thúc phiên truy cập. |
| F02 | Xem danh sách tiệm | Hiển thị các tiệm đã được phê duyệt cùng thông tin cơ bản. | Guest, Customer | Bắt buộc | Chỉ các tiệm đủ điều kiện hoạt động được hiển thị trong danh sách công khai. |
| F03 | Xem danh sách và chi tiết dịch vụ | Hiển thị tên dịch vụ, mô tả, đơn vị tính, giá, thời gian xử lý và tiệm cung cấp. | Guest, Customer | Bắt buộc | Thông tin dịch vụ và tiệm tương ứng được hiển thị chính xác; dịch vụ đã ẩn không được đặt mới. |
| F04 | Tìm kiếm, lọc và so sánh dịch vụ | Cho phép tìm kiếm, lọc và đối chiếu dịch vụ của nhiều tiệm theo các tiêu chí được hỗ trợ. | Guest, Customer | Bắt buộc | Kết quả phù hợp với điều kiện tìm kiếm; thông tin so sánh thể hiện đúng giá, thời gian xử lý và tiệm cung cấp. |
| F05 | Quản lý hồ sơ và địa chỉ | Cho phép khách hàng xem, cập nhật thông tin cá nhân và địa chỉ nhận/giao. | Customer | Bắt buộc | Dữ liệu hợp lệ được lưu; khách hàng không thể chỉnh sửa hồ sơ của tài khoản khác. |

### 4.3. Yêu cầu quản lý tiệm và dịch vụ

**Bảng 4.2. Yêu cầu chức năng quản lý nhà cung cấp**

| Mã | Tên chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F06 | Đăng ký tiệm | Cho phép chủ tiệm gửi thông tin đăng ký tham gia sàn để quản trị viên xét duyệt. | Seller, Admin | Bắt buộc | Thông tin đăng ký được lưu; tiệm có trạng thái chờ duyệt; tiệm chưa được duyệt không thể tiếp nhận đơn mới. |
| F07 | Quản lý hồ sơ tiệm | Cho phép chủ tiệm cập nhật tên, mô tả, thông tin liên hệ và khu vực phục vụ. | Seller | Bắt buộc | Thông tin hợp lệ được lưu và hiển thị đúng; chủ tiệm chỉ sửa được hồ sơ tiệm mình quản lý. |
| F08 | Quản lý dịch vụ của tiệm | Cho phép chủ tiệm thêm, sửa, ẩn dịch vụ và cập nhật giá, mô tả, đơn vị tính, thời gian xử lý. | Seller | Bắt buộc | Thay đổi được lưu; dịch vụ gắn đúng tiệm; chủ tiệm không thể chỉnh sửa dịch vụ của tiệm khác. |

### 4.4. Yêu cầu giỏ hàng, đặt hàng và chi phí

**Bảng 4.3. Yêu cầu chức năng đặt hàng**

| Mã | Tên chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F09 | Quản lý giỏ hàng đa tiệm | Cho phép khách hàng thêm, sửa hoặc xóa dịch vụ từ một hoặc nhiều tiệm trong giỏ hàng. | Customer | Bắt buộc | Giỏ hàng hiển thị đúng dịch vụ, số lượng hoặc khối lượng, giá và tiệm tương ứng. |
| F10 | Nhập thông tin giao nhận | Cho phép khách hàng chọn địa chỉ và khung giờ nhận/giao từ các lựa chọn được thiết lập sẵn. | Customer | Bắt buộc | Hệ thống lưu đúng địa chỉ và khung giờ hợp lệ; thông tin bắt buộc không được để trống. |
| F11 | Tính chi phí | Tính tiền dịch vụ, phí giao nhận và khoản giảm giá theo quy tắc đã cấu hình. | Customer, Hệ thống | Bắt buộc | Thành tiền và tổng chi phí được tính chính xác; các khoản phí và giảm giá được hiển thị rõ ràng. |
| F12 | Áp dụng voucher | Kiểm tra mã giảm giá, thời hạn và điều kiện sử dụng. | Customer, Hệ thống | Bắt buộc | Mã hợp lệ được áp dụng và tính đúng số tiền giảm; mã không hợp lệ hoặc hết hạn bị từ chối. |
| F13 | Tạo và tách đơn hàng theo tiệm | Tạo đơn hàng tổng và các đơn hàng thành phần tương ứng với từng tiệm khi khách hàng đặt dịch vụ từ nhiều tiệm. | Customer, Hệ thống | Bắt buộc | Đơn hàng có mã duy nhất; mỗi đơn thành phần chỉ chứa dịch vụ của một tiệm; thông tin chi phí, địa chỉ và trạng thái được lưu chính xác. |

### 4.5. Yêu cầu thanh toán và quản lý đơn hàng

**Bảng 4.4. Yêu cầu chức năng thanh toán và theo dõi đơn**

| Mã | Tên chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F14 | Thanh toán | Hỗ trợ phương thức thanh toán được lựa chọn cho MVP, gồm thanh toán khi nhận hàng và/hoặc một phương thức thanh toán thử nghiệm. | Customer, Hệ thống | Bắt buộc | Phương thức thanh toán được lưu; kết quả giao dịch thử nghiệm được xác minh và ghi nhận đúng trạng thái. |
| F15 | Xem và theo dõi đơn hàng | Cho phép khách hàng xem lịch sử, chi tiết, trạng thái và hủy đơn theo điều kiện. | Customer | Bắt buộc | Khách hàng chỉ xem được đơn của mình; trạng thái được cập nhật chính xác; chỉ cho phép hủy ở trạng thái được quy định. |
| F16 | Quản lý đơn hàng của tiệm | Cho phép chủ tiệm xem, tiếp nhận và cập nhật trạng thái các đơn thành phần thuộc tiệm mình. | Seller | Bắt buộc | Chủ tiệm chỉ xem và xử lý đơn của tiệm mình; trạng thái được lưu theo quy trình hợp lệ. |
| F17 | Ghi nhận tình trạng quần áo trước khi giặt | Cho phép chủ tiệm ghi nhận số lượng, loại quần áo và các tình trạng cần lưu ý; có thể đính kèm hình ảnh. | Seller | Bắt buộc | Thông tin được lưu gắn với đúng đơn hàng; hình ảnh hợp lệ có thể được tải lên và xem lại. |
| F18 | Ghi nhận tình trạng sau khi giặt | Cho phép chủ tiệm cập nhật tình trạng quần áo sau khi xử lý; khách hàng có thể xem thông tin và gửi phản hồi. | Seller, Customer | Bắt buộc | Thông tin sau khi giặt được lưu đúng đơn; khách hàng xem được thông tin liên quan đến đơn của mình và gửi phản hồi. |
| F19 | Đánh giá dịch vụ | Cho phép khách hàng đánh giá tiệm sau khi đơn hàng hoàn thành. | Customer | Bắt buộc | Chỉ khách hàng có đơn hoàn thành hợp lệ mới được đánh giá; đánh giá được lưu và gắn đúng tiệm. |

### 4.6. Yêu cầu quản trị hệ thống

**Bảng 4.5. Yêu cầu chức năng quản trị**

| Mã | Tên chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F20 | Quản lý tiệm tham gia sàn | Cho phép duyệt, từ chối hoặc khóa tiệm theo quy định. | Admin | Bắt buộc | Trạng thái duyệt được lưu; tiệm chưa duyệt hoặc bị khóa không thể tiếp nhận đơn mới. |
| F21 | Quản lý tài khoản và phân quyền | Cho phép quản trị viên xem tài khoản và quản lý quyền truy cập theo vai trò. | Admin | Bắt buộc | Quyền được áp dụng đúng; người dùng không có quyền không thể truy cập chức năng quản trị. |
| F22 | Quản lý danh mục và voucher | Cho phép quản lý danh mục dịch vụ, mã giảm giá và các quy tắc chung của hệ thống. | Admin | Bắt buộc | Dữ liệu được thêm, sửa hoặc vô hiệu hóa chính xác; voucher không hợp lệ không được áp dụng. |
| F23 | Giám sát đơn hàng và thanh toán | Cho phép quản trị viên xem các đơn hàng trên toàn sàn, kiểm tra thông tin thanh toán và giám sát trạng thái xử lý. | Admin | Bắt buộc | Admin xem được đơn hàng của các tiệm; dữ liệu trạng thái và thanh toán hiển thị chính xác. |
| F24 | Dashboard thống kê | Hiển thị số đơn hàng, đơn theo trạng thái và doanh thu ghi nhận. | Admin | Bắt buộc | Các số liệu được tổng hợp từ dữ liệu hệ thống theo quy tắc thống kê đã xác định. |

### 4.7. Quy tắc nghiệp vụ quan trọng

Các quy tắc sau được áp dụng xuyên suốt những chức năng liên quan:

1. **Điều kiện hoạt động của tiệm:** Chỉ tiệm được quản trị viên phê duyệt và đang hoạt động mới được tiếp nhận đơn hàng mới.
2. **Quyền quản lý dịch vụ:** Mỗi dịch vụ phải gắn với một tiệm cụ thể. Chủ tiệm chỉ được quản lý dịch vụ thuộc tiệm của mình.
3. **Tách đơn hàng:** Khi giỏ hàng chứa dịch vụ từ nhiều tiệm, hệ thống tạo các đơn hàng thành phần theo từng tiệm. Mỗi đơn thành phần có trạng thái xử lý riêng.
4. **Tính chi phí:** Giá dịch vụ được lấy từ dữ liệu hợp lệ tại thời điểm đặt hàng. Phí giao nhận và voucher được tính theo quy tắc đã cấu hình.
5. **Phân quyền đơn hàng:** Khách hàng chỉ được xem đơn của mình; chủ tiệm chỉ được xử lý đơn thuộc tiệm mình; Admin được giám sát toàn bộ đơn hàng.
6. **Ghi nhận tình trạng quần áo:** Thông tin trước và sau khi giặt phải được liên kết với đúng đơn hàng và chỉ hiển thị cho những người có quyền truy cập.
7. **Đánh giá:** Khách hàng chỉ được đánh giá dịch vụ khi đơn hàng đáp ứng điều kiện hoàn thành.
8. **Thanh toán:** Hệ thống phải ghi nhận rõ trạng thái thanh toán, tránh xác nhận giao dịch chỉ dựa trên thông báo do trình duyệt gửi lên.

## 5. Yêu cầu phi chức năng

### 5.1. Danh sách yêu cầu phi chức năng

**Bảng 5.1. Yêu cầu phi chức năng của WASHUP**

| Mã | Nhóm yêu cầu | Nội dung yêu cầu | Tiêu chí kiểm tra |
|---|---|---|---|
| NFR-01 | Giao diện và khả năng sử dụng | Giao diện rõ ràng, thống nhất và phù hợp với hoạt động tìm kiếm, so sánh và đặt dịch vụ. | Các chức năng chính có thể thao tác trên trình duyệt máy tính và điện thoại; biểu mẫu có nhãn và thông báo lỗi dễ hiểu. |
| NFR-02 | Tính tương thích | Website hỗ trợ các kích thước màn hình phổ biến. | Nội dung không bị tràn hoặc che khuất nghiêm trọng khi kiểm tra trên máy tính và điện thoại. |
| NFR-03 | Tính chính xác của dữ liệu | Giá dịch vụ, phí giao nhận, voucher và tổng chi phí phải được tính nhất quán. | Kết quả tính tiền khớp với quy tắc đã thống nhất và dữ liệu đơn hàng được lưu. |
| NFR-04 | Phân quyền | Chức năng và dữ liệu được giới hạn theo vai trò Guest, Customer, Seller và Admin. | Thử truy cập bằng tài khoản khác vai trò; hệ thống từ chối truy cập trái phép. |
| NFR-05 | Bảo mật | Kiểm tra dữ liệu đầu vào, bảo vệ thông tin cá nhân, băm mật khẩu an toàn và hạn chế các lỗ hổng phổ biến. | Dữ liệu đầu vào được kiểm tra; mật khẩu không lưu dưới dạng văn bản thuần; các chức năng quản trị được bảo vệ. |
| NFR-06 | Bảo vệ dữ liệu giữa các tiệm | Chủ tiệm không được truy cập hoặc chỉnh sửa dữ liệu riêng của tiệm khác. | Kiểm thử bằng tài khoản của hai tiệm khác nhau; thao tác trái quyền bị từ chối. |
| NFR-07 | An toàn giao dịch | Trạng thái thanh toán phải được xác minh và lưu nhất quán. | Giao dịch thử nghiệm thành công, thất bại và gửi lại yêu cầu được xử lý theo quy tắc đã định. |
| NFR-08 | Tính ổn định | Hệ thống hạn chế tạo đơn trùng và ghi nhận dữ liệu không nhất quán khi có lỗi. | Kiểm thử thao tác gửi lại yêu cầu và xác nhận dữ liệu không bị ghi nhận trùng ngoài quy tắc cho phép. |
| NFR-09 | Khả năng bảo trì | Mã nguồn được tổ chức rõ ràng, tên biến và hàm dễ hiểu, các phần chức năng được phân chia hợp lý. | Thành viên có thể xác định vị trí mã nguồn của các chức năng chính và cập nhật mà không sửa trùng lặp không cần thiết. |
| NFR-10 | Khả năng kiểm thử | Các chức năng cốt lõi có thể được kiểm tra bằng dữ liệu thử nghiệm. | Có thể kiểm thử luồng đăng nhập, tìm kiếm, so sánh, đặt hàng đa tiệm, tính phí, voucher, phân quyền và cập nhật trạng thái. |
| NFR-11 | Bảo vệ thông tin bí mật | Không công khai mật khẩu, khóa API, thông tin thanh toán bí mật hoặc cấu hình nhạy cảm trong repository. | Mã nguồn công khai không chứa thông tin xác thực; thông tin nhạy cảm được lưu trong cấu hình phù hợp và không đưa vào Git. |
| NFR-12 | Lưu trữ hình ảnh | Hình ảnh tình trạng quần áo phải được kiểm tra loại tệp và dung lượng trước khi lưu. | Tệp không hợp lệ bị từ chối; hình ảnh hợp lệ được liên kết đúng đơn hàng và chỉ người có quyền mới xem được. |

*Nguồn: Nhóm tác giả tự tổng hợp.*

### 5.2. Nguyên tắc bảo mật và dữ liệu

- Dữ liệu đầu vào từ biểu mẫu phải được kiểm tra trước khi lưu vào cơ sở dữ liệu.
- Các truy vấn cơ sở dữ liệu cần sử dụng phương pháp phù hợp để hạn chế SQL Injection.
- Nội dung do người dùng nhập phải được xử lý an toàn khi hiển thị nhằm hạn chế Cross-Site Scripting (XSS).
- Các chức năng quản trị phải yêu cầu đăng nhập và kiểm tra quyền truy cập.
- Dữ liệu đơn hàng, địa chỉ và hình ảnh chỉ được cung cấp cho người có quyền liên quan.
- Không lưu mật khẩu dưới dạng văn bản thuần hoặc đưa khóa bí mật vào mã nguồn công khai.
- Dữ liệu thử nghiệm không nên chứa thông tin cá nhân hoặc thông tin thanh toán thực tế không cần thiết.

### 5.3. Giới hạn về chỉ tiêu kỹ thuật

Trong giai đoạn đầu, nhóm chưa xác định các chỉ tiêu định lượng cụ thể về thời gian phản hồi, số lượng người dùng đồng thời hoặc mức độ sẵn sàng của hệ thống. Các chỉ tiêu này sẽ được cân nhắc dựa trên môi trường triển khai và nguồn lực thực tế của đồ án.

## 6. Giới hạn và giả định

### 6.1. Giới hạn của dự án

| Yếu tố | Giới hạn dự kiến |
|---|---|
| **Thời gian** | Dự án được thực hiện trong khoảng 8 tuần, bao gồm phân tích yêu cầu, thiết kế, lập trình, tích hợp, kiểm thử và hoàn thiện. |
| **Nhân lực** | Nhóm gồm 8 thành viên; công việc được phân chia theo năng lực và tiến độ thực tế. |
| **Công nghệ** | Theo kế hoạch hiện tại, nhóm dự kiến sử dụng HTML5, CSS3, JavaScript, Bootstrap 5, PHP và MySQL. Phiên bản cụ thể sẽ được thống nhất trong quá trình thiết lập môi trường. |
| **Môi trường phát triển** | Dự kiến sử dụng Visual Studio Code, XAMPP và GitHub để phát triển, chạy thử và quản lý mã nguồn. |
| **Mô hình kinh doanh** | Website được xây dựng theo mô hình sàn kết nối nhiều tiệm giặt ủi, không giới hạn ở một trung tâm giặt duy nhất. |
| **Phạm vi địa lý** | Trong giai đoạn thử nghiệm, các tiệm phục vụ những khu vực được cấu hình sẵn; chưa bắt buộc sử dụng GPS để tìm tiệm theo bán kính thực tế. |
| **Giao nhận** | Khách hàng lựa chọn địa chỉ và khung giờ được thiết lập sẵn; chưa tích hợp hệ thống điều phối tài xế hoặc theo dõi vị trí theo thời gian thực. |
| **Thanh toán** | Ưu tiên phương thức thanh toán phù hợp với đồ án, có thể sử dụng thanh toán khi nhận hàng và môi trường thanh toán thử nghiệm; không mặc định triển khai nhiều cổng thanh toán thật. |
| **Dữ liệu** | Có thể sử dụng dữ liệu mẫu về tiệm, dịch vụ, giá, khách hàng và đơn hàng để kiểm thử các quy trình nghiệp vụ. |
| **Tính năng nâng cao** | AI, QR theo từng công đoạn, gói định kỳ, định giá linh hoạt và tích hợp giao hàng bên ngoài nằm ngoài phạm vi MVP. |

### 6.2. Các giả định triển khai

1. **Thông tin tiệm:** Các tiệm tham gia cung cấp thông tin cơ bản, dịch vụ, bảng giá, thời gian xử lý và khu vực phục vụ để quản trị viên kiểm tra trước khi phê duyệt.
2. **Thông tin dịch vụ:** Mỗi dịch vụ được gắn với một tiệm cụ thể và có đơn vị tính, giá cùng các thông tin cần thiết để khách hàng lựa chọn.
3. **Đặt hàng đa tiệm:** Hệ thống hỗ trợ khách hàng chọn dịch vụ từ nhiều tiệm trong cùng một lần đặt hàng; các dịch vụ được tách thành đơn hàng thành phần theo từng tiệm.
4. **Giá và phí:** Giá dịch vụ, phí giao nhận và voucher được tính theo các quy tắc được nhóm xác định trước. Các quy tắc này có thể được đơn giản hóa để phù hợp với phạm vi đồ án.
5. **Khung giờ giao nhận:** Các khung giờ được thiết lập sẵn để mô phỏng quy trình đặt dịch vụ; chưa yêu cầu thuật toán tối ưu lịch giao nhận phức tạp.
6. **Thanh toán:** Nhóm sử dụng phương thức thanh toán phù hợp với môi trường thử nghiệm và không xử lý thông tin thẻ thanh toán thực tế trực tiếp trên website.
7. **Tình trạng quần áo:** Chủ tiệm ghi nhận tình trạng quần áo bằng biểu mẫu và hình ảnh tùy chọn; hệ thống lưu thông tin theo đơn hàng để khách hàng có thể xem lại.
8. **Đánh giá:** Chỉ các đơn hàng đáp ứng điều kiện hoàn thành mới được phép đánh giá theo quy tắc của hệ thống.
9. **Nguồn lực:** Các chức năng được ưu tiên theo mức độ quan trọng; nếu thời gian hạn chế, nhóm hoàn thiện quy trình cốt lõi trước khi triển khai các phần tùy chọn.

### 6.3. Các nội dung cần thống nhất trước khi phát triển

Để tránh khác biệt trong cách triển khai giữa các thành viên, nhóm cần thống nhất các quy tắc sau:

- Đơn vị tính và cách tính giá cho từng loại dịch vụ, bao gồm cách xử lý khối lượng lẻ hoặc mức giá tối thiểu.
- Cách tính phí giao nhận theo tiệm, khu vực và số lượt giao nhận.
- Quy tắc áp dụng voucher và cách phân bổ khoản giảm giá khi đơn hàng có dịch vụ từ nhiều tiệm.
- Cách quản lý đơn hàng tổng, đơn hàng thành phần và trạng thái của từng đơn.
- Điều kiện hủy đơn và cách xử lý khi giao dịch thanh toán thất bại.
- Các trạng thái xử lý đơn hàng được phép chuyển đổi.
- Thông tin bắt buộc trong biên bản ghi nhận tình trạng quần áo trước và sau khi giặt.
- Điều kiện đánh giá tiệm và cách tính các chỉ số trên dashboard.
- Công nghệ, cấu trúc cơ sở dữ liệu và quy trình phối hợp mã nguồn được sử dụng thống nhất trong nhóm.
