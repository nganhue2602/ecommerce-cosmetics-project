# AI_USAGE_LOG – Dự án WASHUP

> **Bản rà soát theo mô hình sàn TMĐT trung gian.** Tài liệu này phân biệt thông tin dự án đã được xác nhận, đề xuất cập nhật của AI và nội dung cần nhóm kiểm chứng. Không coi các đề xuất mới hoặc prompt viết lại là bằng chứng cho những thao tác AI đã thực sự diễn ra trong quá khứ.

## 1. Bối cảnh dự án và mục đích sử dụng AI

**Tên dự án:** WASHUP – Nền tảng thương mại điện tử trung gian kết nối khách hàng với các tiệm giặt ủi.

**Mô hình kinh doanh:** WASHUP hoạt động theo mô hình **sàn TMĐT dịch vụ (marketplace)**. Các tiệm giặt tham gia với vai trò **đối tác cung cấp dịch vụ**; khách hàng tìm kiếm, tham khảo, lựa chọn tiệm/dịch vụ và gửi yêu cầu đặt giặt trên nền tảng. WASHUP cung cấp hệ thống hỗ trợ kết nối, đặt dịch vụ, quản lý giao dịch và giám sát hoạt động của các bên. **WASHUP không phải website bán dịch vụ của một tiệm giặt duy nhất.**

**Nhóm sử dụng chính:** (1) khách hàng; (2) đối tác tiệm giặt; (3) quản trị viên nền tảng WASHUP. Khách chưa đăng nhập có thể xem thông tin công khai; mức độ sử dụng chức năng đặt dịch vụ cần xác định trong yêu cầu chi tiết. Đây là các **vai trò nghiệp vụ**, không đồng nghĩa bắt buộc phải xây dựng mọi màn hình và phân quyền nâng cao ngay từ đầu.

**Thông tin triển khai đã được xác nhận:** nhóm 8 thành viên, thời gian 8 tuần. MVP cần có **thanh toán trực tuyến, voucher, tự động tính phí giao nhận và dashboard** bên cạnh quy trình đặt dịch vụ cơ bản. Công nghệ và trình độ lập trình của các thành viên chưa được cung cấp để đánh giá chính xác tính khả thi.

**Mục đích sử dụng AI:**
- Phân tích các nghiệp vụ đặc thù của mô hình nhiều đối tác (khách hàng – tiệm giặt – quản trị sàn).
- Đề xuất yêu cầu chức năng, phi chức năng, quy trình đặt/tiếp nhận/xử lý đơn, phân quyền và phạm vi MVP.
- Phát hiện mâu thuẫn từ tài liệu cũ đang mô tả WASHUP như website của một trung tâm giặt ủi.
- Hỗ trợ phản biện, đánh giá rủi ro và xác định nội dung phải được nhóm kiểm chứng trước khi cập nhật REQUIREMENTS.md.

AI là công cụ hỗ trợ; nhóm chịu trách nhiệm xác minh, quyết định và cập nhật các tài liệu chính thức.

## 2. Nhật ký sử dụng AI và lịch sử điều chỉnh

**Bảng: Tổng hợp các hoạt động sử dụng AI và điều chỉnh yêu cầu dự án WASHUP**

| Hoạt động | Công cụ / nguồn | Nội dung đầu vào | Kết quả và vấn đề ghi nhận | Hướng xử lý / trạng thái |
|---|---|---|---|---|
| Phân tích yêu cầu ban đầu (Nhiệm vụ 3) | ChatGPT (OpenAI) | Mô tả WASHUP, khách hàng mục tiêu, khảo sát HERAMO, Giặt Ơi!, 1997 Premium Laundry, kế hoạch 8 tuần/8 thành viên | Bộ yêu cầu FR-01 đến FR-13 và các đề xuất nghiệp vụ ban đầu; nội dung thiên về một tiệm giặt, thiếu đối tác tiệm giặt | **Cần sửa và đối chiếu** với tài liệu Nhiệm vụ 3 phiên bản mới theo marketplace |
| Phản biện ban đầu (Nhiệm vụ 4) | Gemini (Google) **theo nhật ký cũ** | Bộ yêu cầu và tài liệu dự án ban đầu | Nhật ký cũ ghi có phản biện về tính khả thi, quy tắc nghiệp vụ, bảo mật, thanh toán | **Chưa có bản phản hồi Gemini đính kèm trong file này**; cần đối chiếu prompt, ảnh chụp/kết quả thực tế, tránh ghi nhận kết luận chưa có minh chứng |
| Rà soát mô hình kinh doanh | Nhóm định hướng lại và ChatGPT hỗ trợ rà soát tài liệu | AI_USAGE_LOG cũ; xác nhận WASHUP là sàn trung gian giữa khách hàng và nhiều tiệm giặt | Phát hiện thiếu vai trò đối tác, thiếu quản lý dịch vụ theo tiệm, xử lý đơn theo tiệm, cơ chế quản trị sàn và các quy tắc giao dịch đa đối tác | **Đang cập nhật tài liệu**; các yêu cầu cụ thể cần nhóm duyệt trước khi đưa vào REQUIREMENTS.md |
| Tổng hợp sau phản biện và cập nhật | Nhóm dự án | Kết quả AI đã được kiểm chứng, mô hình marketplace đã thống nhất | Danh sách yêu cầu và quyết định cuối cùng | **Chỉ đánh dấu hoàn tất sau khi nhóm xác nhận** |

*Nguồn: Tổng hợp từ AI_USAGE_LOG cũ và lần rà soát mô hình WASHUP bằng ChatGPT. Trạng thái “đã diễn ra” chỉ áp dụng cho nội dung có thể đối chiếu với lịch sử thực tế.*

## 3. Prompt dùng cho phân tích và phản biện

> **Quy tắc ghi nhật ký:** Phần 3.1 ghi bản prompt **đề xuất dùng để chạy lại phân tích** theo mô hình chính xác, không ghi nhầm là prompt đã sử dụng ở Nhiệm vụ 3 trước đây. Nếu cần chứng minh quá trình làm bài, đính kèm prompt gốc và câu trả lời AI thực tế. Tương tự, cần giữ prompt Gemini đúng nguyên văn đã dùng nếu có.

### 3.1. Prompt đề xuất để cập nhật phân tích bằng ChatGPT

**Mục đích:** Phân tích lại WASHUP theo mô hình sàn TMĐT dịch vụ nhiều đối tác.

> Bạn là chuyên gia phân tích nghiệp vụ cho dự án thương mại điện tử của nhóm sinh viên.
>
> **Bối cảnh:** WASHUP là **nền tảng/sàn TMĐT trung gian kết nối khách hàng và nhiều tiệm giặt ủi độc lập**, không phải website của một tiệm giặt riêng lẻ. Khách hàng có thể khám phá các tiệm, xem dịch vụ/giá, lựa chọn tiệm phù hợp, đặt giặt và theo dõi đơn. Đối tác tiệm giặt quản lý thông tin dịch vụ và đơn hàng thuộc tiệm mình. Quản trị viên WASHUP kiểm soát hoạt động toàn nền tảng.
>
> **Dự án:** nhóm 8 người, thực hiện 8 tuần. Khách hàng hướng đến gồm sinh viên, người đi làm và hộ gia đình. Website tham khảo đã khảo sát: HERAMO, Giặt Ơi!, 1997 Premium Laundry. MVP đã xác nhận có thanh toán trực tuyến, voucher, tính phí giao nhận tự động và dashboard. Năng lực kỹ thuật chưa được đánh giá.
>
> Hãy phân tích: (1) mục tiêu và phạm vi dự án; (2) người dùng và ranh giới quyền hạn giữa khách hàng, tiệm giặt, quản trị sàn; (3) chức năng cốt lõi; (4) quy trình từ khách chọn tiệm đến tiệm tiếp nhận/xử lý đơn; (5) yêu cầu phi chức năng; (6) MVP khả thi; (7) chức năng phát triển sau; (8) rủi ro và giảm thiểu.
>
> **Yêu cầu:** Nêu rõ tính năng bắt buộc, đề xuất có thể phát triển sau và điều cần nhóm xác minh. Không giả định một trung tâm WASHUP tự nhận và xử lý mọi đơn. Không tự mặc định mô hình hoa hồng, chủ thể giao nhận, quản lý thanh toán/đối soát hoặc quy tắc voucher nếu chưa được cung cấp. Đề xuất giải pháp giản lược phù hợp 8 tuần và giải thích cơ sở cho mỗi đề xuất.

**Trạng thái:** Đây là **prompt sửa đổi được đề xuất**. Khi nhóm thực sự chạy lại, lưu prompt và kết quả trả lời trong minh chứng.

### 3.2. Prompt phản biện bằng AI thứ hai

**Prompt đề xuất sử dụng cho vòng phản biện cập nhật:**

> Bạn là người phản biện độc lập cho đồ án sàn TMĐT dịch vụ WASHUP kết nối khách hàng với nhiều tiệm giặt ủi.
>
> Hãy đánh giá bộ yêu cầu do ChatGPT đề xuất, chú ý: phân quyền dữ liệu theo từng tiệm; quy trình đăng ký/duyệt tiệm; khách chọn tiệm và đặt dịch vụ; tiệm xác nhận/từ chối đơn; chi phí dịch vụ và giao nhận; voucher; thanh toán, hoàn tiền và đối soát; dashboard của tiệm so với quản trị sàn; bảo mật thông tin giữa các đối tác.
>
> Chỉ ra yêu cầu bị thiếu, trùng lặp, mâu thuẫn, chưa kiểm thử được hoặc vượt quá 8 tuần. Với mỗi vấn đề, ghi lý do, cách sửa và mức ưu tiên. Không chuyển WASHUP thành website của một tiệm giặt; không khẳng định quy tắc chưa được nhóm chốt.

**Trạng thái:** Prompt trên **chưa được xác nhận là đã gửi cho Gemini**. Chỉ ghi nhận là lần sử dụng AI thứ hai sau khi chạy thật và lưu kết quả.

## 4. Rà soát yêu cầu và hướng điều chỉnh theo mô hình sàn TMĐT

**Bảng: Đối chiếu nội dung nhật ký cũ và hướng sửa đổi theo mô hình marketplace**

| Nội dung | Điểm chưa đúng/chưa đủ trong log cũ | Hướng điều chỉnh đề xuất | Trạng thái |
|---|---|---|---|
| Định nghĩa WASHUP | Mô tả website đặt dịch vụ của một tiệm/trung tâm giặt | Ghi rõ WASHUP là **nền tảng trung gian kết nối nhiều tiệm giặt độc lập** | **Đã xác nhận mô hình** |
| Tài khoản và phân quyền (FR-01) | Chỉ phân biệt khách hàng và admin | Bổ sung tài khoản **đối tác tiệm giặt**; mỗi tiệm chỉ quản lý dữ liệu và đơn của mình; admin quản lý toàn sàn | Đề xuất yêu cầu cần chi tiết hóa |
| Danh sách dịch vụ (FR-02) | Dịch vụ/giá do một admin WASHUP quản lý trực tiếp | Liên kết dịch vụ, giá, thời gian xử lý với từng tiệm; khách xem tiệm cung cấp dịch vụ | Đề xuất |
| Tùy chọn dịch vụ (FR-03) | Tùy chọn hương thơm chung toàn hệ thống | Chỉ hiển thị tùy chọn mà tiệm được chọn cung cấp; phụ phí do quy tắc cấu hình quyết định | Cần xác minh |
| Giao nhận (FR-04) | Lịch/khu vực của một trung tâm | Hiển thị khu vực phục vụ và khung giờ theo tiệm, hoặc theo quy tắc tập trung nếu nhóm chọn | Cần xác minh |
| Tính chi phí (FR-05) | Một bảng giá chung | Tổng tiền dựa trên giá của tiệm được chọn, số lượng/khối lượng, phí giao nhận và voucher hợp lệ | Đề xuất |
| Tạo đơn (FR-06) | Đơn tạo và chuyển cho admin xử lý | Đơn gắn với **một tiệm được chọn** trong luồng MVP đề xuất; tiệm được quyền tiếp nhận/từ chối | Cần nhóm chốt quy tắc một đơn/một tiệm |
| Quản lý trạng thái (FR-07) | Admin WASHUP cập nhật mọi trạng thái | Tiệm xử lý và cập nhật trạng thái đơn thuộc mình; khách theo dõi; admin giám sát/giải quyết ngoại lệ | Đề xuất |
| Quản lý dịch vụ (FR-08) | Admin điều chỉnh toàn bộ dịch vụ và giá như chủ tiệm | Tiệm quản lý danh mục/giá của chính mình; admin duyệt hoặc kiểm soát theo chính sách sàn | Cần xác minh quy trình duyệt |
| Voucher (FR-09) | Chỉ có mã giảm giá chung | Giữ voucher **bắt buộc trong MVP**; xác định voucher của sàn hay từng tiệm, điều kiện và bên chịu giảm giá | Bắt buộc; quy tắc chưa chốt |
| Tìm kiếm/lọc (FR-10) | Chỉ tìm các loại dịch vụ | Cho tìm **tiệm** và dịch vụ; có thể lọc theo khu vực/loại dịch vụ/giá ở mức cơ bản | Đề xuất |
| Phí giao nhận (FR-11) | Phí cố định do một trung tâm quy định | Giữ tính phí tự động trong MVP; cơ sở tính cần phù hợp từng tiệm và mô hình giao nhận đã thống nhất | Bắt buộc; quy tắc chưa chốt |
| Thanh toán (FR-12) | Thanh toán đơn của một đơn vị | Giữ thanh toán trực tuyến trong MVP; làm rõ đơn vị nhận tiền, xác nhận kết quả, hoàn tiền/đối soát giữa sàn và tiệm | Bắt buộc; luồng tiền chưa chốt |
| Dashboard (FR-13) | Chỉ dashboard quản trị nội bộ một trung tâm | Phân biệt **dashboard tiệm** (đơn và dịch vụ của tiệm) với **dashboard quản trị sàn** (tổng quan đối tác, đơn và hoạt động) | Bắt buộc dashboard; mức chi tiết cần chốt |
| Giỏ dịch vụ | Log cũ chốt bỏ giỏ hàng | Có thể dùng biểu mẫu đặt trực tiếp **theo một tiệm/đơn** để hạn chế phức tạp; chưa quyết định giao dịch đa tiệm trong một đơn | Đề xuất chứ chưa phải quyết định |
| Bảo mật | Kiểm tra đầu vào, bảo vệ mật khẩu | Giữ yêu cầu cũ; bổ sung **kiểm soát truy cập chéo giữa các tiệm** và bảo vệ dữ liệu giao dịch | Bắt buộc về nguyên tắc |

*Nguồn: ChatGPT rà soát AI_USAGE_LOG cũ và phân tích sự khác biệt giữa website một nhà cung cấp với sàn TMĐT nhiều đối tác. Các dòng ghi “Đề xuất/Cần xác minh” không phải quyết định đã được nhóm phê duyệt.*

### 4.1. Các yêu cầu đặc thù của sàn cần bổ sung vào bản yêu cầu mới

Các nội dung sau **chưa có trong bộ FR-01–FR-13 theo đúng nghiệp vụ nhiều tiệm** và cần được xem xét khi sửa `REQUIREMENTS.md`:

1. **Quản lý đối tác tiệm giặt:** hồ sơ tiệm, trạng thái tham gia/được duyệt, khu vực phục vụ, thông tin liên hệ.
2. **Danh mục dịch vụ theo đối tác:** mỗi dịch vụ gắn với một tiệm; giá và điều kiện có thể khác giữa các tiệm.
3. **Phát sinh và phân tuyến đơn:** khách lựa chọn tiệm hoặc hệ thống gợi ý tiệm theo quy tắc được duyệt; đơn gắn với tiệm cụ thể.
4. **Không gian quản lý của tiệm:** xem/tiếp nhận/từ chối đơn, cập nhật tiến độ trong giới hạn được phân quyền.
5. **Giám sát cấp sàn:** admin WASHUP quản lý tài khoản đối tác, dữ liệu chung và trường hợp cần can thiệp; không thao tác như chủ sở hữu của mọi tiệm.
6. **Xử lý thanh toán đa đối tác:** ghi nhận giao dịch của đơn và đối tác liên quan; xác định ai nhận tiền, cách đối soát và xử lý hoàn tiền trước khi lập trình.

**Khuyến nghị MVP 8 tuần (chưa phải quyết định của nhóm):** triển khai mô hình nhiều tiệm bằng dữ liệu mẫu có tối thiểu hai tiệm để kiểm chứng phân quyền, nhưng giới hạn **một đơn chỉ gắn với một tiệm** và mô phỏng giao nhận thay vì xây dựng hệ thống tài xế thời gian thực. Ưu tiên xử lý chính xác luồng khách đặt → tiệm xác nhận/xử lý → khách theo dõi → quản trị sàn giám sát.

## 5. Những nội dung nhóm cần xác minh trước khi chốt

**Bảng: Danh sách vấn đề cần nhóm thống nhất và cập nhật tài liệu**

| Vấn đề | Câu hỏi cần chốt | Ảnh hưởng |
|---|---|---|
| Cách khách chọn tiệm | Khách tự chọn tiệm, hay WASHUP tự phân công dựa trên khu vực/tiêu chí? | Luồng đặt dịch vụ và thuật toán gán đơn |
| Đăng ký/duyệt đối tác | Tiệm tự đăng ký hay admin tạo tài khoản; có cần duyệt hoạt động? | Module đối tác và quản trị sàn |
| Quyền chỉnh giá | Tiệm tự đặt giá, admin phê duyệt hay sàn áp dụng bảng giá chung? | Dữ liệu dịch vụ và tính tiền |
| Đơn hàng | Mỗi đơn chỉ một tiệm hay được đặt dịch vụ của nhiều tiệm cùng lúc? | Cấu trúc dữ liệu, checkout và thanh toán |
| Tiếp nhận/hủy đơn | Tiệm có quyền từ chối, khách được hủy khi nào, đơn chuyển tiệm khác ra sao? | Trạng thái và xử lý ngoại lệ |
| Giao nhận | Tiệm tự giao nhận, sàn điều phối hay bên thứ ba thực hiện? | Phí giao nhận và lịch nhận/trả |
| Voucher | Sàn tạo hay tiệm tạo; ưu đãi trừ trên dịch vụ hay cả phí giao nhận? | Công thức thanh toán và quyền quản trị |
| Thanh toán và đối soát | Tiền về sàn hay tiệm; có hoa hồng không; xử lý hoàn tiền thế nào? | Tích hợp thanh toán, báo cáo doanh thu |
| Dashboard | Tiệm xem những chỉ số nào; admin sàn xem những chỉ số nào? | Phân quyền, thống kê |
| Năng lực và phạm vi triển khai | Công nghệ dự kiến, số người phụ trách backend/database, môi trường thanh toán demo | Tính khả thi trong 8 tuần |

*Nguồn: ChatGPT đề xuất các nội dung cần xác minh từ đặc điểm giao dịch đa đối tác của WASHUP.*

## 6. Đánh giá việc sử dụng AI

**Bảng: Đánh giá đóng góp và giới hạn của AI trong dự án WASHUP**

| Tiêu chí | Đánh giá |
|---|---|
| Giá trị hỗ trợ | Giúp nhận ra sai lệch mô hình kinh doanh trong log cũ và xác định các nghiệp vụ cốt lõi của sàn trung gian |
| Hạn chế | AI có thể suy diễn mô hình hoa hồng, quy tắc chọn tiệm, xử lý giao nhận hoặc thanh toán nếu không có dữ liệu xác nhận |
| Cách kiểm tra | Đối chiếu với định hướng nhóm, tài liệu Nhiệm vụ 1/2 đã cập nhật, sơ đồ nghiệp vụ, danh sách tính năng thực tế và minh chứng phản biện |
| Trách nhiệm của nhóm | Quyết định cuối cùng về chức năng, phạm vi, phân quyền, quy tắc tính phí/thanh toán và tính khả thi |
| Nguyên tắc sử dụng AI | Không tự ý đưa chức năng chưa được duyệt vào bản yêu cầu chính thức; không tạo prompt/kết quả Gemini giả; bảo vệ dữ liệu cá nhân và bí mật hệ thống |

## 7. Kết luận

Bản AI_USAGE_LOG ban đầu phù hợp hơn với website đặt dịch vụ của **một tiệm giặt**, nên chưa phản ánh đúng mô hình WASHUP đã được nhóm xác nhận. Sau rà soát, định hướng đúng là **sàn thương mại điện tử trung gian kết nối nhiều tiệm giặt độc lập với khách hàng**, trong đó mỗi tiệm có dữ liệu dịch vụ và đơn hàng của mình, còn WASHUP giữ vai trò quản trị nền tảng và hỗ trợ giao dịch.

Việc sử dụng AI trong giai đoạn tiếp theo cần tập trung vào phân tích nghiệp vụ nhiều đối tác, phản biện tính khả thi trong 8 tuần và xác minh các quy tắc còn bỏ ngỏ. Những đề xuất mới trong log này **chưa thay thế quyết định cuối cùng của nhóm** và chỉ được đưa vào `REQUIREMENTS.md` sau khi thống nhất.

## 8. Checklist trước khi nộp

- [ ] README.md, REQUIREMENTS.md, PROJECT_PLAN.md và sơ đồ nghiệp vụ cùng mô tả WASHUP là **sàn trung gian nhiều tiệm giặt**, không phải một tiệm giặt riêng.
- [ ] Có mô tả đúng 3 vai trò nghiệp vụ chính: khách hàng, đối tác tiệm giặt, quản trị viên sàn.
- [ ] Đã điều chỉnh yêu cầu FR và quy trình nghiệp vụ theo hướng tiệm giặt tiếp nhận/xử lý đơn thuộc mình.
- [ ] Các chức năng MVP đã xác nhận (thanh toán, voucher, phí giao nhận, dashboard) được ghi nhất quán.
- [ ] Các đề xuất chưa chốt được ghi rõ “cần xác minh”, không biến thành quyết định nhóm.
- [ ] Prompt ChatGPT và Gemini phản ánh đúng prompt thực sự sử dụng, có kết quả/ảnh minh chứng nếu cần.
- [ ] Phản biện Gemini về **mô hình marketplace** đã thực sự được thực hiện trước khi ghi là “hoàn thành”.
- [ ] Nhóm đã thống nhất quy tắc chọn tiệm, giao nhận, voucher, thanh toán và quyền dữ liệu đối tác.
- [ ] Không đưa mật khẩu, token, API key hoặc thông tin cá nhân thật vào log/repository công khai.
