// ====================================================
// CHUẨN BƯỚC 5: HỆ THỐNG GIỎ HÀNG DỰ ÁN WASHUP (js/cart.js)
// Khóa lưu trữ LocalStorage thống nhất: washupCart
// ====================================================

const CART_KEY = 'washupCart';

// 1. ĐỊNH DẠNG TIỀN TỆ (formatMoney)
function formatMoney(amount) {
  const price = Number(amount) || 0;
  return price.toLocaleString('vi-VN') + ' ₫';
}

// 2. ĐỌC DỮ LIỆU GIỎ HÀNG TỪ LOCALSTORAGE (getCart)
function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Lỗi đọc giỏ hàng:', error);
    return [];
  }
}

function loadCart() {
  return getCart();
}

// 3. LƯU DỮ LIỆU GIỎ HÀNG VÀO LOCALSTORAGE (saveCart)
function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Lỗi lưu giỏ hàng:', error);
    alert('Không thể lưu giỏ hàng. Vui lòng thử lại!');
  }
}

// 4. CẬP NHẬT BADGE SỐ LƯỢNG TRÊN HEADER (updateCartBadge)
function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 1), 0);

  // Tìm chính xác thẻ #cart-badge và các lớp badge tương đương trên Header
  const badges = document.querySelectorAll('#cart-badge, .cart-badge, .cart-count');
  badges.forEach(badge => {
    badge.textContent = totalCount;
  });
}

// 5. HIỂN THỊ GIỎ HÀNG TẠI CART.HTML (renderCartPage)
function renderCartPage() {
  const cartContainer = document.querySelector('#cart-items');
  const totalPriceEl = document.querySelector('#cart-total') || document.querySelector('#total-price');
  const emptyMsgEl = document.querySelector('#cart-empty') || document.querySelector('#empty-cart-message');
  const cartTableArea = document.querySelector('#cart-table-area') || document.querySelector('#cart-content-wrapper') || document.querySelector('#cart-table');

  // Cập nhật con số hiển thị trên Header
  updateCartBadge();

  if (!cartContainer) return; // Dừng nếu không ở trang cart.html

  const cart = getCart();

  // Xử lý giao diện khi giỏ hàng rỗng (Empty State)
  if (cart.length === 0) {
    if (cartTableArea) cartTableArea.style.display = 'none';
    if (emptyMsgEl) emptyMsgEl.style.display = 'block';
    if (totalPriceEl) totalPriceEl.textContent = formatMoney(0);
    cartContainer.replaceChildren();
    return;
  }

  // Hiển thị bảng giỏ hàng
  if (cartTableArea) cartTableArea.style.display = 'block';
  if (emptyMsgEl) emptyMsgEl.style.display = 'none';

  let totalMoney = 0;

  // Render 6 cột chuẩn tỷ lệ % để không xô lệch giao diện
  cartContainer.innerHTML = cart.map((item, index) => {
    const price = Number(item.price) || 0;
    const quantity = Math.max(1, parseInt(item.quantity, 10) || 1);
    const subtotal = price * quantity;
    totalMoney += subtotal;

    const imageSrc = item.image || 'images/giat-say.jpg';
    const name = item.name || 'Dịch vụ WASHUP';

    return `
      <tr>
        <td style="width: 10%; text-align: center; padding: 12px; vertical-align: middle;">
          <img src="${imageSrc}" alt="${name}" style="width: 55px; height: 55px; object-fit: cover; border-radius: 6px; display: block; margin: 0 auto;">
        </td>
        <td style="width: 30%; padding: 12px; vertical-align: middle; text-align: left;">
          <strong style="display: block; font-size: 15px; color: #333;">${name}</strong>
        </td>
        <td style="width: 15%; padding: 12px; vertical-align: middle; text-align: center; white-space: nowrap;">
          ${formatMoney(price)}
        </td>
        <td style="width: 18%; padding: 12px; vertical-align: middle; text-align: center;">
          <div style="display: inline-flex; align-items: center; justify-content: center; gap: 6px;">
            <button type="button" onclick="updateQuantity(${index}, -1)" style="width: 28px; height: 28px; cursor: pointer; border: 1px solid #ccc; background: #fff; border-radius: 4px;">-</button>
            <span style="min-width: 24px; font-weight: bold; text-align: center;">${quantity}</span>
            <button type="button" onclick="updateQuantity(${index}, 1)" style="width: 28px; height: 28px; cursor: pointer; border: 1px solid #ccc; background: #fff; border-radius: 4px;">+</button>
          </div>
        </td>
        <td style="width: 15%; padding: 12px; vertical-align: middle; text-align: center; font-weight: bold; white-space: nowrap; color: #dc3545;">
          ${formatMoney(subtotal)}
        </td>
        <td style="width: 12%; padding: 12px; vertical-align: middle; text-align: center;">
          <button type="button" class="btn-remove" onclick="removeCartItem(${index})" style="cursor: pointer; padding: 6px 12px; background-color: #dc3545; color: white; border: none; border-radius: 4px; font-size: 13px;">Xóa</button>
        </td>
      </tr>
    `;
  }).join('');

  if (totalPriceEl) {
    totalPriceEl.textContent = formatMoney(totalMoney);
  }
}

function renderCart() {
  renderCartPage();
}

// 6. THAY ĐỔI SỐ LƯỢNG SẢN PHẨM (updateQuantity)
function updateQuantity(index, delta) {
  const cart = getCart();
  if (!cart[index]) return;

  const currentQty = parseInt(cart[index].quantity, 10) || 1;
  const newQty = currentQty + delta;

  if (newQty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].quantity = newQty;
  }

  saveCart(cart);
  renderCartPage();
}

function changeQuantity(index, delta) {
  updateQuantity(index, delta);
}

// 7. XÓA SẢN PHẨM KHỎI GIỎ HÀNG (removeCartItem)
function removeCartItem(index) {
  const cart = getCart();
  if (!cart[index]) return;

  cart.splice(index, 1);
  saveCart(cart);
  renderCartPage();
}

function removeItem(index) {
  removeCartItem(index);
}

// 8. THÊM SẢN PHẨM VÀO GIỎ HÀNG (addToCart)
function addToCart(productId) {
  const cart = getCart();
  const allProducts = window.products || [];

  const product = allProducts.find(item => String(item.id) === String(productId));

  if (!product) {
    alert('Dịch vụ không tồn tại!');
    return;
  }

  const existingIndex = cart.findIndex(item => String(item.id) === String(productId));

  if (existingIndex > -1) {
    cart[existingIndex].quantity = (parseInt(cart[existingIndex].quantity, 10) || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || 'images/giat-say.jpg',
      unit: product.unit || 'lần',
      shopId: product.shopId || '',
      shopName: product.shopName || '',
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartBadge();
  if (document.querySelector('#cart-items')) {
    renderCartPage();
  }
  alert('Đã thêm "' + product.name + '" vào giỏ hàng!');
}

// 9. CHIA SẺ HÀM TOÀN CỤC & TỰ ĐỘNG KHÔI PHỤC
window.getCart = getCart;
window.loadCart = loadCart;
window.saveCart = saveCart;
window.addToCart = addToCart;
window.updateCartBadge = updateCartBadge;
window.renderCartPage = renderCartPage;
window.renderCart = renderCart;
window.updateQuantity = updateQuantity;
window.changeQuantity = changeQuantity;
window.removeCartItem = removeCartItem;
window.removeItem = removeItem;
window.formatMoney = formatMoney;

document.addEventListener('DOMContentLoaded', () => {
  renderCartPage();
});

window.addEventListener('storage', (e) => {
  if (e.key === CART_KEY) {
    renderCartPage();
  }
});
