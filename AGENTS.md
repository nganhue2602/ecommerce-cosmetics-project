# Project Instructions for AI

## 1. Project Context

WASHUP là dự án website thương mại điện tử theo mô hình **sàn trung gian kết nối khách hàng với nhiều tiệm giặt ủi độc lập**. Dự án do Nhóm 6 thực hiện trong khuôn khổ đồ án sinh viên, với thời gian triển khai dự kiến khoảng 8 tuần.

WASHUP không trực tiếp cung cấp dịch vụ giặt ủi. Các tiệm giặt đối tác tự quản lý dịch vụ, bảng giá và quá trình xử lý đơn hàng của tiệm mình thông qua hệ thống.

Mục tiêu của dự án là giúp khách hàng tìm kiếm, so sánh dịch vụ từ nhiều tiệm giặt, đặt lịch nhận và giao trả đồ, theo dõi đơn hàng và kiểm tra tình trạng quần áo trước/sau khi giặt.

### Các vai trò người dùng

- **Guest (Khách chưa đăng nhập):** Xem danh sách tiệm giặt, tìm kiếm dịch vụ và xem thông tin công khai.
- **Customer (Khách hàng):** Quản lý thông tin cá nhân, tìm kiếm và so sánh dịch vụ, đặt hàng từ một hoặc nhiều tiệm, thanh toán theo phương thức được hỗ trợ, theo dõi đơn hàng và đánh giá sau khi hoàn thành.
- **Seller/Shop Owner (Chủ tiệm giặt):** Quản lý thông tin tiệm, dịch vụ, giá cả, khu vực phục vụ, phí giao nhận và các đơn hàng thuộc tiệm mình; ghi nhận tình trạng quần áo trước và sau khi giặt.
- **Admin (Quản trị viên):** Quản lý tài khoản, xét duyệt và giám sát tiệm giặt, quản lý danh mục và voucher, theo dõi đơn hàng toàn hệ thống và xem thống kê cơ bản.

Dự án ưu tiên các chức năng thiết yếu, dễ sử dụng, dễ kiểm thử và phù hợp với năng lực triển khai của nhóm.

---

## 2. Scope & Boundaries

### 2.1. Nguyên tắc về phạm vi

Chỉ triển khai các chức năng đã được nhóm thống nhất và ghi rõ trong `REQUIREMENTS.md`.

`REQUIREMENTS.md` là tài liệu tham chiếu chính về yêu cầu chức năng, yêu cầu phi chức năng, phạm vi MVP, giới hạn và giả định của dự án. `README.md` được sử dụng để giới thiệu dự án và cần thống nhất với nội dung của `REQUIREMENTS.md`.

AI không được tự ý:

- Thêm chức năng mới chưa được nhóm thống nhất.
- Mở rộng phạm vi MVP chỉ vì cho rằng chức năng đó hữu ích.
- Thay đổi quy trình nghiệp vụ, cấu trúc dữ liệu hoặc kiến trúc chính khi chưa có sự đồng ý của nhóm.
- Tự quyết định các yêu cầu còn chưa rõ ràng hoặc chưa được chốt.
- Triển khai chức năng ngoài phạm vi chỉ dựa trên suy đoán từ tên dự án hoặc mô tả chung.

Nếu phát hiện tài liệu có nội dung mâu thuẫn, AI phải chỉ rõ phần mâu thuẫn, đề xuất phương án xử lý và chờ nhóm xác nhận trước khi thực hiện thay đổi có liên quan.

### 2.2. Các chức năng thuộc phạm vi MVP

#### A. Tài khoản và thông tin người dùng

- Đăng ký, đăng nhập và đăng xuất theo các vai trò được quy định.
- Quản lý thông tin cá nhân và địa chỉ nhận/giao của khách hàng.
- Phân quyền truy cập theo vai trò người dùng.
- Quản lý và xét duyệt tài khoản tiệm giặt theo quy định trong `REQUIREMENTS.md`.

#### B. Tìm kiếm và quản lý dịch vụ

- Hiển thị danh sách tiệm giặt và thông tin chi tiết của từng tiệm.
- Hiển thị danh sách dịch vụ, mô tả, giá và thời gian xử lý dự kiến.
- Tìm kiếm, lọc và so sánh dịch vụ giữa các tiệm theo những tiêu chí được thống nhất.
- Cho phép tiệm giặt quản lý hồ sơ, dịch vụ, bảng giá, khu vực phục vụ, phí giao nhận và khung giờ nhận/giao theo phạm vi đã quy định.
- Phân biệt dữ liệu và dịch vụ thuộc từng tiệm bằng định danh phù hợp, chẳng hạn `store_id` nếu cấu trúc cơ sở dữ liệu sử dụng trường này.

#### C. Giỏ hàng, đặt hàng và thanh toán

- Cho phép khách hàng thêm dịch vụ vào giỏ hàng.
- Hỗ trợ giỏ hàng có dịch vụ từ nhiều tiệm giặt.
- Khi khách hàng đặt hàng với nhiều tiệm, hệ thống tạo một đơn hàng tổng và các đơn hàng riêng tương ứng với từng tiệm.
- Mỗi tiệm chỉ quản lý và cập nhật đơn hàng thuộc tiệm mình.
- Tính chi phí dịch vụ, phí giao nhận và giảm giá theo quy tắc đã thống nhất.
- Hỗ trợ voucher trong phạm vi MVP.
- Hỗ trợ phương thức thanh toán COD và/hoặc luồng thanh toán mô phỏng/Sandbox theo phương án nhóm lựa chọn.
- Không mặc định rằng dự án phải tích hợp cổng thanh toán thật hoặc triển khai hệ thống chia tiền tự động.

#### D. Quản lý đơn hàng và theo dõi tiến trình

- Khách hàng xem lịch sử, chi tiết và trạng thái đơn hàng.
- Tiệm giặt tiếp nhận và cập nhật trạng thái các đơn hàng thuộc tiệm mình.
- Đơn hàng tổng và các đơn hàng riêng theo tiệm phải có mối liên hệ rõ ràng.
- Trạng thái của từng đơn hàng theo tiệm được quản lý độc lập theo quy tắc nghiệp vụ đã thống nhất.
- Hỗ trợ hủy đơn trong những trường hợp được cho phép theo `REQUIREMENTS.md`.

#### E. Ghi nhận tình trạng quần áo trước và sau khi giặt

- Tiệm giặt ghi nhận loại quần áo, số lượng và tình trạng ban đầu trước khi xử lý.
- Ghi nhận các vấn đề có sẵn như vết bẩn, rách hoặc phai màu khi phù hợp.
- Cho phép đính kèm hình ảnh tình trạng ban đầu nếu chức năng tải ảnh được triển khai trong phạm vi MVP.
- Khách hàng có thể xem thông tin tình trạng trước khi giặt và yêu cầu điều chỉnh thông tin trước khi quá trình xử lý bắt đầu, theo quy tắc đã thống nhất.
- Tiệm giặt ghi nhận tình trạng quần áo sau khi hoàn thành dịch vụ.
- Khách hàng có thể xem thông tin sau khi giặt và xác nhận hoặc gửi phản hồi cơ bản.
- Không tự ý mở rộng thành hệ thống bồi thường, khiếu nại hoặc phân xử phức tạp nếu chưa có trong yêu cầu.

#### F. Đánh giá và quản trị

- Khách hàng có thể đánh giá dịch vụ hoặc tiệm giặt sau khi đơn hàng hoàn thành, theo quy tắc trong `REQUIREMENTS.md`.
- Admin quản lý người dùng, tiệm giặt, danh mục dịch vụ và voucher trong phạm vi được quy định.
- Admin xem và giám sát đơn hàng trên toàn hệ thống.
- Admin xem dashboard thống kê cơ bản, chẳng hạn số đơn hàng, tình trạng đơn hàng, số lượng tiệm và các số liệu đã được nhóm xác định.

### 2.3. Các chức năng ngoài phạm vi MVP

Không triển khai các chức năng dưới đây, trừ khi nhóm chính thức cập nhật `REQUIREMENTS.md` và đồng ý mở rộng phạm vi:

- Gói dịch vụ giặt định kỳ hoặc tự động gia hạn.
- Tích điểm thành viên, hạng khách hàng thân thiết, chương trình giới thiệu bạn bè.
- Ứng dụng di động native riêng cho iOS/Android.
- Ứng dụng riêng cho tài xế hoặc hệ thống điều phối tài xế chuyên biệt.
- Theo dõi vị trí giao nhận theo thời gian thực bằng GPS hoặc bản đồ trực tiếp.
- Tích hợp các đơn vị vận chuyển bên ngoài nếu chưa được yêu cầu.
- Tự động chia tiền, đối soát phức tạp hoặc thanh toán hoa hồng thực tế giữa nền tảng và các tiệm.
- Chatbot AI, AI chẩn đoán vết bẩn hoặc tự động xác định khối lượng quần áo.
- Định giá động, quét QR ở từng công đoạn hoặc các quy trình tự động hóa nâng cao.
- Gửi thông báo SMS, email hoặc thông báo đẩy tự động nếu chưa có trong yêu cầu.
- Hệ thống marketing analytics nâng cao hoặc các công cụ phân tích bên ngoài chưa được thống nhất.
- Quy trình xử lý khiếu nại, bồi thường và tranh chấp phức tạp ngoài phạm vi đã chốt.

Các chức năng như tìm kiếm theo bán kính GPS, tối ưu tuyến giao nhận hoặc tích hợp cổng thanh toán thật không được tự ý bổ sung vào MVP. Nếu cần thiết, AI có thể đề xuất riêng để nhóm xem xét.

---

## 3. Coding Principles

1. **Tuân thủ yêu cầu đã thống nhất:** Đọc và thực hiện theo `REQUIREMENTS.md`; không tự ý thêm chức năng hoặc thay đổi quy tắc nghiệp vụ.

2. **Đọc và phân tích trước khi sửa:** Trước khi chỉnh sửa, cần xem các tài liệu liên quan, cấu trúc thư mục, mã nguồn hiện tại và cấu trúc cơ sở dữ liệu có liên quan.

3. **Giữ mã nguồn dễ đọc:** Ưu tiên cách viết rõ ràng, dễ hiểu, dễ bảo trì và phù hợp với trình độ đồ án sinh viên. Tránh làm phức tạp hệ thống khi không cần thiết.

4. **Tôn trọng kiến trúc hiện tại:** Giữ nguyên công nghệ, framework, cấu trúc thư mục, cách tổ chức mã nguồn và quy ước đặt tên hiện có, trừ khi nhóm đồng ý thay đổi.

5. **Ưu tiên thay đổi nhỏ:** Chỉ chỉnh sửa những phần cần thiết để giải quyết yêu cầu cụ thể. Hạn chế thay đổi lan rộng và đảm bảo có thể kiểm tra kết quả.

6. **Không tự ý xóa chức năng đang hoạt động:** Trước khi thay thế hoặc xóa mã nguồn, phải xác định ảnh hưởng và được nhóm xác nhận nếu thay đổi có thể ảnh hưởng đến chức năng hiện có.

7. **Đảm bảo phân tách dữ liệu giữa các tiệm:** Các dịch vụ, bảng giá và đơn hàng phải được liên kết với đúng tiệm theo thiết kế dữ liệu thực tế. Không để tiệm giặt xem hoặc chỉnh sửa dữ liệu thuộc tiệm khác.

8. **Tuân thủ phân quyền:** Mọi chức năng phải kiểm tra đúng vai trò và quyền sở hữu dữ liệu. Không chỉ ẩn nút hoặc giao diện ở Frontend mà bỏ qua kiểm tra quyền tại Backend.

9. **Tái sử dụng hợp lý:** Tránh lặp lại logic không cần thiết, nhưng không tạo cấu trúc quá phức tạp chỉ để áp dụng máy móc các nguyên tắc lập trình.

10. **Không tự tạo quy tắc nghiệp vụ:** Dữ liệu mẫu chỉ dùng để phục vụ minh họa và kiểm thử, không được mặc nhiên xem là quy tắc nghiệp vụ chính thức.

11. **Kiểm tra tính nhất quán:** Khi sửa một chức năng, cần xem xét ảnh hưởng đến các phần liên quan như giỏ hàng, đơn hàng tổng, đơn hàng theo tiệm, phí giao nhận, voucher và trạng thái thanh toán.

12. **Không tự ý thay đổi công nghệ hoặc kiến trúc lớn:** Việc đổi framework, thư viện cốt lõi, cấu trúc cơ sở dữ liệu hoặc phương thức thanh toán phải được đề xuất và chờ nhóm xác nhận.

---

## 4. Workflow

### 4.1. Trước khi sửa mã nguồn

AI phải thực hiện các bước sau:

1. Đọc `AGENTS.md`, `REQUIREMENTS.md`, `README.md` và các tài liệu liên quan đến chức năng được yêu cầu.
2. Kiểm tra cấu trúc thư mục, mã nguồn hiện tại và cơ sở dữ liệu liên quan nếu có thể truy cập.
3. Phân tích hiện trạng, xác định vấn đề cần giải quyết và phạm vi ảnh hưởng.
4. Xác định các file dự kiến chỉnh sửa, rủi ro và cách kiểm thử.
5. Đề xuất phương án thực hiện ngắn gọn, dễ hiểu.

**Phải chờ nhóm xác nhận trước khi sửa mã nguồn** theo quy trình được thống nhất trong đề bài của thầy.

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

---

## 5. Security Guidelines

### 5.1. Bảo vệ thông tin bí mật

- Không đưa mật khẩu, API key, secret token hoặc thông tin đăng nhập vào mã nguồn.
- Không đưa thông tin bí mật vào tài liệu hoặc đẩy lên Git.
- Nếu dự án cần biến môi trường, sử dụng tệp cấu hình phù hợp như `.env` và không đưa tệp chứa bí mật lên kho mã nguồn.
- Có thể cung cấp tệp mẫu như `.env.example`, nhưng chỉ sử dụng giá trị minh họa, không chứa thông tin bí mật thật.

### 5.2. Bảo vệ mật khẩu

- Không lưu mật khẩu người dùng dưới dạng văn bản thuần.
- Sử dụng cơ chế băm mật khẩu an toàn phù hợp với công nghệ thực tế của dự án.
- Không ghi mật khẩu hoặc thông tin xác thực nhạy cảm vào log.

### 5.3. Kiểm tra quyền truy cập

- **Guest:** Chỉ được truy cập các trang và dữ liệu công khai.
- **Customer:** Chỉ được xem và thao tác trên thông tin cá nhân, địa chỉ và đơn hàng của chính mình.
- **Seller/Shop Owner:** Chỉ được quản lý tiệm, dịch vụ và đơn hàng thuộc quyền sở hữu hoặc được phân công hợp lệ.
- **Admin:** Được thực hiện các chức năng quản trị theo quyền được thiết kế.

Việc kiểm tra quyền phải được thực hiện ở phía máy chủ đối với các thao tác cần bảo vệ. Không được chỉ dựa vào giao diện Frontend hoặc dữ liệu do trình duyệt gửi lên.

### 5.4. Kiểm tra dữ liệu đầu vào

- Kiểm tra và xác thực dữ liệu trước khi lưu hoặc xử lý.
- Sử dụng truy vấn có tham số hoặc cơ chế tương đương phù hợp với công nghệ hiện tại để hạn chế SQL Injection.
- Mã hóa hoặc xử lý đầu ra phù hợp để giảm nguy cơ XSS.
- Không tin tưởng trực tiếp dữ liệu từ biểu mẫu, URL, request hoặc trình duyệt.

### 5.5. Bảo vệ dữ liệu cá nhân

- Chỉ thu thập thông tin cần thiết cho chức năng của hệ thống.
- Chỉ hiển thị thông tin khách hàng cho tiệm giặt khi cần thiết để tiếp nhận đơn và thực hiện giao nhận.
- Không sử dụng dữ liệu cá nhân thật để minh họa hoặc kiểm thử khi chưa được cho phép.
- Không đưa dữ liệu cá nhân nhạy cảm vào mã nguồn, log hoặc tài liệu công khai.

### 5.6. An toàn thanh toán

- Nếu sử dụng cổng thanh toán thử nghiệm, phải tuân thủ cách tích hợp và xác minh giao dịch của cổng đó.
- Không lưu trực tiếp thông tin thẻ ngân hàng hoặc dữ liệu thanh toán nhạy cảm trong cơ sở dữ liệu.
- Không mặc nhiên xác nhận thanh toán thành công chỉ vì người dùng được chuyển hướng về website.
- Nếu tích hợp cổng thanh toán có cơ chế xác minh phía máy chủ, phải thực hiện xác minh theo tài liệu chính thức của cổng.
- Nếu chỉ triển khai COD hoặc thanh toán mô phỏng, phải ghi rõ trạng thái và giới hạn của luồng thanh toán; không tuyên bố đã xử lý giao dịch tiền thật.
- Không tự ý bổ sung thanh toán thật, chia tiền tự động hoặc cơ chế đối soát tài chính ngoài phạm vi MVP.

---

## 6. Communication Rules

1. **Sử dụng tiếng Việt rõ ràng:** Giải thích tự nhiên, dễ hiểu và phù hợp với sinh viên; chỉ sử dụng thuật ngữ kỹ thuật khi cần thiết.

2. **Hỏi lại khi chưa rõ:** Nếu yêu cầu thiếu thông tin quan trọng, có nhiều cách hiểu hoặc ảnh hưởng đến nghiệp vụ, phải hỏi nhóm trước khi triển khai.

3. **Thông báo mâu thuẫn:** Nếu `AGENTS.md`, `README.md`, `REQUIREMENTS.md` hoặc mã nguồn hiện tại không thống nhất, phải nêu rõ điểm mâu thuẫn và đề xuất cách xử lý để nhóm quyết định.

4. **Không tự quyết định thay nhóm:** AI có thể phân tích ưu, nhược điểm và đề xuất phương án, nhưng nhóm chịu trách nhiệm phê duyệt các thay đổi liên quan đến yêu cầu, nghiệp vụ và kiến trúc.

5. **Minh bạch tiến độ:** Phân biệt rõ nội dung đã hoàn thành, nội dung đang đề xuất và nội dung chưa được kiểm thử.

6. **Báo cáo đầy đủ:** Sau khi sửa mã nguồn, phải nêu file đã sửa, nội dung thay đổi, cách chạy, cách kiểm thử và các giới hạn còn tồn tại.

7. **Ưu tiên giải pháp vừa sức:** Đề xuất phương án đơn giản, an toàn, dễ bảo trì và phù hợp với thời gian thực hiện đồ án khoảng 8 tuần.

8. **Trách nhiệm của nhóm:** AI là công cụ hỗ trợ phân tích, viết mã và tìm lỗi. Nhóm phải xem xét, kiểm tra và quyết định cuối cùng đối với các kết quả do AI tạo ra.

---

## 7. General Principle

> Hỗ trợ Nhóm 6 xây dựng WASHUP thành một sàn trung gian kết nối khách hàng với nhiều tiệm giặt độc lập, tuân thủ các yêu cầu đã thống nhất, bảo đảm an toàn dữ liệu, giữ mã nguồn dễ đọc và dễ kiểm thử. AI phải đọc tài liệu, phân tích hiện trạng, đề xuất phương án và chờ nhóm xác nhận trước khi sửa mã nguồn; không tự ý mở rộng phạm vi, thay đổi kiến trúc lớn hoặc quyết định thay nhóm.
