
// 1. ĐỌC DỮ LIỆU GIỎ HÀNG
function getCart() {
  try {
    const raw = localStorage.getItem('washupCart');

    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Lỗi đọc giỏ hàng:', error);
    return [];
  }
}

// 2. LƯU DỮ LIỆU GIỎ HÀNG
function saveCart(cart) {
  try {
    localStorage.setItem('washupCart', JSON.stringify(cart));
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

// 9. TỰ ĐỘNG CẬP NHẬT KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', function() {
  renderCart();
});
// Khóa lưu trữ thống nhất cho toàn bộ dự án
const CART_KEY = 'washupcart';

// ----------------------------------------------------
// 1. CÁC HÀM XỬ LÝ LOCALSTORAGE (loadCart, saveCart)
// ----------------------------------------------------

// Đọc mảng giỏ hàng từ localStorage (Khôi phục dữ liệu / Xử lý chưa có dữ liệu)
function loadCart() {
    const data = localStorage.getItem(CART_KEY);
    try {
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Lỗi khi đọc dữ liệu giỏ hàng từ localStorage:', error);
        return [];
    }
}

// Alias hỗ trợ tương thích với các hàm getCart() sẵn có
function getCart() {
    return loadCart();
}

// Lưu mảng giỏ hàng vào localStorage dưới dạng chuỗi JSON
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ----------------------------------------------------
// 2. CÁC HÀM THAO TÁC GIỎ HÀNG VÀ TỰ ĐỘNG LƯU
// ----------------------------------------------------

// Thêm sản phẩm vào giỏ hàng
function addToCart(productInput, quantity = 1) {
    let productToAdd = null;

    if (typeof productInput === 'object' && productInput !== null) {
        productToAdd = productInput;
    } else if (typeof products !== 'undefined' && Array.isArray(products)) {
        productToAdd = products.find(p => String(p.id) === String(productInput));
    }

    if (!productToAdd) {
        alert('Không tìm thấy thông tin sản phẩm!');
        return;
    }

    const cart = loadCart();
    // Ép kiểu String để so sánh an toàn ID giữa dạng số và dạng chuỗi
    const existingIndex = cart.findIndex(item => String(item.id) === String(productToAdd.id));
    const qty = parseInt(quantity, 10) || 1;

    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            id: productToAdd.id,
            name: productToAdd.name,
            price: productToAdd.price,
            image: productToAdd.image || 'images/default.jpg',
            quantity: qty
        });
    }

    saveCart(cart); // Lưu vào localStorage sau khi thêm
    updateCartBadge();
    alert(`Đã thêm "${productToAdd.name}" vào giỏ hàng!`);
}

// Thay đổi số lượng sản phẩm từ ô nhập input
function updateQuantity(productId, newQty) {
    let cart = loadCart();
    const qty = parseInt(newQty, 10);

    if (isNaN(qty) || qty <= 0) {
        cart = cart.filter(item => String(item.id) !== String(productId));
    } else {
        const item = cart.find(item => String(item.id) === String(productId));
        if (item) item.quantity = qty;
    }

    saveCart(cart); // Lưu vào localStorage sau khi sửa
    renderCartPage();
    updateCartBadge();
}

// Tăng / giảm số lượng nhanh bằng nút (+/-)
function changeQuantity(productId, delta) {
    const cart = loadCart();
    const item = cart.find(item => String(item.id) === String(productId));
    if (item) {
        updateQuantity(productId, item.quantity + delta);
    }
}

// Xóa 1 sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    let cart = loadCart();
    cart = cart.filter(item => String(item.id) !== String(productId));
    saveCart(cart); // Lưu vào localStorage sau khi xóa
    renderCartPage();
    updateCartBadge();
}

// Xóa toàn bộ giỏ hàng
function clearCart() {
    localStorage.removeItem(CART_KEY); // Xóa dữ liệu trong localStorage
    renderCartPage();
    updateCartBadge();
}

// ----------------------------------------------------
// 3. TÍNH TOÁN VÀ CẬP NHẬT GIAO DIỆN
// ----------------------------------------------------

// Tính tổng số lượng món hàng từ dữ liệu khôi phục
function getTotalCount() {
    const cart = loadCart();
    return cart.reduce((total, item) => total + (parseInt(item.quantity, 10) || 0), 0);
}

// Tính tổng tiền giỏ hàng từ dữ liệu khôi phục
function getTotalPrice() {
    const cart = loadCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Cập nhật Badge số lượng hiển thị trên Header (.cart-badge)
function updateCartBadge() {
    const badgeElements = document.querySelectorAll('.cart-badge');
    const totalCount = getTotalCount();
    badgeElements.forEach(badge => {
        badge.textContent = totalCount;
    });
}

// Render danh sách sản phẩm tại trang cart.html
function renderCartPage() {
    const cartItemsContainer = document.querySelector('#cart-items');
    const totalPriceEl = document.querySelector('#cart-total');
    const emptyMsgEl = document.querySelector('#cart-empty');
    const cartTableArea = document.querySelector('#cart-table-area');

    if (!cartItemsContainer) return; // Dừng hàm nếu không nằm ở trang cart.html

    const cart = loadCart();

    // Xử lý giao diện khi giỏ hàng rỗng hoặc chưa có dữ liệu
    if (cart.length === 0) {
        if (cartTableArea) cartTableArea.style.display = 'none';
        if (emptyMsgEl) emptyMsgEl.style.display = 'block';
        if (totalPriceEl) totalPriceEl.textContent = '0 VNĐ';
        return;
    }

    if (cartTableArea) cartTableArea.style.display = 'block';
    if (emptyMsgEl) emptyMsgEl.style.display = 'none';

    cartItemsContainer.innerHTML = cart.map(item => `
        <tr>
            <td style="display: flex; align-items: center; gap: 10px;">
                <img src="${item.image}" alt="${item.name}" width="50" height="50" style="object-fit:cover; border-radius: 4px;">
                <span>${item.name}</span>
            </td>
            <td>${item.price.toLocaleString('vi-VN')} VNĐ</td>
            <td>
                <div style="display: inline-flex; align-items: center; gap: 4px;">
                    <button type="button" onclick="changeQuantity('${item.id}', -1)">-</button>
                    <input type="number" min="1" value="${item.quantity}" 
                           onchange="updateQuantity('${item.id}', this.value)" style="width: 50px; text-align: center;">
                    <button type="button" onclick="changeQuantity('${item.id}', 1)">+</button>
                </div>
            </td>
            <td>${(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</td>
            <td>
                <button type="button" onclick="removeFromCart('${item.id}')" class="btn-danger">Xóa</button>
            </td>
        </tr>
    `).join('');

    if (totalPriceEl) {
        totalPriceEl.textContent = getTotalPrice().toLocaleString('vi-VN') + ' VNĐ';
    }
}

// ----------------------------------------------------
// 4. SỰ KIỆN TỰ ĐỘNG KHÔI PHỤC VÀ ĐỒNG BỘ
// ----------------------------------------------------

// Tự động khôi phục dữ liệu khi vừa tải xong trang
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    renderCartPage();
});

// Đồng bộ dữ liệu giỏ hàng lập tức nếu mở nhiều tab cùng lúc
window.addEventListener('storage', (event) => {
    if (event.key === CART_KEY) {
        updateCartBadge();
        renderCartPage();
    }
});
