
let productsContainer = document.querySelector("#products-cards-list");


function loadProducts() {
    products.forEach(product => {
        // Create product card container
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // Create product image container
        let productImage = document.createElement("div");
        productImage.classList.add("product-image");

        // Create main product image
        let mainImage = document.createElement("img");
        mainImage.src = product.image1;
        mainImage.alt = "Product Image 1";

        // Create hover image
        let hoverImage = document.createElement("img");
        hoverImage.src = product.image2;
        hoverImage.alt = "Product Image 2";
        hoverImage.classList.add("hover-image");

        // Create menu container
        let menu = document.createElement("div");
        menu.classList.add("menu");

        // Create menu items
        let ul = document.createElement("ul");
        let likeButton = document.createElement("button");
        likeButton.classList.add("like-button");
        likeButton.innerHTML = '<i class="ri-heart-2-fill"></i>';
        let moreButton = document.createElement("button");
        moreButton.classList.add("more-button");
        moreButton.innerHTML = '<i class="ri-more-line"></i>';
        ul.appendChild(document.createElement("li")).appendChild(likeButton);
        ul.appendChild(document.createElement("li")).appendChild(moreButton);
        menu.appendChild(ul);

        // Append image elements to product image container
        productImage.appendChild(mainImage);
        productImage.appendChild(hoverImage);
        productImage.appendChild(menu);

        // Create product info container
        let productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        // Create product name
        let productName = document.createElement("h3");
        productName.classList.add("product-name");
        productName.textContent = product.name;

        // Create product description
        let productDescription = document.createElement("p");
        productDescription.classList.add("product-description");
        productDescription.textContent = product.description;

        // Create brand
        let brand = document.createElement("div");
        brand.classList.add("brand");
        brand.textContent = "Brand: " + product.brand;

        // Create product marked price
        let markedPrice = document.createElement("div");
        markedPrice.classList.add("product-marked-price");
        markedPrice.textContent = "$" + product.original_price.toFixed(2);

        // Create product price
        let productPrice = document.createElement("div");
        productPrice.classList.add("product-price");
        productPrice.innerHTML = "Price: <span>$" + product.selling_price.toFixed(2) + "</span>";

        // Append product info elements to product info container
        productInfo.appendChild(productName);
        productInfo.appendChild(productDescription);
        productInfo.appendChild(brand);
        productInfo.appendChild(markedPrice);
        productInfo.appendChild(productPrice);

        // Append product image and info containers to product card
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        // Append product card to products container
        productsContainer.appendChild(productCard);
    });
}

// Call loadProducts function to populate product cards
loadProducts();



// set timer for the product of the day

const daysSelected = document.getElementById("days");
const hoursSelected = document.getElementById("hours");
const minutesSelected = document.getElementById("minutes");
const secondsSelected = document.getElementById("seconds");

// Set the end date for the countdown
const endDate = new Date();
// Set the end date to 4 days ahead
endDate.setDate(endDate.getDate() + 4); 

function updateCountdown() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysSelected.textContent = days;
        hoursSelected.textContent = hours;
        minutesSelected.textContent = minutes;
        secondsSelected.textContent = seconds;
    } else {
        // If the countdown has ended, display all zeros or some message
        daysSelected.textContent = "0";
        hoursSelected.textContent = "0";
        minutesSelected.textContent = "0";
        secondsSelected.textContent = "0";
        clearInterval(timerInterval);
    }
}

// Call updateCountdown every second
const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown();
