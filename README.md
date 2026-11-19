# WASHUP – Website dịch vụ giặt ủi trực tuyến

**Đồ án môn Phát triển ứng dụng Thương mại điện tử – Nhóm 6**

WASHUP là nền tảng cung cấp dịch vụ giặt ủi trực tuyến, giúp khách hàng dễ dàng tìm kiếm, lựa chọn và quản lý các dịch vụ giặt sấy, giặt hấp và chăm sóc đồ dùng cá nhân.

## 1. Phiên bản hiện tại – Bài tập Buổi 3

Phiên bản Buổi 3 tập trung hoàn thiện giao diện website và tích hợp JavaScript nhằm xử lý dữ liệu dịch vụ, tìm kiếm, lọc, sắp xếp và quản lý giỏ hàng.

## 2. Các chức năng chính

- Hiển thị danh sách 8 dịch vụ giặt ủi.
- Tìm kiếm dịch vụ theo từ khóa, hỗ trợ từ khóa có dấu và không dấu.
- Lọc dịch vụ theo danh mục.
- Sắp xếp dịch vụ theo giá tăng dần và giảm dần.
- Xem thông tin chi tiết dịch vụ thông qua ID.
- Thêm dịch vụ vào giỏ hàng.
- Tăng, giảm số lượng và xóa dịch vụ khỏi giỏ hàng.
- Tự động tính thành tiền và tổng giá trị giỏ hàng.
- Hiển thị thông báo khi giỏ hàng trống.
- Lưu và khôi phục dữ liệu giỏ hàng bằng localStorage.

## 3. Danh sách dịch vụ

Website hiện quản lý 8 dịch vụ chính:

1. Giặt sấy (`giat-say`)
2. Giặt hấp (`giat-hap`)
3. Chăn mền (`chan-men`)
4. Vệ sinh giày (`ve-sinh-giay`)
5. Rèm cửa (`rem-cua`)
6. Thú bông (`thu-bong`)
7. Giặt nhanh (`giat-nhanh`)
8. Ủi quần áo (`ui-quan-ao`)

## 4. Cấu trúc dự án

| Tệp / Thư mục | Chức năng |
|---|---|
| `index.html` | Trang chủ |
| `products.html` | Danh sách dịch vụ |
| `service-detail.html` | Chi tiết dịch vụ |
| `cart.html` | Quản lý giỏ hàng |
| `about.html` | Giới thiệu dự án |
| `css/` | Chứa các tệp CSS |
| `js/products.js` | Quản lý dữ liệu dịch vụ |
| `js/common.js` | Các hàm dùng chung |
| `js/catalog-filters.js` | Tìm kiếm, lọc và sắp xếp |
| `js/cart.js` | Xử lý giỏ hàng và lưu trữ dữ liệu |
| `images/` | Hình ảnh sử dụng trong website |

## 5. Công nghệ sử dụng

- **HTML5:** Xây dựng cấu trúc website.
- **CSS3:** Thiết kế giao diện và bố cục.
- **JavaScript:** Xử lý dữ liệu và các chức năng tương tác.
- **localStorage:** Lưu trữ và khôi phục giỏ hàng trên trình duyệt.
- **GitHub:** Quản lý mã nguồn và phối hợp làm việc nhóm.
- **GitHub Pages:** Triển khai website trực tuyến.
- **Chrome DevTools:** Kiểm tra và gỡ lỗi website.

## 6. Kiểm thử

Website được kiểm tra thông qua các luồng chức năng chính:

- Tìm kiếm, lọc và sắp xếp dịch vụ.
- Truy cập trang chi tiết theo ID.
- Thêm, cập nhật số lượng và xóa dịch vụ khỏi giỏ hàng.
- Kiểm tra tổng tiền sau mỗi thao tác.
- Kiểm tra khả năng lưu và khôi phục giỏ hàng sau khi tải lại trang.
- Kiểm tra giao diện trên các kích thước màn hình khác nhau.

Kết quả kiểm thử được ghi nhận trong quá trình kiểm thử tích hợp của nhóm.

## 7. Giới hạn hiện tại

- Chưa tích hợp Backend và cơ sở dữ liệu thực tế.
- Chưa có hệ thống đăng nhập và quản lý tài khoản hoàn chỉnh.
- Chưa tích hợp cổng thanh toán trực tuyến.
- Dữ liệu dịch vụ hiện được quản lý phía Frontend.
- Giỏ hàng được lưu trữ cục bộ bằng localStorage, chưa đồng bộ giữa nhiều thiết bị.

## 8. Hướng phát triển

- Xây dựng Backend và cơ sở dữ liệu.
- Hoàn thiện hệ thống tài khoản khách hàng.
- Phát triển chức năng đặt lịch và quản lý đơn hàng.
- Tích hợp thanh toán trực tuyến.
- Hoàn thiện hệ thống quản lý tiệm giặt ủi và theo dõi trạng thái đơn hàng.
