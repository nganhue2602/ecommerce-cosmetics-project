# Project Instructions for AI

## 1. Project Context
WASHUP là dự án website thương mại điện tử theo mô hình sàn trung gian kết nối khách hàng với nhiều tiệm giặt ủi độc lập. Dự án do Nhóm 6 thực hiện trong khuôn khổ đồ án môn Phát triển ứng dụng TMĐT (quy mô 8 thành viên), với thời gian triển khai dự kiến khoảng 8 tuần.

WASHUP không trực tiếp cung cấp dịch vụ giặt ủi. Các tiệm giặt đối tác tự quản lý dịch vụ, bảng giá và quá trình xử lý đơn hàng của tiệm mình thông qua hệ thống.

Mục tiêu của dự án là giúp khách hàng tìm kiếm, so sánh dịch vụ từ nhiều tiệm giặt, đặt lịch nhận/giao trả đồ, chọn khung giờ, áp dụng voucher, thanh toán và theo dõi tiến trình xử lý đơn hàng cũng như kiểm tra tình trạng quần áo trước/sau khi giặt.

### Các vai trò người dùng (4 vai trò):
- **Guest (Khách chưa đăng nhập):** Xem trang chủ, danh sách tiệm, danh sách dịch vụ, bảng giá, chi tiết dịch vụ; tìm kiếm, lọc và so sánh các lựa chọn; đăng ký hoặc đăng nhập.
- **Customer (Khách hàng):** Quản lý hồ sơ và địa chỉ giao nhận; thêm dịch vụ vào giỏ hàng (hỗ trợ đa tiệm); đặt dịch vụ từ một hoặc nhiều tiệm; áp dụng voucher; lựa chọn phương thức thanh toán (COD hoặc VNPay Sandbox); xem lịch sử, trạng thái đơn hàng; hủy đơn theo điều kiện; xem thông tin ghi nhận tình trạng quần áo trước/sau khi giặt và gửi phản hồi phù hợp.
- **Seller/Shop Owner (Chủ tiệm giặt):** Đăng ký tiệm để Admin xét duyệt; quản lý hồ sơ tiệm, dịch vụ, giá, mô tả, thời gian xử lý và khu vực phục vụ; tiếp nhận và cập nhật trạng thái đơn hàng thuộc tiệm mình; ghi nhận tình trạng quần áo trước và sau khi giặt (cho phép đính kèm hình ảnh).
- **Admin (Quản trị viên):** Quản lý người dùng, tài khoản và phân quyền; xét duyệt, quản lý hoặc khóa tiệm giặt; quản lý danh mục dịch vụ, voucher và quy tắc chung; theo dõi toàn bộ đơn hàng và tình trạng thanh toán toàn hệ thống; xem dashboard thống kê cơ bản (số đơn hàng, doanh thu ghi nhận, tình trạng đơn).

Dự án ưu tiên các chức năng thiết yếu, dễ sử dụng, dễ kiểm thử và phù hợp với năng lực triển khai của nhóm trong 8 tuần.



## 2. Scope & Boundaries

### 2.1. Nguyên tắc về phạm vi
Chỉ triển khai các chức năng đã được nhóm thống nhất và ghi rõ trong REQUIREMENTS.md và README.md.
REQUIREMENTS.md và README.md là các tài liệu tham chiếu chính về yêu cầu chức năng, yêu cầu phi chức năng, phạm vi MVP, giới hạn và giả định của dự án. 

AI không được tự ý:
- Thêm chức năng mới chưa được nhóm thống nhất.
- Mở rộng phạm vi MVP chỉ vì cho rằng chức năng đó hữu ích.
- Thay đổi quy trình nghiệp vụ, cấu trúc dữ liệu hoặc kiến trúc chính khi chưa có sự đồng ý của nhóm.
- Tự quyết định các yêu cầu còn chưa rõ ràng hoặc chưa được chốt.
- Triển khai chức năng ngoài phạm vi chỉ dựa trên suy đoán từ tên dự án hoặc mô tả chung.

Nếu phát hiện tài liệu có nội dung mâu thuẫn, AI phải chỉ rõ phần mâu thuẫn, đề xuất phương án xử lý và chờ nhóm xác nhận trước khi thực hiện thay đổi có liên quan.



### 2.2. Các chức năng thuộc phạm vi MVP (Từ F01 đến F23)

#### A. Tài khoản và phân quyền (F01, F05, F20)
- Đăng ký, đăng nhập và đăng xuất theo từng vai trò (Customer, Seller, Admin).
- Quản lý hồ sơ cá nhân và danh sách địa chỉ nhận/giao quần áo của Customer.
- Quản lý tài khoản và phân quyền người dùng phía Admin.

#### B. Tìm kiếm, so sánh và quản lý dịch vụ (F02, F03, F04, F06, F07, F08, F19, F21)
- Hiển thị danh sách tiệm giặt, thông tin giới thiệu và hồ sơ tiệm.
- Hiển thị danh sách dịch vụ, mô tả, đơn vị tính, giá và thời gian xử lý dự kiến.
- Tìm kiếm, lọc và so sánh dịch vụ theo loại dịch vụ, giá, thời gian xử lý và thông tin tiệm.
- Cho phép tiệm giặt đăng ký tham gia sàn; Admin duyệt, từ chối hoặc khóa tiệm.
- Chủ tiệm quản lý hồ sơ tiệm, khu vực phục vụ, dịch vụ (thêm, sửa, ẩn dịch vụ, cập nhật bảng giá, thời gian xử lý).
- Admin quản lý danh mục dịch vụ chung, voucher và các quy tắc hệ thống.
- Phân biệt dữ liệu và dịch vụ thuộc từng tiệm bằng định danh phù hợp (store_id / shop_id).

#### C. Giỏ hàng, đặt hàng và thanh toán (F09, F10, F11, F12, F13, F14)
- Cho phép Customer thêm dịch vụ vào giỏ hàng từ một hoặc nhiều tiệm giặt.
- Khách hàng nhập thông tin đơn hàng, địa chỉ và lựa chọn khung giờ nhận/giao được thiết lập sẵn.
- Hệ thống tự động tính chi phí: tiền dịch vụ, phí giao nhận (có thể tính khoảng cách qua Google Maps API/Leaflet.js) và giảm giá.
- Nhập và áp dụng voucher giảm giá hợp lệ.
- **Tự động tách đơn hàng:** Khi đơn hàng có dịch vụ từ nhiều tiệm, hệ thống tạo 1 đơn hàng tổng (để khách theo dõi) và các đơn hàng thành phần riêng biệt tương ứng với từng tiệm.
- Hỗ trợ phương thức thanh toán: **Thanh toán khi nhận hàng (COD)** và **Thanh toán thử nghiệm trực tuyến (VNPay Sandbox)**.

#### D. Quản lý đơn hàng và theo dõi tiến trình (F15, F16, F22)
- Customer xem lịch sử, chi tiết, trạng thái đơn hàng và hủy đơn theo điều kiện quy định.
- Seller tiếp nhận và cập nhật trạng thái xử lý đối với các đơn hàng thuộc tiệm mình. Mỗi tiệm quản lý đơn hàng độc lập.
- Admin theo dõi toàn bộ đơn hàng trên hệ thống, kiểm tra thông tin thanh toán và giám sát trạng thái xử lý của các tiệm.

#### E. Ghi nhận tình trạng quần áo trước và sau khi giặt (F17, F18)
- Seller ghi nhận thông tin tình trạng quần áo trước khi giặt: số lượng, loại quần áo, các vấn đề có sẵn (vết bẩn, rách, phai màu) và cho phép đính kèm hình ảnh.
- Seller ghi nhận tình trạng quần áo sau khi giặt xong.
- Customer xem thông tin tình trạng quần áo (trước/sau khi giặt) và gửi phản hồi cơ bản nếu phát hiện vấn đề.
- *Lưu ý:* Tập trung lưu trữ và hiển thị thông tin, không tự ý xây dựng quy trình bồi thường, khiếu nại hay phân xử phức tạp.

#### F. Quản trị và Báo cáo (F22, F23)
- Admin quản lý toàn bộ người dùng, tiệm giặt, danh mục và voucher.
- Dashboard Admin hiển thị thống kê cơ bản: số lượng đơn hàng, doanh thu ghi nhận và tình trạng đơn hàng (sử dụng thư viện Chart.js).



### 2.3. Các chức năng NÂNG CAO - NẰM NGOÀI PHẠM VI MVP 
Các chức năng dưới đây (tương ứng từ F24 đến F34) tuyệt đối **KHÔNG** triển khai trong giai đoạn MVP, trừ khi nhóm chính thức cập nhật tài liệu và đồng ý mở rộng:

1. **F24:** Gói giặt ủi định kỳ, đăng ký thành viên hoặc tự động gia hạn.
2. **F25:** Tích điểm khách hàng thân thiết, hạng thành viên, điểm thưởng, giới thiệu bạn bè.
3. **F26:** Đánh giá, xếp hạng (Rating & Review) và nhận xét tiệm/dịch vụ sau khi hoàn thành đơn.
4. **F27:** Gửi thông báo tự động qua SMS, Email (PHPMailer) hoặc Push Notification.
5. **F28:** Quản lý ứng dụng/tài xế riêng, phân công giao nhận và theo dõi vị trí tài xế theo thời gian thực (GPS).
6. **F29:** Tích hợp trực tiếp API với các đơn vị vận chuyển bên ngoài (Ahamove, GHTK, GHN,...).
7. **F30:** AI nhận diện vết bẩn, AI ước tính khối lượng quần áo.
8. **F31:** Tạo và quét mã QR theo dõi quần áo qua từng công đoạn xử lý chi tiết.
9. **F32:** Định giá linh hoạt/động theo giờ cao điểm hoặc năng lực xử lý.
10. **F33:** Chatbot AI hỗ trợ tư vấn tự động.
11. **F34:** Phát triển ứng dụng di động Native (iOS / Android) riêng biệt.
12. Các cơ chế tự động chia tiền hoa hồng thực tế, đối soát tài chính phức tạp giữa sàn và tiệm.
13. Quy trình khiếu nại, bồi thường thiệt hại và phân xử tranh chấp tự động.

---

## 3. Coding Principles
1. **Tuân thủ yêu cầu đã thống nhất:** Đọc và thực hiện theo REQUIREMENTS.md và README.md; không tự ý thêm chức năng hoặc thay đổi quy tắc nghiệp vụ.
2. **Đọc và phân tích trước khi sửa:** Trước khi chỉnh sửa, cần xem các tài liệu liên quan, cấu trúc thư mục, mã nguồn hiện tại và cấu trúc cơ sở dữ liệu có liên quan.
3. **Giữ mã nguồn dễ đọc:** Ưu tiên cách viết rõ ràng, dễ hiểu, dễ bảo trì và phù hợp với trình độ đồ án sinh viên. Tránh làm phức tạp hệ thống khi không cần thiết.
4. **Tôn trọng kiến trúc hiện tại:** Giữ nguyên công nghệ (PHP 8.4, MySQL, HTML5, CSS3, JS, Bootstrap 5, AJAX, Cloudinary/Imgur, Google Maps API, Chart.js, VNPay Sandbox), framework, cấu trúc thư mục, cách tổ chức mã nguồn và quy ước đặt tên hiện có, trừ khi nhóm đồng ý thay đổi.
5. **Ưu tiên thay đổi nhỏ:** Chỉ chỉnh sửa những phần cần thiết để giải quyết yêu cầu cụ thể. Hạn chế thay đổi lan rộng và đảm bảo có thể kiểm tra kết quả.
6. **Không tự ý xóa chức năng đang hoạt động:** Trước khi thay thế hoặc xóa mã nguồn, phải xác định ảnh hưởng và được nhóm xác nhận nếu thay đổi có thể ảnh hưởng đến chức năng hiện có.
7. **Đảm bảo phân tách dữ liệu giữa các tiệm:** Các dịch vụ, bảng giá và đơn hàng phải được liên kết với đúng tiệm theo thiết kế dữ liệu thực tế (`store_id` / `shop_id`). Không để tiệm giặt xem hoặc chỉnh sửa dữ liệu thuộc tiệm khác.
8. **Tuân thủ phân quyền:** Mọi chức năng phải kiểm tra đúng vai trò và quyền sở hữu dữ liệu ở phía Backend, không chỉ ẩn giao diện ở Frontend.
9. **Tái sử dụng hợp lý:** Tránh lặp lại logic không cần thiết, nhưng không tạo cấu trúc quá phức tạp chỉ để áp dụng máy móc các nguyên tắc lập trình.
10. **Không tự tạo quy tắc nghiệp vụ:** Dữ liệu mẫu chỉ dùng để phục vụ minh họa và kiểm thử, không được mặc nhiên xem là quy tắc nghiệp vụ chính thức.
11. **Kiểm tra tính nhất quán:** Khi sửa một chức năng, cần xem xét ảnh hưởng đến các phần liên quan như giỏ hàng, đơn hàng tổng, đơn hàng theo tiệm, phí giao nhận, voucher và trạng thái thanh toán.
12. **Không tự ý thay đổi công nghệ hoặc kiến trúc lớn:** Việc đổi framework, thư viện cốt lõi, cấu trúc cơ sở dữ liệu hoặc phương thức thanh toán phải được đề xuất và chờ nhóm xác nhận.

---

## 4. Workflow

### 4.1. Trước khi sửa mã nguồn
AI phải thực hiện các bước sau:
1. Đọc AGENTS.md, REQUIREMENTS.md, README.md và các tài liệu liên quan đến chức năng được yêu cầu.
2. Kiểm tra cấu trúc thư mục, mã nguồn hiện tại và cơ sở dữ liệu liên quan nếu có thể truy cập.
3. Phân tích hiện trạng, xác định vấn đề cần giải quyết và phạm vi ảnh hưởng.
4. Xác định các file dự kiến chỉnh sửa, rủi ro và cách kiểm thử.
5. Đề xuất phương án thực hiện ngắn gọn, dễ hiểu.
6. Phải chờ nhóm xác nhận trước khi sửa mã nguồn theo quy trình được thống nhất.

Đối với những thay đổi ảnh hưởng đến phân quyền, dữ liệu giữa các tiệm, cấu trúc cơ sở dữ liệu, luồng đặt hàng nhiều tiệm hoặc thanh toán, cần trình bày rõ phương án và các tác động dự kiến trước khi triển khai.
Nếu yêu cầu chưa rõ hoặc tài liệu mâu thuẫn, phải hỏi lại nhóm thay vì tự chọn phương án.

### 4.2. Sau khi sửa mã nguồn
Sau khi được nhóm xác nhận và hoàn thành thay đổi, AI phải:
1. Giải thích ngắn gọn những nội dung đã thay đổi và lý do.
2. Liệt kê các file đã tạo mới hoặc chỉnh sửa.
3. Hướng dẫn cách chạy chức năng hoặc khởi động dự án khi cần thiết.
4. Nêu các bước kiểm thử cụ thể để nhóm có thể kiểm tra lại.
5. Chạy kiểm thử phù hợp nếu môi trường cho phép.
6. Báo cáo rõ kết quả kiểm thử, lỗi còn tồn tại và các giới hạn chưa xử lý.
7. Phân biệt rõ phần đã triển khai, phần mới đề xuất và phần chưa được kiểm thử.

Không được khẳng định chức năng đã hoạt động chính xác nếu chưa có kết quả kiểm tra tương ứng. Nếu không thể chạy thử, phải nêu rõ điều đó.



## 5. Security Guidelines

### 5.1. Bảo vệ thông tin bí mật
- Không đưa mật khẩu, API key, secret token hoặc thông tin đăng nhập vào mã nguồn.
- Không đưa thông tin bí mật vào tài liệu hoặc đẩy lên Git.
- Sử dụng tệp cấu hình môi trường `.env` và cung cấp `.env.example` với dữ liệu minh họa.

### 5.2. Bảo vệ mật khẩu
- Không lưu mật khẩu người dùng dưới dạng văn bản thuần (plain text).
- Sử dụng cơ chế băm mật khẩu an toàn (`password_hash` trong PHP).
- Không ghi mật khẩu hoặc thông tin xác thực nhạy cảm vào log.

### 5.3. Kiểm tra quyền truy cập
- **Guest:** Chỉ được truy cập các trang và dữ liệu công khai.
- **Customer:** Chỉ được xem và thao tác trên thông tin cá nhân, địa chỉ và đơn hàng của chính mình.
- **Seller/Shop Owner:** Chỉ được quản lý tiệm, dịch vụ và đơn hàng thuộc quyền sở hữu (`store_id`).
- **Admin:** Được thực hiện các chức năng quản trị toàn hệ thống.
- Việc kiểm tra quyền phải được thực hiện ở phía Server (Backend).

### 5.4. Kiểm tra dữ liệu đầu vào
- Kiểm tra và xác thực dữ liệu trước khi lưu hoặc xử lý (Validation).
- Sử dụng Prepared Statements (PDO / MySQLi) để chống SQL Injection.
- Mã hóa/xử lý đầu ra (`htmlspecialchars`) để phòng chống XSS.
- Không tin tưởng trực tiếp dữ liệu từ form, URL hoặc request.

### 5.5. Bảo vệ dữ liệu cá nhân
- Chỉ thu thập và hiển thị thông tin cần thiết.
- Chỉ hiển thị thông tin khách hàng cho tiệm giặt khi cần thiết để tiếp nhận đơn và giao nhận.
- Không đưa dữ liệu cá nhân thật vào mã nguồn, log hoặc tài liệu công khai.

### 5.6. An toàn thanh toán
- Tuân thủ quy trình tích hợp của VNPay Sandbox (môi trường thử nghiệm).
- Không lưu trực tiếp thông tin thẻ ngân hàng hoặc dữ liệu thanh toán nhạy cảm trong cơ sở dữ liệu.
- Phải thực hiện kiểm tra và xác minh giao dịch phía Server (Checksum / Hash validation) từ VNPay gửi về, không chỉ dựa vào chuyển hướng trình duyệt.
- Ghi rõ trạng thái và giới hạn của luồng thanh toán thử nghiệm/COD; không tuyên bố đã xử lý giao dịch tiền thật.

---

## 6. Communication Rules
1. **Sử dụng tiếng Việt rõ ràng:** Giải thích tự nhiên, dễ hiểu và phù hợp với sinh viên; chỉ sử dụng thuật ngữ kỹ thuật khi cần thiết.
2. **Hỏi lại khi chưa rõ:** Nếu yêu cầu thiếu thông tin quan trọng, có nhiều cách hiểu hoặc ảnh hưởng đến nghiệp vụ, phải hỏi nhóm trước khi triển khai.
3. **Thông báo mâu thuẫn:** Nếu AGENTS.md, README.md, REQUIREMENTS.md hoặc mã nguồn hiện tại không thống nhất, phải nêu rõ điểm mâu thuẫn và đề xuất cách xử lý để nhóm quyết định.
4. **Không tự quyết định thay nhóm:** AI phân tích ưu/nhược điểm và đề xuất, nhóm chịu trách nhiệm phê duyệt cuối cùng.
5. **Minh bạch tiến độ:** Phân biệt rõ nội dung đã hoàn thành, nội dung đang đề xuất và nội dung chưa được kiểm thử.
6. **Báo cáo đầy đủ:** Sau khi sửa mã nguồn, phải nêu file đã sửa, nội dung thay đổi, cách chạy, cách kiểm thử và các giới hạn còn tồn tại.
7. **Ưu tiên giải pháp vừa sức:** Đề xuất phương án đơn giản, an toàn, dễ bảo trì và phù hợp với thời gian thực hiện đồ án 8 tuần.
8. **Trách nhiệm của nhóm:** AI là công cụ hỗ trợ. Nhóm xem xét, kiểm tra và quyết định cuối cùng.

---

## 7. General Principle
Hỗ trợ Nhóm 6 xây dựng WASHUP thành một sàn trung gian kết nối khách hàng với nhiều tiệm giặt độc lập, tuân thủ các yêu cầu đã thống nhất, bảo đảm an toàn dữ liệu, giữ mã nguồn dễ đọc và dễ kiểm thử. AI phải đọc tài liệu, phân tích hiện trạng, đề xuất phương án và chờ nhóm phê duyệt trước khi thực hiện.

## 7. General Principle

> Hỗ trợ Nhóm 6 xây dựng WASHUP thành một sàn trung gian kết nối khách hàng với nhiều tiệm giặt độc lập, tuân thủ các yêu cầu đã thống nhất, bảo đảm an toàn dữ liệu, giữ mã nguồn dễ đọc và dễ kiểm thử. AI phải đọc tài liệu, phân tích hiện trạng, đề xuất phương án và chờ nhóm xác nhận trước khi sửa mã nguồn; không tự ý mở rộng phạm vi, thay đổi kiến trúc lớn hoặc quyết định thay nhóm.
