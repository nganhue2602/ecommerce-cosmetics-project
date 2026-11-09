// 1. HÀM ĐỌC VÀ CHUẨN HÓA DỮ LIỆU TỪ TẤT CẢ CÁC KHÓA LOCALSTORAGE
function getCart() {
  try {
    // Đọc tất cả các khóa có thể có trong máy
    let raw = localStorage.getItem('cart') || 
              localStorage.getItem('washupCart') || 
              localStorage.getItem('washup_cart');
    
    if (!raw) return [];

    let parsed = JSON.parse(raw);

    // Nếu dữ liệu dạng Object (ví dụ: { "giat-say": {...} }), chuyển thành Array
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      parsed = Object.values(parsed);
    }

    // Đảm bảo trả về mảng hợp lệ
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Lỗi đọc giỏ hàng:", e);
    return [];
  }
}

// 2. HÀM LƯU ĐỒNG BỘ VÀO TẤT CẢ CÁC KHÓA (GIÚP MỌI TRANG ĐỀU ĐỌC ĐƯỢC)
function saveCart(cart) {
  const json = JSON.stringify(cart);
  localStorage.setItem('cart', json);
  localStorage.setItem('washupCart', json);
  localStorage.setItem('washup_cart', json);
}

// 3. CẬP NHẬT BADGE TRÊN HEADER
function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.innerText = totalCount;
}

// 4. RENDER GIỎ HÀNG TRÊN CART.HTML
function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const emptyCartMsg = document.getElementById('empty-cart-message');
  const cartWrapper = document.getElementById('cart-content-wrapper') || document.getElementById('cart-table');

  updateCartBadge();

  if (!cartContainer) return; // Nếu không ở cart.html thì dừng

  const cart = getCart();

  // TRẠNG THÁI GIỎ HÀNG RỖNG (HÌNH 5.5)
  if (cart.length === 0) {
    if (cartWrapper) cartWrapper.style.display = 'none';
    if (emptyCartMsg) emptyCartMsg.style.display = 'block';
    if (totalPriceElement) totalPriceElement.innerText = '0 ₫';
    return;
  }

  // TRẠNG THÁI CÓ HÀNG
  if (cartWrapper) cartWrapper.style.display = 'block';
  if (emptyCartMsg) emptyCartMsg.style.display = 'none';

  cartContainer.innerHTML = '';
  let totalMoney = 0;

  cart.forEach((item, index) => {
    // Ép kiểu dữ liệu an toàn tránh lỗi NaN
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1;
    const itemSubtotal = price * qty;
    totalMoney += itemSubtotal;

    // Chuẩn hóa đường dẫn ảnh và tên sản phẩm
    const imgName = item.image || item.img || 'images/giat-say.jpg';
    const title = item.name || item.title || 'Dịch vụ';

    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid #e5eaf3';
    tr.innerHTML = `
      <td style="text-align: center; padding: 12px;">
        <img src="${imgName}" alt="${title}" style="width: 55px; height: 55px; object-fit: cover; border-radius: 6px;" onerror="this.src='https://via.placeholder.com/60'">
      </td>
      <td style="padding: 12px;"><strong>${title}</strong></td>
      <td style="padding: 12px;">${price.toLocaleString('vi-VN')} ₫</td>
      <td style="padding: 12px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <button type="button" class="qty-btn btn-minus" style="width:28px; height:28px; cursor:pointer;">-</button>
          <span style="font-weight: bold; min-width: 18px; text-align: center;">${qty}</span>
          <button type="button" class="qty-btn btn-plus" style="width:28px; height:28px; cursor:pointer;">+</button>
        </div>
      </td>
      <td style="padding: 12px; font-weight: bold; color: #0645ad;">${itemSubtotal.toLocaleString('vi-VN')} ₫</td>
      <td style="padding: 12px;">
        <button type="button" class="btn-remove" style="padding: 6px 12px; background:#dc3545; color:#fff; border:none; border-radius:4px; cursor:pointer;">Xóa</button>
      </td>
    `;

    // Gán sự kiện click trực tiếp bằng JS
    tr.querySelector('.btn-minus').onclick = function() { changeQuantity(index, -1); };
    tr.querySelector('.btn-plus').onclick = function() { changeQuantity(index, 1); };
    tr.querySelector('.btn-remove').onclick = function() { removeItem(index); };

    cartContainer.appendChild(tr);
  });

  if (totalPriceElement) {
    totalPriceElement.innerText = totalMoney.toLocaleString('vi-VN') + ' ₫';
  }
}

// 5. THAY ĐỔI SỐ LƯỢNG (TĂNG/GIẢM)
function changeQuantity(index, delta) {
  let cart = getCart();
  if (cart[index]) {
    cart[index].quantity = (Number(cart[index].quantity) || 1) + delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
    renderCart();
  }
}

// 6. XÓA SẢN PHẨM KHỎI GIỎ HÀNG
function removeItem(index) {
  let cart = getCart();
  if (cart[index]) {
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
  }
}

// 7. THÊM SẢN PHẨM MỚI VÀO GIỎ (DÙNG CHO CÁC TRANG DỊCH VỤ)
function addToCart(productId) {
  let cart = getCart();
  const allProducts = window.products || (typeof products !== 'undefined' ? products : []);
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    alert("Sản phẩm không tồn tại!");
    return;
  }

  const existing = cart.find(p => p.id === productId);
  if (existing) {
    existing.quantity = (Number(existing.quantity) || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartBadge();
  
  if (document.getElementById('cart-items')) {
    renderCart();
  }

  alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

// Gán biến toàn cục
window.addToCart = addToCart;
window.renderCart = renderCart;
window.removeItem = removeItem;
window.changeQuantity = changeQuantity;

// TỰ ĐỘNG CHẠY KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', renderCart);
