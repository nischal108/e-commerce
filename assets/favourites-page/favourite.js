
// Import wishlistData object containing the wishlistProducts array
import { wishlistData } from '../wishlist.js';

let wishedProductArray= [];

document.addEventListener('DOMContentLoaded', () => {




    const containerWished = document.getElementById("container-wished-products");
    let wishlistProducts = wishlistData.products || {}; 


    function checkIfEmpty() {
        if(wishlistProducts.length==0){
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('no-products');
            errorMessage.textContent = 'You have no products in the wishlist , Please see and add the products from the homepage to the wishlist';
            const main = document.querySelector('main');
            const fullcontainer = document.querySelector('#container-full');
            main.style.display ="none";
            fullcontainer.appendChild(errorMessage);
            
        }
    }
    checkIfEmpty()

    wishlistProducts.forEach((wishProductID) => {
        wishProductID = parseInt(wishProductID)
        loadProducts(wishProductID);
    });
    console.log(typeof wishedProductArray);
    wishedProductArray.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("div");
        productImage.classList.add("product-image");

        const productID = document.createElement("div");
        productID.classList.add("getID");
        productID.textContent = `${product.ID}`

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
        const removeButton = document.createElement("button");
        removeButton.classList.add("like-button");
        removeButton.classList.add("del-button");
        removeButton.innerHTML = '<i class="ri-delete-bin-6-fill"></i>';
        const moreButton = document.createElement("button");
        moreButton.classList.add("more-button");
        moreButton.innerHTML = '<i class="ri-more-line"></i>';
        ul.appendChild(document.createElement("li")).appendChild(removeButton);
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
        productCard.appendChild(productID);
        productCard.appendChild(productInfo);

        containerWished.appendChild(productCard);
    });



function loadProducts(receivedID) {
    wishedProductArray.push(...products.filter((productinHand) => productinHand.ID == receivedID));
}


let deleteButtons = document.querySelectorAll(".del-button");
deleteButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
        let touchedProduct = e.target.parentNode.closest(".product-card");
        let deleteID = touchedProduct.querySelector(".getID").textContent;
        deleteID = parseInt(deleteID);
        // touchedProduct.style.display ="none"
        wishlistProducts = wishlistProducts.filter((id) => id != deleteID);

        localStorage.setItem('wishlist', JSON.stringify(wishlistProducts));
        
        touchedProduct.remove();
        checkIfEmpty()
    });
});
});