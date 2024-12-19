const badge = document.getElementById("badge");
const addToCartBtn = document.getElementById("cta-add");
const removeFromCartBtn = document.getElementById("cta-select");

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
