// WASHUP | Tương tác UI trang Quản trị Kiểm duyệt & Báo cáo (chỉ xử lý hiển thị UI, không thay thế phân quyền server)
(function () {
  const toastEl = document.getElementById('admin-toast');

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(() => {
      toastEl.classList.remove('is-visible');
    }, 3200);
  }

  // 1. Lọc theo trạng thái & tìm kiếm trên bảng đánh giá
  const filterPills = document.querySelectorAll('.filter-pill[data-status-filter]');
  const searchInput = document.getElementById('review-search-input');
  const serviceSelect = document.getElementById('review-service-filter');
  const reviewRows = document.querySelectorAll('tr[data-review-status]');

  let activeStatus = 'All';

  function applyReviewFilters() {
    const keyword = (searchInput?.value || '').trim().toLowerCase();
    const serviceId = serviceSelect?.value || 'All';

    reviewRows.forEach((row) => {
      const rowStatus = row.getAttribute('data-review-status') || '';
      const rowService = row.getAttribute('data-service-id') || '';
      const rowText = (row.textContent || '').toLowerCase();

      const matchStatus = activeStatus === 'All' || rowStatus === activeStatus;
      const matchService = serviceId === 'All' || rowService === serviceId;
      const matchKeyword = !keyword || rowText.includes(keyword);

      row.style.display = matchStatus && matchService && matchKeyword ? '' : 'none';
    });
  }

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      activeStatus = pill.getAttribute('data-status-filter') || 'All';
      applyReviewFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyReviewFilters);
  }
  if (serviceSelect) {
    serviceSelect.addEventListener('change', applyReviewFilters);
  }

  // 2. Modal xem ảnh đánh giá
  const imageModal = document.getElementById('image-preview-modal');
  const previewImg = document.getElementById('modal-preview-img');
  const previewCaption = document.getElementById('modal-preview-caption');

  document.querySelectorAll('[data-preview-img]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!imageModal || !previewImg) return;
      previewImg.src = btn.getAttribute('data-preview-img') || '';
      if (previewCaption) {
        previewCaption.textContent = btn.getAttribute('data-preview-caption') || 'Hình ảnh đính kèm đánh giá';
      }
      imageModal.classList.add('is-open');
    });
  });

  // 3. Modal nhập lý do từ chối đánh giá
  const rejectModal = document.getElementById('reject-reason-modal');
  const rejectReviewIdInput = document.getElementById('reject-review-id');
  const rejectReviewLabel = document.getElementById('reject-review-label');
  const rejectForm = document.getElementById('reject-reason-form');
  const rejectReasonText = document.getElementById('reject-reason-text');

  document.querySelectorAll('[data-open-reject]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!rejectModal) return;
      const reviewId = btn.getAttribute('data-open-reject') || '';
      const customer = btn.getAttribute('data-customer') || '';
      if (rejectReviewIdInput) rejectReviewIdInput.value = reviewId;
      if (rejectReviewLabel) rejectReviewLabel.textContent = `Đánh giá #${reviewId} (${customer})`;
      if (rejectReasonText) rejectReasonText.value = '';
      rejectModal.classList.add('is-open');
    });
  });

  if (rejectForm) {
    rejectForm.addEventListener('submit', (e) => {
      // Khi chưa có endpoint server, chặn submit mặc định để minh họa trạng thái UI
      if (!rejectForm.getAttribute('data-server-ready')) {
        e.preventDefault();
        const reason = (rejectReasonText?.value || '').trim();
        if (!reason) {
          showToast('Vui lòng nhập lý do từ chối đánh giá.');
          return;
        }
        rejectModal?.classList.remove('is-open');
        showToast(`Đã ghi nhận lý do từ chối cho #${rejectReviewIdInput?.value} (chờ kết nối endpoint backend).`);
      }
    });
  }

  // Đóng modal chung
  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-close-modal');
      if (targetId) {
        document.getElementById(targetId)?.classList.remove('is-open');
      }
    });
  });

  document.querySelectorAll('.admin-modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('is-open');
      }
    });
  });

  // 4. Lọc trạng thái ở trang Báo cáo vi phạm
  const reportPills = document.querySelectorAll('.filter-pill[data-report-filter]');
  const reportCards = document.querySelectorAll('.report-card[data-report-status]');

  reportPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      reportPills.forEach((p) => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      const filter = pill.getAttribute('data-report-filter') || 'All';
      reportCards.forEach((card) => {
        const st = card.getAttribute('data-report-status') || '';
        card.style.display = filter === 'All' || st === filter ? '' : 'none';
      });
    });
  });
})();
