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
        { name: 'Lon Sitting', price: '11.000', image: 'img/nuoc (7).png' },
        { name: 'Lon Coca', price: '10.000', image: 'img/nuoc (4).png' },
        { name: 'Chai C2', price: '10.000', image: 'img/nuoc (3).png' },
        { name: 'Chai C2 Chanh', price: '12.000', image: 'img/nuoc (9).png' },
        { name: 'Bia SaiGon Đỏ', price: '15.000', image: 'img/nuoc (2).png' },
        { name: 'Bia SaiGon Bạc', price: '15.000', image: 'img/nuoc (5).png' },
        { name: 'Thùng Bia 333', price: '330.000', image: 'img/nuoc (1).png' },
        { name: 'Thùng nước ngọt Pesi', price: '310.000', image: 'img/nuoc (8).png' },
        { name: 'Thùng nước ngọt Coca', price: '320.000', image: 'img/nuoc (6).png' },
        { name: 'Chai 7 up', price: '13.000', image: 'img/nuoc (1).webp' },
        { name: 'Chai nước CocaCoca', price: '13.000', image: 'img/nuoc (2).webp' },
        { name: 'Lon Nước Sprite', price: '12.000', image: 'img/nuoc (3).webp' }
    ],
    banh: [
        { name: 'Bánh bí đỏ', price: '10.000 ', image: 'img/banh (9).png'},
        { name: 'Bánh tôm', price: '10.000', image: 'img/banh (3).png'},
        { name: 'Bánh bắp', price: '10.000 ', image: 'img/banh (4).png'},
        { name: 'Bánh cà chua', price: '10.000 ', image: 'img/banh (5).png'},
        { name: 'Bánh tảo biển', price: '10.000 ', image: 'img/banh (7).png'},
        { name: 'Bánh bắp phô mai', price: '10.000 ', image: 'img/banh (11).png' },
        { name: 'Bánh gà quay', price: '12.000 ', image: 'img/banh (12).png' },
        { name: 'Bánh kimchi', price: '12.000 ', image: 'img/banh (14).png' },
        { name: 'Bánh bắp ngọt', price: '11.000 ', image: 'img/banh (1).png'},
        { name: 'Bento vàng', price: '15.000 ', image: 'img/banh (2).png' },
        { name: 'Bento xanh', price: '15.000 ', image: 'img/banh (6).png' },
        { name: 'Bento tím', price: '15.000 ', image: 'img/banh (16).png' },
        { name: 'Bento cam', price: '15.000 ', image: 'img/banh (5).png' },
        { name: 'Bento đen', price: '15.000 ', image: 'img/banh (2).png' },
        { name: 'Bento thái', price: '15.000 ', image: 'img/banh (15).png' },
        { name: 'Bento đỏ thái', price: '15.000 ', image: 'img/banh (8).png'}
    ],
    keo: [
        { name: 'Kẹo lốc xoáy', price: '10.000 ', image: 'img/keo (1).png' },
        { name: 'Kẹo chanh', price: '20.000  ', image: 'img/keo (16).png' },
        { name: 'Kẹo vải', price: '20.000  ', image: 'img/keo (15).png' },
        { name: 'Kẹo ổi', price: '20.000  ', image: 'img/keo (14).png' },
        { name: 'Kẹo matcha', price: '25.000  ', image: 'img/keo (5).png' },
        { name: 'Kẹo táo', price: '35.000 ', image: 'img/keo (3).png' },
        { name: 'Kẹo mút', price: '7.000 ', image: 'img/keo (11).png' },
        { name: 'Kẹo thập cẩm', price: '30.000  ', image: 'img/keo (10).png' },
        { name: 'Kẹo', price: '8.000  ', image: 'img/keo (9).png' },
        { name: 'Kẹo bơ', price: '33.000 ', image: 'img/keo (8).png' },
        { name: 'Kẹo sữa', price: '33.000  ', image: 'img/keo (7).png' },
        { name: 'Kẹo Chuppa chups', price: '5.000  ', image: 'img/keo (6).png' },
        { name: 'Kẹo 3 vị', price: '33.000  ', image: 'img/keo (5).png' },
        { name: 'Kẹo dưa lưới', price: '33.000  ', image: 'img/keo (4).png' },
        { name: 'Kẹo khổng lồ', price: '120.000  ', image: 'img/keo (12).png' },
        { name: 'Kẹo dẻo', price: '49.000 ', image: 'img/keo (2).png' }

        
    ],
    'do-gia-dung': [
        { name: 'Máy xay sinh tố đa năng', price: '499.000 ', image: 'img/dodung (1).png' },
        { name: 'Máy Xay Sinh Tố', price: '199.000  ', image: 'img/dodung (14).png' },
        { name: 'Nồi cơm điện đa năng', price: '299.000  ', image: 'img/dodung (13).png' },
        { name: 'Nồi cơm điện Sunhouse', price: '399.000  ', image: 'img/dodung (12).png' },
        { name: 'Nồi cơm điện Mutosi', price: '179.000  ', image: 'img/dodung (11).png' },
        { name: 'Nồi cơm điện GoldSun', price: '199.000  ', image: 'img/dodung (10).png' },
        { name: 'Đồ dùng lau nhà', price: '99.000  ', image: 'img/dodung (9).png' },
        { name: 'Nồi lẩu điện Hawonkoo', price: '399.000  ', image: 'img/dodung (8).png' },
        { name: 'Nồi lẩu điện Toros', price: '299.000  ', image: 'img/dodung (7).png' },
        { name: 'Máy xay sinh tố Philips', price: '189.000  ', image: 'img/dodung (6).png' },
        { name: 'Bếp điện từ EuroHome', price: '299.000  ', image: 'img/dodung (5).png' },
        { name: 'Bếp điện từ cỡ lớn', price: '499.000  ', image: 'img/dodung (4).png' },
        { name: 'Bộ dụng cụ lau nhà', price: '109.000  ', image: 'img/dodung (3).png' },
        { name: 'Bộ dụng cụ lau nhà HappyTime', price: '149.000  ', image: 'img/dodung (2).png' }
    ]
};

// Mảng lưu trữ sản phẩm yêu thích
let favoriteProducts = [];

// Hàm bật/tắt danh sách yêu thích
function toggleFavoritesList() {
    const favoritesList = document.getElementById('favoritesList');
    favoritesList.style.display = favoritesList.style.display === 'none' ? 'block' : 'none';
}
const favorites = []; // Mảng lưu trữ sản phẩm yêu thích

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

        // Tạo link yêu thích với Font Awesome trái tim
        const heartLink = document.createElement('a');
        heartLink.className = 'add-to-favorites';
        heartLink.href = '#';
        heartLink.innerHTML = '<i class="fa-regular fa-heart"></i>';

        // Thêm sự kiện click để chuyển đổi trạng thái yêu thích
        heartLink.addEventListener('click', function(event) {
            event.preventDefault();
            const icon = heartLink.querySelector('i');
            icon.classList.toggle('fa-solid');
            icon.classList.toggle('fa-regular');

            // Thêm hoặc xóa sản phẩm khỏi mảng yêu thích
            if (icon.classList.contains('fa-solid')) {
                favorites.push(product); // Thêm sản phẩm vào yêu thích
                showToast(`Bạn đã thêm sản phẩm "${product.name}" vào danh sách yêu thích!`, 'success');
            } else {
                const index = favorites.indexOf(product);
                if (index > -1) {
                    favorites.splice(index, 1); // Xóa sản phẩm khỏi yêu thích
                    showToast(`Bạn đã xóa sản phẩm "${product.name}" khỏi danh sách yêu thích!`, 'error');
                }
            }

            updateFavorites(); // Cập nhật danh sách yêu thích
        });

        // Gắn các phần vào div chính
        productDiv.appendChild(productImage);
        productDiv.appendChild(productInfo);
        productDiv.appendChild(addButton);
        productDiv.appendChild(heartLink);

        container.appendChild(productDiv);
    });
}

// Cập nhật danh sách sản phẩm yêu thích trong form nhỏ
function updateFavorites() {
    const favoritesContainer = document.getElementById('favoritesContainer');
    favoritesContainer.innerHTML = ''; // Xóa nội dung hiện tại

    favorites.forEach(product => {
        const favoriteDiv = document.createElement('div');
        favoriteDiv.className = 'favorite-product';

        const favoriteImage = document.createElement('img');
        favoriteImage.src = product.image;
        favoriteImage.alt = product.name;

        const favoriteName = document.createElement('h4');
        favoriteName.textContent = product.name;

        const favoritePrice = document.createElement('p');
        favoritePrice.textContent = product.price;

        favoriteDiv.appendChild(favoriteImage);
        favoriteDiv.appendChild(favoriteName);
        favoriteDiv.appendChild(favoritePrice);

        favoritesContainer.appendChild(favoriteDiv);
    });
}



function toggleFavoritesList() {
    const favoritesList = document.getElementById('favoritesList');
    // Kiểm tra trạng thái hiển thị của danh sách yêu thích
    if (favoritesList.style.display === 'none' || favoritesList.style.display === '') {
        favoritesList.style.display = 'block'; // Hiển thị danh sách yêu thích
    } else {
        favoritesList.style.display = 'none'; // Ẩn danh sách yêu thích
    }
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




// tìm kiếm 



// Hàm tìm kiếm sản phẩm
function searchProducts(event) {
    event.preventDefault(); // Ngừng hành động mặc định của form

    // Lấy giá trị tìm kiếm từ ô input
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Tạo một mảng mới chứa các sản phẩm đã được lọc
    let filteredProducts = [];

    // Duyệt qua tất cả các danh mục sản phẩm và lọc theo tên sản phẩm
    for (const category in products) {
        const categoryProducts = products[category];
        const matchingProducts = categoryProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        filteredProducts = filteredProducts.concat(matchingProducts);
    }

    // Hiển thị các sản phẩm tìm được
    displayProducts(filteredProducts);
}

function displayProducts(productsToDisplay) {
    const container = document.getElementById('productContainer');
    container.innerHTML = ''; // Xóa nội dung hiện tại

    if (productsToDisplay.length === 0) {
        container.innerHTML = '<p>Không tìm thấy sản phẩm.</p>';
    } else {
        productsToDisplay.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

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

            productDiv.appendChild(productImage);
            productDiv.appendChild(productInfo);
            productDiv.appendChild(addButton);

            container.appendChild(productDiv);
        });
    }
}

//load web
function reloadPage() {
    location.reload();  // Tải lại trang
}



// yêu thích

function showToast(message, type = 'success') {
    // Tạo phần tử thông báo
    const toast = document.createElement('div');
    toast.className = `toast ${type}`; // Thêm lớp kiểu ('success' hoặc 'error')
    toast.innerText = message;

    // Thêm thông báo vào container
    const toastContainer = document.getElementById('toast-container');
    toastContainer.appendChild(toast);

    // Xóa thông báo sau 5 giây
    setTimeout(() => {
        toast.remove();
    }, 4000); // Hiển thị trong 5 giây
}


// thêm vào giỏ hàng

let cart = []; // Mảng giỏ hàng

// Hàm hiển thị sản phẩm
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
            <p class="product-price">${product.price.toLocaleString()} VND</p>
        `;

        const addButton = document.createElement('button');
        addButton.className = 'add-to-cart';
        addButton.textContent = 'Thêm vào giỏ';

        // Thêm sự kiện nhấn nút "Thêm vào giỏ"
        addButton.addEventListener('click', function() {
            addToCart(product); // Thêm sản phẩm vào giỏ hàng
            updateCart(); // Cập nhật giỏ hàng
        });

        // Gắn các phần vào div chính
        productDiv.appendChild(productImage);
        productDiv.appendChild(productInfo);
        productDiv.appendChild(addButton);

        container.appendChild(productDiv);
    });
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    // Kiểm tra sản phẩm có trong giỏ hàng chưa
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += 1; // Tăng số lượng nếu sản phẩm đã có trong giỏ
        showToast(`Bạn đã thêm sản phẩm "${product.name}" vào giỏ hàng !`, 'success');
    } else {
        product.quantity = 1; // Khởi tạo số lượng là 1 nếu sản phẩm chưa có trong giỏ
        cart.push(product);
        showToast(`Bạn đã thêm sản phẩm "${product.name}" vào giỏ hàng!`, 'success');
    }
}

// Hàm cập nhật giỏ hàng
function updateCart() {
    const cartList = document.getElementById('cartList');
    const totalPriceElement = document.getElementById('totalPrice');
    
    cartList.innerHTML = ''; // Xóa giỏ hàng hiện tại
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span class="product-name">${item.name}</span>
            <span class="quantity">x ${item.quantity}</span>
            <span class="price">${(item.price * item.quantity).toLocaleString()} VND</span>
        `;
        cartList.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Tổng tiền: ${totalPrice.toLocaleString()} VND`;
}

// Mở giỏ hàng
document.getElementById('openCartButton').addEventListener('click', function() {
    document.getElementById('cartForm').style.display = 'block';
});

// Đóng giỏ hàng
document.getElementById('closeCart').addEventListener('click', function() {
    document.getElementById('cartForm').style.display = 'none';
});