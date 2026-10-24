#  WASHUP - Website đặt dịch vụ giặt ủi trực tuyến
Đồ án môn Phát triển ứng dụng TMĐT - Nhóm 6.
Quy mô nhóm: 8 thành viên.
Thời gian thực hiện dự kiến: 8 tuần.

## 1. Giới thiệu

### 1.1. Giới thiệu đề tài

**WASHUP** là sàn thương mại điện tử cung cấp dịch vụ giặt ủi trực tuyến, đóng vai trò kết nối khách hàng với nhiều tiệm giặt ủi độc lập trên cùng một nền tảng. Thông qua website, khách hàng có thể tìm kiếm, xem thông tin, so sánh giá cả và lựa chọn dịch vụ từ các tiệm khác nhau; đồng thời đặt dịch vụ, cung cấp thông tin giao nhận và theo dõi trạng thái đơn hàng trực tuyến.

Ý tưởng của WASHUP xuất phát từ nhu cầu tiết kiệm thời gian của sinh viên, người đi làm và các hộ gia đình bận rộn. Thay vì phải tìm kiếm từng tiệm giặt sấy, liên hệ để hỏi giá và tự sắp xếp việc giao nhận quần áo, khách hàng có thể tiếp cận nhiều lựa chọn trên cùng một website. Đối với các tiệm giặt ủi, WASHUP tạo thêm một kênh trực tuyến để giới thiệu dịch vụ, tiếp cận khách hàng và quản lý đơn hàng.

Nhu cầu đối với dịch vụ giặt ủi tại Việt Nam đã được thể hiện qua sự phát triển của thị trường trong những năm gần đây. Theo bài viết của VietnamPlus về thị trường giặt ủi tại Việt Nam, vào năm 2022, quy mô thị trường giặt ủi thương mại được ước tính đạt khoảng **205 triệu USD mỗi năm**, với tốc độ tăng trưởng khoảng **6%**. Trong cùng giai đoạn, thị trường có nhiều cơ sở giặt ủi quy mô nhỏ, cho thấy tiềm năng ứng dụng nền tảng trực tuyến để hỗ trợ kết nối khách hàng và nhà cung cấp dịch vụ.

Nguồn tham khảo: [VietnamPlus – Laundromat market growing in Vietnam](https://en.vietnamplus.vn/laundromat-market-growing-in-vietnam-post267470.vnp).

Tuy nhiên, khi thông tin về dịch vụ, giá cả, thời gian xử lý và khu vực giao nhận được đăng tải riêng lẻ trên nhiều kênh, khách hàng có thể gặp khó khăn khi tìm kiếm và so sánh các lựa chọn. Mặt khác, những tiệm giặt ủi có quy mô nhỏ có thể gặp hạn chế trong việc quảng bá dịch vụ và tiếp cận khách hàng trực tuyến. Từ thực tế đó, WASHUP được định hướng phát triển thành một **sàn thương mại điện tử đa nhà cung cấp dịch vụ giặt ủi**. Mỗi tiệm có thể đăng ký tham gia hệ thống sau khi được quản trị viên phê duyệt, tự quản lý danh sách dịch vụ, bảng giá, thời gian xử lý và khu vực phục vụ. Khách hàng có thể lựa chọn dịch vụ từ nhiều tiệm và quản lý các đơn hàng trên cùng một tài khoản.

Trong giai đoạn MVP, WASHUP tập trung xây dựng các chức năng cốt lõi của sàn thương mại điện tử, bao gồm quản lý tài khoản và tiệm giặt, đăng tải dịch vụ, tìm kiếm và so sánh dịch vụ, giỏ hàng, đặt hàng, thanh toán, theo dõi đơn hàng và quản lý hoạt động của hệ thống. Quy trình giao nhận và thanh toán có thể được mô phỏng hoặc sử dụng môi trường thử nghiệm tùy theo khả năng triển khai. Việc kết nối với dịch vụ giao hàng bên ngoài và triển khai các công nghệ nâng cao sẽ được xem xét ở những giai đoạn tiếp theo.

### 1.2. Vấn đề kinh doanh cần giải quyết
WASHUP hướng đến giải quyết những vấn đề mà khách hàng và các tiệm giặt ủi có thể gặp phải khi giao dịch thông qua các kênh riêng lẻ.

**Đối với khách hàng:**

- **Khó tìm kiếm và so sánh:** Thông tin về giá cả, loại hình giặt ủi, thời gian hoàn thành và đánh giá của các tiệm có thể nằm rải rác trên nhiều kênh.
- **Tốn thời gian đặt dịch vụ:** Khách hàng phải liên hệ từng tiệm để hỏi thông tin, xác nhận giá và sắp xếp lịch giao nhận.
- **Khó quản lý đơn hàng:** Khách hàng có thể phải liên hệ trực tiếp với từng tiệm để hỏi về tình trạng xử lý quần áo.
- **Thiếu thông tin về tình trạng quần áo:** Nếu tình trạng quần áo trước và sau khi giặt không được ghi nhận rõ ràng, việc kiểm tra và phản hồi khi có vấn đề có thể gặp khó khăn.

**Đối với các tiệm giặt ủi:**

- **Hạn chế khả năng tiếp cận khách hàng:** Các tiệm nhỏ có thể phụ thuộc vào khách quen, mạng xã hội hoặc hoạt động quảng bá riêng lẻ.
- **Khó quản lý thông tin dịch vụ tập trung:** Giá cả, mô tả dịch vụ và thời gian xử lý có thể chưa được trình bày theo một cấu trúc thống nhất để khách hàng dễ so sánh.
- **Khó theo dõi đơn hàng trực tuyến:** Việc tiếp nhận, cập nhật trạng thái và quản lý thông tin đơn hàng có thể chưa được thực hiện trên một hệ thống thống nhất.

WASHUP hướng đến giải quyết các vấn đề trên bằng cách xây dựng một nền tảng tập trung, cho phép nhiều tiệm giặt ủi giới thiệu dịch vụ và tiếp nhận đơn hàng, đồng thời giúp khách hàng dễ dàng lựa chọn, đặt dịch vụ và theo dõi quá trình xử lý. Qua đó, hệ thống kỳ vọng cải thiện trải nghiệm khách hàng và hỗ trợ các tiệm giặt ủi mở rộng kênh kinh doanh trực tuyến.

## 2. Khách hàng mục tiêu
WASHUP hướng đến hai nhóm người dùng chính: khách hàng có nhu cầu sử dụng dịch vụ giặt ủi và các tiệm giặt ủi muốn kinh doanh dịch vụ trên nền tảng trực tuyến.

- **Sinh viên:** Sống tại phòng trọ, ký túc xá hoặc căn hộ nhỏ; có thể hạn chế về thiết bị giặt sấy, không gian phơi đồ và thời gian sinh hoạt. Nhóm này thường quan tâm đến giá cả, sự thuận tiện và khả năng lựa chọn tiệm phù hợp.
- **Người đi làm:** Có lịch trình bận rộn, mong muốn tiết kiệm thời gian, dễ dàng so sánh dịch vụ và chủ động lựa chọn thời gian giao nhận.
- **Hộ gia đình bận rộn:** Có nhu cầu giặt quần áo với khối lượng lớn hoặc sử dụng các dịch vụ riêng như giặt chăn ga, giặt hấp và chăm sóc trang phục.
- **Các tiệm giặt ủi địa phương:** Đặc biệt là các cơ sở quy mô nhỏ và vừa muốn giới thiệu dịch vụ, tiếp cận thêm khách hàng, quản lý bảng giá và tiếp nhận đơn hàng trực tuyến.

Trong phạm vi MVP, WASHUP ưu tiên phục vụ sinh viên và người đi làm tại khu vực triển khai thử nghiệm, đồng thời kết nối một số tiệm giặt ủi tham gia hệ thống để mô phỏng hoạt động của sàn thương mại điện tử đa nhà cung cấp.

## 3. Chức năng chính
### 3.1. Bảng vai trò người dùng

Để đáp ứng mô hình sàn thương mại điện tử kết nối nhiều tiệm giặt ủi, hệ thống WASHUP xác định bốn vai trò người dùng chính: **Khách chưa đăng nhập (Guest), Khách hàng (Customer), Chủ tiệm giặt ủi (Seller) và Quản trị viên (Admin).**

**Bảng 3.1. Vai trò của người dùng**

| Vai trò | Nhiệm vụ chính | Quyền hạn dự kiến |
|---|---|---|
| **Khách chưa đăng nhập (Guest)** | Tìm hiểu dịch vụ và các tiệm giặt ủi trên nền tảng. | Xem trang chủ, danh sách tiệm, danh sách dịch vụ, bảng giá và chi tiết dịch vụ; tìm kiếm, lọc và so sánh các lựa chọn; đăng ký hoặc đăng nhập. |
| **Khách hàng (Customer)** | Lựa chọn dịch vụ, đặt hàng và theo dõi đơn hàng. | Quản lý hồ sơ và địa chỉ; thêm dịch vụ vào giỏ hàng; đặt dịch vụ từ một hoặc nhiều tiệm; áp dụng voucher; lựa chọn phương thức thanh toán; xem lịch sử và trạng thái đơn hàng; hủy đơn theo điều kiện; xem thông tin ghi nhận tình trạng quần áo và gửi phản hồi phù hợp. |
| **Chủ tiệm giặt ủi (Seller)** | Kinh doanh dịch vụ và xử lý đơn hàng của tiệm mình. | Đăng ký tiệm để quản trị viên xét duyệt; quản lý hồ sơ tiệm, dịch vụ, giá, mô tả, thời gian xử lý và khu vực phục vụ; xem và tiếp nhận đơn hàng thuộc tiệm; cập nhật trạng thái đơn; ghi nhận tình trạng quần áo trước và sau khi giặt, đính kèm hình ảnh khi cần. |
| **Quản trị viên (Admin)** | Quản lý và giám sát hoạt động của toàn bộ sàn. | Quản lý tài khoản; xét duyệt và quản lý các tiệm tham gia; quản lý danh mục, voucher và quy tắc chung; theo dõi đơn hàng và tình trạng thanh toán; xử lý phản hồi, kiểm tra thông tin dịch vụ và xem dashboard thống kê cơ bản. |

*Nguồn: Nhóm tác giả tự tổng hợp.*

**Lưu ý về phân quyền:** Chủ tiệm chỉ được quản lý thông tin, dịch vụ và đơn hàng thuộc tiệm của mình. Quản trị viên có quyền quản lý và giám sát toàn bộ hệ thống. Các đơn hàng được tách theo từng tiệm để mỗi tiệm có thể cập nhật trạng thái xử lý độc lập. Trong MVP, hoạt động giao nhận có thể được mô phỏng nên chưa bắt buộc triển khai vai trò tài xế riêng.

### 3.2. Danh sách chức năng
Các chức năng của WASHUP được chia thành hai phạm vi: chức năng cốt lõi thuộc MVP và chức năng nâng cao dự kiến phát triển sau. Việc phân chia này giúp nhóm tập trung hoàn thiện quy trình giao dịch cơ bản của sàn thương mại điện tử đa nhà cung cấp trước khi mở rộng thêm các tính năng phức tạp.

#### 3.2.1. Chức năng thuộc phạm vi MVP

**Bảng 3.2. Các chức năng thuộc phạm vi MVP**

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên |
|---|---|---|---|
| **F01** | Đăng ký, đăng nhập và đăng xuất theo vai trò người dùng. | Khách hàng, Chủ tiệm, Quản trị viên | Bắt buộc |
| **F02** | Xem danh sách tiệm giặt ủi và thông tin giới thiệu của từng tiệm. | Khách, Khách hàng | Bắt buộc |
| **F03** | Xem danh sách dịch vụ, bảng giá và chi tiết dịch vụ của từng tiệm. | Khách, Khách hàng | Bắt buộc |
| **F04** | Tìm kiếm, lọc và so sánh dịch vụ theo loại dịch vụ, giá, thời gian xử lý và thông tin tiệm. | Khách, Khách hàng | Bắt buộc |
| **F05** | Quản lý hồ sơ khách hàng và địa chỉ nhận/giao quần áo. | Khách hàng | Bắt buộc |
| **F06** | Đăng ký tiệm giặt ủi và gửi thông tin để quản trị viên xét duyệt. | Chủ tiệm, Quản trị viên | Bắt buộc |
| **F07** | Quản lý hồ sơ tiệm, bao gồm tên, mô tả, thông tin liên hệ và khu vực phục vụ. | Chủ tiệm | Bắt buộc |
| **F08** | Quản lý dịch vụ của tiệm: thêm, sửa, ẩn dịch vụ; cập nhật mô tả, đơn vị tính, giá và thời gian xử lý. | Chủ tiệm | Bắt buộc |
| **F09** | Quản lý giỏ hàng và lựa chọn dịch vụ từ một hoặc nhiều tiệm. | Khách hàng | Bắt buộc |
| **F10** | Nhập thông tin đơn hàng, địa chỉ và khung giờ nhận/giao được thiết lập sẵn. | Khách hàng | Bắt buộc |
| **F11** | Tính và hiển thị chi phí dự kiến, bao gồm tiền dịch vụ, phí giao nhận và khoản giảm giá hợp lệ. | Hệ thống | Bắt buộc |
| **F12** | Nhập và áp dụng voucher theo điều kiện và thời hạn được thiết lập. | Khách hàng, Hệ thống | Bắt buộc |
| **F13** | Xác nhận và tạo đơn hàng; tự động tách đơn hàng thành các đơn riêng theo từng tiệm khi giỏ hàng có dịch vụ từ nhiều tiệm. | Khách hàng, Hệ thống | Bắt buộc |
| **F14** | Hỗ trợ phương thức thanh toán phù hợp với phạm vi triển khai, chẳng hạn thanh toán khi nhận hàng và một phương thức thanh toán thử nghiệm. | Khách hàng, Hệ thống | Bắt buộc |
| **F15** | Xem lịch sử, chi tiết và trạng thái đơn hàng; hủy đơn theo điều kiện được quy định. | Khách hàng | Bắt buộc |
| **F16** | Tiếp nhận đơn hàng và cập nhật trạng thái xử lý đối với các đơn thuộc tiệm mình. | Chủ tiệm | Bắt buộc |
| **F17** | Ghi nhận tình trạng quần áo trước khi giặt, bao gồm số lượng, loại quần áo và các tình trạng cần lưu ý; cho phép đính kèm hình ảnh. | Chủ tiệm | Bắt buộc |
| **F18** | Ghi nhận tình trạng quần áo sau khi giặt; cho phép khách hàng xem thông tin và gửi phản hồi khi phát hiện vấn đề. | Chủ tiệm, Khách hàng | Bắt buộc |
| **F19** | Quản lý tiệm tham gia sàn: duyệt, từ chối hoặc khóa tiệm theo quy định. | Quản trị viên | Bắt buộc |
| **F20** | Quản lý tài khoản và phân quyền người dùng. | Quản trị viên | Bắt buộc |
| **F21** | Quản lý danh mục dịch vụ, voucher và các quy tắc chung của hệ thống. | Quản trị viên | Bắt buộc |
| **F22** | Theo dõi toàn bộ đơn hàng, kiểm tra thông tin thanh toán và giám sát trạng thái xử lý của từng tiệm. | Quản trị viên | Bắt buộc |
| **F23** | Dashboard thống kê cơ bản về số lượng đơn hàng, doanh thu ghi nhận và tình trạng đơn hàng. | Quản trị viên | Bắt buộc |

*Nguồn: Nhóm tác giả tự tổng hợp.*

**Lưu ý về cách vận hành đơn hàng:** Khi khách hàng mua dịch vụ từ nhiều tiệm trong cùng một lần đặt hàng, hệ thống tạo một đơn hàng tổng để khách hàng dễ theo dõi và các đơn hàng thành phần tương ứng với từng tiệm. Mỗi đơn hàng thành phần có thông tin dịch vụ, chi phí và trạng thái xử lý riêng. Chủ tiệm chỉ được cập nhật đơn hàng thuộc phạm vi quản lý của mình. Trong MVP, nhóm có thể mô phỏng quy trình này bằng dữ liệu và trạng thái đơn hàng mà không cần tích hợp đơn vị giao hàng bên ngoài.

**Lưu ý về ghi nhận tình trạng quần áo:** Đây là chức năng mở rộng được ưu tiên triển khai trong dự án. Chủ tiệm ghi nhận thông tin và tình trạng quần áo trước khi giặt, có thể đính kèm hình ảnh; sau khi hoàn thành, chủ tiệm tiếp tục cập nhật tình trạng sau khi giặt. Khách hàng có thể xem lại các thông tin này và gửi phản hồi nếu cần. Chức năng tập trung vào lưu trữ và hiển thị thông tin, chưa yêu cầu xây dựng quy trình bồi thường hoặc xử lý khiếu nại phức tạp.

#### 3.2.2. Chức năng ngoài MVP (nâng cao, phát triển sau)

**Bảng 3.3. Các chức năng nâng cao ngoài phạm vi MVP**

| Mã | Chức năng | Người sử dụng | Lý do chưa đưa vào MVP |
|---|---|---|---|
| **F24** | Gói giặt ủi định kỳ, đăng ký thành viên hoặc tự động gia hạn. | Khách hàng | Cần quản lý chu kỳ sử dụng dịch vụ và thanh toán định kỳ. |
| **F25** | Tích điểm khách hàng thân thiết, điểm thưởng và chương trình giới thiệu. | Khách hàng, Chủ tiệm, Quản trị viên | Cần xây dựng quy tắc tích lũy, quy đổi và quản lý lịch sử điểm. |
| **F26** | Đánh giá, xếp hạng và nhận xét tiệm sau khi đơn hàng hoàn thành. | Khách hàng | Cần bổ sung cơ chế kiểm soát đánh giá và nội dung phản hồi; có thể cân nhắc sau khi hoàn thiện quy trình đặt hàng. |
| **F27** | Thông báo trạng thái đơn qua SMS, email hoặc thông báo đẩy. | Khách hàng, Chủ tiệm | Có thể cần tích hợp dịch vụ bên ngoài và phát sinh chi phí. |
| **F28** | Quản lý tài xế, phân công giao nhận và theo dõi vị trí theo thời gian thực. | Tài xế, Chủ tiệm, Quản trị viên | Cần tích hợp bản đồ, định vị và quy trình điều phối giao nhận. |
| **F29** | Tích hợp đơn vị giao hàng bên ngoài. | Chủ tiệm, Quản trị viên | Cần kết nối API và xử lý các quy trình giao nhận thực tế. |
| **F30** | AI nhận diện vết bẩn, ước tính khối lượng quần áo hoặc gợi ý dịch vụ. | Khách hàng, Chủ tiệm | Cần dữ liệu, công nghệ AI và thời gian kiểm thử bổ sung. |
| **F31** | Mã QR theo dõi quần áo qua từng công đoạn xử lý. | Khách hàng, Chủ tiệm | Cần thiết kế quy trình quét mã và cập nhật dữ liệu theo từng công đoạn. |
| **F32** | Định giá linh hoạt theo giờ cao điểm, nhu cầu hoặc năng lực xử lý của tiệm. | Chủ tiệm, Quản trị viên | Cần quy tắc định giá và cơ chế đồng bộ dữ liệu phức tạp hơn. |
| **F33** | Chatbot AI hỗ trợ tư vấn và gợi ý dịch vụ. | Khách hàng | Cần tích hợp mô hình AI và kiểm thử chất lượng câu trả lời. |
| **F34** | Ứng dụng di động riêng. | Khách hàng, Chủ tiệm | Làm tăng khối lượng phát triển và kiểm thử trên nhiều nền tảng. |

*Nguồn: Nhóm tác giả tự tổng hợp.*

**Nguyên tắc xác định phạm vi:** Các chức năng trong bảng MVP là mục tiêu triển khai, nhưng nhóm có thể ưu tiên thực hiện theo từng giai đoạn để bảo đảm hoàn thành quy trình cốt lõi. Các chức năng nâng cao chỉ được xem xét sau khi những chức năng chính của sàn hoạt động ổn định.

Trong phạm vi MVP, WASHUP ưu tiên mô phỏng hoạt động của nhiều tiệm giặt ủi trên một nền tảng, cho phép mỗi tiệm quản lý dịch vụ và đơn hàng riêng. Nhóm chưa bắt buộc tích hợp định vị GPS, giao hàng bên ngoài, AI, QR theo từng công đoạn hoặc thanh toán định kỳ. Phạm vi khu vực phục vụ, phí giao nhận và khung giờ nhận/giao có thể được thiết lập bằng các lựa chọn có sẵn để giảm độ phức tạp trong quá trình phát triển.

## 4. Thành viên
Phân công trong giai đoạn khởi tạo dự án:

**Bảng 4. Bảng phân công trong giai đoạn khởi tạo dự án**

| STT | Thành viên | Vai trò / Công việc phụ trách |
| --- | --- | --- |
| 1 | Quỳnh Như | Xác định đề tài, vấn đề kinh doanh, khách hàng mục tiêu và định hướng giải pháp. |
| 2 | Hà My | Xác định phạm vi hệ thống, phân biệt chức năng trong phạm vi và ngoài phạm vi. |
| 3 | Anh Thư | Khảo sát website tương tự, lập bảng so sánh và xây dựng quy định làm việc với AI. |
| 4 | Thảo Nguyên | Sử dụng công cụ AI thứ nhất để phân tích yêu cầu và tổng hợp kết quả đề xuất. |
| 5 | Kim Thư | Phụ trách phản biện yêu cầu bằng AI và tổng hợp đề xuất, phản biện, quyết định của nhóm. |
| 6 | Thùy Duyên | Xác định vai trò người dùng, quyền hạn, danh sách chức năng và mức độ ưu tiên. |
| 7 | Yến Trân | Mô tả quy trình nghiệp vụ, quy trình quản trị đơn hàng và sơ đồ minh họa. |
| 8 | Ngân Huệ | Lập kế hoạch, phân công công việc, tổ chức repository GitHub và quản lý các Issues. |

Phân công phát triển giao diện, backend, cơ sở dữ liệu, kiểm thử và tích hợp sẽ được bổ sung vào PROJECT_PLAN.md.

## 5. Công nghệ dự kiến

Để triển khai dự án WASHUP trong thời gian 8 tuần, ngoài việc sử dụng các công nghệ phổ biến, dễ tiếp cận để xây dựng website thương mại điện tử cốt lõi, nhóm còn tích hợp thêm một số API và thư viện chuyên dụng nhằm đáp ứng các chức năng đặc thù của mô hình Marketplace đa nhà cung cấp.

**Bảng 5. Các hạng mục công nghệ được nhóm thống nhất**

| Hạng mục | Công nghệ / Công cụ đã thống nhất | Mục đích sử dụng |
|---|---|---|
| **Frontend** | HTML5, CSS3, JavaScript, Bootstrap 5, AJAX/Fetch API | Xây dựng giao diện responsive. Sử dụng AJAX/Fetch API để xử lý tương tác mượt mà (lọc dịch vụ, cập nhật giỏ hàng đa cửa hàng) mà không cần tải lại trang. |
| **Backend** | PHP 8.4 | Xử lý đăng nhập, quản lý giỏ hàng đa cửa hàng, tự động tách đơn, phân quyền hệ thống và kết nối thanh toán. |
| **Cơ sở dữ liệu & Lưu trữ** | MySQL, Cloudinary (hoặc Imgur API) | MySQL dùng để lưu trữ dữ liệu hệ thống (người dùng, đơn hàng). Cloudinary/Imgur API hỗ trợ lưu trữ và quản lý hình ảnh dịch vụ của các gian hàng tối ưu. |
| **API & Thư viện bổ trợ** | Google Maps API (hoặc Leaflet.js), Chart.js, PHPMailer | **Google Maps:** Tính toán khoảng cách và phí vận chuyển theo cửa hàng.<br>**Chart.js:** Trực quan hóa dữ liệu thống kê doanh thu.<br>**PHPMailer:** Gửi email thông báo tự động (đơn hàng, duyệt gian hàng). |
| **Môi trường phát triển** | XAMPP | Chạy thử website và cơ sở dữ liệu trên máy tính. |
| **Trình soạn thảo mã nguồn** | Visual Studio Code | Viết và chỉnh sửa mã nguồn dự án. |
| **Cổng thanh toán** | VNPay Sandbox | Tích hợp và kiểm thử giao dịch thanh toán trực tuyến trong môi trường thử nghiệm. |
| **Thiết kế giao diện** | Figma | Thiết kế bố cục và giao diện website trước khi lập trình. |
| **Quản lý mã nguồn & tiến độ** | GitHub, GitHub Issues | Lưu trữ mã nguồn, quản lý tài liệu, phân công và theo dõi tiến độ thực hiện. |

**Định hướng công nghệ:** 
Nhóm lựa chọn **HTML5, CSS3, JavaScript kết hợp Bootstrap 5** để phát triển giao diện, giúp tận dụng các thành phần thiết kế có sẵn và giảm thời gian xây dựng. Việc bổ sung **AJAX** là cần thiết để mang lại trải nghiệm liền mạch cho tính năng giỏ hàng tổng và tự động tách đơn. 

Ở phía hệ thống, **PHP và MySQL** đóng vai trò xử lý nghiệp vụ phức tạp của mô hình Marketplace. Thay vì tự xây dựng từ đầu, nhóm quyết định tích hợp các công cụ hỗ trợ như **Google Maps API, Chart.js và PHPMailer** để giải quyết nhanh chóng bài toán tính phí vận chuyển, báo cáo thống kê và gửi thông báo tự động. Các công nghệ này được lựa chọn nhằm tối ưu hóa thời gian phát triển, đảm bảo dự án WASHUP ra mắt phiên bản MVP đúng tiến độ 8 tuần với chất lượng tốt nhất.

## 6. Kế hoạch thực hiện

**Bảng 6. Kế hoạch thực hiện**

| Giai đoạn | Nội dung thực hiện | Kết quả dự kiến |
|---|---|---|
| **Giai đoạn 1: Khảo sát và xác định yêu cầu** | Xác định vấn đề kinh doanh, khách hàng mục tiêu; khảo sát các website tương tự; phân tích yêu cầu bằng AI, phản biện và thống nhất phạm vi MVP. | Hoàn thiện tài liệu giới thiệu dự án, phân tích website, yêu cầu chức năng và quy trình nghiệp vụ. |
| **Giai đoạn 2: Thiết kế giao diện** | Xây dựng bố cục và thiết kế giao diện bằng Figma cho: trang chủ, danh sách/chi tiết dịch vụ, giỏ hàng, trang quản lý của khách hàng, **trang quản lý gian hàng (người bán)** và trang quản trị (Admin). | Bộ thiết kế giao diện và cấu trúc điều hướng hoàn chỉnh của mô hình WASHUP Marketplace. |
| **Giai đoạn 3: Xây dựng các chức năng Frontend** | Sử dụng HTML5, CSS3, JavaScript và Bootstrap 5 xây dựng giao diện. **Tích hợp AJAX/Fetch API** cho bộ lọc tìm kiếm và cập nhật giỏ hàng đa cửa hàng mượt mà. | Giao diện website hiển thị responsive, các tương tác người dùng hoạt động trơn tru mà không cần tải lại trang. |
| **Giai đoạn 4: Phát triển Backend và cơ sở dữ liệu** | Sử dụng PHP, MySQL xây dựng hệ thống: tài khoản (3 vai trò), quản lý gian hàng, **giỏ hàng tổng, tự động tách đơn**, voucher, thanh toán. **Tích hợp các API (Google Maps, Chart.js, PHPMailer)**. | Hệ thống Backend vững chắc, các API được kết nối sẵn sàng để ráp nối với Frontend. |
| **Giai đoạn 5: Tích hợp và kiểm thử** | Kết nối Frontend, Backend và CSDL; kiểm tra luồng đặt hàng từ nhiều cửa hàng, **thuật toán tách đơn, tính phí vận chuyển theo khoảng cách**, áp dụng voucher, thanh toán và phân quyền. | Website hoạt động ổn định theo các quy trình Marketplace, các lỗi (bug) được ghi nhận và xử lý. |
| **Giai đoạn 6: Triển khai và hoàn thiện** | Triển khai phiên bản thử nghiệm, hoàn thiện UI/UX, kiểm tra các tính năng và bổ sung tài liệu hướng dẫn, báo cáo dự án. | Website WASHUP phiên bản MVP và bộ tài liệu phục vụ đánh giá cuối học phần. |

**Định hướng triển khai:** Nhóm ưu tiên hoàn thiện luồng nghiệp vụ cốt lõi của mô hình Marketplace: khách hàng có thể tìm kiếm, chọn dịch vụ từ **nhiều cửa hàng khác nhau**, hệ thống **tự động tính phí vận chuyển và tách đơn hàng**, thanh toán thành công và theo dõi tiến độ. Các chức năng nâng cao khác ngoài phạm vi MVP sẽ được xem xét phát triển ở giai đoạn sau.

Kế hoạch chi tiết về công việc, người phụ trách, thời hạn và trạng thái thực hiện sẽ được cập nhật trong tài liệu PROJECT_PLAN.md.

## 7. Liên kết tài liệu

Các tài liệu của dự án WASHUP được tổ chức trong repository GitHub nhằm hỗ trợ quản lý yêu cầu, phân công công việc và phối hợp phát triển.

**Danh sách tài liệu:**

- [Yêu cầu dự án – REQUIREMENTS.md](REQUIREMENTS.md)
- [Kế hoạch thực hiện – PROJECT_PLAN.md](PROJECT_PLAN.md)
- [Quy định sử dụng AI – AGENTS.md](AGENTS.md)
- [Nhật ký sử dụng AI – AI_USAGE_LOG.md](AI_USAGE_LOG.md)
- [Phân tích website tương tự – competitor-analysis.md](docs/competitor-analysis.md)
- [Quy trình nghiệp vụ – business-workflow.md](docs/business-workflow.md)

**Lưu ý:** Các tài liệu trên sẽ được tạo và cập nhật trong quá trình hoàn thiện repository. Nội dung từng tài liệu được xây dựng dựa trên kết quả phân tích và quyết định đã thống nhất của nhóm.
