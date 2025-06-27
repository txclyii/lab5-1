const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price); // ask abt dataset
  updateTotalPrice(-price);
  item.remove();
}


// add item
addProductButton.addEventListener("click", (e) => {
    e.preventDefault();

    const productName = productNameInput.value.trim();

    if (!productName) {
        alert("You need to tell us what product it is!");
        return;
    }

    const newLi = document.createElement("li");
    newLi.className = "product";

    const product = document.createElement("input");
    product.type = "text";
    product.disabled = true;
    product.className = "product";
    product.value = productName;
    newLi.appendChild(product);

    const productPrice = productPriceInput.value.trim();
    const price = document.createElement("input");
    price.type = "number";
    price.disabled = true;
    price.className = "price";
    price.value = productPrice;
    newLi.dataset.price = productPrice;
    newLi.appendChild(price);

    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", removeItem);
    newLi.appendChild(deleteButton);

    cart.appendChild(newLi);
    updateTotalPrice(parseFloat(productPrice));
})