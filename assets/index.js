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
        <a href="assets/favourites-page/favourite.html"><i class="ri-heart-2-line"></i></a>
        <a href=""><i class="ri-shopping-cart-fill"></i></a>
    </div>`;



// product card creation
const productsContainer = document.querySelector("#products-cards-list");

function loadProducts() {
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("div");
        productImage.classList.add("product-image");

        const mainImage = document.createElement("img");
        mainImage.src = product.image1;
        mainImage.alt = "Product Image 1";

        const hoverImage = document.createElement("img");
        hoverImage.src = product.image2;
        hoverImage.alt = "Product Image 2";
        hoverImage.classList.add("hover-image");

        const menu = document.createElement("div");
        menu.classList.add("menu");

        const ul = document.createElement("ul");
        const likeButton = document.createElement("button");
        likeButton.classList.add("like-button");
        likeButton.innerHTML = '<i class="ri-heart-2-fill"></i>';
        const moreButton = document.createElement("button");
        moreButton.classList.add("more-button");
        moreButton.innerHTML = '<i class="ri-more-line"></i>';
        ul.appendChild(document.createElement("li")).appendChild(likeButton);
        ul.appendChild(document.createElement("li")).appendChild(moreButton);
        menu.appendChild(ul);

        productImage.appendChild(mainImage);
        productImage.appendChild(hoverImage);
        productImage.appendChild(menu);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productName = document.createElement("h3");
        productName.classList.add("product-name");
        productName.textContent = product.name;

        const productDescription = document.createElement("p");
        productDescription.classList.add("product-description");
        productDescription.textContent = product.description;

        const brand = document.createElement("div");
        brand.classList.add("brand");
        brand.textContent = "Brand: " + product.brand;

        const markedPrice = document.createElement("div");
        markedPrice.classList.add("product-marked-price");
        markedPrice.textContent = "$" + product.original_price.toFixed(2);

        const productPrice = document.createElement("div");
        productPrice.classList.add("product-price");
        productPrice.innerHTML = `
            <button class="add-to-cart-button">Add to Cart</button>
            Price: <span>$${product.selling_price.toFixed(2)}</span>`;

        productInfo.appendChild(productName);
        productInfo.appendChild(productDescription);
        productInfo.appendChild(brand);
        productInfo.appendChild(markedPrice);
        productInfo.appendChild(productPrice);

        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        productsContainer.appendChild(productCard);
    });
}

// Call loadProducts function to populate product cards
loadProducts();

// Set timer for the product of the day
const daysSelected = document.getElementById("days");
const hoursSelected = document.getElementById("hours");
const minutesSelected = document.getElementById("minutes");
const secondsSelected = document.getElementById("seconds");

const endDate = new Date();
endDate.setDate(endDate.getDate() + 4); // Set the end date to 4 days ahead

function updateCountdown() {
    const now = new Date();
    const timeDifference = endDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysSelected.textContent = days;
    hoursSelected.textContent = hours;
    minutesSelected.textContent = minutes;
    secondsSelected.textContent = seconds;
}

// Call updateCountdown every second
const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown();



// For search functionality at the header bottom
const search = document.querySelector("#search input");


search.addEventListener("input", () => {
    const searchTerm = search.value.toLowerCase().trim();
    const productCards = document.querySelectorAll(".product-card");
    const hero = document.querySelector("#hero-section");
    const productOfDay = document.querySelector("#main-product-area");
    const productofDayContain = document.querySelector("#products-area-container");
    const noProduct = document.querySelector("#no-products-found");
    let hasMatch = false;

    if (searchTerm !== "") {
        productofDayContain.style.display = "none";
        productOfDay.style.display = "none";
        hero.style.display = "none";
    } else {
        productofDayContain.style.display = "";
        productOfDay.style.display = "";
        hero.style.display = "";
    }

    productCards.forEach(card => {
        const productName = card.querySelector(".product-name").textContent.toLowerCase();
        const productDescription = card.querySelector(".product-description").textContent.toLowerCase();

        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
            card.style.display = ""; // Show the product card if it matches the search term
            hasMatch = true;
        } else {
            card.style.display = "none"; // Hide the product card if it doesn't match the search term
        }
    });

    // Display no results message if there are no matching products
    if (!hasMatch) {
        noProduct.style.display="block";
    } else {
        noProduct.style.display="none"
    }
});
