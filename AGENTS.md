# Project Instructions for AI

## 1. Project Context

WASHUP là nền tảng trực tuyến đóng vai trò sàn trung gian kết nối Khách hàng (sinh viên, người đi làm) với Các tiệm giặt ủi đối tác tại khu vực thử nghiệm, do Nhóm 6 thực hiện. WASHUP không trực tiếp cung cấp dịch vụ giặt ủi. Các công việc giặt, sấy, hấp, là ủi đều do các tiệm giặt đối tác đảm nhận.

Hệ thống được thiết kế với 3 vai trò người dùng chính:

* **Khách hàng (Customer):** Tìm kiếm tiệm giặt và dịch vụ, xem bảng giá công khai, đặt lịch nhận/giao trả, áp dụng voucher, thanh toán trực tuyến và theo dõi trạng thái đơn hàng.
* **Tiệm giặt (Partner/Store):** Đăng tải và quản lý hồ sơ tiệm, danh mục dịch vụ, bảng giá, cấu hình mùi hương/yêu cầu riêng; tiếp nhận đơn hàng và cập nhật tiến trình xử lý.
* **Quản trị viên (Admin):** Quản lý/duyệt danh sách tiệm giặt đối tác, giám sát toàn bộ đơn hàng, quản lý voucher chung, cấu hình hệ thống và theo dõi thống kê vận hành của nền tảng.

Dự án có thời gian thực hiện khoảng 8 tuần, vì vậy nhóm ưu tiên các chức năng thiết yếu, dễ sử dụng, dễ kiểm thử và phù hợp với năng lực triển khai đồ án.

---

## 2. Scope & Boundaries

Chỉ phát triển các chức năng đã được nhóm thống nhất và ghi rõ trong REQUIREMENTS.md. Tuyệt đối không tự ý mở rộng phạm vi hoặc thêm tính năng lớn khi chưa có sự đồng ý của nhóm.

### Chức năng theo vai trò người dùng

#### Phía Khách hàng (Customer)
* Đăng ký, đăng nhập, quản lý hồ sơ cá nhân và danh sách địa chỉ nhận/giao.
* Tìm kiếm tiệm giặt theo tên, khu vực; xem chi tiết dịch vụ, tùy chọn và bảng giá của từng tiệm.
* Lọc dịch vụ theo loại (Giặt sấy, Giặt hấp, Là ủi...).
* Lựa chọn tiệm và dịch vụ, nhập số lượng/khối lượng, chọn tùy chọn mùi hương (nếu tiệm hỗ trợ).
* Đặt lịch hẹn nhận đồ và giao trả theo các khung giờ tiệm phục vụ.
* Xem chi phí dự kiến (Phí dịch vụ + Phí giao nhận), áp dụng mã giảm giá (voucher).
* Tạo đơn hàng với mã đơn duy nhất (Order ID); thanh toán trực tuyến qua cổng thanh toán thử nghiệm.
* Xem lịch sử đơn hàng, chi tiết đơn hàng, tiến trình xử lý và thực hiện hủy đơn theo quy định.

#### Phía Tiệm giặt đối tác (Partner/Store)
* Quản lý hồ sơ tiệm, thời gian hoạt động, danh mục dịch vụ, bảng giá và các loại mùi hương do tiệm cung cấp.
* Xem và xử lý danh sách đơn hàng thuộc tiệm mình; cập nhật tiến trình xử lý (Đã nhận -> Đang xử lý -> Đang giao -> Hoàn thành).
* **Phân quyền dữ liệu strict:** Chỉ được phép xem và thao tác trên dữ liệu/đơn hàng thuộc sở hữu của tiệm mình.

#### Phía Quản trị viên (Admin)
* Quản lý tiệm đối tác (tạo mới, duyệt đăng ký, khóa/mở khóa tài khoản tiệm) và quản lý danh mục dịch vụ dùng chung.
* Quản lý mã giảm giá (voucher) và quy tắc cấu hình phí giao nhận.
* Xem danh sách toàn bộ đơn hàng trên sàn và kiểm tra trạng thái thanh toán.
* Xem Dashboard thống kê tổng quan (doanh thu sàn, tổng số đơn hàng, số lượng tiệm giặt...) theo quy tắc đã thống nhất.
* Quản lý tài khoản khách hàng (ưu tiên thực hiện sau các chức năng cốt lõi nếu thiếu thời gian).

---

### Các vấn đề nghiệp vụ Mô hình Sàn (Bắt buộc hỏi nhóm xác nhận trước khi triển khai)

> **LƯU Ý:** AI không được tự ý đưa ra quyết định đối với các câu hỏi nghiệp vụ sau:

- [ ] Quy trình đăng ký tiệm: Tiệm giặt tự đăng ký công khai hay Admin tạo tài khoản thủ công? Bắt buộc duyệt qua các bước nào?
- [ ] Giới hạn đơn hàng: Một đơn hàng chỉ được chứa dịch vụ của 1 tiệm giặt hay cho phép đặt gộp dịch vụ từ nhiều tiệm giặt cùng lúc?
- [ ] Đơn vị vận chuyển: Tiệm giặt tự chịu trách nhiệm giao nhận hay WASHUP đứng ra điều phối? Phí giao nhận do ai đặt và ai thu?
- [ ] Dòng tiền & Hoa hồng: Cổng thanh toán chuyển tiền về đâu? WASHUP tính hoa hồng ra sao và cơ chế đối soát với tiệm giặt trong MVP như thế nào (hay chỉ mô tả trên tài liệu)?
- [ ] Quy mô Voucher: Voucher do WASHUP phát hành áp dụng toàn sàn hay tiệm giặt tự phát hành voucher riêng?
- [ ] Quy trình xử lý sự cố: Quy định hủy đơn và cơ chế xử lý khi tiệm giặt từ chối nhận đơn hoặc không phản hồi.

---

### Chức năng NẰM NGOÀI PHẠM VI MVP (Không triển khai)

* Gói dịch vụ giặt định kỳ hoặc tự động gia hạn.
* Tích điểm thành viên, hạng khách hàng thân thiết.
* Đánh giá, xếp hạng (Rating & Review) chi tiết cho từng tiệm giặt/dịch vụ.
* Gửi thông báo tự động qua SMS hoặc Email.
* App/Giao diện riêng cho Tài xế (Driver), điều phối tài xế và định vị vị trí giao nhận theo thời gian thực (GPS).
* Hệ thống chi trả tự động, chia tiền tự động (Split payment) hay đối soát phức tạp cho tiệm giặt.
* Chatbot AI, gợi ý dịch vụ thông minh hoặc ứng dụng di động native (iOS/Android).

> **CẢNH BÁO MÂU THUẪN:** Nếu phát hiện điểm chưa nhất quán giữa AGENTS.md và REQUIREMENTS.md (ví dụ: REQUIREMENTS.md cũ vẫn ghi mô hình 1 trung tâm giặt đơn lẻ), AI không được tự chọn 1 phương án. Hãy chỉ rõ điểm mâu thuẫn và yêu cầu nhóm xác nhận.

---

## 3. Coding Principles

1. **Đọc kỹ tài liệu hiện có:** Luôn đọc mã nguồn, cấu trúc CSDL và các tài liệu liên quan (REQUIREMENTS.md, AGENTS.md) trước khi đề xuất hoặc sửa đổi code.
2. **Tư duy Sàn trung gian (Multi-tenant data model):** Khi thiết kế cơ sở dữ liệu và viết logic xử lý, luôn gắn dữ liệu (Dịch vụ, Bảng giá, Mùi hương, Đơn hàng) với ID của một tiệm giặt cụ thể (`store_id`).
3. **Đơn giản & Dễ bảo trì:** Ưu tiên giải pháp rõ ràng, giữ code dễ đọc, phù hợp với trình độ đồ án sinh viên và quỹ thời gian 8 tuần.
4. **Tuân thủ chuẩn dự án:** Giữ nguyên stack công nghệ, kiến trúc thư mục và quy ước đặt tên mà dự án đang sử dụng.
5. **Sửa đổi nhỏ & Có thể kiểm thử:** Ưu tiên thực hiện các thay đổi nhỏ, tập trung đúng yêu cầu cụ thể và dễ kiểm tra độc lập.
6. **Tái sử dụng mã nguồn:** Tránh lặp lại logic không cần thiết (DRY principle).
7. **An toàn cho hệ thống:** Tuyệt đối không tự ý xóa, thay thế hoặc làm hỏng các chức năng đang hoạt động ổn định. Không đổi framework, ORM hay kiến trúc CSDL chính khi chưa có đồng ý của nhóm.
8. **Không tự chế quy tắc nghiệp vụ:** Không sử dụng dữ liệu mẫu (mock data) làm quy tắc nghiệp vụ chính thức.

---

## 4. Workflow

### Bước 1: Trước khi sửa mã nguồn
1. Đọc kỹ AGENTS.md, REQUIREMENTS.md và các tài liệu liên quan đến tính năng được yêu cầu.
2. Kiểm tra cấu trúc thư mục, code Backend/Frontend và Database hiện tại để nắm rõ luồng chạy.
3. Xác định rõ yêu cầu, danh sách file bị ảnh hưởng và các rủi ro có thể phát sinh.
4. **Đề xuất phương án thực hiện:** Với các thay đổi liên quan đến logic sàn (Khách - Tiệm - Admin), phân quyền, CSDL hay thanh toán, bắt buộc phải trình bày phương án và chờ nhóm xác nhận trước khi triển khai.

### Bước 2: Sau khi sửa mã nguồn
1. Giải thích ngắn gọn nội dung thay đổi và lý do thực hiện.
2. Liệt kê danh sách các file đã tạo mới hoặc chỉnh sửa.
3. Chạy các bài kiểm thử tự động (nếu có môi trường) hoặc viết hướng dẫn kiểm thử thủ công (manual test) chi tiết từng bước cho nhóm.
4. Hướng dẫn cách chạy tính năng mới.
5. Báo cáo minh bạch các lỗi còn tồn tại, giới hạn của tính năng và các phần chưa kiểm thử được.
6. **Tuyệt đối không khẳng định "chức năng đã chạy đúng"** nếu chưa có kết quả kiểm tra tương ứng.

---

## 5. Security Guidelines

| Hạng mục | Quy định chi tiết |
| :--- | :--- |
| **Bảo mật Secret** | Không lưu mật khẩu, API Key, Secret Token vào mã nguồn, tài liệu hay đẩy lên Git. Sử dụng biến môi trường (`.env`) để quản lý. |
| **Mật khẩu người dùng** | Không lưu trữ mật khẩu ở dạng văn bản thuần (plain text). Bắt buộc sử dụng các thuật toán băm an toàn (bcrypt, argon2...). |
| **Phân quyền Server-side** | • **Khách hàng:** Chỉ xem/thao tác trên đơn hàng của mình.<br>• **Tiệm giặt:** Chỉ xem/sửa dữ liệu thuộc `store_id` của tiệm mình, không xem được tiệm khác.<br>• **Admin:** Có quyền truy cập các API quản trị toàn hệ thống.<br>• *Bắt buộc kiểm tra quyền tại Backend API, không chỉ ẩn nút bấm ở Frontend.* |
| **Chống lỗ hổng** | Validate và Sanitize toàn bộ dữ liệu đầu vào. Sử dụng Parameterized Queries hoặc ORM để triệt tiêu nguy cơ SQL Injection và XSS. |
| **Bảo vệ dữ liệu** | Chỉ thu thập thông tin cần thiết. Thông tin cá nhân của khách (Tên, SĐT, Địa chỉ) chỉ hiển thị cho Tiệm giặt ở mức độ tối thiểu đủ để phục vụ việc giao nhận/xử lý đồ. |
| **Thanh toán an toàn** | Bắt buộc sử dụng môi trường Sandbox. Tuyệt đối không lưu trữ thông tin thẻ/ngân hàng trong DB. Không công nhận đơn hàng thành công qua Redirect URL; bắt buộc xác minh giao dịch qua Webhook / IPN hoặc API từ cổng thanh toán. |

---

## 6. Communication Rules

* **Chủ động hỏi:** Nếu yêu cầu chưa đủ rõ ràng hoặc tài liệu bị mâu thuẫn, hãy hỏi nhóm trước khi thực hiện.
* **Minh bạch mâu thuẫn:** Khi phát hiện điểm chưa thống nhất giữa AGENTS.md, REQUIREMENTS.md, hay README.md, nêu rõ vị trí mâu thuẫn và đề nghị nhóm chốt phương án; không tự tiện chọn một bên.
* **Tối ưu hóa nguồn lực:** Luôn đề xuất giải pháp đơn giản, an toàn, dễ kiểm thử và vừa sức với thời gian 8 tuần của đồ án.
* **Ngôn ngữ:** Giải thích bằng tiếng Việt tự nhiên, rõ ràng; tránh lạm dụng thuật ngữ kỹ thuật phức tạp không cần thiết.
* **Rõ ràng trạng thái:** Nêu rõ nội dung nào **đã hoàn thành**, nội dung nào **mới dừng ở mức đề xuất** và nội dung nào **chưa kiểm thử**.
* **Vai trò của AI:** AI là công cụ hỗ trợ phân tích, viết mã và tìm lỗi. Nhóm học viên chịu trách nhiệm xem xét, đánh giá và quyết định cuối cùng đối với mọi kết quả do AI tạo ra.

---

### Nguyên tắc chung
> Hỗ trợ nhóm xây dựng WASHUP, một sàn trung gian kết nối khách hàng với các tiệm giặt, đúng yêu cầu đã thống nhất, an toàn, dễ kiểm thử và phù hợp với thời gian đồ án; không tự ý mở rộng phạm vi hoặc quyết định thay nhóm.
