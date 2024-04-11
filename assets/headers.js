// Inserting the top header 
const headerTop = document.querySelector("#header-top");
headerTop.innerHTML = `
    <div class="social-icons">
        <a href="https://www.facebook.com/thenischalbhattarai/" target="_blank"><i class="ri-facebook-fill"></i></a>
        <a href=""><i class="ri-instagram-line" target="_blank"></i></a>
        <a href="https://twitter.com/nischal_108" target="_blank"><i class="ri-twitter-x-line"></i></a>
        <a href="https://github.com/nischal108" target="_blank"><i class="ri-github-fill"></i></a>
    </div>
    <h5 id="header-info">FREE SHIPPING THIS WEEK ORDER OVER - Rs.550</h5>
    <h6 id="seller-call">become a seller</h6>`;

// Inserting header bottom 
const headerBottom = document.getElementById("header-bottom");
headerBottom.innerHTML = `
    <a href="https://nischal108.github.io/e-commerce/"><h3>Shopiji</h3></a>
    <div id="search">
        <input type="text" placeholder="search items ....">
        <i class="ri-search-2-line"></i>
    </div>
    <div id="menu-icons">
        <i class="ri-search-2-line"></i>
        <a href="https://nischal108.github.io/e-commerce/assets/favourites-page/favourite.html"><i class="ri-heart-2-line"></i></a>
        <a href="https://nischal108.github.io/e-commerce/assets/cart-page/cart.html"><i class="ri-shopping-cart-fill"></i></a>
    </div>`;

