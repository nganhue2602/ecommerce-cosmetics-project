# Requirements


## 1. Mục tiêu dự án

### 1.1. Mục tiêu tổng quát

**WASHUP** là dự án xây dựng website thương mại điện tử hỗ trợ khách hàng tìm hiểu, lựa chọn và đặt dịch vụ giặt ủi trực tuyến thông qua một quy trình thống nhất, thuận tiện và minh bạch.

Website hướng đến việc giải quyết những bất tiện của dịch vụ giặt ủi truyền thống như mất thời gian di chuyển, khó tiếp cận bảng giá tập trung, hạn chế trong việc sắp xếp lịch giao nhận và thiếu công cụ theo dõi tình trạng đơn hàng.

### 1.2. Mục tiêu cụ thể

- **Đơn giản hóa quy trình đặt dịch vụ:** Cho phép khách hàng xem danh mục, lựa chọn dịch vụ và đặt lịch nhận/giao quần áo trực tiếp trên website.

- **Minh bạch thông tin và chi phí:** Hiển thị bảng giá, phí giao nhận, khuyến mãi và tổng chi phí dự kiến trước khi khách hàng xác nhận đơn hàng.

- **Tăng tính linh hoạt:** Hỗ trợ lựa chọn loại dịch vụ, khối lượng hoặc số lượng quần áo, mùi hương được cung cấp và khung giờ giao nhận phù hợp.

- **Hỗ trợ thanh toán trực tuyến:** Tích hợp tối thiểu một cổng thanh toán trong môi trường thử nghiệm nhằm hoàn thiện quy trình giao dịch.

- **Nâng cao khả năng theo dõi:** Cho phép khách hàng xem lịch sử, thông tin chi tiết và trạng thái xử lý đơn hàng của mình.

- **Hỗ trợ quản lý vận hành:** Cho phép quản trị viên quản lý dịch vụ, bảng giá, voucher, đơn hàng và theo dõi các chỉ số thống kê cơ bản thông qua dashboard.

### 1.3. Giá trị mang lại

**Đối với khách hàng:**
- Tiết kiệm thời gian tìm kiếm và đặt dịch vụ.
- Chủ động lựa chọn lịch nhận/giao quần áo.
- Dễ dàng tham khảo bảng giá và kiểm tra tổng chi phí.
- Theo dõi trạng thái đơn hàng trực tuyến.

**Đối với đơn vị vận hành:**
- Tập trung quản lý thông tin dịch vụ và đơn hàng.
- Giảm thao tác ghi nhận đơn hàng thủ công.
- Hỗ trợ quản lý bảng giá, khuyến mãi và phí giao nhận.
- Theo dõi số lượng đơn hàng, trạng thái xử lý và doanh thu thông qua dashboard.


## 2. Phạm vi

### Trong phạm vi
*(Hệ thống sẽ thực hiện các chức năng cốt lõi của dịch vụ giặt ủi và đáp ứng đầy đủ yêu cầu bắt buộc của môn học)*

- **Trải nghiệm khách hàng (Customer & Public Website):** Cho phép người dùng đăng ký/đăng nhập, xem danh mục dịch vụ (giặt sấy, giặt hấp...), tìm kiếm, lọc, xem chi tiết dịch vụ và quản lý hồ sơ cá nhân[cite: 29].
- **Đặt lịch & Cá nhân hóa (Cart/Checkout):** Chọn dịch vụ, chọn mùi hương, nhập khối lượng, chọn khung giờ lấy đồ (pick up) và giao đồ tận nơi, theo dõi trạng thái đơn hàng[cite: 29, 31].
- **Thanh toán trực tuyến (Payment):** Tích hợp tối thiểu 01 cổng thanh toán (như VNPay, MoMo, hoặc PayPal...) để xử lý giao dịch, nhận kết quả và cập nhật trạng thái đơn[cite: 29, 30].
- **Vận chuyển (Shipping):** Hệ thống tự động tính phí giao nhận tận nơi và quản lý thông tin địa chỉ giao hàng[cite: 30].
- **Khuyến mãi (Voucher):** Áp dụng mã giảm giá, kiểm tra điều kiện, thời hạn và tự động tính lại tổng tiền thanh toán[cite: 30].
- **Hệ thống Quản trị (Admin):** Cung cấp giao diện Dashboard thống kê doanh thu, số đơn hàng. Cho phép Admin quản lý (CRUD) dịch vụ, danh mục, đơn hàng, khách hàng và mã khuyến mãi[cite: 30].
- **Yêu cầu kỹ thuật:** Giao diện tương thích đa thiết bị (Responsive), xử lý bảo mật cơ bản (chống XSS, SQLi...) và thực hiện kiểm thử (Testing)[cite: 31].

### Ngoài phạm vi
*(Hệ thống sẽ KHÔNG thực hiện các chức năng này trong khuôn khổ đồ án)*

- **Mô hình kết nối đa đối tác (Marketplace):** Hệ thống hiện tại vận hành tập trung cho một trung tâm giặt ủi duy nhất, chưa mở rộng kết nối với nhiều tiệm giặt địa phương trong phạm vi 5km.
- **Gói dịch vụ định kỳ (Subscription):** Chưa hỗ trợ tính năng tự động thanh toán và đăng ký gói giặt ủi lặp lại theo tuần/tháng.
- **Ứng dụng di động (Mobile App):** Dự án chỉ tập trung phát triển trên nền tảng Web, chưa xây dựng ứng dụng riêng cho iOS/Android.
- **Innovation & Trải nghiệm nâng cao:** Hệ thống tạm thời chưa tích hợp hệ thống tích điểm đổi thưởng (Loyalty), AI Chatbot tự động trả lời hay thuật toán gợi ý dịch vụ thông minh (Recommendation)[cite: 32].


## 3. Người dùng

### 3.1. Các vai trò người dùng

Để đáp ứng quy trình vận hành và đặt dịch vụ giặt ủi trong phạm vi MVP, hệ thống **WASHUP** xác định ba vai trò người dùng chính:

- **Khách chưa đăng nhập (Guest)**
- **Khách hàng (Customer)**
- **Quản trị viên (Admin)**

Mỗi vai trò được phân quyền phù hợp với nhiệm vụ và phạm vi sử dụng nhằm bảo đảm hệ thống hoạt động đúng quy trình và hạn chế truy cập trái phép.

### 3.2. Nhiệm vụ và quyền hạn của từng vai trò

**Bảng 3. Vai trò và quyền hạn người dùng trong hệ thống WASHUP**

| Vai trò | Nhiệm vụ chính | Quyền hạn dự kiến |
|---|---|---|
| **Khách chưa đăng nhập (Guest)** | Tìm hiểu dịch vụ, bảng giá và quy trình đặt giặt. | Xem trang chủ, danh mục dịch vụ, bảng giá; tìm kiếm, lọc và xem chi tiết dịch vụ; đăng ký và đăng nhập. |
| **Khách hàng (Customer)** | Đặt dịch vụ giặt ủi, thanh toán và theo dõi đơn hàng. | Quản lý hồ sơ và địa chỉ; chọn dịch vụ, đặt lịch nhận/giao; áp dụng voucher; tạo đơn và thanh toán trực tuyến; xem lịch sử, trạng thái và hủy đơn hợp lệ của chính mình; đăng xuất. |
| **Quản trị viên (Admin)** | Vận hành website và xử lý đơn hàng. | Quản lý dịch vụ, bảng giá, mùi hương, voucher, quy tắc phí giao nhận, khách hàng và đơn hàng; cập nhật trạng thái xử lý; xem dashboard thống kê; đăng xuất. |

*Nguồn: Nhóm tác giả tự tổng hợp.*

### 3.3. Giới hạn phân quyền trong MVP

Trong phiên bản đầu tiên, WASHUP chỉ triển khai ba vai trò trên nhằm bảo đảm phạm vi phù hợp với thời gian thực hiện đồ án.

- **Khách chưa đăng nhập:** Chỉ được truy cập những thông tin công khai về dịch vụ và bảng giá.
- **Khách hàng:** Được quản lý thông tin cá nhân và các đơn hàng thuộc tài khoản của mình, không được truy cập dữ liệu của khách hàng khác.
- **Quản trị viên:** Được truy cập các chức năng quản trị để quản lý dịch vụ và xử lý đơn hàng theo quyền được cấp.

Hoạt động giao nhận thực tế được mô phỏng nên **chưa cần bổ sung vai trò tài xế hoặc nhân viên giao nhận**. Hệ thống chỉ vận hành theo mô hình một trung tâm giặt ủi nên **chưa cần vai trò đối tác tiệm giặt**.

Trong MVP, quản trị viên đồng thời đảm nhiệm việc xử lý đơn hàng. Vai trò tài xế và đối tác tiệm giặt sẽ được xem xét khi dự án mở rộng.


## 4. Yêu cầu chức năng

### 4.1. Tổng quan yêu cầu chức năng

Các yêu cầu chức năng của WASHUP được xây dựng dựa trên phạm vi MVP, vai trò người dùng và quy trình nghiệp vụ mà nhóm đã xác định.

Hệ thống có tổng cộng **27 chức năng dự kiến**, được phân thành:

- **F01–F18:** 18 chức năng bắt buộc trong MVP.
- **F19:** 1 chức năng tùy chọn, triển khai sau các chức năng cốt lõi nếu đủ nguồn lực.
- **F20–F27:** 8 chức năng nâng cao, định hướng phát triển sau MVP.

Mỗi chức năng được mô tả bằng mã yêu cầu, tên chức năng, nội dung, người sử dụng, mức độ ưu tiên và tiêu chí nghiệm thu.

Các tiêu chí nghiệm thu dưới đây là đề xuất cụ thể hóa yêu cầu để phục vụ phát triển và kiểm thử; nhóm cần rà soát, xác nhận trước khi xem là tiêu chí chính thức.

### 4.2. Các yêu cầu chức năng thuộc MVP

**Bảng 4.1. Yêu cầu chức năng tài khoản và tra cứu dịch vụ**

| Mã | Chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu đề xuất |
|---|---|---|---|---|---|
| **F01** | Đăng ký, đăng nhập, đăng xuất | Cho phép người dùng đăng ký tài khoản, đăng nhập và đăng xuất khỏi hệ thống. | Guest, Customer, Admin | Bắt buộc | Đăng ký hợp lệ thành công; thông báo khi thông tin không hợp lệ; đăng nhập đúng tài khoản; đăng xuất kết thúc phiên truy cập. |
| **F02** | Xem danh sách dịch vụ và bảng giá | Hiển thị các dịch vụ giặt ủi cùng đơn giá tương ứng. | Guest, Customer | Bắt buộc | Danh sách hiển thị đúng dịch vụ đang được cung cấp và bảng giá đã cấu hình. |
| **F03** | Xem chi tiết dịch vụ | Hiển thị tên, mô tả, đơn vị tính, giá và thời gian xử lý dự kiến. | Guest, Customer | Bắt buộc | Khi chọn dịch vụ, hệ thống hiển thị đúng thông tin chi tiết của dịch vụ đó. |
| **F04** | Tìm kiếm và lọc dịch vụ | Cho phép tìm kiếm theo tên và lọc theo loại dịch vụ. | Guest, Customer | Bắt buộc | Kết quả tìm kiếm và lọc phù hợp với điều kiện đã nhập; hiển thị thông báo khi không tìm thấy dịch vụ. |
| **F05** | Quản lý thông tin cá nhân và địa chỉ | Cho phép khách hàng xem và cập nhật thông tin cá nhân, địa chỉ nhận/giao. | Customer | Bắt buộc | Cập nhật thông tin hợp lệ thành công; dữ liệu được lưu và chỉ tài khoản có quyền mới được chỉnh sửa. |

**Bảng 4.2. Yêu cầu chức năng đặt dịch vụ và tính chi phí**

| Mã | Chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu đề xuất |
|---|---|---|---|---|---|
| **F06** | Lựa chọn dịch vụ | Cho phép chọn dịch vụ, nhập khối lượng hoặc số lượng quần áo và mùi hương được hỗ trợ. | Customer | Bắt buộc | Lưu đúng lựa chọn; từ chối khối lượng hoặc số lượng không hợp lệ; chỉ hiển thị tùy chọn được hỗ trợ. |
| **F07** | Đặt lịch nhận và giao trả | Cho phép chọn ngày và khung giờ nhận/giao theo lịch được thiết lập sẵn. | Customer | Bắt buộc | Chỉ chấp nhận khung giờ hợp lệ; lưu chính xác ngày và thời gian giao nhận đã chọn. |
| **F08** | Tính và hiển thị chi phí dự kiến | Tính tổng tiền dựa trên dịch vụ, đơn giá, khối lượng hoặc số lượng và các khoản điều chỉnh hợp lệ. | Customer, Hệ thống | Bắt buộc | Hiển thị đúng thành tiền, khoản phí và tổng chi phí theo công thức nhóm đã thống nhất. |
| **F09** | Tự động tính phí giao nhận | Tính phí giao nhận dựa trên khu vực và quy tắc được cấu hình. | Hệ thống | Bắt buộc | Phí giao nhận được tính đúng theo khu vực, mức phí và điều kiện miễn phí đã thiết lập. |
| **F10** | Nhập và áp dụng voucher | Kiểm tra mã giảm giá, điều kiện và thời hạn sử dụng; cập nhật tổng tiền. | Customer, Hệ thống | Bắt buộc | Chấp nhận mã đủ điều kiện, tính đúng số tiền giảm; từ chối mã hết hạn hoặc không hợp lệ. |

**Bảng 4.3. Yêu cầu chức năng tạo đơn, thanh toán và theo dõi**

| Mã | Chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu đề xuất |
|---|---|---|---|---|---|
| **F11** | Xác nhận và tạo đơn hàng | Kiểm tra thông tin đặt dịch vụ, tạo mã đơn duy nhất và lưu đơn hàng với trạng thái ban đầu "Chờ xác nhận". | Customer | Bắt buộc | Chỉ tạo đơn khi dữ liệu hợp lệ; mỗi đơn có mã duy nhất; thông tin đơn được lưu đầy đủ và có trạng thái ban đầu chính xác. |
| **F12** | Thanh toán trực tuyến | Kết nối một cổng thanh toán trong môi trường thử nghiệm, xử lý và ghi nhận kết quả giao dịch. | Customer, Hệ thống | Bắt buộc | Giao dịch thử nghiệm được xử lý; hệ thống xác minh kết quả và ghi nhận đúng trạng thái thành công hoặc thất bại. |
| **F13** | Xem và theo dõi đơn hàng | Cho phép khách hàng xem lịch sử, chi tiết, trạng thái và hủy đơn theo quy định. | Customer | Bắt buộc | Khách hàng chỉ xem được đơn của mình; trạng thái hiển thị chính xác; chỉ cho phép hủy đơn khi ở trạng thái "Chờ xác nhận". |

**Bảng 4.4. Yêu cầu chức năng quản trị hệ thống**

| Mã | Chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu đề xuất |
|---|---|---|---|---|---|
| **F14** | Quản lý dịch vụ, bảng giá, mùi hương | Cho phép thêm, chỉnh sửa và ẩn dịch vụ, bảng giá và mùi hương được hỗ trợ. | Admin | Bắt buộc | Thông tin được cập nhật đúng; dịch vụ đã ẩn không xuất hiện trong danh sách đặt dịch vụ; dữ liệu đơn hàng cũ không bị thay đổi. |
| **F15** | Quản lý voucher | Cho phép tạo, chỉnh sửa và vô hiệu hóa mã giảm giá. | Admin | Bắt buộc | Lưu chính xác điều kiện voucher; mã bị vô hiệu hóa không thể tiếp tục được áp dụng. |
| **F16** | Cấu hình phí giao nhận | Quản lý khu vực giao nhận, mức phí và điều kiện miễn phí. | Admin | Bắt buộc | Thay đổi quy tắc phí được lưu; đơn hàng mới được tính phí theo cấu hình hợp lệ. |
| **F17** | Quản lý đơn hàng | Xem danh sách đơn hàng, kiểm tra thanh toán và cập nhật trạng thái xử lý. | Admin | Bắt buộc | Admin xem được đơn hàng cần xử lý; trạng thái cập nhật theo quy trình hợp lệ và được lưu chính xác. |
| **F18** | Dashboard quản trị | Hiển thị số lượng đơn hàng, đơn theo trạng thái và doanh thu cơ bản. | Admin | Bắt buộc | Dashboard hiển thị đúng số liệu từ dữ liệu đơn hàng theo quy tắc thống kê được nhóm thống nhất. |

*Nguồn nội dung chức năng: Nhóm tác giả tự tổng hợp. Mô tả và tiêu chí nghiệm thu được cụ thể hóa để nhóm rà soát.*

### 4.3. Chức năng tùy chọn

**Bảng 4.5. Chức năng tùy chọn trong giai đoạn MVP**

| Mã | Chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu đề xuất |
|---|---|---|---|---|---|
| **F19** | Quản lý tài khoản khách hàng | Cho phép quản trị viên xem danh sách và khóa/mở khóa tài khoản khách hàng. | Admin | Tùy chọn | Admin xem đúng danh sách tài khoản; thao tác khóa/mở khóa được lưu và hệ thống áp dụng trạng thái tài khoản tương ứng. |


### 4.4. Các chức năng phát triển sau MVP

**Bảng 4.6. Yêu cầu chức năng nâng cao ngoài phạm vi MVP**

| Mã | Chức năng | Mô tả | Người sử dụng | Ưu tiên | Tiêu chí nghiệm thu dự kiến |
|---|---|---|---|---|---|
| **F20** | Gói giặt ủi định kỳ | Đăng ký gói giặt theo chu kỳ và hỗ trợ tự động gia hạn. | Customer | Nâng cao | Hệ thống quản lý được chu kỳ dịch vụ và trạng thái gia hạn theo quy tắc được xác định. |
| **F21** | Tích điểm thành viên | Tích lũy và sử dụng điểm thưởng của khách hàng. | Customer | Nâng cao | Điểm được cộng, trừ và lưu lịch sử theo quy tắc hợp lệ. |
| **F22** | Đánh giá và nhận xét dịch vụ | Cho phép khách hàng gửi đánh giá về dịch vụ đã sử dụng. | Customer | Nâng cao | Chỉ chấp nhận đánh giá theo điều kiện được thiết lập và lưu đúng nội dung hợp lệ. |
| **F23** | Thông báo qua SMS/email | Tự động gửi thông báo khi trạng thái đơn hàng thay đổi. | Hệ thống | Nâng cao | Thông báo được tạo đúng khi xuất hiện sự kiện phù hợp và ghi nhận kết quả gửi. |
| **F24** | Điều phối và định vị tài xế | Hỗ trợ phân công người giao nhận và theo dõi vị trí theo thời gian thực. | Tài xế, Admin | Nâng cao | Admin có thể phân công giao nhận và xem dữ liệu vị trí từ hệ thống được tích hợp. |
| **F25** | Kết nối nhiều tiệm giặt | Cho phép kết nối và quản lý nhiều đối tác giặt ủi trong bán kính 5 km. | Đối tác, Admin | Nâng cao | Đối tác được quản lý riêng và đơn hàng được phân bổ theo quy tắc đã thiết lập. |
| **F26** | Chatbot AI và gợi ý dịch vụ | Hỗ trợ trả lời câu hỏi và đề xuất dịch vụ phù hợp. | Customer | Nâng cao | Chatbot phản hồi được các câu hỏi trong phạm vi dữ liệu hỗ trợ và hiển thị gợi ý theo tiêu chí xác định. |
| **F27** | Ứng dụng di động riêng | Phát triển ứng dụng đặt dịch vụ trên thiết bị di động. | Customer | Nâng cao | Các chức năng được lựa chọn hoạt động và được kiểm thử trên nền tảng di động mục tiêu. |


### 4.5. Các quy tắc nghiệp vụ cần xác nhận

Trước khi phát triển và kiểm thử, nhóm cần hoàn thiện một số quy tắc nghiệp vụ:

1. **Phạm vi đơn hàng:** Mỗi đơn được chọn một hay nhiều loại dịch vụ.
2. **Quy tắc tính giá:** Đơn vị tính theo kg/món, xử lý khối lượng lẻ, phụ phí và mức giá tối thiểu.
3. **Lịch giao nhận:** Khung giờ hợp lệ, khu vực phục vụ và thời gian xử lý tối thiểu.
4. **Phí giao nhận:** Mức phí theo khu vực, phí một chiều/hai chiều và điều kiện miễn phí.
5. **Voucher:** Hình thức giảm giá, điều kiện áp dụng và thứ tự tính với phí giao nhận.
6. **Thanh toán:** Cổng thanh toán cụ thể, cách xử lý giao dịch thất bại và hoàn tiền.
7. **Điều chỉnh đơn hàng:** Xử lý khi khối lượng quần áo thực tế khác khối lượng dự kiến.
8. **Dashboard:** Quy tắc xác định doanh thu, đơn đã thanh toán và thời gian thống kê.



## 5. Yêu cầu phi chức năng

### 5.1. Tổng quan

Yêu cầu phi chức năng (Non-Functional Requirements – NFR) xác định các tiêu chuẩn về giao diện, tính chính xác của dữ liệu, bảo mật, tính ổn định, khả năng bảo trì và kiểm thử của hệ thống WASHUP.

Các yêu cầu này được xây dựng nhằm hỗ trợ website vận hành an toàn, thuận tiện và phù hợp với quy trình đặt dịch vụ giặt ủi trực tuyến trong phạm vi MVP.

### 5.2. Danh sách yêu cầu phi chức năng

**Bảng 5.1. Các yêu cầu phi chức năng của hệ thống WASHUP**

| Mã | Nhóm yêu cầu | Nội dung yêu cầu |
|---|---|---|
| **NFR-01** | Giao diện và khả năng sử dụng | Giao diện rõ ràng, thống nhất, dễ thao tác trên máy tính và điện thoại; biểu mẫu có nhãn và thông báo lỗi dễ hiểu. |
| **NFR-02** | Tính chính xác của dữ liệu | Chi phí dịch vụ, phí giao nhận và khuyến mãi được tính nhất quán; lưu đơn giá áp dụng tại thời điểm đặt hàng. |
| **NFR-03** | Bảo mật | Mật khẩu được băm an toàn; phân quyền khách hàng và quản trị viên; kiểm tra dữ liệu đầu vào và bảo vệ thông tin cá nhân. |
| **NFR-04** | An toàn thanh toán | Kết quả thanh toán phải được xác minh từ phía hệ thống hoặc nhà cung cấp dịch vụ, không chỉ dựa vào thông báo trên trình duyệt. |
| **NFR-05** | Tính ổn định | Không tạo đơn hoặc ghi nhận thanh toán trùng lặp khi người dùng gửi lại yêu cầu; xử lý lỗi có kiểm soát. |
| **NFR-06** | Khả năng bảo trì | Mã nguồn được tổ chức rõ ràng, tách các chức năng nghiệp vụ và có thể kiểm thử từng phần. |
| **NFR-07** | Khả năng kiểm thử | Kiểm tra các luồng đặt dịch vụ, thanh toán, áp dụng voucher, tính phí và phân quyền bằng dữ liệu thử nghiệm. |

*Nguồn: Nhóm tác giả tổng hợp từ kết quả phân tích yêu cầu dự án WASHUP.*

### 5.3. Cơ sở xác định yêu cầu

WASHUP xử lý thông tin liên hệ, địa chỉ giao nhận, đơn hàng và giao dịch thanh toán. Vì vậy, bên cạnh việc xây dựng giao diện thuận tiện, hệ thống cần chú trọng tính chính xác, tính nhất quán và an toàn dữ liệu.

Đặc biệt, các chức năng liên quan đến tính chi phí, áp dụng voucher và thanh toán trực tuyến cần được kiểm tra kỹ nhằm hạn chế sai lệch số tiền, ghi nhận giao dịch không chính xác hoặc tạo đơn hàng trùng lặp.

### 5.4. Giới hạn về chỉ tiêu kỹ thuật

Trong giai đoạn khởi tạo dự án, nhóm chưa xác định các chỉ tiêu định lượng cụ thể về hiệu năng, thời gian phản hồi và số lượng người dùng đồng thời.

Các chỉ tiêu này cần được xem xét sau khi nhóm đánh giá môi trường triển khai và khả năng kỹ thuật thực tế, tránh đưa ra những cam kết vượt quá nguồn lực của đồ án.

---

## 6. Giới hạn và giả định

### 6.1. Giới hạn của dự án

WASHUP được thực hiện trong khuôn khổ học phần với thời gian và nguồn lực giới hạn. Vì vậy, nhóm tập trung phát triển các chức năng cốt lõi của website đặt dịch vụ giặt ủi trực tuyến, bảo đảm phù hợp với khả năng triển khai và kiểm thử.

**Bảng 6.1. Các giới hạn trong quá trình phát triển WASHUP**

| Yếu tố | Giới hạn của dự án |
|---|---|
| **Thời gian thực hiện** | Dự án được triển khai trong 8 tuần, bao gồm khảo sát, thiết kế, lập trình, tích hợp, kiểm thử và hoàn thiện. |
| **Nguồn nhân lực** | Nhóm gồm 8 thành viên; năng lực lập trình cụ thể của từng thành viên chưa được đánh giá đầy đủ. |
| **Công nghệ phát triển** | Nhóm lựa chọn HTML5, CSS3, JavaScript, Bootstrap 5, PHP 8.4 và MySQL để phát triển website. |
| **Môi trường phát triển** | Sử dụng Visual Studio Code và XAMPP để viết mã nguồn, quản lý cơ sở dữ liệu và chạy thử hệ thống. |
| **Phạm vi kinh doanh** | MVP chỉ mô phỏng hoạt động của một trung tâm giặt ủi, chưa triển khai mô hình kết nối nhiều tiệm giặt độc lập. |
| **Hoạt động giao nhận** | Sử dụng lịch nhận/giao và trạng thái đơn hàng để mô phỏng; chưa tích hợp điều phối tài xế hoặc định vị theo thời gian thực. |
| **Thanh toán trực tuyến** | Tích hợp một cổng thanh toán trong môi trường thử nghiệm; chưa triển khai giao dịch thanh toán thực tế. |
| **Dữ liệu** | Sử dụng dữ liệu thử nghiệm về dịch vụ, bảng giá, khách hàng, đơn hàng và lịch giao nhận. |
| **Chức năng nâng cao** | Các chức năng F20–F27 không thuộc phạm vi MVP và sẽ được xem xét phát triển trong giai đoạn sau. |

### 6.2. Các giả định triển khai

Dựa trên phạm vi đã xác định, nhóm sử dụng một số giả định ban đầu để xây dựng kế hoạch phát triển WASHUP:

1. **Mô hình vận hành:** WASHUP được phát triển theo mô hình một trung tâm giặt ủi duy nhất trong khu vực thử nghiệm.

2. **Thông tin dịch vụ:** Danh sách dịch vụ, bảng giá, mùi hương và thời gian xử lý được thiết lập bằng dữ liệu thử nghiệm để mô phỏng hoạt động thực tế.

3. **Quy trình giao nhận:** Khách hàng lựa chọn lịch nhận/giao theo các khung giờ được cấu hình sẵn. Việc giao nhận thực tế chưa được triển khai trong MVP.

4. **Quy tắc tính phí:** Chi phí dịch vụ được xác định dựa trên đơn giá và khối lượng hoặc số lượng quần áo. Phí giao nhận được tính theo khu vực hoặc quy tắc đã cấu hình.

5. **Khuyến mãi:** Hệ thống kiểm tra điều kiện và thời hạn voucher trước khi áp dụng giảm giá vào đơn hàng.

6. **Thanh toán:** Nhóm lựa chọn tích hợp một cổng thanh toán trong môi trường thử nghiệm. Nhà cung cấp, phương án tích hợp và cách xử lý giao dịch cần được kiểm tra trong quá trình triển khai.

7. **Quản lý đơn hàng:** Quản trị viên chịu trách nhiệm kiểm tra, xác nhận và cập nhật trạng thái xử lý đơn hàng. Khách hàng chỉ được xem và quản lý các đơn hàng thuộc tài khoản của mình.

8. **Nguồn lực thực hiện:** Các thành viên phối hợp theo kế hoạch phân công. Công việc có thể được điều chỉnh khi nhóm đánh giá năng lực kỹ thuật và tiến độ thực tế.

### 6.3. Các nội dung cần tiếp tục xác minh

Trước khi triển khai các chức năng liên quan, nhóm cần thống nhất:

- Quy tắc tính giá theo kg hoặc theo món, cách xử lý khối lượng lẻ và mức phí tối thiểu.
- Số loại dịch vụ được phép lựa chọn trong cùng một đơn hàng.
- Khu vực phục vụ, khung giờ nhận/giao và điều kiện đặt lịch.
- Cách tính phí giao nhận và điều kiện miễn phí.
- Hình thức voucher và thứ tự áp dụng giảm giá.
- Cổng thanh toán, cách xử lý giao dịch thất bại và hoàn tiền.
- Cách xử lý khi khối lượng thực tế khác khối lượng dự kiến.
- Quy tắc thống kê doanh thu và trạng thái đơn hàng trên dashboard.
