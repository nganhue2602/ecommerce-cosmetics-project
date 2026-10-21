# AI Usage Log – Dự án WASHUP

## 1. Mục đích sử dụng AI

Nhóm sử dụng công cụ AI để hỗ trợ phân tích và phản biện yêu cầu cho dự án WASHUP – Website đặt dịch vụ giặt ủi trực tuyến. AI đóng vai trò tham khảo; nhóm chịu trách nhiệm kiểm tra, lựa chọn và hoàn thiện các yêu cầu trước khi đưa vào tài liệu dự án.

## 2. Nhật ký sử dụng AI

| STT | Nhiệm vụ | Công cụ AI | Mục đích sử dụng | Đầu vào (Input) | Kết quả đầu ra (Output) | Cách nhóm xử lý |
|---|---|---|---|---|---|---|
| 1 | Nhiệm vụ 3 – Phân tích yêu cầu | ChatGPT (OpenAI) | Phân tích đề tài và đề xuất bộ yêu cầu cho website WASHUP | Mô tả dự án, khách hàng mục tiêu, kết quả khảo sát 3 website tham khảo và phạm vi thực hiện | Đề xuất các yêu cầu chức năng FR-01 đến FR-13, quy trình nghiệp vụ, yêu cầu phi chức năng, phạm vi MVP và các rủi ro cần lưu ý | Nhóm rà soát từng đề xuất, đối chiếu với mục tiêu dự án và thời gian thực hiện, sau đó chọn nội dung phù hợp |
| 2 | Nhiệm vụ 4 – Phản biện yêu cầu | Gemini (Google) | Đánh giá độc lập bộ yêu cầu do ChatGPT đề xuất, tìm điểm thiếu, chưa rõ, rủi ro và vấn đề về tính khả thi | Mô tả dự án WASHUP, khách hàng mục tiêu, kết quả khảo sát website tham khảo và bộ yêu cầu do ChatGPT đề xuất | Phản hồi phản biện về tính rõ ràng, tính khả thi, phạm vi chức năng, quy tắc nghiệp vụ và các rủi ro cần xem xét | Nhóm đối chiếu phản hồi của Gemini với đề xuất ban đầu, thảo luận các điểm khác biệt và quyết định giữ, điều chỉnh hoặc giới hạn các yêu cầu phù hợp |
| 3 | Tổng hợp sau phản biện | Nhóm thực hiện, tham khảo kết quả từ ChatGPT và Gemini | Hoàn thiện bộ yêu cầu sau khi phân tích và phản biện | Kết quả phân tích từ ChatGPT và phản hồi phản biện từ Gemini | Bộ yêu cầu được rà soát về phạm vi, quy tắc nghiệp vụ, mức độ ưu tiên và khả năng triển khai | Nhóm đưa ra quyết định cuối cùng và cập nhật tài liệu yêu cầu của dự án |

## 3. Prompt sử dụng

### 3.1. Nhiệm vụ 3 – ChatGPT

**Mục tiêu:** Phân tích đề tài WASHUP và đề xuất bộ yêu cầu cho website.

**Thông tin đầu vào chính:**
- Tên dự án: WASHUP – Website đặt dịch vụ giặt ủi trực tuyến.
- Dịch vụ dự kiến: giặt sấy, giặt hấp và các dịch vụ liên quan theo phạm vi nhóm xác định.
- Khách hàng mục tiêu: sinh viên, người đi làm và hộ gia đình.
- Website tham khảo: HERAMO, Giặt Ơi! và 1997 Premium Laundry.
- Thời gian thực hiện: 8 tuần; nhóm gồm 8 thành viên.

**Yêu cầu dành cho AI:** Phân tích bối cảnh dự án, đề xuất yêu cầu chức năng và phi chức năng, quy trình nghiệp vụ, phạm vi MVP và các rủi ro cần lưu ý.

*Lưu ý: Đối chiếu với prompt đầy đủ đã sử dụng trong tài liệu Nhiệm vụ 3 để bảo đảm ghi nhận chính xác.*

### 3.2. Nhiệm vụ 4 – Gemini

**Mục tiêu:** Yêu cầu Gemini phản biện độc lập bộ yêu cầu do ChatGPT đề xuất, tập trung vào các điểm chưa rõ, thiếu sót, mâu thuẫn và rủi ro triển khai.

**Thông tin đầu vào chính:**
- Mô tả đề tài và mục tiêu website WASHUP.
- Khách hàng mục tiêu và kết quả khảo sát 3 website tham khảo.
- Danh sách yêu cầu chức năng, yêu cầu phi chức năng và phạm vi MVP do ChatGPT đề xuất.

**Prompt phản biện:**

> Bạn là người phản biện độc lập cho một dự án website thương mại điện tử do nhóm sinh viên thực hiện trong một học phần.
>
> Hãy đánh giá bộ yêu cầu website WASHUP được cung cấp. Xác định các yêu cầu còn mơ hồ, thiếu quy tắc nghiệp vụ, trùng lặp, chưa nhất quán hoặc khó triển khai trong phạm vi thời gian và nguồn lực của nhóm.
>
> Với mỗi vấn đề, hãy nêu yêu cầu liên quan, giải thích rủi ro và đề xuất phương án điều chỉnh cụ thể. Phân biệt các chức năng thiết yếu của MVP với các chức năng có thể đơn giản hóa hoặc ưu tiên sau. Không tự ý bổ sung các chức năng không cần thiết và không mặc định rằng mọi đề xuất ban đầu đều đúng.
>
> Cuối cùng, hãy lập bảng tổng hợp các vấn đề, đề xuất phản biện và khuyến nghị để nhóm xem xét, quyết định.

*Lưu ý: Nếu prompt thực tế đã nhập vào Gemini khác nội dung trên, hãy thay bằng prompt thực tế để nhật ký phản ánh đúng quá trình làm bài.*

## 4. Các quyết định sau khi phản biện

| Mã / Nội dung | Quyết định của nhóm | Lý do |
|---|---|---|
| FR-01 – Tài khoản và phân quyền | Phân biệt quyền khách hàng và quản trị viên; khách chưa đăng nhập vẫn có thể xem dịch vụ | Làm rõ quyền truy cập |
| FR-02 – Thông tin dịch vụ | Làm rõ đơn vị tính, giá dịch vụ và thời gian xử lý | Hạn chế hiểu nhầm khi đặt dịch vụ |
| FR-03 – Tùy chọn hương thơm | Cho phép lựa chọn theo cấu hình; không thu thêm phí trong phạm vi hiện tại | Giữ quy tắc đơn giản |
| FR-04 – Giao nhận | Giới hạn khu vực và khung giờ giao nhận | Phù hợp phạm vi vận hành |
| FR-05 – Tính giá | Tính giá ở phía máy chủ và xác định cách xử lý khi khối lượng thực tế khác dự kiến | Hạn chế sai lệch giá |
| FR-06 – Tránh đơn trùng | Bổ sung cơ chế hạn chế tạo đơn trùng | Giảm nguy cơ phát sinh đơn ngoài ý muốn |
| FR-07 – Trạng thái đơn | Xác định trạng thái đơn hàng và quy tắc hủy đơn | Làm rõ quy trình xử lý đơn |
| FR-08 – Quản lý dịch vụ | Quản trị viên quản lý dịch vụ và giá cơ bản; chưa triển khai lịch sử giá | Giới hạn độ phức tạp |
| FR-09 – Voucher | Sử dụng quy tắc voucher đơn giản, ưu tiên sau các chức năng cốt lõi | Phù hợp phạm vi MVP |
| FR-10 – Tìm kiếm và lọc | Giữ chức năng tìm kiếm, lọc dịch vụ ở mức cơ bản | Đáp ứng nhu cầu tra cứu |
| FR-11 – Phí giao nhận | Áp dụng phí cố định theo khu vực được cấu hình | Đơn giản hóa quy tắc tính phí |
| FR-12 – Thanh toán | Tích hợp một cổng thanh toán ở môi trường thử nghiệm; chuẩn bị phương án mô phỏng nếu không thể tích hợp | Giảm rủi ro kỹ thuật |
| FR-13 – Dashboard | Xây dựng dashboard quản trị cơ bản | Tập trung vào thông tin thiết yếu |
| Giỏ hàng | Không xây dựng giỏ hàng riêng; sử dụng biểu mẫu đặt dịch vụ trực tiếp | Giảm độ phức tạp |
| Bảo mật | Kiểm tra dữ liệu phía máy chủ, băm mật khẩu và không lưu số thẻ thanh toán | Giảm rủi ro bảo mật |

## 5. Đánh giá việc sử dụng AI

| Tiêu chí | Đánh giá |
|---|---|
| Mức độ hữu ích | AI hỗ trợ hệ thống hóa yêu cầu và gợi ý các vấn đề cần làm rõ |
| Hạn chế | Kết quả AI có thể chưa phù hợp hoàn toàn với nguồn lực, thời gian hoặc khả năng kỹ thuật của nhóm |
| Cách kiểm tra | Đối chiếu với đề tài, kết quả khảo sát website tham khảo và phạm vi thực hiện |
| Vai trò của nhóm | Nhóm thảo luận, chọn lọc, điều chỉnh và chịu trách nhiệm về quyết định cuối cùng |
| Nội dung cần xác nhận | Quy tắc tính giá, khối lượng thực tế, khung giờ giao nhận, voucher, thanh toán và các chỉ số trên dashboard |

## 6. Kết luận

Nhóm sử dụng ChatGPT để hỗ trợ phân tích yêu cầu và Gemini để phản biện độc lập bộ yêu cầu ban đầu. Kết quả từ hai công cụ giúp nhóm có thêm góc nhìn về tính đầy đủ, tính rõ ràng và khả năng triển khai của website WASHUP. Tuy nhiên, các đề xuất của AI chỉ mang tính tham khảo; nhóm chịu trách nhiệm đánh giá, điều chỉnh và thống nhất bộ yêu cầu cuối cùng theo phạm vi dự án.

## 7. Checklist trước khi nộp

- [ ] Tên công cụ AI đúng với thực tế: ChatGPT và Gemini.
- [ ] Prompt và kết quả được ghi nhận đúng với quá trình sử dụng thực tế.
- [ ] Bộ yêu cầu trong nhật ký thống nhất với tài liệu yêu cầu chính thức.
- [ ] Nhóm đã xác nhận các quyết định sau phản biện.
- [ ] Đã bổ sung ảnh chụp màn hình hoặc liên kết minh chứng nếu giảng viên yêu cầu.
