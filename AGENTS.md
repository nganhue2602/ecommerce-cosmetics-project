# AGENTS.md – Hướng dẫn AI hỗ trợ dự án WASHUP

## 1. Project context – Thông tin dự án

WASHUP là website đặt dịch vụ giặt ủi trực tuyến do nhóm 6 thực hiện. Website cung cấp các dịch vụ như giặt sấy, giặt hấp và là ủi. Khách hàng có thể xem dịch vụ và bảng giá, chọn dịch vụ, nhập khối lượng hoặc số lượng quần áo, chọn mùi hương nếu có, đặt lịch nhận/giao trả, xem chi phí dự kiến, áp dụng voucher, thanh toán trực tuyến và theo dõi trạng thái đơn hàng.

Dự án hướng đến sinh viên và người đi làm tại khu vực thử nghiệm. Trong phiên bản đầu tiên, hệ thống mô phỏng hoạt động của một trung tâm giặt ủi; chưa triển khai điều phối tài xế hoặc theo dõi vị trí giao nhận theo thời gian thực. Vì thời gian thực hiện đồ án khoảng 8 tuần, nhóm ưu tiên những chức năng cần thiết, dễ sử dụng, dễ kiểm thử và phù hợp với khả năng triển khai.

## 2. Scope – Phạm vi triển khai

Chỉ phát triển các chức năng đã được nhóm thống nhất và ghi trong `REQUIREMENTS.md`. Không tự ý mở rộng phạm vi hoặc thêm chức năng lớn khi chưa được nhóm đồng ý.

Các chức năng dự kiến của WASHUP gồm:

- Quản lý tài khoản và phân quyền người dùng.
- Xem danh sách, chi tiết và bảng giá dịch vụ.
- Tìm kiếm dịch vụ theo tên và lọc theo loại dịch vụ.
- Quản lý thông tin cá nhân và địa chỉ nhận/giao.
- Chọn dịch vụ, nhập khối lượng hoặc số lượng và chọn mùi hương nếu được hỗ trợ.
- Đặt lịch nhận và giao trả theo các khung giờ đã thiết lập.
- Tính chi phí dự kiến, gồm phí dịch vụ và phí giao nhận.
- Kiểm tra và áp dụng voucher theo điều kiện đã cấu hình.
- Tạo đơn hàng với mã đơn duy nhất và lưu thông tin đơn.
- Thanh toán trực tuyến qua một cổng thanh toán do nhóm lựa chọn.
- Xem lịch sử, chi tiết và trạng thái đơn hàng; hủy đơn theo quy định.
- Quản trị dịch vụ, bảng giá, mùi hương, voucher và quy tắc phí giao nhận.
- Quản lý đơn hàng, kiểm tra trạng thái thanh toán và cập nhật tiến trình xử lý.
- Xem dashboard quản trị với các thống kê cơ bản theo quy tắc nhóm đã thống nhất.

Việc quản lý tài khoản khách hàng ở phía quản trị viên được ưu tiên sau các chức năng cốt lõi nếu thời gian có hạn. Nhóm cần phân biệt rõ chức năng bắt buộc và chức năng tùy chọn trong `REQUIREMENTS.md`.

Các chức năng chưa thuộc phạm vi MVP, trừ khi nhóm có quyết định mới, gồm:

- Gói giặt định kỳ hoặc tự động gia hạn.
- Tích điểm khách hàng thân thiết.
- Đánh giá và nhận xét dịch vụ.
- Thông báo tự động qua SMS hoặc email.
- Vai trò tài xế, điều phối giao nhận và định vị theo thời gian thực.
- Kết nối nhiều tiệm giặt hoặc xây dựng sàn dịch vụ nhiều đối tác.
- Chatbot AI, gợi ý dịch vụ thông minh hoặc ứng dụng di động riêng.

Nếu `AGENTS.md` và `REQUIREMENTS.md` có điểm chưa thống nhất, không tự chọn một phương án để triển khai. Hãy chỉ ra nội dung mâu thuẫn và hỏi nhóm xác nhận.

## 3. Coding principles – Nguyên tắc lập trình

- Đọc mã nguồn và tài liệu hiện có trước khi đề xuất hoặc thực hiện thay đổi.
- Giữ mã nguồn dễ đọc, dễ hiểu và dễ bảo trì; ưu tiên giải pháp phù hợp với trình độ và thời gian của nhóm sinh viên.
- Tuân theo công nghệ, cấu trúc thư mục và quy ước đặt tên mà dự án đang sử dụng.
- Ưu tiên thay đổi nhỏ, tập trung vào yêu cầu cụ thể và có thể kiểm tra được.
- Tái sử dụng mã nguồn phù hợp, tránh lặp lại logic không cần thiết.
- Không tự ý thay đổi kiến trúc lớn, framework chính, cơ sở dữ liệu hoặc cấu trúc dự án khi chưa được nhóm đồng ý.
- Không tự ý xóa, thay thế hoặc làm hỏng chức năng đang hoạt động.
- Không tự đặt ra quy tắc nghiệp vụ hoặc coi dữ liệu mẫu là thông tin chính thức của nhóm.
- Không thay đổi giao diện hoặc quy trình nghiệp vụ theo ý riêng nếu điều đó làm sai lệch yêu cầu đã thống nhất.

## 4. Workflow – Quy trình làm việc

### Trước khi sửa mã nguồn

1. Đọc `AGENTS.md`, `REQUIREMENTS.md` và các tài liệu liên quan đến chức năng được yêu cầu.
2. Kiểm tra cấu trúc dự án và mã nguồn hiện tại để hiểu cách hệ thống đang hoạt động.
3. Xác định yêu cầu cần đáp ứng, các tệp có thể bị ảnh hưởng và rủi ro phát sinh.
4. Đề xuất phương án thực hiện. Với thay đổi ảnh hưởng đến nghiệp vụ, kiến trúc, cơ sở dữ liệu, thanh toán hoặc phân quyền, cần chờ nhóm xác nhận trước khi triển khai.

### Sau khi sửa mã nguồn

1. Giải thích những thay đổi đã thực hiện và lý do thay đổi.
2. Liệt kê các tệp đã tạo hoặc chỉnh sửa.
3. Chạy kiểm thử phù hợp nếu môi trường hỗ trợ; nếu chưa có kiểm thử tự động, hướng dẫn nhóm kiểm tra thủ công.
4. Hướng dẫn cách chạy hoặc kiểm thử chức năng.
5. Báo cáo rõ lỗi còn tồn tại, giới hạn và những phần chưa được kiểm thử.

Không khẳng định chức năng đã hoạt động đúng nếu chưa có kết quả kiểm tra tương ứng. Nếu không thể chạy thử trong môi trường hiện tại, cần nói rõ điều đó.

## 5. Security – Bảo mật và quyền riêng tư

- Không đưa mật khẩu, API key, token hoặc thông tin bí mật vào mã nguồn, tài liệu công khai hay Git.
- Sử dụng biến môi trường hoặc cách quản lý cấu hình phù hợp để lưu thông tin bí mật.
- Không lưu mật khẩu người dùng dưới dạng văn bản thuần; cần dùng phương pháp băm mật khẩu phù hợp.
- Kiểm tra quyền truy cập ở phía máy chủ đối với chức năng quản trị và dữ liệu đơn hàng; không chỉ ẩn nút trên giao diện.
- Kiểm tra dữ liệu đầu vào và sử dụng truy vấn tham số hóa hoặc ORM phù hợp để hạn chế các rủi ro như SQL Injection và Cross-Site Scripting (XSS).
- Chỉ thu thập và sử dụng dữ liệu cá nhân cần thiết cho quy trình đặt dịch vụ.
- Không sử dụng dữ liệu cá nhân thật khi chưa được phép; ưu tiên dữ liệu mẫu trong quá trình phát triển và kiểm thử.
- Không tự ý vô hiệu hóa xác thực, phân quyền hoặc các bước kiểm tra bảo mật để làm cho chức năng chạy được.

Với chức năng thanh toán, ưu tiên dùng môi trường thử nghiệm (sandbox) trong quá trình phát triển. Không lưu thông tin thẻ hoặc thông tin xác thực thanh toán nhạy cảm trong cơ sở dữ liệu của WASHUP. Không coi giao dịch là thành công chỉ vì người dùng được chuyển hướng trở lại website; cần xác minh kết quả theo cơ chế của cổng thanh toán.

## 6. Communication – Trao đổi và làm rõ yêu cầu

- Nếu yêu cầu chưa rõ hoặc các tài liệu có nội dung mâu thuẫn, hãy hỏi nhóm trước khi triển khai.
- Khi phát hiện điểm chưa thống nhất giữa `AGENTS.md`, `REQUIREMENTS.md`, `README.md` hoặc tài liệu quy trình, hãy nêu rõ điểm mâu thuẫn và đề nghị nhóm xác nhận; không tự quyết định thay nhóm.
- Nếu có nhiều phương án, ưu tiên cách làm đơn giản, an toàn, dễ kiểm thử và phù hợp với thời gian thực hiện đồ án.
- Giải thích bằng tiếng Việt rõ ràng, tự nhiên; hạn chế thuật ngữ khó hiểu khi không cần thiết.
- Nêu rõ những phần đã hoàn thành, phần mới chỉ là đề xuất và phần chưa được kiểm thử.
- AI chỉ là công cụ hỗ trợ phân tích, viết mã, tìm lỗi và kiểm thử. Nhóm cần xem xét và xác nhận các thay đổi trước khi sử dụng làm kết quả cuối cùng.

**Nguyên tắc chung:** Hỗ trợ nhóm xây dựng WASHUP đúng yêu cầu đã thống nhất, an toàn, dễ kiểm thử và phù hợp với thời gian của đồ án; không tự ý mở rộng phạm vi hoặc đưa ra quyết định thay nhóm.
