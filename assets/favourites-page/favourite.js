// Import wishlistData object containing the wishlistProducts array
import { wishlistData } from './wishlist.js';
console.log(wishlistData);

document.addEventListener('DOMContentLoaded', () => {
    const containerWished = document.getElementById("container-wished-products");
    const wishlistProducts = wishlistData.wishProducts || []; // Use the imported wishlistProducts array

    wishlistProducts.forEach((wishproductCard) => {
        containerWished.appendChild(wishproductCard); // Assuming wishproductCard is the product card element
    });
});
