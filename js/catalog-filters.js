/* WASHUP - Buoi 3 / Buoc 3
 * Tim kiem theo ten, loc theo danh muc, sap xep gia.
 * Su dung mang products tu js/products.js va ham renderProducts tu js/catalog.js.
 * Khong chinh sua mang products goc.
 */
(function () {
  'use strict';

  function normalizeText(value) {
    return String(value ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLocaleLowerCase('vi')
      .trim();
  }

  function searchByName(list, keyword) {
    const normalizedKeyword = normalizeText(keyword);
    if (!normalizedKeyword) return [...list];
    return list.filter(product => normalizeText(product.name).includes(normalizedKeyword));
  }

  function filterByCategory(list, category) {
    if (!category || category === 'all') return [...list];
    return list.filter(product => product.category === category);
  }

  function sortByPrice(list, order) {
    const result = [...list]; // Sao chep, khong sort truc tiep mang goc
    if (order === 'asc') return result.sort((a, b) => a.price - b.price);
    if (order === 'desc') return result.sort((a, b) => b.price - a.price);
    return result;
  }

  function getFilteredProducts(list, keyword, category, order) {
    const searched = searchByName(list, keyword);
    const filtered = filterByCategory(searched, category);
    return sortByPrice(filtered, order);
  }

  function createControl(tag, id, labelText, className) {
    const field = document.createElement('div');
    field.className = 'catalog-field';
    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = labelText;
    const control = document.createElement(tag);
    control.id = id;
    control.className = className;
    field.append(label, control);
    return { field, control };
  }

  function initCatalogFilters() {
    const listElement = document.getElementById('products-list');
    if (!listElement || document.getElementById('catalog-toolbar')) return;

    if (typeof products === 'undefined' || !Array.isArray(products) || typeof renderProducts !== 'function') {
      console.error('WASHUP: Can js/products.js va js/catalog.js (renderProducts) truoc catalog-filters.js.');
      return;
    }

    const toolbar = document.createElement('div');
    toolbar.id = 'catalog-toolbar';
    toolbar.className = 'catalog-toolbar';
    toolbar.setAttribute('role', 'search');
    toolbar.setAttribute('aria-label', 'Tìm kiếm và lọc dịch vụ giặt ủi');

    const search = createControl('input', 'catalog-search', 'Tìm theo tên dịch vụ', 'catalog-input');
    search.control.type = 'search';
    search.control.placeholder = 'Ví dụ: giặt, ủi, giày...';
    search.control.autocomplete = 'off';

    const category = createControl('select', 'catalog-category', 'Danh mục dịch vụ', 'catalog-select');
    const all = document.createElement('option');
    all.value = 'all';
    all.textContent = 'Tất cả danh mục';
    category.control.appendChild(all);
    const categories = [...new Set(products.map(p => p.category))].sort((a, b) => a.localeCompare(b, 'vi'));
    categories.forEach(value => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      category.control.appendChild(option);
    });

    const sort = createControl('select', 'catalog-sort', 'Sắp xếp theo giá', 'catalog-select');
    [
      ['', 'Thứ tự mặc định'],
      ['asc', 'Giá: thấp đến cao'],
      ['desc', 'Giá: cao xuống thấp']
    ].forEach(([value, text]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = text;
      sort.control.appendChild(option);
    });

    const action = document.createElement('div');
    action.className = 'catalog-reset-wrap';
    const reset = document.createElement('button');
    reset.type = 'button';
    reset.id = 'catalog-reset';
    reset.className = 'catalog-reset';
    reset.textContent = 'Xóa bộ lọc';
    action.appendChild(reset);

    toolbar.append(search.field, category.field, sort.field, action);
    listElement.parentNode.insertBefore(toolbar, listElement);

    const summary = document.createElement('p');
    summary.id = 'catalog-result-count';
    summary.className = 'catalog-result-count';
    summary.setAttribute('role', 'status');
    summary.setAttribute('aria-live', 'polite');
    listElement.parentNode.insertBefore(summary, listElement);

    function applyFilters() {
      const result = getFilteredProducts(products, search.control.value, category.control.value, sort.control.value);
      renderProducts(result);
      summary.textContent = `Hiển thị ${result.length} / ${products.length} dịch vụ`;
    }

    search.control.addEventListener('input', applyFilters);
    category.control.addEventListener('change', applyFilters);
    sort.control.addEventListener('change', applyFilters);
    reset.addEventListener('click', function () {
      search.control.value = '';
      category.control.value = 'all';
      sort.control.value = '';
      applyFilters();
      search.control.focus();
    });

    applyFilters();
  }

  // Cong khai cac ham thuan de co the kiem thu doc lap, khong su dung mang goc noi bo.
  window.WashupCatalogFilters = {
    normalizeText,
    searchByName,
    filterByCategory,
    sortByPrice,
    getFilteredProducts
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatalogFilters);
  } else {
    initCatalogFilters();
  }
})();
