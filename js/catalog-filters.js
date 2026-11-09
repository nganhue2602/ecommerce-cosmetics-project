
/* WASHUP - Buoi 3 / Buoc 3
 * Tim kiem theo ten, loc theo danh muc, sap xep gia.
 * Su dung mang products tu products.js va ham renderProducts tu catalog.js.
 * Khong thay doi mang products goc.
 */

(function () {
  'use strict';

  // Chuan hoa chuoi de ho tro tim kiem khong dau
  function normalizeText(value) {
    return String(value ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLocaleLowerCase('vi')
      .trim();
  }

  // Tim kiem dich vu theo ten
  function searchByName(list, keyword) {
    const normalizedKeyword = normalizeText(keyword);

    if (!normalizedKeyword) {
      return [...list];
    }

    return list.filter(function (product) {
      return normalizeText(product.name).includes(normalizedKeyword);
    });
  }

  // Loc dich vu theo danh muc
  function filterByCategory(list, category) {
    if (!category || category === 'all') {
      return [...list];
    }

    return list.filter(function (product) {
      return product.category === category;
    });
  }

  // Sap xep dich vu theo gia
  function sortByPrice(list, order) {
    const result = [...list];

    if (order === 'asc') {
      return result.sort(function (a, b) {
        return a.price - b.price;
      });
    }

    if (order === 'desc') {
      return result.sort(function (a, b) {
        return b.price - a.price;
      });
    }

    return result;
  }

  // Ket hop tim kiem, loc va sap xep
  function getFilteredProducts(list, keyword, category, order) {
    const searched = searchByName(list, keyword);
    const filtered = filterByCategory(searched, category);

    return sortByPrice(filtered, order);
  }

  // Tao truong nhap lieu va nhan
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

    return {
      field: field,
      control: control
    };
  }

  // Khoi tao cac bo loc tren trang
  function initCatalogFilters() {
    const listElement = document.getElementById('products-list');

    if (!listElement || document.getElementById('catalog-toolbar')) {
      return;
    }

    if (
      typeof products === 'undefined' ||
      !Array.isArray(products) ||
      typeof renderProducts !== 'function'
    ) {
      console.error(
        'WASHUP: Can tai products.js va catalog.js truoc catalog-filters.js.'
      );
      return;
    }

    // Tao khu vuc tim kiem va loc
    const toolbar = document.createElement('div');
    toolbar.id = 'catalog-toolbar';
    toolbar.className = 'catalog-toolbar';
    toolbar.setAttribute('role', 'search');
    toolbar.setAttribute(
      'aria-label',
      'Tim kiem va loc dich vu giat ui'
    );

    // O tim kiem
    const search = createControl(
      'input',
      'catalog-search',
      'Tim theo ten dich vu',
      'catalog-input'
    );

    search.control.type = 'search';
    search.control.placeholder = 'Vi du: giat, ui, giay...';
    search.control.autocomplete = 'off';

    // Danh muc dich vu
    const category = createControl(
      'select',
      'catalog-category',
      'Danh muc dich vu',
      'catalog-select'
    );

    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'Tat ca danh muc';

    category.control.appendChild(allOption);

    const categories = [
      ...new Set(products.map(function (product) {
        return product.category;
      }))
    ].sort(function (a, b) {
      return a.localeCompare(b, 'vi');
    });

    categories.forEach(function (value) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;

      category.control.appendChild(option);
    });

    // Sap xep theo gia
    const sort = createControl(
      'select',
      'catalog-sort',
      'Sap xep theo gia',
      'catalog-select'
    );

    const sortOptions = [
      ['', 'Thu tu mac dinh'],
      ['asc', 'Gia: thap den cao'],
      ['desc', 'Gia: cao xuong thap']
    ];

    sortOptions.forEach(function (item) {
      const option = document.createElement('option');
      option.value = item[0];
      option.textContent = item[1];

      sort.control.appendChild(option);
    });

    // Nut xoa bo loc
    const action = document.createElement('div');
    action.className = 'catalog-reset-wrap';

    const reset = document.createElement('button');
    reset.type = 'button';
    reset.id = 'catalog-reset';
    reset.className = 'catalog-reset';
    reset.textContent = 'Xoa bo loc';

    action.appendChild(reset);

    // Dua cac truong vao thanh cong cu
    toolbar.append(
      search.field,
      category.field,
      sort.field,
      action
    );

    listElement.parentNode.insertBefore(toolbar, listElement);

    // Khu vuc hien thi so luong ket qua
    const summary = document.createElement('p');
    summary.id = 'catalog-result-count';
    summary.className = 'catalog-result-count';
    summary.setAttribute('role', 'status');
    summary.setAttribute('aria-live', 'polite');

    listElement.parentNode.insertBefore(summary, listElement);

    // Ap dung cac dieu kien tim kiem, loc va sap xep
    function applyFilters() {
      const result = getFilteredProducts(
        products,
        search.control.value,
        category.control.value,
        sort.control.value
      );

      renderProducts(result);

      summary.textContent =
        'Hien thi ' + result.length + ' / ' +
        products.length + ' dich vu';
    }

    // Lang nghe cac thao tac cua nguoi dung
    search.control.addEventListener('input', applyFilters);
    category.control.addEventListener('change', applyFilters);
    sort.control.addEventListener('change', applyFilters);

    // Dat lai cac bo loc
    reset.addEventListener('click', function () {
      search.control.value = '';
      category.control.value = 'all';
      sort.control.value = '';

      applyFilters();
      search.control.focus();
    });

    // Hien thi danh sach dich vu ban dau
    applyFilters();
  }

  // Cong khai cac ham de phuc vu kiem thu
  window.WashupCatalogFilters = {
    normalizeText: normalizeText,
    searchByName: searchByName,
    filterByCategory: filterByCategory,
    sortByPrice: sortByPrice,
    getFilteredProducts: getFilteredProducts
  };

  // Khoi tao sau khi HTML duoc tai
  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initCatalogFilters
    );
  } else {
    initCatalogFilters();
  }
})();
