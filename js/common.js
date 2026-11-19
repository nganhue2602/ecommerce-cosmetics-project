// Định dạng giá tiền theo đơn vị Việt Nam đồng
function formatCurrency(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(price);
}

// Tìm dịch vụ theo mã ID
function getProductById(id) {
  const productList = window.products || [];

  return productList.find(function(product) {
    return product.id === id;
  }) || null;
}

// Chia sẻ các hàm dùng chung để những tệp JavaScript khác có thể sử dụng
window.formatCurrency = formatCurrency;
window.getProductById = getProductById;
