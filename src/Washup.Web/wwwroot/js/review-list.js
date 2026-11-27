/* CD27-22 - WASHUP: lọc, sắp xếp và điểm trung bình của danh sách công khai */
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('service-reviews');
    if (!root) return;
    const list = root.querySelector('#public-review-list');
    const ratingFilter = root.querySelector('#rating-filter');
    const sortFilter = root.querySelector('#review-sort');
    const empty = root.querySelector('#review-empty');
    if (!list || !ratingFilter || !sortFilter || !empty) return;

    const reviews = [...list.querySelectorAll('.review-card[data-rating]')];
    const approved = () => reviews.filter(card =>
        card.dataset.status === 'Approved' &&
        Number.isInteger(Number(card.dataset.rating)) &&
        Number(card.dataset.rating) >= 1 && Number(card.dataset.rating) <= 5
    );
    const dateCompare = (a, b) => b.dataset.date.localeCompare(a.dataset.date);

    function updateReviewSummary() {
        const valid = approved();
        const count = valid.length;
        const average = count ? valid.reduce((sum, card) => sum + Number(card.dataset.rating), 0) / count : 0;
        root.querySelector('#review-average').textContent = count ? `${average.toFixed(1)} / 5` : 'Chưa có đánh giá';
        root.querySelector('#review-count').textContent = `${count} lượt đánh giá minh họa`;
        root.querySelector('.stars-fill').style.width = `${average / 5 * 100}%`;
        root.querySelector('.review-stars-average').setAttribute('aria-label', count ? `Điểm trung bình ${average.toFixed(1)} trên 5 sao` : 'Chưa có đánh giá');
    }

    function filterReviews() {
        const selectedRating = ratingFilter.value;
        const visible = approved().filter(card => selectedRating === 'all' || card.dataset.rating === selectedRating);
        const compare = {
            newest: dateCompare,
            oldest: (a, b) => -dateCompare(a, b),
            highest: (a, b) => Number(b.dataset.rating) - Number(a.dataset.rating) || dateCompare(a, b),
            lowest: (a, b) => Number(a.dataset.rating) - Number(b.dataset.rating) || dateCompare(a, b)
        }[sortFilter.value] || dateCompare;
        visible.sort(compare);
        reviews.forEach(card => { card.hidden = true; });
        visible.forEach(card => {
            card.hidden = false;
            list.appendChild(card);
        });
        empty.hidden = visible.length !== 0;
    }

    ratingFilter.addEventListener('change', () => { updateReviewSummary(); filterReviews(); });
    sortFilter.addEventListener('change', () => { updateReviewSummary(); filterReviews(); });
    updateReviewSummary();
    filterReviews();
});
