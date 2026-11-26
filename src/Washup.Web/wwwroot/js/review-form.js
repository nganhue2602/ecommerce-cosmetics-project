/* =========================================
   WASHUP - CUSTOMER REVIEW FORM
   Task: CD26-08
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // 1. Lấy các thành phần trong biểu mẫu
    const form = document.getElementById("reviewForm");

    if (!form) return;

    const stars = form.querySelectorAll(".rating-star");
    const ratingInput = document.getElementById("reviewRating");
    const ratingText = document.getElementById("ratingText");

    const comment = document.getElementById("reviewComment");
    const charCount = document.getElementById("reviewCharCount");

    const ratingError = document.getElementById("ratingError");
    const commentError = document.getElementById("commentError");
    const message = document.getElementById("reviewMessage");

    // 2. Danh sách mức độ hài lòng
    const ratingLabels = [
        "Vui lòng chọn số sao",
        "Rất không hài lòng",
        "Không hài lòng",
        "Bình thường",
        "Hài lòng",
        "Rất hài lòng"
    ];

    // 3. Hàm cập nhật giao diện ngôi sao
    function updateStars(rating) {

        stars.forEach(function (star) {

            const value = Number(star.dataset.rating);

            star.classList.toggle("active", value <= rating);

        });

        ratingText.textContent = ratingLabels[rating];

    }

    // 4. Xử lý khi khách hàng chọn số sao
    stars.forEach(function (star) {

        star.addEventListener("click", function () {

            const rating = Number(star.dataset.rating);

            ratingInput.value = rating;

            updateStars(rating);

            stars.forEach(function (item) {

                item.setAttribute(
                    "aria-pressed",
                    String(Number(item.dataset.rating) === rating)
                );

            });

            ratingError.textContent = "";
            message.textContent = "";

        });

        // Hiệu ứng khi rê chuột qua ngôi sao
        star.addEventListener("mouseenter", function () {

            updateStars(Number(star.dataset.rating));

        });

        // Khôi phục số sao đã chọn
        star.addEventListener("mouseleave", function () {

            updateStars(Number(ratingInput.value));

        });

    });

    // 5. Đếm số ký tự nhận xét
    comment.addEventListener("input", function () {

        charCount.textContent = comment.value.length;

        if (comment.value.trim() !== "") {

            commentError.textContent = "";

        }

        message.textContent = "";

    });

    // 6. Kiểm tra dữ liệu đầu vào
    function validateReview() {

        let isValid = true;

        const rating = Number(ratingInput.value);
        const reviewContent = comment.value.trim();

        ratingError.textContent = "";
        commentError.textContent = "";

        // Kiểm tra số sao
        if (!Number.isInteger(rating) ||
            rating < 1 || rating > 5) {

            ratingError.textContent =
                "Vui lòng chọn mức đánh giá từ 1 đến 5 sao.";

            isValid = false;

        }

        // Kiểm tra nội dung nhận xét
        if (reviewContent === "") {

            commentError.textContent =
                "Vui lòng nhập nội dung nhận xét.";

            isValid = false;

        } else if (reviewContent.length > 1000) {

            commentError.textContent =
                "Nhận xét không được vượt quá 1000 ký tự.";

            isValid = false;

        }

        return isValid;

    }

    // 7. Xử lý khi nhấn nút gửi đánh giá
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        message.textContent = "";
        message.className = "review-message";

        // Kiểm tra dữ liệu
        if (!validateReview()) {

            message.textContent =
                "Vui lòng kiểm tra lại thông tin đánh giá.";

            message.classList.add("error");

            if (ratingError.textContent) {
                stars[0].focus();
            } else {
                comment.focus();
            }

            return;

        }

        // Chuẩn bị dữ liệu để tích hợp backend
        const reviewData = new FormData(form);

        reviewData.set("Comment", comment.value.trim());

        // TODO: Tích hợp endpoint POST sau khi nhóm
        // thống nhất Controller, OrderItemId,
        // ServiceId và ShopId.

        // Hiện tại chỉ kiểm tra dữ liệu phía trình duyệt.
        // Chưa gửi hoặc lưu đánh giá vào cơ sở dữ liệu.

        message.textContent =
            "Dữ liệu đánh giá hợp lệ. " +
            "Biểu mẫu đang ở chế độ demo, " +
            "chưa kết nối chức năng lưu đánh giá.";

    });

});
