// ====================================================
// DỰ ÁN WASHUP - TỆP XỬ LÝ GIỎ HÀNG THỐNG NHẤT (js/cart.js)
// ====================================================

const CART_KEY = 'washupCart';

// 1. ĐỌC DỮ LIỆU GIỎ HÀNG
function loadCart() {
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

function getCart() {
  return loadCart();
}

// 2. LƯU DỮ LIỆU GIỎ HÀNG
function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Lỗi lưu giỏ hàng:', error);
    alert('Không thể lưu giỏ hàng. Vui lòng thử lại!');
  }
}

// 3. CẬP NHẬT SỐ LƯỢNG TRÊN HEADER (Sửa triệt để lỗi số 0)
function updateCartBadge() {
  const cart = loadCart();
  const totalCount = cart.reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 1), 0);

  // Quét toàn bộ các vị trí thẻ hiển thị số trên Header
  const badges = document.querySelectorAll(
    '#cart-badge, .cart-badge, .cart-count, #cart-count, a[href*="cart"] span, .header-action span, header a span'
  );

  badges.forEach(badge => {
    badge.textContent = totalCount;
  });
}

// 4. HIỂN THỊ GIỎ HÀNG (Cố định 6 cột - Chống xô lệch chữ)
function renderCart() {
  const cartContainer = document.querySelector('#cart-items');
  const totalPriceElements = document.querySelectorAll('#total-price, #cart-total, .cart-total-price');
  const emptyCartMsg = document.querySelector('#empty-cart-message, #cart-empty');
  const cartWrapper = document.querySelector('#cart-content-wrapper, #cart-table-area, #cart-table');

  updateCartBadge();

  if (!cartContainer) return;

  const cart = loadCart();

  if (cart.length === 0) {
    if (cartWrapper) cartWrapper.style.display = 'none';
    if (emptyCartMsg) emptyCartMsg.style.display = 'block';
    totalPriceElements.forEach(el => el.textContent = '0 ₫');
    cartContainer.replaceChildren();
    return;
  }

  if (cartWrapper) cartWrapper.style.display = 'block';
  if (emptyCartMsg) emptyCartMsg.style.display = 'none';

  let totalMoney = 0;

  // Render 6 cột chuẩn tỷ lệ % để không bị chồng chéo
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
          ${price.toLocaleString('vi-VN')} VNĐ
        </td>
        <td style="width: 18%; padding: 12px; vertical-align: middle; text-align: center;">
          <div style="display: inline-flex; align-items: center; justify-content: center; gap: 6px;">
            <button type="button" onclick="changeQuantity(${index}, -1)" style="width: 28px; height: 28px; cursor: pointer; border: 1px solid #ccc; background: #fff; border-radius: 4px;">-</button>
            <span style="min-width: 24px; font-weight: bold; text-align: center;">${quantity}</span>
            <button type="button" onclick="changeQuantity(${index}, 1)" style="width: 28px; height: 28px; cursor: pointer; border: 1px solid #ccc; background: #fff; border-radius: 4px;">+</button>
          </div>
        </td>
        <td style="width: 15%; padding: 12px; vertical-align: middle; text-align: center; font-weight: bold; white-space: nowrap; color: #0056b3;">
          ${subtotal.toLocaleString('vi-VN')} VNĐ
        </td>
        <td style="width: 12%; padding: 12px; vertical-align: middle; text-align: center;">
          <button type="button" onclick="removeItem(${index})" style="cursor: pointer; padding: 6px 12px; background-color: #dc3545; color: white; border: none; border-radius: 4px; font-size: 13px;">Xóa</button>
        </td>
      </tr>
    `;
  }).join('');

  totalPriceElements.forEach(el => {
    el.textContent = totalMoney.toLocaleString('vi-VN') + ' ₫';
  });
}

// 5. THAY ĐỔI SỐ LƯỢNG
function changeQuantity(index, delta) {
  const cart = loadCart();
  if (!cart[index]) return;

  const currentQty = parseInt(cart[index].quantity, 10) || 1;
  const newQty = currentQty + delta;

  if (newQty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].quantity = newQty;
  }

  saveCart(cart);
  renderCart();
}

// 6. XÓA SẢN PHẨM KHỎI GIỎ HÀNG
function removeItem(index) {
  const cart = loadCart();
  if (!cart[index]) return;

  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

// 7. THÊM SẢN PHẨM VÀO GIỎ HÀNG
function addToCart(productId) {
  const cart = loadCart();
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
  renderCart();
  alert('Đã thêm "' + product.name + '" vào giỏ hàng!');
}

// 8. CHIA SẺ HÀM TOÀN CỤC
window.loadCart = loadCart;
window.getCart = getCart;
window.saveCart = saveCart;
window.addToCart = addToCart;
window.renderCart = renderCart;
window.removeItem = removeItem;
window.changeQuantity = changeQuantity;
window.updateCartBadge = updateCartBadge;

// 9. TỰ ĐỘNG KHÔI PHỤC VÀ ĐỒNG BỘ
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

window.addEventListener('storage', (e) => {
  if (e.key === CART_KEY) {
    renderCart();
  }
});
