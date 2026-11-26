
# WASHUP – QA Test Matrix

**Người phụ trách:** Yến Trân  
**Mục đích:** Quản lý môi trường kiểm thử, nhóm GitHub Issues QA và kiểm tra khởi động bản nền/demo.

## 1. Môi trường kiểm thử

| Thông tin | Giá trị |
|---|---|
| Repository | Điền URL repository WASHUP |
| Demo URL | Điền link demo đang hoạt động |
| Branch kiểm thử | Điền tên nhánh demo/QA |
| Commit SHA | Điền mã commit đang kiểm thử |
| Ngày kiểm thử | YYYY-MM-DD |
| Người kiểm thử | Yến Trân |
| Trình duyệt | Điền tên và phiên bản trình duyệt |
| Hệ điều hành | Điền hệ điều hành thực tế |
| Thiết bị | Desktop / Laptop / Tablet / Mobile |
| Viewport | Ghi kích thước đã kiểm tra |
| Tài khoản khách hàng | Tài khoản test phù hợp |
| Tài khoản kiểm duyệt/Admin | Tài khoản có quyền kiểm duyệt |
| Dữ liệu mẫu | Đơn hàng, đánh giá, tệp upload, Helpful, báo cáo và dữ liệu biểu đồ |

**Lưu ý:** Không ghi mật khẩu hoặc token của tài khoản vào tài liệu hay GitHub Issue.

## 2. Nhóm GitHub Issues QA theo 3 module

| Module | Test case | Phạm vi lỗi cần ghi nhận |
|---|---|---|
| Module 1 – Gửi đánh giá và upload | TC01–TC05 | Gửi đánh giá hợp lệ/sai, validation, upload tệp hợp lệ/không hợp lệ |
| Module 2 – Kiểm duyệt, Helpful và báo cáo | TC06–TC10 | Duyệt/từ chối đánh giá, Helpful, thao tác lặp, gửi báo cáo |
| Module 3 – Dashboard và 5 biểu đồ | TC11–TC15 | Sai số liệu, sai phân loại, bộ lọc, nhãn/trục, dữ liệu theo thời gian |

Mỗi lỗi nên tạo thành một GitHub Issue riêng nếu có thể tái hiện độc lập.

## 3. Mẫu GitHub Issue QA

### Title

`[QA][Module] Mô tả ngắn lỗi – TCxx`

Ví dụ:

`[QA][Review] Không gửi được đánh giá hợp lệ – TC01`

### Nội dung Issue

**Test case:** TCxx

**Module:** Module 1 / Module 2 / Module 3

**Environment:**
- Demo URL:
- Branch:
- Commit SHA:
- Browser / version:
- Device / viewport:

**Role/account:** Ghi vai trò tài khoản test, không ghi mật khẩu.

**Preconditions / Sample data:**
- Điều kiện trước khi kiểm thử:
- Dữ liệu mẫu:

**Steps to reproduce:**
1. 
2. 
3. 

**Expected result:**
Ghi kết quả kỳ vọng theo test case.

**Actual result:**
Ghi kết quả thực tế quan sát được.

**Frequency:** Always / Sometimes / Once

**Severity:** P1 / P2 / P3 / P4

**Evidence:**
Đính kèm ảnh, video hoặc log.

**Retest result:**
Cập nhật sau khi kiểm tra bản sửa.

## 4. Phân loại lỗi và mức độ ưu tiên

### Loại lỗi

- **Bug:** Chức năng hoạt động không đúng yêu cầu.
- **UI/Responsive:** Giao diện bị lệch, tràn hoặc khó sử dụng.
- **Data:** Sai số liệu, thiếu dữ liệu hoặc đếm trùng.
- **Access/Security:** Quyền truy cập không đúng.
- **Question/Spec:** Yêu cầu hoặc quy tắc nghiệp vụ chưa rõ.

### Severity

| Mức độ | Mô tả |
|---|---|
| P1 – Critical | Chặn luồng chính hoặc có nguy cơ gây mất/sai dữ liệu nghiêm trọng |
| P2 – High | Chức năng quan trọng bị lỗi nhưng vẫn có đường vòng |
| P3 – Medium | Lỗi nhỏ, ảnh hưởng một phần trải nghiệm hoặc giao diện |
| P4 – Low | Lỗi hiển thị nhỏ hoặc đề xuất cải tiến |

Mức độ ưu tiên cần được nhóm xác nhận dựa trên ảnh hưởng thực tế.

## 5. Quy tắc log evidence

- Tên file theo mẫu: `TCxx_short-description_YYYYMMDD.png`.
- Ghi rõ test case, thời gian, URL/màn hình và kết quả quan sát.
- Không ghi password, token hoặc thông tin cá nhân không cần thiết.
- Một Issue nên mô tả một lỗi có thể tái hiện.
- Nếu lỗi không tái hiện được, ghi rõ số lần thử và điều kiện thử.
- Chỉ đóng Issue sau khi đã kiểm tra lại bản sửa và có evidence.
- Nếu chưa thể kiểm thử do thiếu tài khoản, dữ liệu hoặc demo, ghi `Blocked` và lý do.

## 6. Checklist thử khởi động bản nền/demo

### 6.1. Xác định phiên bản

- [ ] Xác định đúng branch dùng để kiểm thử.
- [ ] Ghi lại commit SHA.
- [ ] Xác nhận branch đã cập nhật theo phiên bản được yêu cầu.

### 6.2. Kiểm tra link demo

- [ ] Lấy link demo từ README, cấu hình deploy hoặc người phụ trách.
- [ ] Mở link demo trên trình duyệt.
- [ ] Trang chính tải thành công.
- [ ] Không gặp màn hình trắng hoặc lỗi 404/500.
- [ ] Các đường dẫn chính hoạt động.
- [ ] Ghi lại link demo đã kiểm tra.

### 6.3. Kiểm tra Console và Network

- [ ] Mở Developer Tools → Console.
- [ ] Tải lại trang và ghi nhận lỗi màu đỏ.
- [ ] Mở Network và kiểm tra request thất bại.
- [ ] Kiểm tra các file CSS, JavaScript và hình ảnh có tải thành công.
- [ ] Lưu ảnh/log nếu phát hiện lỗi.

### 6.4. Kiểm tra tài khoản và dữ liệu mẫu

- [ ] Đăng nhập bằng tài khoản khách hàng test.
- [ ] Kiểm tra quyền gửi đánh giá.
- [ ] Đăng nhập bằng tài khoản kiểm duyệt/Admin.
- [ ] Kiểm tra quyền duyệt và từ chối đánh giá.
- [ ] Xác nhận có dữ liệu mẫu cho TC01–TC15.
- [ ] Nếu thiếu dữ liệu, ghi rõ test case bị Blocked.

## 7. Bảng tổng hợp kết quả kiểm thử

| Test case | Kết quả thực tế | Trạng thái | Issue link | Evidence |
|---|---|---|---|---|
| TC01 | | Not run | | |
| TC02 | | Not run | | |
| TC03 | | Not run | | |
| TC04 | | Not run | | |
| TC05 | | Not run | | |
| TC06 | | Not run | | |
| TC07 | | Not run | | |
| TC08 | | Not run | | |
| TC09 | | Not run | | |
| TC10 | | Not run | | |
| TC11 | | Not run | | |
| TC12 | | Not run | | |
| TC13 | | Not run | | |
| TC14 | | Not run | | |
| TC15 | | Not run | | |

### Quy ước trạng thái

- **Pass:** Kết quả thực tế đáp ứng kết quả kỳ vọng.
- **Fail:** Kết quả thực tế không đáp ứng kết quả kỳ vọng.
- **Blocked:** Không thể chạy do thiếu điều kiện hoặc môi trường.
- **Not run:** Chưa thực hiện kiểm thử.
