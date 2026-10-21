 AI_USAGE_LOG.md
Dự án: WASHUP – Website đặt dịch vụ giặt ủi trực tuyến
Nhật ký này ghi lại việc sử dụng AI trong Nhiệm vụ 3 và Nhiệm vụ 4. Hãy kiểm tra và điều chỉnh tên công cụ, prompt và mô tả kết quả để khớp chính xác với quá trình nhóm đã thực hiện trước khi nộp.

1. Mục đích sử dụng AI
Nhóm sử dụng AI để hỗ trợ phân tích yêu cầu nghiệp vụ cho website WASHUP, xác định các yêu cầu chức năng và phi chức năng, đề xuất phạm vi MVP phù hợp với thời gian thực hiện 8 tuần, sau đó dùng một công cụ AI khác để phản biện độc lập các yêu cầu ban đầu. AI được sử dụng như công cụ hỗ trợ; nhóm chịu trách nhiệm kiểm tra và quyết định cuối cùng.
2. AI thứ nhất – Phân tích yêu cầu (Nhiệm vụ 3)
Trường	Nội dung
Công cụ	ChatGPT (OpenAI), theo tài liệu Nhiệm vụ 3
Mục đích	Phân tích nghiệp vụ và đề xuất yêu cầu cho WASHUP
Thông tin đầu vào	Đề tài WASHUP; dịch vụ giặt sấy, giặt hấp, là ủi; nhóm khách hàng mục tiêu; vấn đề kinh doanh; kết quả khảo sát HERAMO, Giặt Ơi! và 1997 Premium Laundry; phạm vi dự án 8 tuần và các chức năng MVP đã xác nhận
Prompt	Sử dụng prompt phân tích yêu cầu được lưu trong tài liệu Nhiệm vụ 3, mục 4.1.1
Kết quả chính	AI đề xuất mục tiêu và phạm vi dự án; nhóm người dùng và quyền hạn; 13 yêu cầu chức năng FR-01 đến FR-13; quy trình đặt dịch vụ, thanh toán và quản trị đơn hàng; các yêu cầu phi chức năng; chức năng MVP, chức năng mở rộng và rủi ro triển khai
Cách nhóm rà soát	Đối chiếu đề xuất với vấn đề kinh doanh, khảo sát ba website, phạm vi MVP đã xác nhận và giới hạn thời gian 8 tuần
Hạn chế cần lưu ý	Một số quy tắc chưa đủ chi tiết để lập trình, chẳng hạn cách tính giá, phí giao nhận, điều kiện voucher, khung giờ nhận/giao, xử lý thanh toán thất bại và định nghĩa chỉ số dashboard


3. AI thứ hai – Phản biện độc lập (Nhiệm vụ 4)
Trường	Nội dung
Công cụ	Cần ghi đúng tên công cụ AI thứ hai mà nhóm thực sự sử dụng. Tài liệu Nhiệm vụ 4 hiện ghi Gemini, nên cần xác nhận đây có đúng là công cụ khác với AI thứ nhất hay không
Mục đích	Phản biện độc lập danh sách yêu cầu do AI thứ nhất đề xuất
Thông tin đầu vào	Mô tả WASHUP; vấn đề kinh doanh và khách hàng mục tiêu; kết quả khảo sát ba website; danh sách FR-01 đến FR-13 từ Nhiệm vụ 3
Prompt	Sử dụng prompt phản biện được lưu trong tài liệu Nhiệm vụ 4, mục 5.2
Kết quả chính	AI phản biện yêu cầu về tính cần thiết, phạm vi, tính rõ ràng, nghiệp vụ còn thiếu, bảo mật và khả năng triển khai trong 8 tuần
Các điểm phản biện đáng chú ý	Làm rõ đơn vị tính và cách hiển thị giá; giới hạn khu vực/khung giờ giao nhận; thống nhất công thức tính phí; chống tạo đơn trùng; quy định trạng thái và điều kiện hủy đơn; thu hẹp voucher, tìm kiếm/lọc và dashboard; xác minh thanh toán ở phía máy chủ; không lưu số thẻ thanh toán
Cách nhóm xử lý	So sánh phản biện với phạm vi đã xác nhận, sau đó quyết định giữ, sửa đổi hoặc bổ sung từng yêu cầu; không mặc nhiên chấp nhận mọi đề xuất của AI


4. Tóm tắt quyết định của nhóm
Nội dung	Quyết định được ghi trong tài liệu Nhiệm vụ 4	Lý do
FR-01 – Quản lý tài khoản	Giữ và điều chỉnh thành hai vai trò: Khách hàng và Quản trị viên; cho phép khách vãng lai xem dịch vụ và giá	Giảm rào cản khi xem dịch vụ, đơn giản hóa phân quyền
FR-02 – Danh sách/chi tiết dịch vụ	Giữ, bổ sung đơn vị tính, giá áp dụng và thời gian xử lý	Làm rõ thông tin khách hàng cần biết
FR-03 – Lựa chọn dịch vụ	Giữ, làm rõ mùi hương được cấu hình sẵn, không tính phí; khối lượng nhập là ước tính	Tránh quy tắc tùy chọn không rõ ràng
FR-04 – Đặt lịch giao nhận	Giữ, giới hạn ở khu vực thử nghiệm và khung giờ cố định	Phù hợp nguồn lực và phạm vi MVP
FR-05 – Tính chi phí	Giữ, thống nhất công thức; tính lại phía máy chủ và ghi nhận chênh lệch nếu khối lượng thực tế khác dự kiến	Tăng tính chính xác và hạn chế sửa đổi dữ liệu phía trình duyệt
FR-06 – Tạo đơn hàng	Giữ, bổ sung kiểm tra dữ liệu và chống tạo đơn trùng	Hạn chế lỗi và đơn hàng trùng lặp
FR-07 – Theo dõi/quản lý đơn	Giữ, thống nhất trạng thái và chỉ cho Quản trị viên cập nhật; quy định điều kiện hủy	Làm rõ quy trình xử lý đơn hàng
FR-08 – Quản trị dịch vụ/bảng giá	Giữ ở mức cơ bản, không xây dựng lịch sử giá	Giảm độ phức tạp
FR-09 – Voucher	Giữ nhưng đơn giản hóa; triển khai sau chức năng đặt đơn cốt lõi, có thể chuyển sang phần mở rộng nếu trễ tiến độ	Vẫn thuộc phạm vi đã xác nhận nhưng cần kiểm soát khối lượng
FR-10 – Tìm kiếm/lọc	Giữ tìm theo tên và lọc theo loại; bỏ bộ lọc nâng cao	Đáp ứng nhu cầu cơ bản
FR-11 – Phí giao nhận	Giữ, dùng phí cố định theo khu vực cấu hình sẵn và tính trong công thức tổng chi phí	Dễ triển khai và kiểm thử
FR-12 – Thanh toán trực tuyến	Lên kế hoạch tích hợp một cổng ở môi trường sandbox, thử sớm; có phương án dự phòng mô phỏng	Giảm rủi ro tích hợp nhưng vẫn ưu tiên yêu cầu MVP
FR-13 – Dashboard	Giữ thống kê cơ bản: tổng đơn, đơn theo trạng thái và doanh thu đơn đã thanh toán	Tránh báo cáo nâng cao khó định nghĩa
Giỏ hàng	Không xây dựng giỏ hàng riêng; dùng biểu mẫu đặt trực tiếp	Giảm độ phức tạp của quy trình đặt
Bảo mật và phân quyền	Giữ và bổ sung kiểm tra quyền, tính tổng tiền phía máy chủ, băm mật khẩu và không lưu số thẻ	Bảo vệ dữ liệu và giao dịch


5. Đánh giá của con người và xác minh tiếp theo
Các đề xuất AI cần được nhóm kiểm tra trước khi chuyển thành yêu cầu lập trình chính thức. Theo tài liệu hiện có, các nội dung cần xác minh gồm:
- Quy tắc tính giá: đơn vị kg/món, xử lý khối lượng lẻ, mức phí tối thiểu và phụ phí.
- Phạm vi đơn hàng: một đơn có thể chứa một hay nhiều loại dịch vụ.
- Lịch giao nhận: khung giờ hợp lệ và thời gian xử lý tối thiểu.
- Phí giao nhận: khu vực phục vụ, phí một chiều/hai chiều và điều kiện miễn phí.
- Voucher: loại giảm giá, hạn dùng, đơn tối thiểu và thứ tự áp dụng giảm giá.
- Thanh toán: cổng thanh toán, môi trường thử nghiệm, giao dịch thất bại và hoàn tiền.
- Dashboard: định nghĩa doanh thu và các chỉ số thống kê.
- Nguồn lực kỹ thuật: năng lực thành viên, công nghệ và tính khả thi trong 8 tuần.
Những nội dung trên chưa nên được xem là đã xác minh nếu nhóm chưa thống nhất hoặc chưa kiểm thử.
6. Nhận xét và bài học rút ra
AI giúp nhóm tạo bản yêu cầu ban đầu nhanh hơn và chỉ ra những điểm còn thiếu hoặc chưa rõ. Tuy nhiên, kết quả AI có thể chứa giả định, chưa phản ánh đầy đủ năng lực thực tế của nhóm và không thay thế việc kiểm chứng bằng dữ liệu hoặc quyết định nghiệp vụ. Việc dùng AI thứ hai để phản biện giúp nhóm nhận diện rủi ro, thu hẹp một số chức năng và làm rõ quy tắc cần thiết. Quyết định cuối cùng vẫn thuộc về nhóm dựa trên vấn đề kinh doanh, phạm vi MVP và thời gian thực hiện.
7. Thông tin cần kiểm tra trước khi nộp
- [ ] Xác nhận tên AI thứ hai. Tài liệu Nhiệm vụ 4 hiện ghi ChatGPT giống Nhiệm vụ 3; nếu giảng viên yêu cầu một công cụ AI khác, phải sửa theo công cụ thực tế đã sử dụng.
- [ ] Đảm bảo prompt và kết quả mô tả trong log khớp với lịch sử sử dụng AI thực tế.
- [ ] Kiểm tra các quyết định trong log khớp với tài liệu Nhiệm vụ 4 và REQUIREMENTS.md.
- [ ] Không ghi rằng nhóm đã kiểm thử hoặc xác minh một nội dung nếu việc đó chưa thực hiện.
