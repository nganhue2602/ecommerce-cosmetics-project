// Khóa lưu trữ thống nhất cho toàn bộ hệ thống
const CART_KEY = 'washupCart';

// ----------------------------------------------------
// 1. ĐỌC DỮ LIỆU GIỎ HÀNG (loadCart / getCart)
// ----------------------------------------------------
function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Lỗi đọc giỏ hàng từ localStorage:', error);
    return [];
  }
}

// Alias tương thích cho các file HTML/JS cũ gọi getCart()
function getCart() {
  return loadCart();
}

// ----------------------------------------------------
// 2. LƯU DỮ LIỆU GIỎ HÀNG (saveCart)
// ----------------------------------------------------
function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Lỗi lưu giỏ hàng vào localStorage:', error);
    alert('Không thể lưu giỏ hàng. Vui lòng thử lại!');
  }
}

// ----------------------------------------------------
// 3. CẬP NHẬT SỐ LƯỢNG TRÊN HEADER (updateCartBadge)
// ----------------------------------------------------
function updateCartBadge() {
  const cart = loadCart();
  const totalCount = cart.reduce((sum, item) => {
    return sum + (parseInt(item.quantity, 10) || 1);
  }, 0);

  // Quét tất cả các thẻ có khả năng chứa con số giỏ hàng trên Header
  const badgeSelectors = [
    '#cart-badge',
    '.cart-badge',
    '.cart-count',
    '#cart-count',
    'a[href*="cart.html"] span',
    'a[href*="cart"] span',
    '.cart-icon span'
  ];

  const badges = document.querySelectorAll(badgeSelectors.join(', '));
  badges.forEach(badge => {
    badge.textContent = totalCount;
  });
}

// ----------------------------------------------------
// 4. HIỂN THỊ GIỎ HÀNG & TÍNH TỔNG TIỀN (renderCart)
// ----------------------------------------------------
function renderCart() {
  const cartContainer = document.querySelector('#cart-items');
  const totalPriceElements = document.querySelectorAll('#total-price, #cart-total, .cart-total-price');
  const emptyCartMsg = document.querySelector('#empty-cart-message, #cart-empty');
  const cartWrapper = document.querySelector('#cart-content-wrapper, #cart-table-area, #cart-table');

  // Luôn luôn cập nhật lại số giỏ hàng trên Header trước
  updateCartBadge();

  // Nếu không ở trang giỏ hàng (không tìm thấy #cart-items) thì dừng hàm
  if (!cartContainer) return;

  const cart = loadCart();

  // Trường hợp giỏ hàng trống
  if (cart.length === 0) {
    if (cartWrapper) cartWrapper.style.display = 'none';
    if (emptyCartMsg) emptyCartMsg.style.display = 'block';
    totalPriceElements.forEach(el => {
      el.textContent = '0 ₫';
    });
    cartContainer.replaceChildren();
    return;
  }

  // Trường hợp giỏ hàng có sản phẩm
  if (cartWrapper) cartWrapper.style.display = 'block';
  if (emptyCartMsg) emptyCartMsg.style.display = 'none';

  let totalMoney = 0;

  // Render chính xác 6 cột <td> khớp 100% với 6 tiêu đề <th> của giao diện:
  // Cột 1: Hình ảnh | Cột 2: Tên dịch vụ | Cột 3: Đơn giá | Cột 4: Số lượng | Cột 5: Thành tiền | Cột 6: Thao tác
  cartContainer.innerHTML = cart.map((item, index) => {
    const price = Number(item.price) || 0;
    const quantity = Math.max(1, parseInt(item.quantity, 10) || 1);
    const subtotal = price * quantity;
    totalMoney += subtotal;

    const imageSrc = item.image || 'images/giat-say.jpg';
    const name = item.name || 'Dịch vụ WASHUP';

    return `
      <tr>
        <td style="text-align: center; padding: 12px; vertical-align: middle;">
          <img src="${imageSrc}" alt="${name}" style="width: 55px; height: 55px; object-fit: cover; border-radius: 6px;">
        </td>
        <td style="padding: 12px; vertical-align: middle;">
          <strong>${name}</strong>
        </td>
        <td style="padding: 12px; vertical-align: middle; white-space: nowrap;">
          ${price.toLocaleString('vi-VN')} VNĐ
        </td>
        <td style="padding: 12px; vertical-align: middle;">
          <div style="display: inline-flex; align-items: center; gap: 6px;">
            <button type="button" onclick="changeQuantity(${index}, -1)" style="padding: 2px 8px; cursor: pointer;">-</button>
            <input type="number" min="1" value="${quantity}" onchange="updateQuantityInput(${index}, this.value)" style="width: 45px; text-align: center; padding: 2px;">
            <button type="button" onclick="changeQuantity(${index}, 1)" style="padding: 2px 8px; cursor: pointer;">+</button>
          </div>
        </td>
        <td style="padding: 12px; vertical-align: middle; font-weight: bold; white-space: nowrap;">
          ${subtotal.toLocaleString('vi-VN')} VNĐ
        </td>
        <td style="padding: 12px; vertical-align: middle;">
          <button type="button" onclick="removeItem(${index})" style="cursor: pointer; padding: 4px 10px; background-color: #dc3545; color: white; border: none; border-radius: 4px;">Xóa</button>
        </td>
      </tr>
    `;
  }).join('');

  // Gán tổng tiền tính toán lại từ localStorage lên tất cả phần tử tổng cộng
  totalPriceElements.forEach(el => {
    el.textContent = totalMoney.toLocaleString('vi-VN') + ' ₫';
  });
}

// ----------------------------------------------------
// 5. CẬP NHẬT SỐ LƯỢNG (changeQuantity & updateQuantityInput)
// ----------------------------------------------------
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

function updateQuantityInput(index, value) {
  const cart = loadCart();
  if (!cart[index]) return;

  const newQty = parseInt(value, 10);
  if (isNaN(newQty) || newQty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].quantity = newQty;
  }

  saveCart(cart);
  renderCart();
}

// ----------------------------------------------------
// 6. XÓA MÓN HÀNG KHỎI GIỎ HÀNG (removeItem)
// ----------------------------------------------------
function removeItem(index) {
  const cart = loadCart();
  if (!cart[index]) return;

  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

// ----------------------------------------------------
// 7. THÊM SẢN PHẨM VÀO GIỎ HÀNG (addToCart)
// ----------------------------------------------------
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

// ----------------------------------------------------
// 8. CHIA SẺ CÁC HÀM TOÀN CỤC (Global Scope)
// ----------------------------------------------------
window.loadCart = loadCart;
window.getCart = getCart;
window.saveCart = saveCart;
window.addToCart = addToCart;
window.renderCart = renderCart;
window.removeItem = removeItem;
window.changeQuantity = changeQuantity;
window.updateQuantityInput = updateQuantityInput;
window.updateCartBadge = updateCartBadge;

// ----------------------------------------------------
// 9. TỰ ĐỘNG KHÔI PHỤC VÀ ĐỒNG BỘ DỮ LIỆU
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

// Đồng bộ giỏ hàng lập tức khi người dùng thao tác ở tab khác
window.addEventListener('storage', (e) => {
  if (e.key === CART_KEY) {
    renderCart();
  }
});
