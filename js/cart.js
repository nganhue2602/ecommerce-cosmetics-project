// 1. Khởi tạo mảng giỏ hàng lấy từ localStorage (nếu có)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 2. Chức năng Thêm sản phẩm vào giỏ (Nếu trùng thì tăng số lượng)
function addToCart(productId) {
  // Tìm sản phẩm trong mảng 'products' (được khai báo ở js/products.js)
  if (typeof products === 'undefined') {
    console.error("Chưa tải mảng products!");
    return;
  }
  
  const product = products.find(p => p.id === productId);
  if (!product) {
    alert("Sản phẩm không tồn tại!");
    return;
  }

  // Kiểm tra sản phẩm đã có trong giỏ chưa
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveAndRender();
  alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

// 3. Chức năng Thay đổi số lượng (Tăng/Giảm)
function updateQuantity(productId, newQuantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = parseInt(newQuantity);
    // Nếu giảm số lượng về <= 0 thì tự động xóa khỏi giỏ
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
  }
  saveAndRender();
}

// 4. Chức năng Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveAndRender();
}

// 5. Hàm Lưu giỏ hàng vào localStorage và Cập nhật Giao diện
function saveAndRender() {
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateCartBadge();
}

// 6. Chức năng Hiển thị giao diện Giỏ hàng (chỉ chạy khi ở cart.html)
function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const emptyCartMsg = document.getElementById('empty-cart-message');
  const cartTable = document.getElementById('cart-table');

  // Nếu trang hiện tại không có khung giỏ hàng thì dừng
  if (!cartContainer) return;

  // Trường hợp Giỏ hàng RỖNG
  if (cart.length === 0) {
    if (cartTable) cartTable.style.display = 'none';
    if (emptyCartMsg) emptyCartMsg.style.display = 'block';
    if (totalPriceElement) totalPriceElement.innerText = '0 ₫';
    return;
  }

  // Trường hợp Giỏ hàng CÓ sản phẩm
  if (cartTable) cartTable.style.display = 'table';
  if (emptyCartMsg) emptyCartMsg.style.display = 'none';

  let html = '';
  let totalMoney = 0;

  cart.forEach(item => {
    const itemSubtotal = item.price * item.quantity;
    totalMoney += itemSubtotal;

    html += `
      <tr>
        <td style="text-align: center;">
          <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
        </td>
        <td><strong>${item.name}</strong></td>
        <td>${item.price.toLocaleString('vi-VN')} ₫</td>
        <td>
          <div style="display: flex; align-items: center; gap: 5px;">
            <button type="button" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
            <span style="padding: 0 8px; font-weight: bold;">${item.quantity}</span>
            <button type="button" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
          </div>
        </td>
        <td style="font-weight: bold; color: #d9534f;">${itemSubtotal.toLocaleString('vi-VN')} ₫</td>
        <td>
          <button type="button" onclick="removeFromCart(${item.id})" style="background-color: #ff4d4f; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px;">Xóa</button>
        </td>
      </tr>
    `;
  });

  cartContainer.innerHTML = html;
  if (totalPriceElement) {
    totalPriceElement.innerText = totalMoney.toLocaleString('vi-VN') + ' ₫';
  }
}

// 7. Cập nhật Số lượng trên Badge biểu tượng giỏ hàng (Header)
function updateCartBadge() {
  const cartBadge = document.getElementById('cart-badge');
  if (cartBadge) {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.innerText = totalCount;
  }
}

// Chạy tự động khi tải trang
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  updateCartBadge();
});
