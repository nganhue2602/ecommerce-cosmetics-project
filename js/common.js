// Định dạng giá tiền Việt Nam
function formatCurrency(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(price);
}

// Tìm dịch vụ theo ID
function getProductById(id) {
  return products.find(function(product) {
    return product.id === id;
  });
}
