// 1. LẤY MẢNG GIỎ HÀNG TỪ LOCALSTORAGE (ĐỌC TẤT CẢ CÁC KHÓA CÓ THỂ CÓ)
function getCart() {
  try {
    const rawData = localStorage.getItem('cart') || 
                    localStorage.getItem('washupCart') || 
                    localStorage.getItem('washup_cart');
    return rawData ? JSON.parse(rawData) : [];
  } catch (e) {
    return [];
  }
}

// 2. LƯU ĐỒNG BỘ VÀO TẤT CẢ CÁC KHÓA LOCALSTORAGE
function saveCart(cart) {
  const json = JSON.stringify(cart);
  localStorage.setItem('cart', json);
  localStorage.setItem('washupCart', json);
  localStorage.setItem('washup_cart', json);
}

// 3. CẬP NHẬT BADGE TRÊN HEADER
function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.innerText = totalCount;
}

// 4. RENDER BẢNG GIỎ HÀNG
function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const emptyCartMsg = document.getElementById('empty-cart-message');
  const cartWrapper = document.getElementById('cart-content-wrapper');

  updateCartBadge();

  if (!cartContainer) return; // Nếu không ở cart.html thì dừng

  const cart = getCart();

  // TRẠNG THÁI GIỎ HÀNG RỖNG
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
    const itemSubtotal = item.price * item.quantity;
    totalMoney += itemSubtotal;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="text-align: center;">
        <img src="${item.image}" alt="${item.name}" style="width: 55px; height: 55px; object-fit: cover; border-radius: 6px;">
      </td>
      <td><strong>${item.name}</strong></td>
      <td>${Number(item.price).toLocaleString('vi-VN')} ₫</td>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button type="button" class="qty-btn btn-minus">-</button>
          <span style="font-weight: bold; min-width: 18px; text-align: center;">${item.quantity}</span>
          <button type="button" class="qty-btn btn-plus">+</button>
        </div>
      </td>
      <td style="font-weight: bold; color: #0645ad;">${itemSubtotal.toLocaleString('vi-VN')} ₫</td>
      <td>
        <button type="button" class="btn-remove">Xóa</button>
      </td>
    `;

    // Gán sự kiện trực tiếp bằng JS (không lo lỗi onclick HTML)
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
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
    renderCart();
  }
}

// 6. XÓA SẢN PHẨM KHỎI GIỎ
function removeItem(index) {
  let cart = getCart();
  if (cart[index]) {
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
  }
}

// 7. THÊM SẢN PHẨM MỚI VÀO GIỎ (DÙNG CHO TRANG PRODUCTS / DETAIL)
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
    existing.quantity += 1;
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

// Gán hàm vào window scope
window.addToCart = addToCart;
window.renderCart = renderCart;

// TỰ ĐỘNG CHẠY KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', renderCart);
