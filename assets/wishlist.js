let wishlistProducts = JSON.parse(localStorage.getItem('wishlist')) || [];

// Event listener to add products to the wishlist
document.addEventListener('DOMContentLoaded', () => {
    let wishlistButtons = document.querySelectorAll(".like-button");
    let popupadded = document.getElementById("added-to-favourite");
    wishlistButtons.forEach((element) => {
        element.addEventListener("click", (e) => {
            let wishedProduct = e.target.parentNode.closest(".product-card");
            let wishedProductID = wishedProduct.querySelector(".getID").textContent;
            console.log(wishedProductID);
            wishlistProducts.push(wishedProductID); 
            console.log("pushed");
            popupadded.style.bottom ="1%";
            setTimeout(()=>{
                popupadded.style.bottom ="-50%";
            },1000)
            localStorage.setItem('wishlist', JSON.stringify(wishlistProducts));
        });
    });
});


export const wishlistData = {
    get products() {
        return wishlistProducts;
    }
};
