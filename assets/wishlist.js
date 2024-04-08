let wishlistProducts = JSON.parse(localStorage.getItem('wishlist')) || [];

// Event listener to add products to the wishlist
document.addEventListener('DOMContentLoaded', () => {
    let wishlistButtons = document.querySelectorAll(".like-button");
    wishlistButtons.forEach((element) => {
        element.addEventListener("click", (e) => {
            let wishedProduct = e.target.parentNode.closest(".product-card");
            wishlistProducts.push(wishedProduct);
            // Save wishlistProducts to localStorage
            localStorage.setItem('wishlist', JSON.stringify(wishlistProducts));
        });
    });
});

// Export wishlistProducts as an object with a property
export const wishlistData = {
    products: wishlistProducts
};
