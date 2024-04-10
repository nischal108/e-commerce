
let cartlistProducts = JSON.parse(localStorage.getItem('cartlist')) || [];

// Event listener to add products to the wishlist
document.addEventListener('DOMContentLoaded', () => {
    let cartlistButtons = document.querySelectorAll(".add-to-cart-button");
    let popupcart = document.getElementById("added-to-cart");
    cartlistButtons.forEach((element) => {
        element.addEventListener("click", (e) => {
            let cartedProduct = e.target.parentNode.closest(".product-card");
            let cartedProductID = cartedProduct.querySelector(".getID").textContent;
            console.log(cartedProductID);
            cartlistProducts.push(cartedProductID); 
            console.log("added to cart");
            popupcart.style.bottom ="1%";
            setTimeout(()=>{
                popupcart.style.bottom ="-50%";
            },1000)
            localStorage.setItem('cartlist', JSON.stringify(cartlistProducts));
        });
    });
});

export const cartlistData = {
    get cartproducts() {
        return cartlistProducts;
    }
};
