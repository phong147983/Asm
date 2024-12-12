var sliderItems = [
    {image: 'Hình ảnh/1 (1).jpg'},
    {image: 'Hình ảnh/1 (2).jpg'},
    {image: 'Hình ảnh/1 (3).jpg'},
    {image: 'Hình ảnh/1 (4).jpg'},
    {image: 'Hình ảnh/1 (5).jpg'},
    {image: 'Hình ảnh/1 (6).jpg'}
];
var index = 0; // Vị trí của hình ảnh hiện tại
var slider = document.getElementById("slider");

// Đảm bảo rằng hình ảnh đầu tiên luôn được hiển thị ngay khi tải trang
slider.style.backgroundImage = `url("${sliderItems[index].image}")`;

function next() {
    index++;
    if (index == sliderItems.length)
        index = 0;
    slider.style.backgroundImage = `url("${sliderItems[index].image}")`;
}

function prev() {
    index--;
    if (index == -1)
        index = sliderItems.length - 1;
    slider.style.backgroundImage = `url("${sliderItems[index].image}")`;
}

// Chạy tự động slide sau mỗi 3 giây
var timer = setInterval(next, 3000);


//San Pham 
const products = {
    nuoc: [
        { name: 'Lon Sitting', price: '11.000 VND', image: 'Hình ảnh/NƯỚC (5).png' },
        { name: 'Lon Coca', price: '10.000 VND', image: 'Hình ảnh/NƯỚC (8).png' },
        { name: 'Chai C2', price: '10.000 VND', image: 'Hình ảnh/NƯỚC (9).png' },
        { name: 'Chai C2 Chanh', price: '12.000 VND', image: 'Hình ảnh/NƯỚC (3).png' },
        { name: 'Bia SaiGon Đỏ', price: '15.000 VND', image: 'Hình ảnh/NƯỚC (10).png' },
        { name: 'Bia SaiGon Bạc', price: '15.000 VND', image: 'Hình ảnh/NƯỚC (7).png' },
        { name: 'Thùng Bia 333', price: '330.000 VND', image: 'Hình ảnh/NƯỚC (1).png' },
        { name: 'Thùng nước ngọt Pesi', price: '310.000 VND', image: 'Hình ảnh/NƯỚC (4).png' },
        { name: 'Thùng nước ngọt Coca', price: '320.000 VND', image: 'Hình ảnh/NƯỚC (6).png' },
        { name: 'Chai 7 up', price: '13.000 VND', image: 'Hình ảnh/NƯỚC .webp' },
        { name: 'Chai nước CocaCoca', price: '13.000 VND', image: 'Hình ảnh/Nước (2).webp' },
        { name: 'Lon Nước Sprite', price: '12.000 VND', image: 'Hình ảnh/Nước (1).webp' }
    ],
    banh: [
        { name: 'Bánh bí đỏ', price: '10.000 VND', image: 'Hình ảnh/BÁNH (9).png'},
        { name: 'Bánh tôm', price: '10.000 VND', image: 'Hình ảnh/BÁNH (15).png'},
        { name: 'Bánh bắp', price: '10.000 VND', image: 'Hình ảnh/BÁNH (14).png'},
        { name: 'Bánh cà chua', price: '10.000 VND', image: 'Hình ảnh/BÁNH (13).png'},
        { name: 'Bánh tảo biểnbiển', price: '10.000 VND', image: 'Hình ảnh/BÁNH (11).png'},
        { name: 'Bánh bắp phô mai', price: '10.000 VND', image: 'Hình ảnh/BÁNH (7).png' },
        { name: 'Bánh gà quay', price: '12.000 VND', image: 'Hình ảnh/BÁNH (6).png' },
        { name: 'Bánh kimchi', price: '12.000 VND', image: 'Hình ảnh/BÁNH (4).png' },
        { name: 'Bánh bắp ngọt', price: '11.000 VND', image: 'Hình ảnh/BÁNH (1).png'},
        { name: 'Bento vàng', price: '15.000 VND', image: 'Hình ảnh/BÁNH (16).png' },
        { name: 'Bento xanh', price: '15.000 VND', image: 'Hình ảnh/BÁNH (12).png' },
        { name: 'Bento tím', price: '15.000 VND', image: 'Hình ảnh/BÁNH (8).png' },
        { name: 'Bento cam', price: '15.000 VND', image: 'Hình ảnh/BÁNH (5).png' },
        { name: 'Bento đen', price: '15.000 VND', image: 'Hình ảnh/BÁNH (2).png' },
        { name: 'Bento thái', price: '15.000 VND', image: 'Hình ảnh/BÁNH (3).png' },
        { name: 'Bento đỏ thái', price: '15.000 VND', image: 'Hình ảnh/BÁNH (10).png'}
    ],
    keo: [
        { name: 'Kẹo lốc xoáy', price: '10.000 VND', image: 'Hình ảnh/Kẹo (1).png' },
        { name: 'Kẹo chanh', price: '20.000 VND', image: 'Hình ảnh/Kẹo (2).png' },
        { name: 'Kẹo vải', price: '20.000 VND', image: 'Hình ảnh/Kẹo (3).png' },
        { name: 'Kẹo ổi', price: '20.000 VND', image: 'Hình ảnh/Kẹo (4).png' },
        { name: 'Kẹo matcha', price: '25.000 VND', image: 'Hình ảnh/Kẹo (5).png' },
        { name: 'Kẹo táo', price: '35.000 VND', image: 'Hình ảnh/Kẹo (6).png' },
        { name: 'Kẹo mút', price: '7.000 VND', image: 'Hình ảnh/Kẹo (7).png' },
        { name: 'Kẹo thập cẩm', price: '30.000 VND', image: 'Hình ảnh/Kẹo (8).png' },
        { name: 'Kẹo lỏ', price: '8.000 VND', image: 'Hình ảnh/Kẹo (9).png' },
        { name: 'Kẹo bơ', price: '33.000 VND', image: 'Hình ảnh/Kẹo (10).png' },
        { name: 'Kẹo sữa', price: '33.000 VND', image: 'Hình ảnh/Kẹo (11).png' },
        { name: 'Kẹo Chuppa chups', price: '5.000 VND', image: 'Hình ảnh/Kẹo (12).png' },
        { name: 'Kẹo 3 vị', price: '33.000 VND', image: 'Hình ảnh/Kẹo (13).png' },
        { name: 'Kẹo dưa lưới', price: '33.000 VND', image: 'Hình ảnh/Kẹo (14).png' },
        { name: 'Kẹo khổng lồ', price: '120.000 VND', image: 'Hình ảnh/Kẹo (15).png' },
        { name: 'Kẹo dẻo', price: '49.000 VND', image: 'Hình ảnh/Kẹo (16).png' }
    ],
    'do-gia-dung': [
        { name: 'Máy xay sinh tố đa năng', price: '499.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (1).png' },
        { name: 'Máy Xay Sinh Tố', price: '199.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (2).png' },
        { name: 'Nồi cơm điện đa năng', price: '299.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (3).png' },
        { name: 'Nồi cơm điện Sunhouse', price: '399.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (4).png' },
        { name: 'Nồi cơm điện Mutosi', price: '179.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (5).png' },
        { name: 'Nồi cơm điện GoldSun', price: '199.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (6).png' },
        { name: 'Đồ dùng lau nhà', price: '99.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (7).png' },
        { name: 'Nồi lẩu điện Hawonkoo', price: '399.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (8).png' },
        { name: 'Nồi lẩu điện Toros', price: '299.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (9).png' },
        { name: 'Máy xay sinh tố Philips', price: '189.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (10).png' },
        { name: 'Bếp điện từ EuroHome', price: '299.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (11).png' },
        { name: 'Bếp điện từ cỡ lớn', price: '499.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (12).png' },
        { name: 'Bộ dụng cụ lau nhà', price: '109.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (13).png' },
        { name: 'Bộ dụng cụ lau nhà HappyTime', price: '149.000 VND', image: 'Hình ảnh/ĐÔ DÙNG (14).png' }
    ]
};
function showCategory(category) {
    const container = document.getElementById('productContainer');
    container.innerHTML = ''; // Xóa nội dung hiện tại
    products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Tạo các phần của sản phẩm
        const productImage = document.createElement('div');
        productImage.className = 'product-image';
        productImage.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        productInfo.innerHTML = `
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
        `;

        const addButton = document.createElement('button');
        addButton.className = 'add-to-cart';
        addButton.textContent = 'Thêm vào giỏ';

        // Gắn các phần vào div chính
        productDiv.appendChild(productImage);
        productDiv.appendChild(productInfo);
        productDiv.appendChild(addButton);

        // Thêm sản phẩm vào container
        container.appendChild(productDiv);
    });
}


// Gắn sự kiện cho các danh mục
document.querySelectorAll('.menu1 a').forEach(link => {
    link.addEventListener('click', () => {
        showCategory(link.dataset.category);
    });
});


let lastScrollTop = 0; // Lưu vị trí cuộn trước đó
const menu = document.getElementById('menu1'); // Lấy phần tử menu
const productContainer = document.getElementById('productContainer'); // Lấy phần tử sản phẩm

// Hàm kiểm tra cuộn trang
function handleScroll() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Lấy vị trí cuộn hiện tại

    // Kiểm tra xem có cuộn qua phần sản phẩm chưa
    if (currentScroll > lastScrollTop && currentScroll > productContainer.offsetTop - menu.offsetHeight) {
        // Nếu cuộn xuống qua phần sản phẩm, cố định menu lên trên cùng
        menu.style.position = 'fixed';
        menu.style.top = '0';
    } else {
        // Nếu cuộn lên, cho menu trở lại vị trí ban đầu
        if (currentScroll < productContainer.offsetTop - menu.offsetHeight) {
            menu.style.position = 'absolute';
            menu.style.top = `${productContainer.offsetTop - menu.offsetHeight}px`; // Quay về vị trí ban đầu
        }
    }

    // Cập nhật lại vị trí cuộn
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Đảm bảo không có giá trị âm
}
function scrollToProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.scrollIntoView({ behavior: 'smooth' });
}


// Gắn sự kiện cuộn vào cửa sổ
window.addEventListener('scroll', handleScroll);

