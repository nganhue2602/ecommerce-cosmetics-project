
# PROJECT PLAN

| Thông tin | Chi tiết |
|---|---|
| Tên dự án | WASHUP – Website đặt dịch vụ giặt ủi trực tuyến |
| Nhóm thực hiện | Nhóm 6 |
| Số thành viên | 8 |
| Thời gian thực hiện | 8 tuần |
---

## 1. Thành viên và vai trò

### 1.1. Danh sách thành viên và phân công

Nhóm WASHUP gồm 8 thành viên. Trong giai đoạn khởi tạo, công việc được phân chia dựa trên từng nội dung của bài tập nhằm bảo đảm mỗi nhiệm vụ có một người chịu trách nhiệm chính.

**Bảng 1.1. Phân công công việc của nhóm WASHUP**

| STT | Thành viên | Vai trò / Công việc phụ trách | Kết quả cần đạt |
|---|---|---|---|
| 1 | **Quỳnh Như** | Phân tích ý tưởng kinh doanh | Xác định đề tài, vấn đề kinh doanh, khách hàng mục tiêu và giải pháp của WASHUP. |
| 2 | **Hà My** | Xác định phạm vi dự án | Phân biệt các chức năng trong và ngoài phạm vi MVP. |
| 3 | **Anh Thư** | Phân tích website tham khảo và quy định AI | Khảo sát tối thiểu 3 website, lập bảng so sánh và xây dựng AGENTS.md. |
| 4 | **Thảo Nguyên** | Phân tích yêu cầu bằng AI | Tổng hợp yêu cầu chức năng, phi chức năng và đề xuất của AI thứ nhất. |
| 5 | **Kim Thư** | Phản biện yêu cầu bằng AI | Đánh giá độc lập các đề xuất, tổng hợp ý kiến phản biện và quyết định của nhóm. |
| 6 | **Thùy Duyên** | Phân tích người dùng và chức năng | Xác định vai trò, quyền hạn, danh sách chức năng và mức độ ưu tiên. |
| 7 | **Yến Trân** | Phân tích quy trình nghiệp vụ | Xây dựng quy trình đặt dịch vụ, quản trị đơn hàng và sơ đồ nghiệp vụ. |
| 8 | **Ngân Huệ** | Lập kế hoạch và quản lý GitHub | Tổng hợp kế hoạch, phân công công việc, tổ chức repository và GitHub Issues. |

*Nguồn: Bảng phân công công việc của Nhóm 6.*

### 1.2. Nguyên tắc phối hợp

- Mỗi công việc có một thành viên chịu trách nhiệm chính.
- Các thành viên phối hợp kiểm tra và hoàn thiện tài liệu.
- Thay đổi quan trọng về phạm vi và yêu cầu chức năng cần được nhóm thống nhất.
- Không giao toàn bộ công việc lập trình cho một thành viên hoặc công cụ AI.
- Mỗi thành viên có trách nhiệm giải thích phần việc mình thực hiện.
- Các nhiệm vụ phát triển Frontend, Backend, Database và kiểm thử sẽ được phân công sau khi nhóm đánh giá năng lực kỹ thuật.

---

## 2. Các giai đoạn thực hiện

### 2.1. Tổng quan kế hoạch

Dự án WASHUP được thực hiện trong 8 tuần và chia thành 6 giai đoạn theo định hướng phát triển ứng dụng thương mại điện tử của học phần.

**Bảng 2.1. Các giai đoạn phát triển WASHUP**

| Giai đoạn | Nội dung thực hiện | Kết quả dự kiến |
|---|---|---|
| **1. Khảo sát và xác định yêu cầu** | Xác định đề tài, khách hàng mục tiêu; khảo sát website tương tự; phân tích và phản biện yêu cầu; xác định phạm vi MVP. | Bộ tài liệu khởi tạo và yêu cầu dự án. |
| **2. Thiết kế giao diện** | Thiết kế trang chủ, danh mục dịch vụ, chi tiết dịch vụ, đặt lịch, quản lý đơn hàng và dashboard quản trị. | Bản thiết kế giao diện WASHUP trên Figma. |
| **3. Xây dựng Frontend** | Sử dụng HTML5, CSS3, JavaScript và Bootstrap 5 để xây dựng giao diện và tương tác người dùng. | Giao diện website có thể thao tác và hiển thị trên máy tính, điện thoại. |
| **4. Phát triển Backend và cơ sở dữ liệu** | Sử dụng PHP và MySQL để xây dựng tài khoản, dịch vụ, đặt lịch, tính phí, voucher, thanh toán và quản lý đơn hàng. | Các chức năng xử lý nghiệp vụ và cơ sở dữ liệu. |
| **5. Tích hợp và kiểm thử** | Kết nối giao diện với hệ thống xử lý; kiểm thử quy trình đặt dịch vụ, thanh toán, tính phí và phân quyền. | Website hoạt động theo các yêu cầu đã xác định; các lỗi được ghi nhận và xử lý. |
| **6. Triển khai và hoàn thiện** | Triển khai bản thử nghiệm, sửa lỗi, hoàn thiện giao diện và tài liệu báo cáo. | Website WASHUP phiên bản MVP và bộ tài liệu hoàn chỉnh. |

### 2.2. Tiến độ triển khai đề xuất

Bảng dưới đây là kế hoạch sơ bộ nhằm định hướng phát triển trong 8 tuần. Nhóm sẽ xác nhận và phân công nhân sự cụ thể trước khi triển khai.

**Bảng 2.2. Tiến độ dự kiến theo tuần**

| Thời gian | Công việc trọng tâm | Kết quả dự kiến |
|---|---|---|
| **Tuần 1** | Khảo sát, xác định yêu cầu và phạm vi dự án. | Bộ tài liệu khởi tạo. |
| **Tuần 2** | Thiết kế giao diện, cấu trúc website và cơ sở dữ liệu dự kiến. | Bản thiết kế giao diện và mô hình dữ liệu ban đầu. |
| **Tuần 3** | Xây dựng trang chủ, danh mục dịch vụ, trang chi tiết và giao diện đặt lịch. | Các giao diện chính. |
| **Tuần 4** | Hoàn thiện giao diện tương tác; bắt đầu phát triển tài khoản và quản lý dịch vụ. | Giao diện cơ bản và chức năng nền tảng. |
| **Tuần 5** | Phát triển đặt dịch vụ, tính chi phí, phí giao nhận, voucher và quản lý đơn hàng. | Các chức năng nghiệp vụ cốt lõi. |
| **Tuần 6** | Tích hợp thanh toán thử nghiệm, dashboard và hoàn thiện các chức năng quản trị. | Hệ thống nghiệp vụ được kết nối. |
| **Tuần 7** | Tích hợp toàn hệ thống, kiểm thử chức năng, dữ liệu, phân quyền và thanh toán. | Phiên bản thử nghiệm và danh sách lỗi đã xử lý. |
| **Tuần 8** | Sửa lỗi cuối, triển khai, hoàn thiện tài liệu và chuẩn bị báo cáo. | Website MVP và bộ tài liệu phục vụ đánh giá. |

*Ghi chú: Đây là kế hoạch đề xuất, chưa phải lịch triển khai chính thức được nhóm phê duyệt. Việc nghiên cứu cổng thanh toán nên bắt đầu từ giai đoạn đầu để kiểm tra tính khả thi.*

---

## 3. Kế hoạch công việc

### 3.1. Công việc giai đoạn khởi tạo

**Bảng 3.1. Phân công công việc khởi tạo dự án WASHUP**

| Mã | Công việc | Người phụ trách | Kết quả cần đạt | Thời hạn | Trạng thái theo bảng nhóm |
|---|---|---|---|---|---|
| **CV01** | Lựa chọn đề tài và xác định vấn đề kinh doanh | Quỳnh Như | Nội dung giới thiệu đề tài, khách hàng mục tiêu và giải pháp trong README.md, REQUIREMENTS.md. | 18/10/2026 | Đã hoàn thành |
| **CV02** | Xác định phạm vi dự án | Hà My | Danh sách chức năng trong và ngoài phạm vi MVP trong REQUIREMENTS.md. | 18/10/2026 | Đã hoàn thành |
| **CV03** | Phân tích tối thiểu 3 website tương tự | Anh Thư | docs/competitor-analysis.md, gồm URL, bảng so sánh và đề xuất cho WASHUP. | 19/10/2026 | Đã hoàn thành |
| **CV04** | Phân tích yêu cầu bằng AI | Thảo Nguyên | Kết quả phân tích yêu cầu và nội dung ghi nhận trong AI_USAGE_LOG.md. | 19/10/2026 | Đã hoàn thành |
| **CV05** | Phản biện yêu cầu bằng AI | Kim Thư | Bảng tổng hợp đề xuất, phản biện và quyết định của nhóm. | 19/10/2026 | Đã hoàn thành |
| **CV06** | Xác định vai trò người dùng và chức năng | Thùy Duyên | Bảng vai trò người dùng, chức năng, mức ưu tiên và tiêu chí nghiệm thu trong REQUIREMENTS.md. | 20/10/2026 | Đã hoàn thành |
| **CV07** | Mô tả quy trình nghiệp vụ | Yến Trân | docs/business-workflow.md, gồm quy trình và sơ đồ nghiệp vụ. | 20/10/2026 | Đã hoàn thành |
| **CV08** | Lập kế hoạch và phân công công việc | Ngân Huệ | PROJECT_PLAN.md, gồm thành viên, giai đoạn, công việc và rủi ro. | 20/10/2026 | Đã hoàn thành |
| **CV09** | Xây dựng quy định làm việc với AI | Anh Thư | AGENTS.md, gồm nguyên tắc sử dụng AI, bảo mật và quy trình phối hợp. | 21/10/2026 | Đã hoàn thành |
| **CV10** | Tổ chức GitHub dùng chung | Ngân Huệ | Repository Public, các tài liệu dự án và GitHub Issues. | 21/10/2026 | Đã hoàn thành |

*Nguồn: Bảng phân công nhóm.*

### 3.2. Công việc dự kiến trong giai đoạn phát triển

Các đầu việc dưới đây được đề xuất dựa trên phạm vi MVP. Nhóm chưa phân công người chịu trách nhiệm chính và chưa chốt ngày hoàn thành cụ thể.

**Bảng 3.2. Danh sách công việc phát triển dự kiến**

| Mã | Công việc | Kết quả cần đạt | Thời gian dự kiến | Người phụ trách | Trạng thái |
|---|---|---|---|---|---|
| **PT01** | Thiết kế giao diện website | Bản thiết kế các trang chính trên Figma. | Tuần 2 | Chưa phân công | Chưa bắt đầu |
| **PT02** | Xây dựng giao diện Frontend | Trang chủ, dịch vụ, chi tiết, đặt lịch và các trang tài khoản. | Tuần 3–4 | Chưa phân công | Chưa bắt đầu |
| **PT03** | Thiết kế cơ sở dữ liệu | Các bảng dữ liệu và mối quan hệ cần thiết cho hệ thống. | Tuần 2–4 | Chưa phân công | Chưa bắt đầu |
| **PT04** | Phát triển tài khoản và quản lý dịch vụ | Đăng nhập, phân quyền, quản lý thông tin dịch vụ và bảng giá. | Tuần 4–5 | Chưa phân công | Chưa bắt đầu |
| **PT05** | Phát triển quy trình đặt giặt | Lựa chọn dịch vụ, đặt lịch, tính chi phí và tạo đơn hàng. | Tuần 5 | Chưa phân công | Chưa bắt đầu |
| **PT06** | Phát triển voucher và phí giao nhận | Kiểm tra mã giảm giá và tự động tính phí theo cấu hình. | Tuần 5–6 | Chưa phân công | Chưa bắt đầu |
| **PT07** | Tích hợp cổng thanh toán | Thanh toán thử nghiệm và ghi nhận trạng thái giao dịch. | Nghiên cứu từ đầu dự án; tích hợp dự kiến tuần 6 | Chưa phân công | Chưa bắt đầu |
| **PT08** | Phát triển quản lý đơn hàng và dashboard | Cập nhật trạng thái, thống kê đơn hàng và doanh thu cơ bản. | Tuần 5–6 | Chưa phân công | Chưa bắt đầu |
| **PT09** | Tích hợp và kiểm thử | Kiểm tra quy trình nghiệp vụ, dữ liệu và phân quyền. | Tuần 7 | Chưa phân công | Chưa bắt đầu |
| **PT10** | Triển khai và hoàn thiện | Website thử nghiệm, tài liệu và báo cáo dự án. | Tuần 8 | Chưa phân công | Chưa bắt đầu |

Các công việc trên cần được nhóm xác nhận, phân công cho từng thành viên và cập nhật trên GitHub Issues trước khi triển khai.

### 3.3. Theo dõi tiến độ bằng GitHub Issues

Nhóm sử dụng GitHub Issues để quản lý và theo dõi công việc trong quá trình phát triển WASHUP.

Mỗi Issue cần có:

- **Tiêu đề:** Tên công việc cụ thể.
- **Mô tả:** Nội dung và yêu cầu thực hiện.
- **Người phụ trách:** Thành viên chịu trách nhiệm chính.
- **Kết quả cần đạt:** Tài liệu, chức năng hoặc sản phẩm đầu ra.
- **Thời hạn:** Ngày hoàn thành theo kế hoạch nhóm.
- **Tiêu chí hoàn thành:** Điều kiện để kiểm tra và nghiệm thu công việc.

Các trạng thái theo dõi gồm:

- **Chưa bắt đầu:** Công việc chưa được triển khai.
- **Đang thực hiện:** Thành viên đang xử lý.
- **Chờ kiểm tra:** Công việc đã được gửi để kiểm tra.
- **Hoàn thành:** Công việc đã được kiểm tra và chấp nhận.

Trạng thái trong PROJECT_PLAN.md cần được cập nhật nhất quán với tiến độ thực tế trên GitHub.

---

## 4. Rủi ro và phương án xử lý

### 4.1. Danh sách rủi ro

Dựa trên kết quả phân tích yêu cầu WASHUP, nhóm xác định các rủi ro chính liên quan đến thời gian, năng lực kỹ thuật, thanh toán, dữ liệu và quá trình phối hợp phát triển.

**Bảng 4.1. Rủi ro triển khai dự án WASHUP**

| STT | Rủi ro | Mức độ đánh giá sơ bộ | Phương án giảm thiểu |
|---|---|---|---|
| **1** | Khối lượng chức năng lớn so với 8 tuần | Cao | Xác định chức năng tối thiểu của từng module, phân chia công việc rõ ràng và ưu tiên các luồng nghiệp vụ cốt lõi. |
| **2** | Chưa xác định năng lực lập trình của nhóm | Cao | Đánh giá kỹ năng thành viên và thử nghiệm sớm các công nghệ quan trọng. |
| **3** | Khó khăn khi tích hợp cổng thanh toán | Cao | Chọn một cổng phù hợp, nghiên cứu tài liệu kỹ thuật, thử môi trường sandbox và xử lý các trường hợp giao dịch thất bại. |
| **4** | Tính sai chi phí dịch vụ, giao nhận và voucher | Cao | Thống nhất công thức tính, viết các trường hợp kiểm thử và đối chiếu tổng tiền trước/sau khi tạo đơn. |
| **5** | Trùng lặp hoặc sai trạng thái đơn hàng | Cao | Xây dựng quy tắc chuyển trạng thái hợp lệ, tách trạng thái thanh toán và kiểm tra dữ liệu phía hệ thống. |
| **6** | Rò rỉ thông tin khách hàng | Cao | Phân quyền truy cập, bảo vệ mật khẩu, kiểm tra đầu vào và không đưa dữ liệu bí mật lên repository công khai. |
| **7** | Giao diện và Backend phát triển không đồng bộ | Trung bình – Cao | Thống nhất cấu trúc dữ liệu, quy tắc API và kiểm thử tích hợp theo từng chức năng. |
| **8** | Thiếu thời gian kiểm thử và hoàn thiện | Cao | Kiểm thử xuyên suốt quá trình phát triển, không dồn toàn bộ việc kiểm thử vào tuần cuối. |

*Nguồn: Kết quả phân tích rủi ro tại Nhiệm vụ 3 của nhóm WASHUP.*

### 4.2. Định hướng quản lý rủi ro

Trong quá trình triển khai, nhóm ưu tiên kiểm soát các rủi ro có mức đánh giá cao, đặc biệt là tiến độ, thanh toán trực tuyến, độ chính xác của dữ liệu và bảo mật.

Khi phát sinh vấn đề ảnh hưởng đến yêu cầu hoặc tiến độ, thành viên phụ trách cần thông báo để nhóm thảo luận phương án xử lý.

Các thay đổi quan trọng về công nghệ, phạm vi chức năng và kế hoạch thực hiện cần được nhóm thống nhất trước khi cập nhật tài liệu.

---

## 5. Tài liệu liên quan

- [Giới thiệu dự án](README.md)
- [Yêu cầu dự án](REQUIREMENTS.md)
- [Quy định sử dụng AI](AGENTS.md)
- [Nhật ký sử dụng AI](AI_USAGE_LOG.md)
- [Phân tích website tương tự](docs/competitor-analysis.md)
- [Quy trình nghiệp vụ](docs/business-workflow.md)

Các tài liệu liên quan được tạo và cập nhật trong repository GitHub của nhóm WASHUP.
