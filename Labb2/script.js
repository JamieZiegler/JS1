const badge = document.querySelector(".badge");
const addToCartBtn = document.querySelector(".cta-add");
const removeFromCartBtn = document.querySelector(".cta-select");

let cartCount = 0;

function updateBadge () {
    badge.setAttribute("value", cartCount);
    if (cartCount > 0) {
        removeFromCartBtn.style.display = "inline-block";
    } else {
        removeFromCartBtn.style.display = "none";
    }
}

addToCartBtn.addEventListener("click", () => {
    cartCount++;
    updateBadge();
});

removeFromCartBtn.addEventListener("click", () => {
    if (cartCount > 0) {
        cartCount--;
        updateBadge();
    }
});

toggleRemoveButton();
