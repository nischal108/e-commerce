import { cartlistData } from "../exportCart.js";

const productsContainer = document.getElementById("products-area");
const finalCostElement = document.getElementById("final-cost");
const productTotalElement = document.getElementById("product-total");

// Array to store cart products
let cartProductArray = [];
const shippingCost = 50; // Shipping cost

let cartlistProducts = cartlistData.cartproducts || [];
function checkIfEmpty() {
    if(cartlistProducts.length==0){
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('no-products');
        errorMessage.textContent = 'You have no products in the cart , Please see and add the products from the homepage to the cart';
        const main = document.querySelector('main');
        const fullcontainer = document.querySelector('#container-full');
        main.style.display ="none";
        fullcontainer.appendChild(errorMessage);
        
    }
}
checkIfEmpty()

// Load cart products when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    

    // Load each cart product
    cartlistProducts.forEach((IDCartProduct) => {
        IDCartProduct = parseInt(IDCartProduct);
        loadProducts(IDCartProduct);
    });

    // Display cart products
    cartProductArray.forEach((productObject) => {
        let numberOfProducts = 0;
        numberOfProducts = cartlistProducts.filter(ID => parseInt(ID) === productObject.ID).length;
        const totalpriceodfItem = numberOfProducts * productObject.selling_price;
        createCartItemCard(productObject.ID, productObject.name, productObject.category, numberOfProducts, productObject.selling_price, totalpriceodfItem, productObject.image1);
    });

    // Update total cost display
    updateTotalCost();

    // Event listener for applying promo code
    const applyPromoButton = document.getElementById("apply-promo");
    applyPromoButton.addEventListener("click", function() {
        const promoCode = promoInput.value.trim();
        applyPromoCode(promoCode);
    });
});

// Function to load products
function loadProducts(receivedID) {
    // Assume there's a 'products' array defined elsewhere
    cartProductArray.push(...products.filter((productinHand) => productinHand.ID === receivedID));
}

// Function to create a card for a cart item
function createCartItemCard(productID, productName, category, quantity, price, totalPrice, frontimage) {
    // Create cart item card element
    const cartItemCard = document.createElement('div');
    cartItemCard.classList.add('cart-item-card');

    // Create details box
    const detailsBox = document.createElement('div');
    detailsBox.classList.add('details-box');
    
    //for deletion storing id
    const productId = document.createElement("div");
    productId.classList.add("IDProduct");
    productId.textContent = `${productID}`;

    // Create image box
    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');
    imgBox.innerHTML = `<img src="${frontimage}" alt="">`;

    // Append image box to details box
    detailsBox.appendChild(imgBox);

    // Create details of product
    const detailsOfProduct = document.createElement('div');
    detailsOfProduct.classList.add('details-of-product');

    // Create product name element
    const productNameElement = document.createElement('div');
    productNameElement.classList.add('product-name');
    productNameElement.textContent = productName;

    // Create category element
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('category');
    categoryElement.textContent = category;

    // Create remove button
    const removeButton = document.createElement('h5');
    removeButton.classList.add('delete-product');
    removeButton.textContent = 'remove';
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('ri-close-line');
    removeButton.appendChild(removeIcon);


    // Append product name, category, and remove button to details of product
    detailsOfProduct.appendChild(productNameElement);
    detailsOfProduct.appendChild(categoryElement);
    detailsOfProduct.appendChild(removeButton);

    // Append details of product to details box
    detailsBox.appendChild(detailsOfProduct);

    // Create number details box
    const numberDetails = document.createElement('div');
    numberDetails.classList.add('number-details');

    // Create quantity element
    const quantityDiv = document.createElement('div');
    quantityDiv.classList.add('quantity');

    // Create subtract button
    const subtractButton = document.createElement('i');
    subtractButton.classList.add('ri-subtract-line');
    subtractButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateQuantityAndTotal();
        }
    });

    // Create quantity input
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.name = 'quantity';
    quantityInput.classList.add('quantity-number');
    quantityInput.value = quantity;

    // Create add button
    const addButton = document.createElement('i');
    addButton.classList.add('ri-add-line');
    addButton.addEventListener('click', () => {
        quantity++;
        updateQuantityAndTotal();
    });

    // Append subtract button, quantity input, and add button to quantity div
    quantityDiv.appendChild(subtractButton);
    quantityDiv.appendChild(quantityInput);
    quantityDiv.appendChild(addButton);

    // Create price of product element
    const priceElement = document.createElement('div');
    priceElement.classList.add('price-of-product');
    priceElement.textContent = price;

    // Create total cost of products element
    const totalCostElement = document.createElement('div');
    totalCostElement.classList.add('total-cost-products');
    totalCostElement.textContent = totalPrice;

    // Append quantity div, price element, and total cost element to number details
    numberDetails.appendChild(quantityDiv);
    numberDetails.appendChild(priceElement);
    numberDetails.appendChild(totalCostElement);

    // Append details box and number details to cart item card
    cartItemCard.appendChild(detailsBox);
    cartItemCard.appendChild(numberDetails);

    // Append cart item card to products container
    productsContainer.appendChild(cartItemCard);

        // Event listener for deletion
        removeButton.addEventListener("click", () => {
            cartlistProducts = cartlistProducts.filter((id) => id != productID);
            localStorage.setItem('cartlist', JSON.stringify(cartlistProducts));
            cartItemCard.remove();
            updateTotalCost();
            checkIfEmpty()
        });

    // Function to update quantity and total
    function updateQuantityAndTotal() {
        quantityInput.value = quantity;
        totalCostElement.textContent = (quantity * price).toFixed(2);
        updateTotalCost();
    }
}

// Function to calculate total product price
function calculateProductTotal() {
    let total = 0;
    const allAmounts = document.querySelectorAll(".total-cost-products");
    total = Array.from(allAmounts).reduce((acc, ele) => acc + parseFloat(ele.textContent), 0);
    return total;
}

// Function to update total cost display
function updateTotalCost() {
    const productPrice = calculateProductTotal();
    const totalPrice = productPrice + shippingCost;
    productTotalElement.textContent = "Rs " + productPrice.toFixed(2);
    finalCostElement.textContent = "Rs " + totalPrice.toFixed(2);
}

// Apply promo code function
function applyPromoCode(promoCode) {
    if (promoCode === "NISCHAL") {
        // Apply 30% discount
        const productPrice = calculateProductTotal();
        const discountedPrice = productPrice * 0.7;
        const totalPrice = discountedPrice + shippingCost;
        productTotalElement.textContent = "Rs " + discountedPrice.toFixed(2);
        finalCostElement.textContent = "Rs " + totalPrice.toFixed(2);
    } else {
        alert("Invalid promo code");
    }
}
