Project Instructions for AI
1. Project context

WASHUP là nền tảng trung gian trực tuyến kết nối khách hàng với các tiệm giặt ủi, do nhóm 6 thực hiện. WASHUP không trực tiếp giặt ủi. Việc giặt, sấy, hấp, là do các tiệm giặt đối tác thực hiện. WASHUP cung cấp nơi để:

Khách hàng tìm tiệm giặt và dịch vụ, xem bảng giá, đặt lịch nhận/giao trả, thanh toán trực tuyến và theo dõi đơn hàng.
Tiệm giặt (đối tác) đăng và quản lý dịch vụ, bảng giá của mình, nhận đơn và cập nhật tiến trình xử lý.
Quản trị viên WASHUP quản lý tiệm giặt đối tác, giám sát đơn hàng, thanh toán và vận hành chung của nền tảng.

Dịch vụ gồm giặt sấy, giặt hấp và là ủi. Dự án hướng đến sinh viên và người đi làm tại khu vực thử nghiệm. Thời gian thực hiện khoảng 8 tuần, nên nhóm ưu tiên các chức năng cần thiết, dễ dùng, dễ kiểm thử và vừa sức triển khai.

Ba vai trò chính: Khách hàng, Tiệm giặt, Quản trị viên.

2. Scope

Chỉ phát triển các chức năng đã được nhóm thống nhất và ghi trong REQUIREMENTS.md. Không tự ý mở rộng phạm vi hoặc thêm chức năng lớn khi chưa được nhóm đồng ý.

Chức năng dự kiến

Phía khách hàng

Đăng ký, đăng nhập, quản lý thông tin cá nhân và địa chỉ nhận/giao.
Xem danh sách tiệm giặt; xem dịch vụ, chi tiết và bảng giá của từng tiệm.
Tìm kiếm theo tên tiệm/dịch vụ và lọc theo loại dịch vụ.
Chọn tiệm và dịch vụ, nhập khối lượng hoặc số lượng, chọn mùi hương nếu tiệm hỗ trợ.
Đặt lịch nhận và giao trả theo các khung giờ đã thiết lập.
Xem chi phí dự kiến (phí dịch vụ + phí giao nhận), áp dụng voucher theo điều kiện đã cấu hình.
Tạo đơn hàng với mã đơn duy nhất; thanh toán trực tuyến qua một cổng thanh toán do nhóm lựa chọn.
Xem lịch sử, chi tiết và trạng thái đơn hàng; hủy đơn theo quy định.

Phía tiệm giặt

Quản lý hồ sơ tiệm, dịch vụ, bảng giá và mùi hương của tiệm mình.
Xem và xử lý các đơn thuộc tiệm mình; cập nhật tiến trình xử lý đơn.
Chỉ được truy cập dữ liệu của chính tiệm mình.

Phía quản trị viên

Quản lý tiệm đối tác (tạo, duyệt, khóa/mở) và danh mục dịch vụ chung.
Quản lý voucher và quy tắc phí giao nhận.
Xem toàn bộ đơn hàng, kiểm tra trạng thái thanh toán.
Xem dashboard với các thống kê cơ bản theo quy tắc nhóm đã thống nhất.
Quản lý tài khoản khách hàng: ưu tiên sau các chức năng cốt lõi nếu thời gian có hạn.

Nhóm cần phân biệt rõ chức năng bắt buộc và tùy chọn trong REQUIREMENTS.md.

Các điểm nghiệp vụ của mô hình sàn trung gian, cần nhóm xác nhận trước khi triển khai

AI không tự quyết định các nội dung sau:

Tiệm giặt tự đăng ký hay do quản trị viên tạo tài khoản? Có cần bước duyệt không?
Một đơn hàng chỉ gồm dịch vụ của một tiệm hay được nhiều tiệm?
Ai là bên nhận và giao đồ: tiệm giặt tự đảm nhận hay WASHUP tổ chức? Phí giao nhận do ai đặt và ai thu?
Tiền khách thanh toán đi về đâu, WASHUP có thu hoa hồng và đối soát với tiệm như thế nào, trong MVP hay chỉ mô tả?
Voucher do WASHUP hay do tiệm phát hành?
Quy định hủy đơn và xử lý khi tiệm từ chối hoặc không nhận đơn.
Chưa thuộc phạm vi MVP (trừ khi nhóm có quyết định mới)
Gói giặt định kỳ hoặc tự động gia hạn.
Tích điểm khách hàng thân thiết.
Đánh giá và nhận xét dịch vụ/tiệm giặt.
Thông báo tự động qua SMS hoặc email.
Vai trò tài xế, điều phối giao nhận và định vị thời gian thực.
Đối soát, chi trả tự động cho tiệm giặt và hệ thống hoa hồng phức tạp.
Chatbot AI, gợi ý dịch vụ thông minh hoặc ứng dụng di động riêng.

Nếu AGENTS.md và REQUIREMENTS.md có điểm chưa thống nhất (ví dụ REQUIREMENTS.md vẫn mô tả mô hình một trung tâm giặt), không tự chọn một phương án. Hãy chỉ ra nội dung mâu thuẫn và hỏi nhóm xác nhận.

3. Coding principles
Đọc mã nguồn và tài liệu hiện có trước khi đề xuất hoặc thay đổi.
Giữ mã dễ đọc, dễ bảo trì; ưu tiên giải pháp phù hợp với trình độ và thời gian của nhóm sinh viên.
Tuân theo công nghệ, cấu trúc thư mục và quy ước đặt tên mà dự án đang dùng.
Ưu tiên thay đổi nhỏ, tập trung vào yêu cầu cụ thể và có thể kiểm tra được.
Tái sử dụng mã phù hợp, tránh lặp logic không cần thiết.
Không tự ý đổi kiến trúc lớn, framework chính, cơ sở dữ liệu hoặc cấu trúc dự án.
Không tự ý xóa, thay thế hoặc làm hỏng chức năng đang hoạt động.
Không tự đặt quy tắc nghiệp vụ hoặc coi dữ liệu mẫu là thông tin chính thức của nhóm.
Không thay đổi giao diện hoặc quy trình nghiệp vụ theo ý riêng nếu làm sai lệch yêu cầu đã thống nhất.
Khi thiết kế dữ liệu và chức năng, luôn tính đến việc dữ liệu thuộc về từng tiệm (dịch vụ, bảng giá, đơn hàng gắn với tiệm cụ thể).
4. Workflow

Trước khi sửa mã nguồn

Đọc AGENTS.md, REQUIREMENTS.md và tài liệu liên quan đến chức năng được yêu cầu.
Kiểm tra cấu trúc và mã nguồn hiện tại để hiểu cách hệ thống đang chạy.
Xác định yêu cầu cần đáp ứng, các tệp bị ảnh hưởng và rủi ro.
Đề xuất phương án. Với thay đổi ảnh hưởng đến nghiệp vụ, kiến trúc, cơ sở dữ liệu, thanh toán hoặc phân quyền, chờ nhóm xác nhận trước khi triển khai.

Sau khi sửa mã nguồn

Giải thích thay đổi đã thực hiện và lý do.
Liệt kê các tệp đã tạo hoặc chỉnh sửa.
Chạy kiểm thử phù hợp nếu môi trường hỗ trợ; nếu chưa có kiểm thử tự động, hướng dẫn nhóm kiểm tra thủ công.
Hướng dẫn cách chạy hoặc kiểm thử chức năng.
Báo cáo rõ lỗi còn tồn tại, giới hạn và phần chưa được kiểm thử.

Không khẳng định chức năng đã đúng nếu chưa có kết quả kiểm tra tương ứng. Nếu không thể chạy thử, phải nói rõ.

5. Security
Không đưa mật khẩu, API key, token hoặc thông tin bí mật vào mã nguồn, tài liệu công khai hay Git; dùng biến môi trường hoặc cách quản lý cấu hình phù hợp.
Không lưu mật khẩu dạng văn bản thuần; dùng phương pháp băm phù hợp.
Kiểm tra quyền ở phía máy chủ, không chỉ ẩn nút trên giao diện. Cụ thể:
Khách hàng chỉ xem được đơn của chính mình.
Tiệm giặt chỉ xem và xử lý được dịch vụ, đơn hàng của chính tiệm đó, không truy cập được dữ liệu của tiệm khác.
Chức năng quản trị chỉ dành cho quản trị viên.
Kiểm tra dữ liệu đầu vào; dùng truy vấn tham số hóa hoặc ORM để hạn chế SQL Injection và XSS.
Chỉ thu thập dữ liệu cá nhân cần thiết cho quy trình đặt dịch vụ. Lưu ý thông tin khách hàng (tên, số điện thoại, địa chỉ) chỉ hiển thị cho tiệm ở mức cần thiết để xử lý đơn.
Không dùng dữ liệu cá nhân thật khi chưa được phép; ưu tiên dữ liệu mẫu khi phát triển và kiểm thử.
Không vô hiệu hóa xác thực, phân quyền hoặc kiểm tra bảo mật để chức năng chạy được.

Thanh toán: ưu tiên môi trường thử nghiệm (sandbox). Không lưu thông tin thẻ hoặc xác thực thanh toán nhạy cảm trong cơ sở dữ liệu của WASHUP. Không coi giao dịch là thành công chỉ vì người dùng được chuyển hướng về website; phải xác minh kết quả theo cơ chế của cổng thanh toán.

6. Communication
Nếu yêu cầu chưa rõ hoặc tài liệu mâu thuẫn, hỏi nhóm trước khi triển khai.
Khi phát hiện điểm chưa thống nhất giữa AGENTS.md, REQUIREMENTS.md, README.md hoặc tài liệu quy trình, nêu rõ mâu thuẫn và đề nghị nhóm xác nhận.
Nếu có nhiều phương án, ưu tiên cách đơn giản, an toàn, dễ kiểm thử, phù hợp thời gian đồ án.
Giải thích bằng tiếng Việt rõ ràng, tự nhiên; hạn chế thuật ngữ khó hiểu khi không cần thiết.
Nêu rõ phần đã hoàn thành, phần mới chỉ là đề xuất và phần chưa kiểm thử.
AI chỉ là công cụ hỗ trợ phân tích, viết mã, tìm lỗi và kiểm thử. Nhóm cần xem xét và xác nhận thay đổi trước khi dùng làm kết quả cuối cùng.

Nguyên tắc chung: Hỗ trợ nhóm xây dựng WASHUP, một sàn trung gian kết nối khách hàng với các tiệm giặt, đúng yêu cầu đã thống nhất, an toàn, dễ kiểm thử và phù hợp với thời gian đồ án; không tự ý mở rộng phạm vi hoặc quyết định thay nhóm.
