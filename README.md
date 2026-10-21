#  WASHUP - Website đặt dịch vụ giặt ủi trực tuyến
Đồ án môn Phát triển ứng dụng TMĐT - Nhóm 6.
Quy mô nhóm: 8 thành viên.
Thời gian thực hiện dự kiến: 8 tuần.

## 1. Giới thiệu

### 1.1. Giới thiệu đề tài

**WASHUP** là nền tảng thương mại điện tử cung cấp dịch vụ giặt ủi trực tuyến, hướng đến việc giúp khách hàng đặt dịch vụ giặt, sấy và giặt hấp quần áo một cách thuận tiện mà không cần trực tiếp mang đồ đến tiệm. Thông qua website, khách hàng có thể tìm hiểu các dịch vụ, tham khảo bảng giá, lựa chọn hình thức giặt ủi, đăng ký lịch nhận và giao quần áo tận nơi, đồng thời theo dõi trạng thái đơn hàng.

Ý tưởng của **WASHUP** xuất phát từ nhu cầu tiết kiệm thời gian của sinh viên, người đi làm và các hộ gia đình bận rộn. Thay vì phải tự giặt quần áo hoặc tìm kiếm từng tiệm giặt sấy để hỏi giá và sắp xếp thời gian, khách hàng có thể thực hiện các thao tác cần thiết ngay trên một nền tảng trực tuyến.

Nhu cầu đối với dịch vụ giặt ủi tại Việt Nam đã được thể hiện qua sự phát triển của thị trường trong những năm gần đây. Theo số liệu của [Bộ Công Thương được VietnamPlus](https://en.vietnamplus.vn/laundromat-market-growing-in-vietnam-post267470.vnp) báo cáo, vào tháng 5/2022, quy mô thị trường giặt ủi thương mại tại Việt Nam được ước tính đạt khoảng **205 triệu USD mỗi năm**, với tốc độ tăng trưởng khoảng **6%**, cao hơn mức trung bình **3,6%** của khu vực châu Á. Trong năm 2022, cả nước có khoảng **15.316 cơ sở giặt ủi**, trong đó hơn **60%** được thành lập trong giai đoạn 2020–2022 và trên **96%** hoạt động dưới hình thức hộ kinh doanh hoặc cơ sở quy mô nhỏ.

Những số liệu trên cho thấy nhu cầu sử dụng dịch vụ giặt ủi đã hình thành tương đối rõ, đặc biệt tại các khu vực đô thị có nhiều sinh viên, người lao động và hộ gia đình bận rộn. Tuy nhiên, phần lớn cơ sở hiện nay vẫn hoạt động nhỏ lẻ, khiến thông tin về bảng giá, chất lượng dịch vụ, thời gian hoàn thành và quy trình nhận – giao chưa được chuẩn hóa. Đây là cơ sở để WASHUP phát triển một nền tảng tập trung, giúp khách hàng tiếp cận dịch vụ thuận tiện, minh bạch và dễ quản lý hơn.

Trong giai đoạn đầu, WASHUP tập trung xây dựng website hỗ trợ khách hàng đặt dịch vụ, tính chi phí dự kiến và quản lý đơn hàng. Hệ thống sử dụng dữ liệu dịch vụ, bảng giá và lịch nhận – giao mẫu để mô phỏng quy trình hoạt động thực tế. Việc kết nối nhiều tiệm giặt sấy địa phương trong bán kính **5 km** được định hướng phát triển ở giai đoạn tiếp theo, sau khi các chức năng cốt lõi được hoàn thiện.

### 1.2. Vấn đề kinh doanh cần giải quyết
Khách hàng có nhu cầu sử dụng dịch vụ giặt ủi hiện đang gặp một số bất tiện:
- **Tốn thời gian:** Khách hàng phải tự giặt, phơi, sấy quần áo hoặc di chuyển đến tiệm giặt sấy.
- **Khó so sánh dịch vụ và giá cả:** Thông tin về giá, loại hình giặt và thời gian hoàn thành có thể nằm rải rác trên nhiều kênh khác nhau.
- **Bất tiện trong việc giao nhận:** Khách hàng cần sắp xếp thời gian để mang quần áo đến tiệm và quay lại nhận đồ.
- **Thiếu tính linh hoạt:** Khách hàng có thể cần chọn khung giờ giao nhận phù hợp, loại hình giặt hoặc mùi hương yêu thích nhưng chưa có một quy trình đặt dịch vụ thống nhất.
- **Khó theo dõi đơn hàng:** Khách hàng có thể phải liên hệ trực tiếp với tiệm để hỏi về tình trạng xử lý quần áo.
Những vấn đề trên tạo ra cơ hội phát triển một nền tảng trực tuyến giúp **tập trung thông tin dịch vụ, đơn giản hóa quy trình đặt lịch và tăng tính minh bạch** trong quá trình sử dụng dịch vụ giặt ủi.

## 2. Khách hàng mục tiêu
WASHUP hướng đến các nhóm khách hàng chính sau:
- **Sinh viên:** Sống tại phòng trọ, ký túc xá hoặc căn hộ nhỏ; hạn chế về thiết bị giặt sấy, không gian phơi đồ và thời gian sinh hoạt.
- **Người đi làm:** Có lịch trình bận rộn, cần tiết kiệm thời gian và chủ động lựa chọn lịch nhận/giao quần áo.
- **Hộ gia đình bận rộn:** Có nhu cầu giặt khối lượng lớn, chăn ga hoặc các loại trang phục cần chăm sóc riêng.
Trong MVP, WASHUP ưu tiên sinh viên và người đi làm tại khu vực triển khai thử nghiệm.

## 3. Chức năng chính
### 3.1. Bảng vai trò người dùng

Để đáp ứng quy trình vận hành và đặt dịch vụ giặt ủi trong phạm vi MVP, hệ thống WASHUP thiết lập 3 vai trò người dùng chính bao gồm: **Khách chưa đăng nhập (Guest), Khách hàng (Customer) và Quản trị viên (Admin).**

**Bảng 3.1. Vai trò của người dùng**

| Vai trò | Nhiệm vụ chính | Quyền hạn dự kiến |
|---|---|---|
| **Khách chưa đăng nhập (Guest)** | Tìm hiểu dịch vụ, bảng giá và quy trình đặt giặt. | Xem trang chủ, danh mục dịch vụ, bảng giá, tìm kiếm, lọc và xem chi tiết dịch vụ; đăng ký, đăng nhập. |
| **Khách hàng (Customer)** | Đặt dịch vụ giặt ủi, thanh toán và theo dõi đơn hàng. | Quản lý hồ sơ và địa chỉ; chọn dịch vụ, đặt lịch nhận/giao; áp dụng voucher; tạo đơn, thanh toán trực tuyến; xem lịch sử, trạng thái và hủy đơn hợp lệ của chính mình; đăng xuất. |
| **Quản trị viên (Admin)** | Vận hành website và xử lý đơn hàng. | Quản lý dịch vụ, bảng giá, mùi hương, voucher, quy tắc phí giao nhận, khách hàng và đơn hàng; cập nhật trạng thái xử lý; xem dashboard thống kê; đăng xuất. |

*Nguồn: Nhóm tác giả tự tổng hợp.*

**Lý do không bổ sung vai trò khác trong MVP:** Hoạt động giao nhận được mô phỏng nên chưa cần vai trò tài xế hoặc nhân viên giao nhận; hệ thống chỉ có một trung tâm giặt nên chưa cần vai trò đối tác tiệm giặt. Admin đảm nhiệm cả việc xử lý đơn. Hai vai trò này sẽ được xem xét ở giai đoạn mở rộng.

---

### 3.2. Danh sách chức năng
Danh sách chức năng của hệ thống WASHUP được xây dựng và phân chia thành hai phạm vi rõ ràng: các chức năng cốt lõi bắt buộc triển khai trong giai đoạn MVP nhằm hoàn thiện quy trình đặt dịch vụ giặt ủi trực tuyến, và các chức năng nâng cao sẽ được cân nhắc phát triển ở các giai đoạn sau để tối ưu hóa nguồn lực triển khai trong 8 tuần.

#### 3.2.1. Chức năng thuộc phạm vi MVP

**Bảng 3.2. Các chức năng thuộc phạm vi MVP**

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên |
|---|---|---|---|
| **F01** | Đăng ký, đăng nhập, đăng xuất | Khách, Khách hàng, Quản trị viên | Bắt buộc |
| **F02** | Xem danh sách dịch vụ và bảng giá | Khách, Khách hàng | Bắt buộc |
| **F03** | Xem chi tiết dịch vụ (mô tả, đơn vị tính, giá, thời gian xử lý) | Khách, Khách hàng | Bắt buộc |
| **F04** | Tìm kiếm và lọc dịch vụ theo tên, loại dịch vụ | Khách, Khách hàng | Bắt buộc |
| **F05** | Quản lý thông tin cá nhân và địa chỉ nhận/giao | Khách hàng | Bắt buộc |
| **F06** | Lựa chọn dịch vụ: nhập khối lượng/số lượng, chọn mùi hương | Khách hàng | Bắt buộc |
| **F07** | Đặt lịch nhận và giao trả theo khung giờ thiết lập sẵn | Khách hàng | Bắt buộc |
| **F08** | Tính và hiển thị chi phí dự kiến | Khách hàng, Hệ thống | Bắt buộc |
| **F09** | Tự động tính phí giao nhận theo quy tắc đã cấu hình | Hệ thống | Bắt buộc |
| **F10** | Nhập và áp dụng voucher (kiểm tra điều kiện, thời hạn) | Khách hàng, Hệ thống | Bắt buộc |
| **F11** | Xác nhận và tạo đơn hàng (mã đơn duy nhất, trạng thái ban đầu "Chờ xác nhận") | Khách hàng | Bắt buộc |
| **F12** | Thanh toán trực tuyến qua một cổng thanh toán, ghi nhận kết quả giao dịch | Khách hàng, Hệ thống | Bắt buộc |
| **F13** | Xem lịch sử đơn hàng, chi tiết, trạng thái; hủy đơn hợp lệ (chỉ khi đơn ở trạng thái "Chờ xác nhận") | Khách hàng | Bắt buộc |
| **F14** | Quản lý dịch vụ, bảng giá, mùi hương (thêm, sửa, ẩn) | Quản trị viên | Bắt buộc |
| **F15** | Quản lý voucher (tạo, sửa, vô hiệu hóa) | Quản trị viên | Bắt buộc |
| **F16** | Cấu hình quy tắc phí giao nhận (khu vực, mức phí, điều kiện miễn phí) | Quản trị viên | Bắt buộc |
| **F17** | Quản lý đơn hàng: xem danh sách, kiểm tra thanh toán, cập nhật trạng thái | Quản trị viên | Bắt buộc |
| **F18** | Dashboard thống kê cơ bản: số đơn, doanh thu, đơn theo trạng thái | Quản trị viên | Bắt buộc |
| **F19** | Quản lý tài khoản khách hàng (xem, khóa/mở khóa) | Quản trị viên | Tùy chọn (Làm sau core UI) |

*Nguồn: Nhóm tác giả tự tổng hợp.*

#### 3.2.2. Chức năng ngoài MVP (nâng cao, phát triển sau)

**Bảng 3.3. Các chức năng nâng cao ngoài phạm vi MVP**

| Mã | Chức năng | Người sử dụng | Mức độ ưu tiên | Lý do chưa đưa vào MVP |
|---|---|---|---|---|
| **F20** | Gói giặt ủi định kỳ, tự động gia hạn | Khách hàng | Nâng cao | Cần quản lý chu kỳ đặt hàng và thanh toán định kỳ |
| **F21** | Tích điểm khách hàng thân thiết | Khách hàng | Nâng cao | Cần cơ chế tích lũy, quy đổi và lịch sử điểm |
| **F22** | Đánh giá và nhận xét dịch vụ | Khách hàng | Nâng cao | Cần kiểm soát nội dung và điều kiện đánh giá |
| **F23** | Thông báo trạng thái đơn qua SMS/email | Hệ thống | Nâng cao | Cần dịch vụ gửi tin bên ngoài và chi phí |
| **F24** | Vai trò tài xế, phân công và định vị giao nhận theo thời gian thực | Tài xế, Quản trị viên | Nâng cao | Cần tích hợp bản đồ, định vị và quản lý lịch làm việc |
| **F25** | Kết nối nhiều tiệm giặt trong bán kính 5 km | Đối tác, Quản trị viên | Nâng cao | Cần tài khoản đối tác, phân chia đơn và quản lý năng lực xử lý |
| **F26** | Chatbot AI, gợi ý dịch vụ thông minh | Khách hàng | Nâng cao | Cần thêm dữ liệu và công nghệ ngoài quy trình đặt giặt cơ bản |
| **F27** | Ứng dụng di động riêng | Khách hàng | Nâng cao | Tăng khối lượng phát triển và kiểm thử trên nhiều nền tảng |

*Nguồn: Nhóm tác giả tự tổng hợp.*

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

Để triển khai dự án WASHUP trong thời gian 8 tuần, nhóm thống nhất lựa chọn các công nghệ phổ biến, dễ tiếp cận, hỗ trợ xây dựng website thương mại điện tử và thuận tiện cho quá trình phối hợp phát triển.

**Bảng 5. Các hạng mục công nghệ được nhóm thống nhất**

| Hạng mục | Công nghệ / Công cụ đã thống nhất | Mục đích sử dụng |
|---|---|---|
| **Frontend** | HTML5, CSS3, JavaScript, Bootstrap 5 | Xây dựng giao diện website, xử lý tương tác và thiết kế responsive trên máy tính, điện thoại. |
| **Backend** | PHP 8.4 | Xử lý đăng nhập, đặt dịch vụ, quản lý đơn hàng, tính phí, voucher và kết nối thanh toán. |
| **Cơ sở dữ liệu** | MySQL | Lưu trữ thông tin người dùng, dịch vụ, bảng giá, đơn hàng và lịch giao nhận. |
| **Môi trường phát triển** | XAMPP | Chạy thử website và cơ sở dữ liệu trên máy tính. |
| **Trình soạn thảo mã nguồn** | Visual Studio Code | Viết và chỉnh sửa mã nguồn dự án. |
| **Cổng thanh toán** | VNPay Sandbox | Tích hợp và kiểm thử giao dịch thanh toán trực tuyến trong môi trường thử nghiệm. |
| **Thiết kế giao diện** | Figma | Thiết kế bố cục và giao diện website trước khi lập trình. |
| **Quản lý mã nguồn và công việc** | GitHub, GitHub Issues | Lưu trữ mã nguồn, quản lý tài liệu, phân công và theo dõi tiến độ thực hiện. |

Nhóm lựa chọn **HTML5, CSS3, JavaScript kết hợp Bootstrap 5** để phát triển giao diện, giúp tận dụng các thành phần thiết kế có sẵn và giảm thời gian xây dựng website. **PHP và MySQL** được sử dụng để xử lý nghiệp vụ và lưu trữ dữ liệu. Các công cụ hỗ trợ được lựa chọn nhằm tạo điều kiện thuận lợi cho nhóm trong quá trình phát triển, kiểm thử và hoàn thiện dự án.


## 6. Kế hoạch thực hiện

Dự án WASHUP dự kiến được triển khai trong **8 tuần**, chia thành 6 giai đoạn chính theo định hướng phát triển ứng dụng thương mại điện tử của học phần.

**Bảng 6. Kế hoạch thực hiện**

| Giai đoạn | Nội dung thực hiện | Kết quả dự kiến |
|---|---|---|
| **Giai đoạn 1: Khảo sát và xác định yêu cầu** | Xác định vấn đề kinh doanh, khách hàng mục tiêu; khảo sát các website tương tự; phân tích yêu cầu bằng AI, phản biện và thống nhất phạm vi MVP. | Hoàn thiện tài liệu giới thiệu dự án, phân tích website, yêu cầu chức năng và quy trình nghiệp vụ. |
| **Giai đoạn 2: Thiết kế giao diện** | Xây dựng bố cục và thiết kế giao diện trang chủ, danh sách dịch vụ, chi tiết dịch vụ, đặt lịch, quản lý đơn hàng và trang quản trị bằng Figma. | Bộ thiết kế giao diện và cấu trúc điều hướng của WASHUP. |
| **Giai đoạn 3: Xây dựng các chức năng Frontend** | Sử dụng HTML5, CSS3, JavaScript và Bootstrap 5 để xây dựng giao diện, biểu mẫu đặt dịch vụ, tìm kiếm, lựa chọn dịch vụ và các tương tác cơ bản. | Giao diện website có thể thao tác và hiển thị phù hợp trên máy tính, điện thoại. |
| **Giai đoạn 4: Phát triển Backend và cơ sở dữ liệu** | Sử dụng PHP và MySQL để xây dựng chức năng tài khoản, quản lý dịch vụ, đặt lịch, lưu đơn hàng, tính phí giao nhận, voucher, thanh toán trực tuyến và dashboard quản trị. | Các chức năng nghiệp vụ và cơ sở dữ liệu được xây dựng, sẵn sàng tích hợp với giao diện. |
| **Giai đoạn 5: Tích hợp và kiểm thử** | Kết nối Frontend, Backend và cơ sở dữ liệu; kiểm tra quy trình đặt dịch vụ, tính chi phí, áp dụng voucher, thanh toán, phân quyền và cập nhật trạng thái đơn hàng. | Website hoạt động theo các quy trình chính, các lỗi được ghi nhận và xử lý. |
| **Giai đoạn 6: Triển khai và hoàn thiện** | Triển khai phiên bản thử nghiệm, hoàn thiện giao diện, kiểm tra các chức năng và bổ sung tài liệu hướng dẫn, báo cáo dự án. | Website WASHUP phiên bản MVP và bộ tài liệu phục vụ đánh giá cuối học phần. |

**Định hướng triển khai:** Nhóm ưu tiên hoàn thiện quy trình đặt dịch vụ giặt ủi trực tuyến từ lựa chọn dịch vụ, đặt lịch, tính chi phí, thanh toán đến theo dõi trạng thái đơn hàng. Các chức năng nâng cao ngoài phạm vi MVP sẽ được xem xét phát triển sau.

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
