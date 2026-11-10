
// Khóa lưu trữ thống nhất cho toàn bộ website
const CART_KEY = 'washup_Cart';

// 1. ĐỌC DỮ LIỆU GIỎ HÀNG (loadCart)
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

// Alias hỗ trợ tương thích với các hàm getCart() cũ
function getCart() {
  return loadCart();
}

// 2. LƯU DỮ LIỆU GIỎ HÀNG (saveCart)
function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Lỗi lưu giỏ hàng:', error);
    alert('Không thể lưu giỏ hàng. Vui lòng thử lại!');
  }
}

// 3. CẬP NHẬT SỐ LƯỢNG TRÊN HEADER
function updateCartBadge() {
  const cart = getCart();

  const totalCount = cart.reduce(function(sum, item) {
    return sum + (Number(item.quantity) || 1);
  }, 0);

  const badge = document.getElementById('cart-badge');

  if (badge) {
    badge.textContent = totalCount;
  }
}

// 4. HIỂN THỊ GIỎ HÀNG
function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const emptyCartMsg = document.getElementById('empty-cart-message');
  const cartWrapper =
    document.getElementById('cart-content-wrapper') ||
    document.getElementById('cart-table');

  updateCartBadge();

  // Không ở trang giỏ hàng thì chỉ cập nhật badge
  if (!cartContainer) return;

  const cart = getCart();

  // Giỏ hàng trống
  if (cart.length === 0) {
    if (cartWrapper) cartWrapper.style.display = 'none';
    if (emptyCartMsg) emptyCartMsg.style.display = 'block';
    if (totalPriceElement) totalPriceElement.textContent = '0 ₫';
    return;
  }

  // Giỏ hàng có sản phẩm
  if (cartWrapper) cartWrapper.style.display = 'block';
  if (emptyCartMsg) emptyCartMsg.style.display = 'none';

  cartContainer.replaceChildren();

  let totalMoney = 0;

  cart.forEach(function(item, index) {
    const price = Number(item.price) || 0;
    const quantity = Math.max(1, Number(item.quantity) || 1);
    const subtotal = price * quantity;

    totalMoney += subtotal;

    const tr = document.createElement('tr');

    // Hình ảnh
    const imageCell = document.createElement('td');
    imageCell.style.textAlign = 'center';
    imageCell.style.padding = '12px';

    const img = document.createElement('img');
    img.src = item.image || 'images/giat-say.jpg';
    img.alt = item.name || 'Dịch vụ WASHUP';
    img.style.width = '55px';
    img.style.height = '55px';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '6px';

    imageCell.appendChild(img);

    // Tên dịch vụ
    const nameCell = document.createElement('td');
    nameCell.style.padding = '12px';

    const name = document.createElement('strong');
    name.textContent = item.name || 'Dịch vụ';

    nameCell.appendChild(name);

    // Đơn giá
    const priceCell = document.createElement('td');
    priceCell.style.padding = '12px';
    priceCell.textContent = price.toLocaleString('vi-VN') + ' ₫';

    // Số lượng
    const quantityCell = document.createElement('td');
    quantityCell.style.padding = '12px';

    const quantityGroup = document.createElement('div');
    quantityGroup.style.display = 'flex';
    quantityGroup.style.alignItems = 'center';
    quantityGroup.style.gap = '8px';

    const minusButton = document.createElement('button');
    minusButton.type = 'button';
    minusButton.className = 'qty-btn btn-minus';
    minusButton.textContent = '-';

    const quantityText = document.createElement('span');
    quantityText.textContent = quantity;

    const plusButton = document.createElement('button');
    plusButton.type = 'button';
    plusButton.className = 'qty-btn btn-plus';
    plusButton.textContent = '+';

    quantityGroup.append(minusButton, quantityText, plusButton);
    quantityCell.appendChild(quantityGroup);

    // Thành tiền
    const subtotalCell = document.createElement('td');
    subtotalCell.style.padding = '12px';
    subtotalCell.style.fontWeight = 'bold';
    subtotalCell.textContent = subtotal.toLocaleString('vi-VN') + ' ₫';

    // Nút xóa
    const removeCell = document.createElement('td');
    removeCell.style.padding = '12px';

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'btn-remove';
    removeButton.textContent = 'Xóa';

    removeCell.appendChild(removeButton);

    // Gắn sự kiện
    minusButton.addEventListener('click', function() {
      changeQuantity(index, -1);
    });

    plusButton.addEventListener('click', function() {
      changeQuantity(index, 1);
    });

    removeButton.addEventListener('click', function() {
      removeItem(index);
    });

    tr.append(
      imageCell,
      nameCell,
      priceCell,
      quantityCell,
      subtotalCell,
      removeCell
    );

    cartContainer.appendChild(tr);
  });

  // Cập nhật tổng tiền
  if (totalPriceElement) {
    totalPriceElement.textContent =
      totalMoney.toLocaleString('vi-VN') + ' ₫';
  }
}

// 5. THAY ĐỔI SỐ LƯỢNG
function changeQuantity(index, delta) {
  const cart = getCart();

  if (!cart[index]) return;

  cart[index].quantity = (Number(cart[index].quantity) || 1) + delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCart();
}

// 6. XÓA DỊCH VỤ KHỎI GIỎ HÀNG
function removeItem(index) {
  const cart = getCart();

  if (!cart[index]) return;

  cart.splice(index, 1);

  saveCart(cart);
  renderCart();
}

// 7. THÊM DỊCH VỤ VÀO GIỎ HÀNG
function addToCart(productId) {
  const cart = getCart();

  const allProducts = window.products || [];
  const product = allProducts.find(function(item) {
    return item.id === productId;
  });

  if (!product) {
    alert('Dịch vụ không tồn tại!');
    return;
  }

  const existing = cart.find(function(item) {
    return item.id === productId;
  });

  if (existing) {
    existing.quantity = (Number(existing.quantity) || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      unit: product.unit,
      shopId: product.shopId,
      shopName: product.shopName,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartBadge();

  if (document.getElementById('cart-items')) {
    renderCart();
  }

  alert('Đã thêm "' + product.name + '" vào giỏ hàng!');
}

// 8. CHIA SẺ HÀM CHO CÁC FILE JAVASCRIPT KHÁC
window.getCart = getCart;
window.saveCart = saveCart;
window.addToCart = addToCart;
window.renderCart = renderCart;
window.removeItem = removeItem;
window.changeQuantity = changeQuantity;
window.updateCartBadge = updateCartBadge;

// 9. TỰ ĐỘNG KHÔI PHỤC KHI TẢI TRANG HOẶC THAY ĐỔI TAB
document.addEventListener('DOMContentLoaded', function() {
  renderCart();
});

// Đồng bộ dữ liệu giỏ hàng lập tức nếu mở nhiều tab trình duyệt cùng lúc
window.addEventListener('storage', function(e) {
  if (e.key === CART_KEY) {
    renderCart();
  }
});
