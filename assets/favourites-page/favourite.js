// Import wishlistData object containing the wishlistProducts array
import { wishlistData } from '../wishlist.js';

document.addEventListener('DOMContentLoaded', () => {
    const containerWished = document.getElementById("container-wished-products");
    const wishlistProducts = wishlistData.products || []; // Use the imported wishlistProducts array

    console.log(wishlistProducts);
    // wishlistProducts.forEach((wishproductCard) => {
    //     containerWished.appendChild(wishproductCard); // Assuming wishproductCard is the product card element
    // });
});
