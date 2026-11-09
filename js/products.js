
const products = [
  {
    id: "giat-say",
    name: "Giặt sấy quần áo",
    price: 15000,
    category: "Giặt thường",
    image: "images/dich-vu-giat-say-chuyen-nghiep-cua-chung-toi.jpg",
    description: "Giặt sạch quần áo hằng ngày, tiện lợi cho lịch trình bận rộn.",
    unit: "kg",
    shopId: "shop-a",
    shopName: "Tiệm minh họa A"
  },
  {
    id: "giat-hap",
    name: "Giặt hấp quần áo",
    price: 50000,
    category: "Chăm sóc chuyên biệt",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80",
    description: "Dành cho một số trang phục cần phương pháp chăm sóc riêng.",
    unit: "món",
    shopId: "shop-b",
    shopName: "Tiệm minh họa B"
  },
  {
    id: "chan-men",
    name: "Giặt chăn mền",
    price: 60000,
    category: "Đồ gia dụng",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80",
    description: "Làm sạch chăn mền và đồ dùng giường ngủ.",
    unit: "món",
    shopId: "shop-c",
    shopName: "Tiệm minh họa C"
  },
  {
    id: "ve-sinh-giay",
    name: "Vệ sinh giày thể thao",
    price: 40000,
    category: "Chăm sóc giày",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    description: "Chăm sóc giày để giữ vẻ ngoài sạch sẽ, gọn gàng.",
    unit: "đôi",
    shopId: "shop-b",
    shopName: "Tiệm minh họa B"
  },
  {
    id: "rem-cua",
    name: "Giặt rèm cửa",
    price: 35000,
    category: "Đồ gia dụng",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80",
    description: "Vệ sinh rèm theo chất liệu và hướng dẫn chăm sóc.",
    unit: "kg",
    shopId: "shop-c",
    shopName: "Tiệm minh họa C"
  },
  {
    id: "thu-bong",
    name: "Giặt thú bông",
    price: 30000,
    category: "Đồ dùng cá nhân",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    description: "Làm sạch thú bông với cách chăm sóc phù hợp.",
    unit: "món",
    shopId: "shop-c",
    shopName: "Tiệm minh họa C"
  },
  {
    id: "giat-nhanh",
    name: "Giặt nhanh",
    price: 25000,
    category: "Tiết kiệm thời gian",
    image: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&w=700&q=80",
    description: "Dành cho nhu cầu cần xử lý quần áo trong thời gian ngắn.",
    unit: "kg",
    shopId: "shop-a",
    shopName: "Tiệm minh họa A"
  },
  {
    id: "ui-quan-ao",
    name: "Ủi quần áo",
    price: 10000,
    category: "Hoàn thiện trang phục",
    image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=700&q=80",
    description: "Giúp trang phục phẳng phiu và sẵn sàng sử dụng.",
    unit: "món",
    shopId: "shop-a",
    shopName: "Tiệm minh họa A"
  }
];
// Gán mảng products lên window để cart.js đọc được ở mọi nơi
window.products = products;
