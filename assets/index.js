
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
