
/* WASHUP - Buoi 3 / Buoc 2
 * Hien thi danh sach dich vu tu du lieu trong products.js
 */

function renderProducts(list) {
  const grid = document.getElementById('products-list');
  const empty = document.getElementById('products-empty');

  if (!grid) return;

  grid.replaceChildren();

  if (empty) {
    empty.hidden = list.length !== 0;
  }

  list.forEach(function (product) {
    // Tao the card dich vu
    const card = document.createElement('article');
    card.className = 'product-card';

    // Hinh anh va lien ket den trang chi tiet
    const imageLink = document.createElement('a');
    imageLink.className = 'product-image-link';
    imageLink.href =
      'service-detail.html?id=' + encodeURIComponent(product.id);

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = 'Hinh minh hoa ' + product.name;
    img.loading = 'lazy';

    imageLink.appendChild(img);

    // Thong tin dich vu
    const info = document.createElement('div');
    info.className = 'product-info';

    const category = document.createElement('span');
    category.className = 'product-category';
    category.textContent = product.category;

    const title = document.createElement('h3');
    title.textContent = product.name;

    const shop = document.createElement('p');
    shop.className = 'product-shop';

    const strong = document.createElement('strong');
    strong.textContent = 'Tiệm cung cấp: ';

    shop.append(
      strong,
      document.createTextNode(product.shopName || 'Tiệm minh họa')
    );

    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.description;

    // Gia tien va don vi tinh
    const bottom = document.createElement('div');
    bottom.className = 'product-bottom';

    const price = document.createElement('p');
    price.className = 'product-price';
    price.appendChild(
      document.createTextNode(formatCurrency(product.price) + ' ')
    );

    const unit = document.createElement('span');
    unit.textContent = '/ ' + product.unit;

    price.appendChild(unit);

    // Nhom nut thao tac
    const actions = document.createElement('div');
    actions.className = 'product-actions-group';

    // Nut them vao gio hang
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.className = 'btn-add-cart-card';
    addButton.textContent = '+ Thêm giỏ';
    addButton.addEventListener('click', function () {
      if (typeof addToCart === 'function') {
        addToCart(product.id);
      }
    });

    // Nut xem chi tiet
    const detail = document.createElement('a');
    detail.className = 'product-link';
    detail.href = imageLink.href;
    detail.textContent = 'Xem chi tiết →';

    actions.append(addButton, detail);
    bottom.append(price, actions);

    // Hoan thanh card dich vu
    info.append(category, title, shop, description, bottom);
    card.append(imageLink, info);
    grid.appendChild(card);
  });
}

// Hien thi danh sach sau khi HTML duoc tai
function initializeCatalog() {
  if (typeof products !== 'undefined') {
    renderProducts(products);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCatalog);
} else {
  initializeCatalog();
}
