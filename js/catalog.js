/* WASHUP - Buoi 3 / Buoc 2 - tep tuong thich de kiem thu Buoc 3
 * Chi su dung khi nhom chua co catalog.js tu ban phu trach Buoc 2.
 * Neu Buoc 2 da co ham renderProducts(list), giu file cua thanh vien do.
 */
function renderProducts(list) {
  const grid = document.getElementById('products-list');
  const empty = document.getElementById('products-empty');
  if (!grid) return;

  grid.replaceChildren();
  if (empty) empty.hidden = list.length !== 0;

  list.forEach(function (product) {
    const card = document.createElement('article');
    card.className = 'product-card';

    const imageLink = document.createElement('a');
    imageLink.className = 'product-image-link';
    imageLink.href = 'service-detail.html?id=' + encodeURIComponent(product.id);
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = 'Hình minh họa ' + product.name;
    img.loading = 'lazy';
    imageLink.appendChild(img);

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
    shop.append(strong, document.createTextNode(product.shopName || 'Tiệm minh họa'));
    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.description;

    const bottom = document.createElement('div');
    bottom.className = 'product-bottom';
    const price = document.createElement('p');
    price.className = 'product-price';
    price.append(document.createTextNode(formatCurrency(product.price) + ' '));
    const unit = document.createElement('span');
    unit.textContent = '/ ' + product.unit;
    price.appendChild(unit);
    const detail = document.createElement('a');
    detail.className = 'product-link';
    detail.href = imageLink.href;
    detail.textContent = 'Xem chi tiết →';
    bottom.append(price, detail);

    info.append(category, title, shop, description, bottom);
    card.append(imageLink, info);
    grid.appendChild(card);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof products !== 'undefined') renderProducts(products);
  });
} else if (typeof products !== 'undefined') {
  renderProducts(products);
}
