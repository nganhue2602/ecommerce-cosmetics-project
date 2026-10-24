# PROJECT PLAN – WASHUP

| Thông tin | Chi tiết |
|---|---|
| Tên dự án | WASHUP - Nền tảng thương mại điện tử kết nối khách hàng và các tiệm giặt ủi|
| Nhóm thực hiện | Nhóm 6 |
| Số thành viên | 8 |
| Thời gian thực hiện | 8 tuần |
| Mô hình hoạt động | Nền tảng trung gian kết nối nhiều tiệm giặt với khách hàng |
| Công cụ quản lý | GitHub và GitHub Issues |

WASHUP được phát triển theo mô hình sàn thương mại điện tử dịch vụ, đóng vai trò trung gian kết nối khách hàng với các tiệm giặt.

Khách hàng tìm kiếm, so sánh và đặt dịch vụ từ các tiệm trên nền tảng. Mỗi tiệm quản lý gian hàng, dịch vụ, bảng giá, lịch phục vụ và các đơn hàng thuộc tiệm mình. Quản trị viên WASHUP xét duyệt gian hàng, giám sát hoạt động toàn nền tảng và hỗ trợ xử lý các vấn đề phát sinh.

Kế hoạch phát triển bao quát ba nhóm người dùng có tài khoản: khách hàng, chủ tiệm giặt và quản trị viên. Khách chưa đăng nhập có thể tìm hiểu các thông tin công khai theo quy định của hệ thống.

WASHUP không được xây dựng theo mô hình website của một tiệm giặt duy nhất. Việc sử dụng dữ liệu mẫu hoặc mô phỏng một số hoạt động trong đồ án không làm thay đổi mô hình nền tảng nhiều tiệm.


---

## 1. Thành viên và vai trò

### 1.1. Thành viên và cơ cấu vai trò toàn đồ án

Nhóm WASHUP gồm 8 thành viên, được tổ chức theo các vai trò quản lý dự án, phân tích nghiệp vụ, thiết kế giao diện, phát triển Frontend, Backend, cơ sở dữ liệu và kiểm thử/tích hợp.

Việc phân công được áp dụng xuyên suốt quá trình phát triển nền tảng kết nối khách hàng với các tiệm giặt. Mỗi thành viên có một vai trò chính, sản phẩm đầu ra cụ thể và trách nhiệm phối hợp với các thành viên liên quan.

Phân công các nhiệm vụ khởi tạo trong Chương 1 được trình bày riêng tại mục 3.1.

**Bảng 1.1. Cơ cấu vai trò đề xuất cho toàn đồ án WASHUP**

| Vai trò | Trách nhiệm chính | Sản phẩm hoặc kết quả phụ trách | Người phụ trách |
|---|---|---|---|
| **Quản lý dự án / Trưởng nhóm** | Điều phối công việc, theo dõi tiến độ, quản lý GitHub Issues và tổng hợp các vấn đề cần nhóm quyết định. | Kế hoạch dự án, bảng phân công, cập nhật tiến độ và danh sách vấn đề cần xử lý. | Ngân Huệ |
| **Phân tích nghiệp vụ (BA)** | Làm rõ nhu cầu khách hàng và tiệm giặt; xác định phạm vi, quyền hạn, quy trình và tiêu chí nghiệm thu. | REQUIREMENTS.md, quy tắc nghiệp vụ và nội dung điều chỉnh yêu cầu. | Chưa phân công |
| **Thiết kế giao diện (UI/UX)** | Thiết kế bố cục và luồng thao tác cho khách hàng, chủ tiệm và quản trị viên. | Thiết kế giao diện, điều hướng và tài nguyên giao diện. | Chưa phân công |
| **Phát triển Frontend** | Xây dựng giao diện bằng HTML5, CSS3, JavaScript và Bootstrap 5; phối hợp kết nối với Backend. | Các trang khách hàng, khu vực chủ tiệm và trang quản trị nền tảng. | Chưa phân công |
| **Phát triển Backend** | Xây dựng xử lý tài khoản, phân quyền, gian hàng, dịch vụ, đặt đơn, tính phí và thanh toán theo phạm vi đã chốt. | Các chức năng xử lý nghiệp vụ và kiểm tra quyền truy cập. | Chưa phân công |
| **Thiết kế và quản lý cơ sở dữ liệu** | Thiết kế dữ liệu liên kết khách hàng, chủ tiệm, gian hàng, dịch vụ, đơn hàng và giao dịch; phối hợp với Backend. | Mô hình dữ liệu, cấu trúc cơ sở dữ liệu và dữ liệu thử nghiệm. | Chưa phân công |
| **Kiểm thử (QA/Tester)** | Xây dựng trường hợp kiểm thử, kiểm tra chức năng và phân quyền giữa các tiệm; ghi nhận và kiểm tra lại lỗi. | Kế hoạch kiểm thử, kết quả kiểm tra và danh sách lỗi. | Chưa phân công |
| **Tích hợp và tài liệu** | Phối hợp kết nối các phần của hệ thống, kiểm tra luồng hoạt động và cập nhật tài liệu hướng dẫn. | Phiên bản tích hợp, tài liệu sử dụng theo vai trò và nội dung hỗ trợ báo cáo. | Chưa phân công |

Phân công các công việc khởi tạo đã thực hiện được giữ riêng tại mục 3.1.

### 1.2. Nguyên tắc phối hợp

- Mỗi công việc có một người chịu trách nhiệm chính và kết quả cần đạt cụ thể.
- Các thành viên phối hợp ngoài vai trò chính khi công việc có liên quan.
- Không giao toàn bộ việc lập trình cho một thành viên hoặc công cụ AI.
- Các thay đổi quan trọng về phạm vi, công nghệ và tiến độ phải được nhóm thống nhất.
- Các chức năng dành cho khách hàng, chủ tiệm và quản trị viên phải được mô tả rõ trước khi triển khai.
- Dữ liệu dịch vụ, lịch phục vụ và đơn hàng phải gắn với đúng tiệm; không được nhầm quyền quản lý của chủ tiệm với quyền quản trị toàn nền tảng.
- Thành viên phụ trách phải hiểu và giải thích được phần việc mình thực hiện.
- Tài liệu, mã nguồn, kết quả kiểm tra và tiến độ được cập nhật trong repository chung.

---

## 2. Các giai đoạn thực hiện

### 2.1. Tổng quan kế hoạch

Dự án WASHUP được thực hiện trong 8 tuần.

**Bảng 2.1. Các giai đoạn phát triển WASHUP**

| Giai đoạn | Nội dung thực hiện | Kết quả dự kiến |
|---|---|---|
| **1. Khảo sát và xác định yêu cầu** | Phân tích nhu cầu của khách hàng và tiệm giặt; xác định vai trò trung gian của WASHUP; khảo sát website tham khảo; phân tích, phản biện và thống nhất phạm vi MVP. | Bộ tài liệu yêu cầu phản ánh đúng mô hình nhiều tiệm, quyền của từng nhóm người dùng và các chức năng được lựa chọn. |
| **2. Thiết kế giao diện** | Thiết kế khu vực khách hàng để tìm kiếm, xem, so sánh tiệm và đặt dịch vụ; khu vực chủ tiệm để quản lý gian hàng, dịch vụ, đơn hàng; khu vực Admin để xét duyệt và giám sát nền tảng. | Bộ thiết kế giao diện và luồng thao tác cho khách hàng, chủ tiệm và Admin. |
| **3. Xây dựng Frontend** | Sử dụng HTML5, CSS3, JavaScript và Bootstrap 5 để xây dựng giao diện; hiển thị thông tin tiệm cung cấp dịch vụ và các chức năng tương ứng với từng vai trò. | Giao diện thể hiện được nhiều tiệm, có thể thao tác trên máy tính và điện thoại. |
| **4. Phát triển Backend và cơ sở dữ liệu** | Sử dụng PHP và MySQL để xây dựng tài khoản, phân quyền, đăng ký và duyệt gian hàng, quản lý dịch vụ và lịch phục vụ theo tiệm; phát triển đặt đơn, tính phí, voucher, thanh toán và quản lý đơn hàng. | Các chức năng nghiệp vụ và dữ liệu xác định rõ tiệm cung cấp dịch vụ, khách đặt đơn và quyền quản lý tương ứng. |
| **5. Tích hợp và kiểm thử** | Kết nối các phần của hệ thống; kiểm thử luồng khách chọn tiệm, đặt dịch vụ, tiệm tiếp nhận và xử lý, khách theo dõi; kiểm tra phân quyền giữa các tiệm và quyền giám sát của Admin. | Các quy trình chính hoạt động theo yêu cầu; lỗi được ghi nhận và xử lý; dữ liệu riêng của các tiệm được phân quyền đúng. |
| **6. Triển khai và hoàn thiện** | Chuẩn bị bản thử nghiệm với nhiều tiệm và tài khoản theo từng vai trò; hoàn thiện chức năng đã chốt, tài liệu sử dụng và báo cáo. | Phiên bản MVP thể hiện đúng mô hình marketplace và bộ tài liệu đồng bộ. |

### 2.2. Tiến độ triển khai đề xuất

Bảng dưới đây là phương án phân bổ công việc theo tuần.

**Bảng 2.2. Tiến độ dự kiến trong 8 tuần**

| Thời gian | Công việc trọng tâm | Kết quả dự kiến |
|---|---|---|
| **Tuần 1** | Rà soát đề tài theo mô hình trung gian; xác định khách hàng, chủ tiệm, Admin; chốt phạm vi MVP và những quy tắc cần làm rõ. | Bộ tài liệu khởi tạo và danh sách chức năng được nhóm xác nhận. |
| **Tuần 2** | Thiết kế giao diện cho ba nhóm người dùng; thiết kế quan hệ giữa tài khoản, gian hàng, dịch vụ, lịch phục vụ và đơn hàng; nghiên cứu phương án thanh toán. | Thiết kế giao diện, mô hình dữ liệu ban đầu và ghi nhận các vấn đề tích hợp cần giải quyết. |
| **Tuần 3** | Xây dựng giao diện tìm kiếm, chi tiết và so sánh tiệm; giao diện đặt dịch vụ; giao diện quản lý gian hàng và xét duyệt tiệm. | Các màn hình chính của khách hàng, chủ tiệm và Admin. |
| **Tuần 4** | Phát triển tài khoản, phân quyền, đăng ký và duyệt gian hàng; quản lý dịch vụ, bảng giá và lịch phục vụ theo tiệm; kết nối các giao diện liên quan. | Chức năng nền tảng hoạt động với dữ liệu của nhiều tiệm. |
| **Tuần 5** | Phát triển đặt dịch vụ theo tiệm, lịch giao nhận, tính phí, voucher, tạo đơn và tiếp nhận đơn; xử lý giỏ hàng theo phương án nhóm đã chốt. | Luồng đặt dịch vụ và xử lý đơn cơ bản được kết nối giữa khách hàng và tiệm giặt. |
| **Tuần 6** | Tích hợp thanh toán thử nghiệm; hoàn thiện quản lý đơn hàng và dashboard theo vai trò; thực hiện các đầu việc bổ sung đã được nhóm phê duyệt. | Các chức năng thuộc phạm vi đã chốt được tích hợp và kiểm tra. |
| **Tuần 7** | Kiểm thử toàn hệ thống, phân quyền giữa các tiệm, giá và phí theo tiệm, trạng thái đơn và thanh toán; kiểm tra các tình huống từ chối, hủy hoặc thất bại. | Kết quả kiểm thử, danh sách lỗi và bản sửa lỗi. |
| **Tuần 8** | Hoàn thiện bản thử nghiệm, kiểm tra lại các chức năng, chuẩn bị dữ liệu minh họa nhiều tiệm và hoàn thiện tài liệu báo cáo. | Website MVP và tài liệu phục vụ đánh giá. |


### 2.3. Các nội dung cần chốt trước khi triển khai

Mô hình kết nối nhiều tiệm giặt ủi với khách hàng là định hướng chung của WASHUP.

**Bảng 2.3. Các quyết định ảnh hưởng đến phạm vi và kế hoạch**

| Nội dung | Yêu cầu làm rõ |
|---|---|
| **Giỏ hàng và đơn hàng** | File ý tưởng có đề xuất giỏ đa tiệm và tự động tách đơn. Nhóm cần chốt việc triển khai trong MVP hay giới hạn mỗi lần đặt tại một tiệm. Cả hai phương án đều phải duy trì nền tảng có nhiều tiệm để khách lựa chọn. |
| **Tìm kiếm theo vị trí** | Ý tưởng có tìm tiệm trong bán kính 5 km. Cần xác định cách lấy vị trí, tính khoảng cách và xử lý khi không có thông tin vị trí của khách hàng. |
| **Lịch và năng lực phục vụ** | Xác định cách mỗi tiệm thiết lập khung giờ, giới hạn nhận đơn và xử lý khi khung giờ không còn khả dụng. |
| **Giá và khối lượng thực tế** | Thống nhất cách tính chi phí dự kiến, cách tiệm cập nhật khối lượng thực tế và việc khách xác nhận khoản điều chỉnh. |
| **Thanh toán** | Chốt phương thức thanh toán, cổng thử nghiệm, cách liên kết giao dịch với đơn hàng và xử lý thanh toán thất bại, hủy hoặc hoàn tiền. |
| **Giao nhận** | Chốt phần giao nhận được mô phỏng và phần tích hợp thực tế. Ý tưởng kết nối Grab/Be cần được kiểm tra điều kiện tích hợp trước khi đưa vào cam kết triển khai. |
| **Voucher** | Xác định mã áp dụng toàn nền tảng hay theo tiệm, điều kiện sử dụng và cách phân bổ giảm giá khi có nhiều đơn thành phần. |
| **Hoa hồng và đối soát** | Phân biệt việc tính toán, ghi nhận khoản phải trả cho tiệm với việc tự động chuyển tiền thực tế; thống nhất phạm vi triển khai và quy tắc tính. |
| **Đánh giá và khiếu nại** | Xác định điều kiện đánh giá, quyền phản hồi của tiệm, quy trình Admin xử lý khiếu nại và ghi nhận kết quả. |

---

## 3. Kế hoạch công việc

### 3.1. Công việc giai đoạn khởi tạo

**Bảng 3.1. Phân công công việc khởi tạo dự án WASHUP**

| Mã | Công việc | Người phụ trách | Kết quả cần đạt | Thời hạn | Trạng thái theo bản kế hoạch gốc |
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

**Lưu ý:** Trạng thái trên phản ánh việc hoàn thành giai đoạn khởi tạo, không phải xác nhận rằng mọi nội dung đã được rà soát theo mô hình marketplace. Công việc cập nhật và đồng bộ tài liệu được theo dõi riêng tại mục 3.4.

### 3.2. Công việc dự kiến trong giai đoạn phát triển

Các đầu việc PT01–PT10 được cập nhật để thể hiện việc phát triển nền tảng nhiều tiệm.

**Bảng 3.2. Danh sách công việc phát triển dự kiến**

| Mã | Công việc | Kết quả cần đạt | Thời gian dự kiến | Người phụ trách | Trạng thái |
|---|---|---|---|---|---|
| **PT01** | Thiết kế giao diện cho khách hàng, chủ tiệm và Admin | Bản thiết kế tìm kiếm, so sánh và chi tiết tiệm, đặt dịch vụ, quản lý gian hàng, quản lý đơn và xét duyệt đối tác. | Tuần 2 | Chưa phân công | Chưa bắt đầu  |
| **PT02** | Xây dựng Frontend cho nền tảng nhiều tiệm | Các giao diện hiển thị thông tin của nhiều tiệm, dịch vụ thuộc từng tiệm và chức năng tương ứng với từng vai trò. | Tuần 3–4 | Chưa phân công | Chưa bắt đầu |
| **PT03** | Thiết kế cơ sở dữ liệu marketplace | Mô hình liên kết tài khoản, gian hàng, dịch vụ, lịch phục vụ, đơn hàng và giao dịch; dữ liệu xác định được tiệm sở hữu hoặc phụ trách. | Tuần 2–4 | Chưa phân công | Chưa bắt đầu |
| **PT04** | Phát triển tài khoản, gian hàng và quản lý dịch vụ | Phân quyền khách hàng, chủ tiệm và Admin; đăng ký, xét duyệt gian hàng; chủ tiệm quản lý thông tin và dịch vụ của mình. | Tuần 4–5 | Chưa phân công | Chưa bắt đầu theo bản kế hoạch gốc |
| **PT05** | Phát triển quy trình đặt dịch vụ theo tiệm | Khách chọn tiệm, dịch vụ, khối lượng, lịch và địa chỉ; hệ thống tạo đơn đúng tiệm. Giỏ đa tiệm và tách đơn được thực hiện nếu nhóm chốt trong MVP. | Tuần 5 | Chưa phân công | Chưa bắt đầu |
| **PT06** | Phát triển tính phí, voucher và phí giao nhận theo tiệm | Tính đúng giá và phí của tiệm được chọn; áp dụng voucher đúng phạm vi; lưu chi phí của đơn; xử lý điều chỉnh khối lượng theo quy tắc đã thống nhất. | Tuần 5–6 | Chưa phân công | Chưa bắt đầu |
| **PT07** | Tích hợp thanh toán và xử lý kết quả giao dịch | Xác minh giao dịch thử nghiệm, liên kết kết quả với đúng đơn hàng và ghi nhận trạng thái thanh toán theo quy tắc đã chốt. | Nghiên cứu từ đầu dự án; tích hợp dự kiến tuần 6 | Chưa phân công | Chưa bắt đầu |
| **PT08** | Phát triển quản lý đơn hàng và dashboard theo vai trò | Chủ tiệm tiếp nhận, từ chối và cập nhật đơn của mình; khách theo dõi đơn; Admin giám sát toàn sàn. Thống kê của tiệm và nền tảng được tách biệt. | Tuần 5–6 | Chưa phân công | Chưa bắt đầu |
| **PT09** | Tích hợp và kiểm thử mô hình nhiều tiệm | Kiểm tra quy trình đặt đơn, dữ liệu, giá và phí theo tiệm, thanh toán, phân quyền; kiểm thử tách đơn nếu chức năng này thuộc MVP. | Kiểm tra từng phần trong quá trình phát triển; kiểm thử tổng thể tuần 7 | Chưa phân công | Chưa bắt đầu |
| **PT10** | Triển khai và hoàn thiện bản thử nghiệm marketplace | Website thử nghiệm có nhiều tiệm, tài khoản theo vai trò, dữ liệu minh họa và tài liệu hướng dẫn tương ứng. | Tuần 8 | Chưa phân công | Chưa bắt đầu |

**Bảng 3.3. Đầu việc bổ sung từ danh sách ý tưởng, cần nhóm xác nhận phạm vi**

| Mã | Công việc đề xuất | Kết quả cần đạt nếu được triển khai | Thời gian | Người phụ trách | Trạng thái |
|---|---|---|---|---|---|
| **PT11** | Phát triển đánh giá và khiếu nại | Khách đánh giá sau khi hoàn thành đơn, gửi khiếu nại gắn với đơn và tiệm; tiệm phản hồi; Admin ghi nhận và xử lý theo quyền hạn. | Chưa chốt; cần cân đối trong kế hoạch 8 tuần | Chưa phân công | Đề xuất – chờ xác nhận phạm vi |
| **PT12** | Phát triển hoa hồng và đối soát | Ghi nhận giá trị dịch vụ, phí giao nhận, hoa hồng và khoản phải trả cho tiệm theo quy tắc đã thống nhất; phân biệt với việc chi trả tiền thực tế. | Chưa chốt; cần cân đối trong kế hoạch 8 tuần | Chưa phân công | Đề xuất – chờ xác nhận phạm vi |


### 3.3. Theo dõi tiến độ bằng GitHub Issues

Nhóm sử dụng GitHub Issues để quản lý công việc, ghi nhận kết quả và theo dõi việc kiểm tra.

Mỗi Issue có:

- **Mã và tiêu đề:** Xác định công việc cụ thể.
- **Mô tả:** Nội dung và phạm vi thực hiện.
- **Người phụ trách:** Một thành viên chịu trách nhiệm chính.
- **Kết quả cần đạt:** Tài liệu, giao diện, chức năng hoặc kết quả kiểm thử.
- **Thời hạn:** Ngày hoàn thành được nhóm thống nhất.
- **Tiêu chí hoàn thành:** Điều kiện để kiểm tra và chấp nhận kết quả.
- **Yêu cầu liên quan:** Liên kết hoặc tham chiếu đến nội dung tương ứng trong REQUIREMENTS.md.

Đối với công việc phát triển chức năng sẽ bổ sung:

- **Vai trò sử dụng:** Khách hàng, chủ tiệm hoặc Admin.
- **Phạm vi dữ liệu:** Dữ liệu của cá nhân, dữ liệu thuộc một tiệm hoặc dữ liệu toàn nền tảng.
- **Trường hợp kiểm tra:** Thao tác hợp lệ, dữ liệu không hợp lệ và truy cập ngoài quyền được cấp.

Các trạng thái theo dõi công việc gồm:

- **Chưa bắt đầu:** Chưa triển khai.
- **Đang thực hiện:** Đang xử lý công việc.
- **Chờ kiểm tra:** Đã gửi kết quả để kiểm tra.
- **Hoàn thành:** Kết quả đã được kiểm tra và chấp nhận.

Đối với các ý tưởng hoặc công việc chưa được duyệt, ghi rõ **Đề xuất – chờ xác nhận**, không coi đó là nhiệm vụ đã chính thức giao.

### 3.4. Rà soát và đồng bộ tài liệu theo mô hình marketplace

**Bảng 3.4. Đề xuất công việc cập nhật tài liệu**

| Mã | Nội dung rà soát | Thành viên phụ trách phần gốc | Tài liệu / Kết quả cần cập nhật | Thời hạn | Trạng thái |
|---|---|---|---|---|---|
| **RS01** | Làm rõ WASHUP là nền tảng trung gian, phục vụ khách hàng và các tiệm giặt. | Quỳnh Như | Phần giới thiệu, vấn đề kinh doanh và mục tiêu trong README.md, REQUIREMENTS.md. | Chưa chốt | Đề xuất rà soát |
| **RS02** | Điều chỉnh phạm vi theo mô hình nhiều tiệm; phân biệt mô hình kinh doanh với mức độ triển khai từng chức năng. | Hà My | Mục phạm vi trong REQUIREMENTS.md; loại bỏ giới hạn một tiệm nếu còn. | Chưa chốt | Đề xuất rà soát |
| **RS03** | Rà soát phân tích yêu cầu bằng AI theo mô hình marketplace và ghi nhận lần cập nhật thực tế. | Thảo Nguyên | AI_USAGE_LOG.md và các đề xuất yêu cầu được nhóm xem xét. | Chưa chốt | Đề xuất rà soát |
| **RS04** | Phản biện các yêu cầu sau điều chỉnh; đánh giá phạm vi, khả năng triển khai và điểm chưa rõ. | Kim Thư | Kết quả phản biện, quyết định của nhóm và nhật ký sử dụng AI. | Chưa chốt | Đề xuất rà soát |
| **RS05** | Bổ sung chủ tiệm giặt, quyền theo từng tiệm và yêu cầu chức năng phù hợp. | Thùy Duyên | REQUIREMENTS.md và docs/user-roles.md. | Chưa chốt | Đề xuất rà soát |
| **RS06** | Cập nhật quy trình khách chọn tiệm, đặt dịch vụ, tiệm xử lý đơn và Admin giám sát. | Yến Trân | docs/business-workflow.md và các sơ đồ liên quan. | Chưa chốt | Đề xuất rà soát |
| **RS07** | Cập nhật quy định AI theo mô hình nhiều tiệm; rà soát sự phù hợp của đề xuất rút ra từ khảo sát website. | Anh Thư | AGENTS.md và phần đề xuất cho WASHUP trong docs/competitor-analysis.md. | Chưa chốt | Đề xuất rà soát |
| **RS08** | Cập nhật kế hoạch, phân công vai trò toàn đồ án và các Issues bị ảnh hưởng. | Ngân Huệ | PROJECT_PLAN.md, thông tin phân công trong README.md và GitHub Issues. | Chưa chốt | Đề xuất rà soát |

**Nguyên tắc cập nhật:**

- Giữ lịch sử phân công và trạng thái hoàn thành của bản khởi tạo.
- Không sửa prompt hoặc kết quả AI cũ thành nội dung chưa từng được thực hiện; bổ sung lần sử dụng mới vào AI_USAGE_LOG.md.
- Không biến ý tưởng đề xuất thành chức năng đã được nhóm duyệt khi chưa có quyết định.
- Không thay đổi ghi nhận khảo sát website thành những tính năng chưa quan sát được; tách rõ kết quả khảo sát và đề xuất cho WASHUP.
- Đồng bộ nội dung đã được xác nhận giữa README.md, REQUIREMENTS.md, PROJECT_PLAN.md, AGENTS.md và các tài liệu trong thư mục docs.

---

## 4. Rủi ro và phương án xử lý

### 4.1. Rủi ro đã có trong kế hoạch

**Bảng 4.1. Rủi ro chung của dự án**

| STT | Rủi ro | Mức độ đánh giá sơ bộ trong bản gốc | Phương án giảm thiểu |
|---|---|---|---|
| **1** | Khối lượng chức năng lớn so với 8 tuần | Cao | Chốt phạm vi MVP, xác định mức triển khai tối thiểu của từng chức năng và không tự đưa toàn bộ danh sách ý tưởng vào kế hoạch bắt buộc. |
| **2** | Chưa xác định năng lực lập trình của nhóm | Cao | Đánh giá kỹ năng, phân công vai trò toàn đồ án và thử nghiệm sớm các phần kỹ thuật quan trọng. |
| **3** | Khó khăn khi tích hợp cổng thanh toán | Cao | Chọn một phương án phù hợp, nghiên cứu tài liệu, thử môi trường sandbox và kiểm tra kết quả giao dịch với đúng đơn hàng. |
| **4** | Tính sai chi phí dịch vụ, giao nhận và voucher | Cao | Thống nhất công thức; kiểm tra giá, chính sách phí và phạm vi voucher theo tiệm; đối chiếu tổng tiền trước và sau khi tạo đơn. |
| **5** | Trùng lặp hoặc sai trạng thái đơn hàng | Cao | Xác định quy tắc chuyển trạng thái, tách trạng thái thanh toán với trạng thái xử lý và kiểm tra dữ liệu trước khi cập nhật. |
| **6** | Rò rỉ thông tin khách hàng | Cao | Kiểm tra quyền truy cập, bảo vệ mật khẩu và dữ liệu; không đưa thông tin bí mật lên repository công khai. |
| **7** | Frontend và Backend phát triển không đồng bộ | Trung bình – Cao | Thống nhất cấu trúc dữ liệu, cách kết nối và các thông tin bắt buộc về khách hàng, tiệm và đơn hàng; kiểm thử từng chức năng. |
| **8** | Thiếu thời gian kiểm thử và hoàn thiện | Cao | Kiểm thử trong quá trình phát triển; kiểm tra cả chức năng riêng và luồng hoạt động giữa khách hàng, tiệm giặt, Admin. |

### 4.2. Rủi ro bổ sung cần đánh giá

**Bảng 4.2. Rủi ro đặc thù của mô hình nhiều tiệm**

| STT | Rủi ro bổ sung | Mức độ | Phương án xử lý đề xuất |
|---|---|---|---|
| **9** | Tiệm này truy cập hoặc chỉnh sửa dữ liệu riêng của tiệm khác | Chưa đánh giá | Kiểm tra quyền theo tài khoản và tiệm sở hữu dữ liệu; kiểm thử với ít nhất hai tiệm khác nhau. |
| **10** | Áp dụng nhầm giá, lịch hoặc phí của tiệm khác | Chưa đánh giá | Gắn dịch vụ, lịch phục vụ và chính sách phí với đúng tiệm; kiểm tra lại khi tạo đơn và lưu thông tin áp dụng cho đơn. |
| **11** | Sai tách đơn hoặc trạng thái khi giỏ có nhiều tiệm | Chưa đánh giá | Nếu triển khai giỏ đa tiệm, kiểm tra từng đơn thành phần và trường hợp một tiệm từ chối hoặc một đơn bị hủy. |
| **12** | Nhầm giá trị giao dịch, doanh thu tiệm và khoản thu của nền tảng | Chưa đánh giá | Thống nhất cách xác định tiền dịch vụ, phí giao nhận, giảm giá, hoa hồng và khoản phải trả trước khi xây dựng báo cáo hoặc đối soát. |
| **13** | Nhận đơn vượt khả năng phục vụ của tiệm | Chưa đánh giá | Làm rõ quy tắc khung giờ và năng lực phục vụ; kiểm tra khả năng nhận đơn của đúng tiệm trước khi xác nhận. |
| **14** | Khiếu nại không xác định rõ đơn hàng và bên liên quan | Chưa đánh giá | Gắn khiếu nại với khách hàng, đơn và tiệm cung cấp; ghi nhận phản hồi và kết quả xử lý theo quyền hạn. |

### 4.3. Định hướng quản lý rủi ro

Nhóm ưu tiên theo dõi các rủi ro liên quan đến phạm vi, tiến độ, phân quyền giữa các tiệm, độ chính xác của chi phí và thanh toán.

Khi phát sinh vấn đề, thành viên phụ trách ghi nhận nội dung, ảnh hưởng và phương án xử lý để nhóm xem xét.

Các thay đổi quan trọng về phạm vi, công nghệ, quyền hạn, quy tắc thanh toán và kế hoạch phải được nhóm thống nhất trước khi cập nhật tài liệu.

Không tự giảm mô hình từ nhiều tiệm xuống một tiệm để xử lý khó khăn kỹ thuật. Nếu cần giảm khối lượng công việc, nhóm điều chỉnh mức độ triển khai từng chức năng nhưng vẫn giữ bản chất WASHUP là nền tảng trung gian.

---

## 5. Tài liệu liên quan

- [Giới thiệu dự án](README.md)
- [Yêu cầu dự án](REQUIREMENTS.md)
- [Quy định sử dụng AI](AGENTS.md)
- [Nhật ký sử dụng AI](AI_USAGE_LOG.md)
- [Phân tích website tương tự](docs/competitor-analysis.md)
- [Vai trò và quyền hạn người dùng](docs/user-roles.md)
- [Quy trình nghiệp vụ](docs/business-workflow.md)


Khi phát hiện nội dung còn mô tả hệ thống như website của một tiệm duy nhất, nhóm ghi nhận và cập nhật theo các công việc rà soát tại mục 3.4.
