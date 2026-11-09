<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Giỏ hàng - WASHUP</title>
  <link rel="stylesheet" href="css/style.css">
  <style>
    .cart-container {
      max-width: 1000px;
      margin: 40px auto;
      padding: 0 20px;
    }
    .cart-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background: #fff;
    }
    .cart-table th, .cart-table td {
      padding: 14px;
      text-align: left;
      border-bottom: 1px solid #e5eaf3;
    }
    .cart-table th {
      background-color: #f8fafc;
      color: #14213d;
    }
    .qty-btn {
      width: 28px;
      height: 28px;
      border: 1px solid #cbd5e1;
      background: #fff;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
    .qty-btn:hover {
      background: #e2e8f0;
    }
    .btn-remove {
      padding: 6px 12px;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
    }
    .btn-remove:hover {
      background-color: #bb2d3b;
    }
    .empty-box {
      text-align: center;
      padding: 50px 20px;
      background: #f8fafc;
      border-radius: 12px;
      border: 1px dashed #cbd5e1;
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header style="padding: 15px 30px; background-color: #fff; border-bottom: 1px solid #e5eaf3; display: flex; justify-content: space-between; align-items: center;">
    <a href="index.html" style="font-weight: bold; text-decoration: none; font-size: 22px; color: #14213d;">WASHUP</a>
    <nav style="display: flex; gap: 20px; align-items: center;">
      <a href="index.html" style="text-decoration: none; color: #475569;">Trang chủ</a>
      <a href="products.html" style="text-decoration: none; color: #475569;">Sản phẩm / Dịch vụ</a>
      <a href="cart.html" style="font-weight: bold; color: #0645ad; text-decoration: none;">
        Giỏ hàng (<span id="cart-badge">0</span>)
      </a>
    </nav>
  </header>

  <!-- NỘI DUNG GIỎ HÀNG -->
  <main class="cart-container">
    <h2>Giỏ hàng của bạn</h2>

    <!-- THÔNG BÁO GIỎ HÀNG RỖNG -->
    <div id="empty-cart-message" class="empty-box" style="display: none;">
      <p style="font-size: 18px; color: #64748b; margin-bottom: 15px;">Giỏ hàng của bạn hiện đang rỗng!</p>
      <a href="products.html" style="display: inline-block; padding: 10px 20px; background-color: #0645ad; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Tiếp tục xem dịch vụ</a>
    </div>

    <!-- BẢNG GIỎ HÀNG KHUYẾN NGHỊ -->
    <div id="cart-content-wrapper">
      <table id="cart-table" class="cart-table">
        <thead>
          <tr>
            <th style="width: 80px;">Hình ảnh</th>
            <th>Tên dịch vụ</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody id="cart-items">
          <!-- JS Render ở đây -->
        </tbody>
      </table>

      <div style="margin-top: 25px; text-align: right; font-size: 20px; font-weight: bold;">
        <span>Tổng cộng: </span>
        <span id="total-price" style="color: #0645ad;">0 ₫</span>
      </div>
    </div>
  </main>

  <!-- CHÚ Ý: CHỈ NHÚNG 2 FILE SCRIPT NÀY, KHÔNG VIẾT THÊM THẺ <script> NÀO KHÁC BÊN DƯỚI -->
  <script src="js/products.js"></script>
  <script src="js/cart.js"></script>
</body>
</html>
