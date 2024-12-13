var sliderItems = [
    {image: 'img/1 (6).jpg'},
    {image: 'img/1 (5).jpg'},
    {image: 'img/1 (4).jpg'},
    {image: 'img/1 (3).jpg'},
    {image: 'img/1 (2).jpg'},
    {image: 'img/1 (1).jpg'}
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
        { name: 'Lon Sitting', price: '11.000 VND', image: 'img/nuoc (7).png' },
        { name: 'Lon Coca', price: '10.000 VND', image: 'img/nuoc (4).png' },
        { name: 'Chai C2', price: '10.000 VND', image: 'img/nuoc (3).png' },
        { name: 'Chai C2 Chanh', price: '12.000 VND', image: 'img/nuoc (9).png' },
        { name: 'Bia SaiGon Đỏ', price: '15.000 VND', image: 'img/nuoc (2).png' },
        { name: 'Bia SaiGon Bạc', price: '15.000 VND', image: 'img/nuoc (5).png' },
        { name: 'Thùng Bia 333', price: '330.000 VND', image: 'img/nuoc (1).png' },
        { name: 'Thùng nước ngọt Pesi', price: '310.000 VND', image: 'img/nuoc (8).png' },
        { name: 'Thùng nước ngọt Coca', price: '320.000 VND', image: 'img/nuoc (6).png' },
        { name: 'Chai 7 up', price: '13.000 VND', image: 'img/nuoc (1).webp' },
        { name: 'Chai nước CocaCoca', price: '13.000 VND', image: 'img/nuoc (2).webp' },
        { name: 'Lon Nước Sprite', price: '12.000 VND', image: 'img/nuoc (3).webp' }
    ],
    banh: [
        { name: 'Bánh bí đỏ', price: '10.000 VND', image: 'img/banh (9).png'},
        { name: 'Bánh tôm', price: '10.000 VND', image: 'img/banh (3).png'},
        { name: 'Bánh bắp', price: '10.000 VND', image: 'img/banh (4).png'},
        { name: 'Bánh cà chua', price: '10.000 VND', image: 'img/banh (5).png'},
        { name: 'Bánh tảo biển', price: '10.000 VND', image: 'img/banh (7).png'},
        { name: 'Bánh bắp phô mai', price: '10.000 VND', image: 'img/banh (11).png' },
        { name: 'Bánh gà quay', price: '12.000 VND', image: 'img/banh (12).png' },
        { name: 'Bánh kimchi', price: '12.000 VND', image: 'img/banh (14).png' },
        { name: 'Bánh bắp ngọt', price: '11.000 VND', image: 'img/banh (1).png'},
        { name: 'Bento vàng', price: '15.000 VND', image: 'img/banh (2).png' },
        { name: 'Bento xanh', price: '15.000 VND', image: 'img/banh (6).png' },
        { name: 'Bento tím', price: '15.000 VND', image: 'img/banh (16).png' },
        { name: 'Bento cam', price: '15.000 VND', image: 'img/banh (5).png' },
        { name: 'Bento đen', price: '15.000 VND', image: 'img/banh (2).png' },
        { name: 'Bento thái', price: '15.000 VND', image: 'img/banh (15).png' },
        { name: 'Bento đỏ thái', price: '15.000 VND', image: 'img/banh (8).png'}
    ],
    keo: [
        { name: 'Kẹo lốc xoáy', price: '10.000 VND', image: 'img/keo (1).png' },
        { name: 'Kẹo chanh', price: '20.000 VND', image: 'img/keo (16).png' },
        { name: 'Kẹo vải', price: '20.000 VND', image: 'img/keo (15).png' },
        { name: 'Kẹo ổi', price: '20.000 VND', image: 'img/keo (14).png' },
        { name: 'Kẹo matcha', price: '25.000 VND', image: 'img/keo (5).png' },
        { name: 'Kẹo táo', price: '35.000 VND', image: 'img/keo (3).png' },
        { name: 'Kẹo mút', price: '7.000 VND', image: 'img/keo (11).png' },
        { name: 'Kẹo thập cẩm', price: '30.000 VND', image: 'img/keo (10).png' },
        { name: 'Kẹo', price: '8.000 VND', image: 'img/keo (9).png' },
        { name: 'Kẹo bơ', price: '33.000 VND', image: 'img/keo (8).png' },
        { name: 'Kẹo sữa', price: '33.000 VND', image: 'img/keo (7).png' },
        { name: 'Kẹo Chuppa chups', price: '5.000 VND', image: 'img/keo (6).png' },
        { name: 'Kẹo 3 vị', price: '33.000 VND', image: 'img/keo (5).png' },
        { name: 'Kẹo dưa lưới', price: '33.000 VND', image: 'img/keo (4).png' },
        { name: 'Kẹo khổng lồ', price: '120.000 VND', image: 'img/keo (12).png' },
        { name: 'Kẹo dẻo', price: '49.000 VND', image: 'img/keo (2).png' }

        
    ],
    'do-gia-dung': [
        { name: 'Máy xay sinh tố đa năng', price: '499.000 VND', image: 'img/dodung (1).png' },
        { name: 'Máy Xay Sinh Tố', price: '199.000 VND', image: 'img/dodung (14).png' },
        { name: 'Nồi cơm điện đa năng', price: '299.000 VND', image: 'img/dodung (13).png' },
        { name: 'Nồi cơm điện Sunhouse', price: '399.000 VND', image: 'img/dodung (12).png' },
        { name: 'Nồi cơm điện Mutosi', price: '179.000 VND', image: 'img/dodung (11).png' },
        { name: 'Nồi cơm điện GoldSun', price: '199.000 VND', image: 'img/dodung (10).png' },
        { name: 'Đồ dùng lau nhà', price: '99.000 VND', image: 'img/dodung (9).png' },
        { name: 'Nồi lẩu điện Hawonkoo', price: '399.000 VND', image: 'img/dodung (8).png' },
        { name: 'Nồi lẩu điện Toros', price: '299.000 VND', image: 'img/dodung (7).png' },
        { name: 'Máy xay sinh tố Philips', price: '189.000 VND', image: 'img/dodung (6).png' },
        { name: 'Bếp điện từ EuroHome', price: '299.000 VND', image: 'img/dodung (5).png' },
        { name: 'Bếp điện từ cỡ lớn', price: '499.000 VND', image: 'img/dodung (4).png' },
        { name: 'Bộ dụng cụ lau nhà', price: '109.000 VND', image: 'img/dodung (3).png' },
        { name: 'Bộ dụng cụ lau nhà HappyTime', price: '149.000 VND', image: 'img/dodung (2).png' }
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

