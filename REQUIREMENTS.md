
# REQUIREMENTS – WASHUP

## 1. Mục tiêu dự án

### 1.1. Mục tiêu tổng quát

**WASHUP** là sàn thương mại điện tử trung gian kết nối khách hàng có nhu cầu sử dụng dịch vụ giặt ủi với nhiều tiệm giặt ủi độc lập trên cùng một nền tảng trực tuyến. Thay vì phải tìm kiếm và liên hệ từng tiệm riêng lẻ, khách hàng có thể tìm kiếm, xem thông tin, so sánh giá cả và lựa chọn dịch vụ từ nhiều nhà cung cấp khác nhau trên website **WASHUP**.

Nền tảng hỗ trợ khách hàng thực hiện quy trình đặt dịch vụ trực tuyến, bao gồm lựa chọn tiệm giặt, chọn dịch vụ, nhập thông tin quần áo, đặt lịch nhận và giao đồ, tính toán chi phí dự kiến và theo dõi trạng thái đơn hàng. Đồng thời, **WASHUP** cung cấp khu vực quản lý riêng cho từng tiệm, giúp các chủ tiệm đăng ký tham gia sàn, đăng tải dịch vụ, cập nhật bảng giá và tiếp nhận, xử lý các đơn hàng thuộc tiệm mình.

**WASHUP** đóng vai trò là đơn vị trung gian hỗ trợ kết nối và tổ chức giao dịch giữa khách hàng với các tiệm giặt ủi, không trực tiếp vận hành một tiệm giặt duy nhất. Trong phạm vi đồ án, website mô phỏng hoạt động của sàn với dữ liệu nhiều tiệm và quy trình quản lý đơn hàng tương ứng.

### 1.2. Mục tiêu cụ thể

- **Đối với khách hàng:** Tập trung thông tin của nhiều tiệm giặt ủi trên cùng một nền tảng, hỗ trợ tìm kiếm, lọc, so sánh giá và lựa chọn dịch vụ phù hợp.
- **Đối với chủ tiệm:** Cung cấp kênh kinh doanh trực tuyến để đăng ký tham gia sàn, giới thiệu dịch vụ, quản lý bảng giá và tiếp nhận đơn hàng từ khách hàng.
- **Đối với quy trình giao dịch:** Hỗ trợ khách hàng đặt dịch vụ, chọn lịch nhận/giao, xem chi phí dự kiến và theo dõi trạng thái xử lý đơn hàng.
- **Đối với quản lý đa nhà cung cấp:** Phân quyền riêng cho từng tiệm, bảo đảm mỗi tiệm chỉ quản lý dịch vụ và đơn hàng thuộc phạm vi của mình.
- **Đối với quản trị sàn:** Cho phép quản trị viên xét duyệt tiệm tham gia, quản lý tài khoản, giám sát hoạt động và theo dõi các chỉ số cơ bản của toàn hệ thống.

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

WASHUP tập trung triển khai các chức năng cốt lõi của sàn thương mại điện tử trung gian kết nối nhiều tiệm giặt ủi với khách hàng trong giai đoạn MVP. Nền tảng không trực tiếp vận hành một tiệm giặt duy nhất mà cung cấp môi trường trực tuyến để nhiều nhà cung cấp đăng ký tham gia, giới thiệu dịch vụ và tiếp nhận đơn hàng từ khách hàng.

- **Website công khai:** Hiển thị trang chủ WASHUP, danh sách các tiệm giặt đối tác, danh sách dịch vụ, bảng giá và thông tin chi tiết của từng tiệm, giúp khách hàng tìm hiểu các lựa chọn trên cùng một nền tảng.
- **Tìm kiếm và so sánh dịch vụ:** Hỗ trợ khách hàng tìm kiếm, lọc và so sánh dịch vụ giữa nhiều tiệm giặt theo loại dịch vụ, giá cả, thời gian xử lý và thông tin cửa hàng.
- **Quản lý tài khoản:** Hỗ trợ đăng ký, đăng nhập, đăng xuất và phân quyền theo ba nhóm người dùng chính: khách hàng, chủ tiệm giặt và quản trị viên WASHUP.
- **Đăng ký và quản lý tiệm:** Cho phép chủ tiệm gửi thông tin đăng ký tham gia sàn. Quản trị viên kiểm tra và phê duyệt trước khi cửa hàng được phép đăng tải dịch vụ và tiếp nhận đơn hàng.
- **Quản lý thông tin cửa hàng:** Cho phép mỗi chủ tiệm cập nhật thông tin, địa chỉ, khu vực phục vụ và các thông tin cần thiết của cửa hàng sau khi được phê duyệt.
- **Quản lý dịch vụ:** Cho phép mỗi tiệm giặt thêm, chỉnh sửa hoặc ẩn dịch vụ của mình; cập nhật mô tả, đơn giá, đơn vị tính, thời gian xử lý và khu vực phục vụ. Các dịch vụ phải được gắn với cửa hàng tương ứng để khách hàng phân biệt giữa các nhà cung cấp.
- **Giỏ hàng và đặt hàng:** Cho phép khách hàng chọn dịch vụ từ một hoặc nhiều tiệm giặt trên WASHUP, nhập thông tin giao nhận và lựa chọn khung giờ trong các khung giờ được hệ thống thiết lập sẵn.
- **Tách đơn hàng theo tiệm:** Khi khách hàng chọn dịch vụ từ nhiều cửa hàng trong cùng một lần đặt hàng, hệ thống ghi nhận đơn hàng tổng và tạo các đơn hàng thành phần tương ứng với từng tiệm. Mỗi tiệm chỉ quản lý và cập nhật trạng thái đơn hàng thuộc cửa hàng mình, trong khi khách hàng có thể theo dõi các đơn hàng thông qua tài khoản cá nhân.
- **Tính toán chi phí:** Tính tiền dịch vụ, phí giao nhận và khoản giảm giá theo các quy tắc đã cấu hình; hiển thị chi phí dự kiến để khách hàng kiểm tra trước khi xác nhận đặt hàng.
- **Voucher và khuyến mãi:** Hỗ trợ khách hàng nhập mã giảm giá, kiểm tra điều kiện áp dụng và cập nhật tổng chi phí theo chương trình khuyến mãi của nền tảng.
- **Thanh toán:** Hỗ trợ các phương thức thanh toán phù hợp với phạm vi đồ án, chẳng hạn thanh toán khi nhận hàng và một phương thức thanh toán thử nghiệm. Trạng thái thanh toán được ghi nhận để phục vụ việc quản lý và theo dõi đơn hàng.
- **Theo dõi và quản lý đơn hàng:** Khách hàng được xem lịch sử, chi tiết và trạng thái các đơn hàng của mình; chủ tiệm tiếp nhận và xử lý các đơn hàng thuộc cửa hàng; quản trị viên có thể theo dõi đơn hàng trên toàn hệ thống.
- **Ghi nhận tình trạng quần áo:** Cho phép tiệm giặt ghi nhận số lượng, loại quần áo và tình trạng cần lưu ý trước khi giặt; cập nhật tình trạng sau khi xử lý và đính kèm hình ảnh khi cần để khách hàng xem, đối chiếu và phản hồi.
- **Đánh giá dịch vụ:** Cho phép khách hàng đánh giá tiệm giặt sau khi đơn hàng hoàn thành theo điều kiện của hệ thống, hỗ trợ khách hàng khác tham khảo chất lượng dịch vụ trước khi lựa chọn.
- **Quản trị hệ thống:** Cho phép quản trị viên quản lý tài khoản, xét duyệt tiệm giặt, quản lý danh mục dịch vụ, voucher và theo dõi hoạt động của các cửa hàng, đơn hàng trên nền tảng.
- **Dashboard thống kê:** Hiển thị các chỉ số cơ bản như số lượng khách hàng, số tiệm giặt đã đăng ký, số đơn hàng, trạng thái đơn và doanh thu ghi nhận trong hệ thống.
- **Yêu cầu kỹ thuật:** Giao diện đáp ứng nhiều kích thước màn hình; kiểm tra dữ liệu đầu vào; phân quyền truy cập theo vai trò; bảo đảm chủ tiệm không thể truy cập hoặc chỉnh sửa dữ liệu của cửa hàng khác; tổ chức mã nguồn rõ ràng và dễ bảo trì.

### 2.2. Ngoài phạm vi

Các chức năng sau chưa được triển khai trong MVP do cần thêm thời gian, nguồn lực hoặc tích hợp với các hệ thống bên ngoài. Những chức năng này có thể được xem xét khi các chức năng cốt lõi của sàn WASHUP đã hoàn thiện.

- **Gói giặt ủi định kỳ:** Cho phép khách hàng đăng ký gói dịch vụ theo tuần hoặc tháng, tự động gia hạn và thanh toán định kỳ.
- **Tích điểm và chương trình thành viên:** Tích lũy điểm, đổi thưởng, giới thiệu bạn bè và triển khai các chương trình khách hàng thân thiết nâng cao.
- **AI nhận diện và tư vấn:** Nhận diện vết bẩn qua hình ảnh, ước tính khối lượng quần áo bằng AI hoặc sử dụng chatbot để tư vấn dịch vụ tự động.
- **Mã QR theo từng công đoạn:** Sử dụng mã QR để theo dõi quần áo qua từng bước tiếp nhận, giặt, sấy, đóng gói và giao trả.
- **Định giá linh hoạt:** Tự động điều chỉnh giá dịch vụ theo giờ cao điểm, nhu cầu thị trường hoặc năng lực xử lý của từng tiệm giặt.
- **Tích hợp đơn vị giao hàng bên ngoài:** Kết nối API với các đơn vị vận chuyển, tự động phân công tài xế và theo dõi vị trí giao nhận theo thời gian thực.
- **Thông báo nâng cao:** Gửi SMS, thông báo đẩy hoặc tích hợp các dịch vụ thông báo bên ngoài khi chưa đủ nguồn lực triển khai.
- **Ứng dụng di động riêng:** Phát triển ứng dụng độc lập cho hệ điều hành iOS hoặc Android; phiên bản MVP tập trung vào website tương thích với điện thoại.
- **Phân tích marketing nâng cao:** Phân tích chuyên sâu hành vi khách hàng, phễu chuyển đổi, hiệu quả chiến dịch quảng cáo và hiệu suất kinh doanh của từng tiệm giặt.
- **Quy trình xử lý khiếu nại phức tạp:** Xây dựng quy trình nhiều cấp độ để giải quyết tranh chấp, bồi thường, hoàn tiền và các vấn đề phát sinh giữa khách hàng với tiệm giặt.

Các chức năng ngoài phạm vi trên không phải yêu cầu bắt buộc của phiên bản MVP. Giai đoạn đầu ưu tiên hoàn thiện quy trình cốt lõi của sàn thương mại điện tử WASHUP: tiệm giặt đăng ký tham gia -> quản trị viên xét duyệt -> tiệm đăng tải dịch vụ -> khách hàng tìm kiếm và so sánh -> khách hàng đặt dịch vụ -> hệ thống phân tách đơn theo tiệm -> các bên theo dõi và xử lý đơn hàng.

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
| **Guest** | Tìm hiểu và lựa chọn dịch vụ từ các tiệm giặt đang tham gia sàn WASHUP. | Xem trang chủ, danh sách tiệm giặt đối tác, thông tin cửa hàng, danh sách dịch vụ và bảng giá; tìm kiếm, lọc và so sánh dịch vụ giữa các tiệm; xem chi tiết dịch vụ; đăng ký hoặc đăng nhập để sử dụng chức năng đặt hàng. |
| **Customer** | Tìm kiếm, so sánh, đặt dịch vụ từ một hoặc nhiều tiệm giặt và theo dõi quá trình xử lý đơn hàng. | Quản lý hồ sơ và địa chỉ giao nhận; chọn dịch vụ từ các tiệm khác nhau vào giỏ hàng; đặt dịch vụ, lựa chọn khung giờ, áp dụng voucher và thanh toán theo phương thức được hỗ trợ; xem lịch sử, chi tiết và trạng thái đơn hàng của mình; hủy đơn theo điều kiện hệ thống; xem thông tin tình trạng quần áo do tiệm cập nhật; gửi phản hồi và đánh giá tiệm sau khi đơn hàng hoàn thành. |
| **Seller** | Đăng ký tham gia sàn, giới thiệu dịch vụ của tiệm và tiếp nhận, xử lý đơn hàng từ khách hàng trên WASHUP. | Gửi thông tin đăng ký cửa hàng; sau khi được phê duyệt, quản lý hồ sơ tiệm, dịch vụ, bảng giá và khu vực phục vụ; xem, xác nhận và cập nhật trạng thái các đơn hàng thuộc tiệm mình; ghi nhận tình trạng quần áo trước và sau khi giặt; xem đánh giá của khách hàng liên quan đến tiệm. Không được quản lý dịch vụ hoặc đơn hàng của các tiệm đối tác khác. |
| **Admin** | Quản lý hoạt động của nền tảng trung gian, kiểm soát các tiệm tham gia và giám sát giao dịch trên toàn hệ thống. | Quản lý tài khoản người dùng; xem xét, phê duyệt, từ chối hoặc khóa tài khoản tiệm theo quy định; quản lý danh mục dịch vụ, voucher và các thiết lập chung của sàn; theo dõi đơn hàng, trạng thái thanh toán và hoạt động của các tiệm; tiếp nhận phản hồi theo chức năng được triển khai; xem dashboard thống kê tổng quan về khách hàng, tiệm đối tác, đơn hàng và doanh thu ghi nhận. |

*Nguồn: Nhóm tác giả tự tổng hợp.*

### 3.3. Quy tắc phân quyền

Việc phân quyền trên WASHUP được xây dựng theo mô hình một nền tảng - nhiều tiệm giặt đối tác - nhiều khách hàng. Mỗi nhóm người dùng được cấp quyền phù hợp với vai trò, đồng thời bảo đảm dữ liệu và hoạt động của từng tiệm được quản lý độc lập.

- **Guest:** Chỉ được truy cập thông tin công khai trên sàn, bao gồm thông tin các tiệm đã được phê duyệt, dịch vụ và bảng giá. Guest không được đặt hàng, quản lý đơn hàng hoặc truy cập dữ liệu cá nhân của người dùng khác.
- **Customer:** Được tìm kiếm và lựa chọn dịch vụ từ nhiều tiệm trên cùng nền tảng. Khách hàng chỉ được xem và quản lý hồ sơ, địa chỉ, lịch sử giao dịch và đơn hàng thuộc tài khoản của mình; không được truy cập dữ liệu quản lý nội bộ của các tiệm.
- **Seller:** Mỗi tài khoản Seller được gắn với tiệm giặt mà mình quản lý. Seller chỉ được cập nhật thông tin, dịch vụ, bảng giá và xử lý các đơn hàng thuộc tiệm đó; không được xem hoặc chỉnh sửa dữ liệu riêng của tiệm đối tác khác. Seller cũng không có quyền phê duyệt cửa hàng hoặc quản lý toàn bộ hoạt động của sàn.
- **Admin:** Được sử dụng các chức năng quản trị và giám sát toàn hệ thống, bao gồm quản lý người dùng, xét duyệt tiệm, quản lý danh mục và theo dõi đơn hàng. Các quyền quản trị phải được sử dụng đúng phạm vi vận hành của nền tảng.
- **Trạng thái tiệm đối tác:** Tiệm mới đăng ký phải được Admin phê duyệt trước khi chính thức cung cấp dịch vụ trên sàn. Chỉ các tiệm đang ở trạng thái hoạt động mới được hiển thị như nhà cung cấp có thể nhận đơn hàng. Tiệm bị từ chối, khóa hoặc ngừng hoạt động không được tiếp nhận đơn mới.
- **Đơn hàng đa tiệm:** Khi khách hàng đặt dịch vụ từ nhiều tiệm trong cùng một lần giao dịch, hệ thống ghi nhận đơn hàng tổng và tách thành các đơn hàng thành phần theo từng tiệm. Mỗi Seller chỉ được xử lý đơn hàng thành phần thuộc tiệm mình; Customer có thể theo dõi các đơn hàng liên quan thông qua tài khoản cá nhân, còn Admin có thể giám sát toàn bộ đơn hàng trên sàn.
- **Trạng thái đơn hàng:** Seller chỉ được cập nhật trạng thái của đơn hàng thuộc tiệm mình và theo các bước xử lý được hệ thống quy định. Việc cập nhật tại một tiệm không được tự ý làm thay đổi trạng thái của đơn hàng thuộc tiệm khác.
- **Giao nhận:** Trong phạm vi MVP, thông tin giao nhận được quản lý thông qua địa chỉ, khung giờ đã chọn và trạng thái xử lý đơn hàng. Hệ thống chưa triển khai tài khoản tài xế riêng, chức năng phân công tài xế hoặc theo dõi vị trí giao hàng theo thời gian thực.

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

Dự án WASHUP được triển khai theo mô hình sàn thương mại điện tử dịch vụ giặt ủi đa nhà cung cấp. Website đóng vai trò trung gian kết nối khách hàng với nhiều tiệm giặt đối tác, hỗ trợ tìm kiếm, so sánh dịch vụ, đặt hàng và theo dõi giao dịch. WASHUP không phải website giới thiệu hoặc bán dịch vụ của riêng một tiệm giặt; do đó, hệ thống cần quản lý riêng thông tin cửa hàng, dịch vụ và đơn hàng của từng đối tác.

| Yếu tố | Giới hạn dự kiến |
|---|---|
| **Thời gian** | Dự án được thực hiện trong khoảng 8 tuần, bao gồm phân tích yêu cầu, thiết kế giao diện và cơ sở dữ liệu, lập trình, tích hợp, kiểm thử và hoàn thiện sản phẩm. |
| **Nhân lực** | Nhóm gồm 8 thành viên; công việc được phân chia theo năng lực, khối lượng công việc và tiến độ thực tế. |
| **Công nghệ** | Theo kế hoạch hiện tại, nhóm dự kiến sử dụng HTML5, CSS3, JavaScript, Bootstrap 5, PHP và MySQL. Phiên bản cụ thể sẽ được thống nhất trong quá trình thiết lập môi trường phát triển. |
| **Môi trường phát triển** | Dự kiến sử dụng Visual Studio Code để lập trình, XAMPP để chạy thử hệ thống trên môi trường cục bộ và GitHub để quản lý mã nguồn, phối hợp làm việc nhóm. |
| **Mô hình kinh doanh** | WASHUP hoạt động như nền tảng trung gian kết nối nhiều tiệm giặt độc lập với khách hàng. Mỗi tiệm là một nhà cung cấp riêng, có thông tin cửa hàng, danh mục dịch vụ, bảng giá và khu vực phục vụ riêng. Hệ thống không giới hạn ở một tiệm giặt duy nhất. |
| **Quản lý đối tác** | Trong MVP, chủ tiệm có thể gửi yêu cầu đăng ký tham gia sàn. Quản trị viên kiểm duyệt trước khi tiệm được phép cung cấp dịch vụ. Hệ thống chưa triển khai quy trình ký kết hợp đồng điện tử hoặc quản lý hoa hồng, đối soát tài chính phức tạp giữa sàn và từng đối tác. |
| **Phạm vi địa lý** | Các tiệm giặt được cấu hình khu vực phục vụ để khách hàng tham khảo và lựa chọn. Chưa bắt buộc tích hợp GPS hoặc thuật toán tìm tiệm theo bán kính thực tế. |
| **Giao nhận** | Khách hàng cung cấp địa chỉ và lựa chọn khung giờ được thiết lập sẵn. Quy trình giao nhận được mô phỏng trên website; chưa tích hợp hệ thống điều phối tài xế hoặc theo dõi vị trí theo thời gian thực. |
| **Đặt hàng đa tiệm** | Hệ thống hỗ trợ khách hàng chọn dịch vụ từ nhiều tiệm trong cùng một lần đặt hàng. Đơn hàng được ghi nhận ở cấp tổng và phân tách thành các đơn hàng thành phần theo từng tiệm để các đối tác quản lý độc lập. |
| **Thanh toán** | Ưu tiên các phương thức phù hợp với đồ án, chẳng hạn thanh toán khi nhận hàng và phương thức thanh toán thử nghiệm. Chưa yêu cầu tích hợp nhiều cổng thanh toán thực tế hoặc xử lý đối soát thanh toán tự động giữa nền tảng và các tiệm. |
| **Dữ liệu** | Có thể sử dụng dữ liệu mẫu về nhiều tiệm giặt, dịch vụ, giá cả, khách hàng và đơn hàng. Dữ liệu phải thể hiện được sự khác biệt giữa các cửa hàng và hỗ trợ kiểm thử quy trình đặt hàng đa tiệm. |
| **Tính năng nâng cao** | AI, mã QR theo từng công đoạn, gói giặt định kỳ, định giá linh hoạt, ứng dụng di động và tích hợp đơn vị giao hàng bên ngoài nằm ngoài phạm vi MVP. |

### 6.2. Các giả định triển khai

Để xây dựng và kiểm thử WASHUP trong thời gian giới hạn, nhóm thống nhất các giả định sau:

1. **Thông tin tiệm đối tác:** Mỗi tiệm giặt cung cấp thông tin cơ bản về cửa hàng, địa chỉ, khu vực phục vụ, dịch vụ, bảng giá và thời gian xử lý. Quản trị viên kiểm tra, phê duyệt trước khi tiệm được hoạt động trên sàn.
2. **Quản lý nhiều nhà cung cấp:** Hệ thống có nhiều tiệm giặt độc lập cùng hoạt động trên một nền tảng. Mỗi tiệm có hồ sơ và danh sách dịch vụ riêng; chủ tiệm chỉ được quản lý dữ liệu thuộc cửa hàng mình.
3. **Thông tin dịch vụ:** Mỗi dịch vụ phải được liên kết với một tiệm cụ thể, có tên dịch vụ, mô tả, đơn vị tính, giá và các thông tin cần thiết để khách hàng so sánh, lựa chọn. Giá của cùng một loại dịch vụ có thể khác nhau giữa các tiệm.
4. **Đặt hàng đa tiệm:** Khách hàng có thể chọn dịch vụ từ nhiều tiệm trong cùng một lần đặt hàng. Hệ thống ghi nhận đơn hàng tổng và tạo các đơn hàng thành phần theo từng tiệm. Mỗi tiệm chỉ tiếp nhận và cập nhật đơn hàng thành phần của mình; khách hàng có thể theo dõi các đơn liên quan thông qua tài khoản cá nhân.
5. **Giá và phí:** Giá dịch vụ được lấy từ bảng giá của từng tiệm. Phí giao nhận và voucher được tính theo quy tắc do nhóm xác định trước. Khi đơn hàng có dịch vụ từ nhiều tiệm, hệ thống phải thể hiện rõ chi phí và khoản giảm giá theo quy tắc đã thống nhất, tránh nhầm lẫn giữa các đơn hàng thành phần.
6. **Khung giờ giao nhận:** Các khung giờ nhận và giao đồ được thiết lập sẵn để mô phỏng quy trình đặt dịch vụ. Hệ thống chưa cần tối ưu lịch trình dựa trên vị trí, năng lực xử lý hoặc lịch hoạt động thực tế của từng tiệm.
7. **Thanh toán:** Nhóm sử dụng phương thức thanh toán phù hợp với môi trường thử nghiệm. Website không trực tiếp lưu trữ thông tin thẻ thanh toán thực tế; trạng thái thanh toán được ghi nhận để phục vụ quản lý đơn hàng.
8. **Tình trạng quần áo:** Chủ tiệm ghi nhận tình trạng quần áo trước và sau khi giặt bằng biểu mẫu, kèm hình ảnh nếu cần. Thông tin được lưu theo đơn hàng thành phần tương ứng để khách hàng xem và đối chiếu.
9. **Đánh giá dịch vụ:** Khách hàng chỉ được đánh giá tiệm liên quan đến đơn hàng đáp ứng điều kiện hoàn thành theo quy tắc của hệ thống. Đánh giá được gắn với đúng tiệm để hỗ trợ khách hàng khác tham khảo trước khi lựa chọn dịch vụ.
10. **Quản trị sàn:** Quản trị viên có quyền quản lý thông tin chung và giám sát hoạt động của các tiệm trên toàn hệ thống. Tuy nhiên, việc quản lý dịch vụ và xử lý đơn hàng hằng ngày thuộc trách nhiệm của từng tiệm đối tác.
11. **Nguồn lực triển khai:** Nhóm ưu tiên hoàn thiện quy trình cốt lõi của sàn trước, bao gồm đăng ký và xét duyệt tiệm, đăng tải dịch vụ, tìm kiếm và so sánh, đặt hàng đa tiệm, tách đơn và quản lý trạng thái. Các chức năng nâng cao được cân nhắc tùy theo tiến độ thực tế.

### 6.3. Các nội dung cần thống nhất trước khi phát triển

Để bảo đảm các thành viên triển khai thống nhất mô hình sàn thương mại điện tử đa nhà cung cấp, nhóm cần thống nhất các quy tắc sau:

- **Quản lý tiệm đối tác:** Các trường thông tin bắt buộc khi đăng ký tiệm, quy trình phê duyệt, từ chối, khóa hoặc ngừng hoạt động của tiệm.
- **Quản lý dịch vụ:** Cấu trúc thông tin dịch vụ, đơn vị tính, cách tính giá, mức giá tối thiểu và cách xử lý khối lượng lẻ nếu có.
- **Tìm kiếm và so sánh:** Các tiêu chí được phép tìm kiếm, lọc và so sánh giữa các tiệm, chẳng hạn loại dịch vụ, giá, thời gian xử lý và khu vực phục vụ.
- **Giỏ hàng đa tiệm:** Cách lưu các dịch vụ thuộc nhiều cửa hàng, cách nhóm dịch vụ theo tiệm và cách hiển thị thông tin từng cửa hàng trước khi khách hàng xác nhận đặt hàng.
- **Cấu trúc đơn hàng:** Cách liên kết đơn hàng tổng với các đơn hàng thành phần, dữ liệu được lưu ở từng cấp và cách khách hàng theo dõi các đơn liên quan.
- **Tính giá và phí giao nhận:** Cách tính phí theo tiệm, khu vực, số lượt giao nhận và cách phân bổ voucher khi đơn hàng tổng bao gồm dịch vụ từ nhiều tiệm.
- **Thanh toán và hủy đơn:** Phương thức thanh toán được hỗ trợ, điều kiện hủy đơn, cách cập nhật trạng thái thanh toán và cách xử lý khi giao dịch thất bại.
- **Quy trình xử lý đơn:** Danh sách trạng thái đơn hàng, điều kiện chuyển đổi trạng thái và phạm vi cập nhật trạng thái của từng tiệm đối với đơn hàng thành phần.
- **Ghi nhận tình trạng quần áo:** Các thông tin bắt buộc trước và sau khi giặt, cách đính kèm hình ảnh và cách liên kết thông tin ghi nhận với đơn hàng của đúng tiệm.
- **Đánh giá và thống kê:** Điều kiện được đánh giá, cách tính số lượng đơn hàng, doanh thu ghi nhận và các chỉ số hiển thị trên dashboard của nền tảng.
- **Phân quyền và bảo mật:** Quyền truy cập của Guest, Customer, Seller và Admin; bảo đảm mỗi Seller chỉ quản lý dữ liệu của tiệm mình, còn Admin có quyền giám sát toàn sàn.
- **Công nghệ và phối hợp nhóm:** Thống nhất công nghệ, cấu trúc cơ sở dữ liệu, quy ước đặt tên, tổ chức mã nguồn và quy trình sử dụng GitHub để hạn chế xung đột trong quá trình phát triển.
