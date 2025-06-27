# Reflection Questions
**How did you dynamically create and append new elements to the DOM?**
<br/>
- So what I did first was create an addEventListener to the add product button, and to prevent the page from losing any information as the button is clicked, I added `e.preventDefault()` at the top. In order to add the actual products, prices, and a delete button, I followed the same process of how I would create a to-do list by using `document.createElement("li")` when creating a new list variable. While I acknowledge that I don't necessarily need to create the new element as an input, I kept it there because I thought I'd eventually needed to add an edit button as well (but I ended up not doing that). After creating the `li` element, i used the `appendChild` to attach the `product` input onto the list (like a parent (`newLi`) picking up their child (`product`) and holding it (`append`) kind of?). 
<br/>
**What steps did you take to ensure accurate updates to the total price?**
<br/>
- The function for updating the total price was already provided, so all I really had to do was make sure that function was being called every time a new product has been added to update the price. However, I wondered how was I able to do that? Through research (a friend), I was informed that I would have to utilize `data-set` and `parseFloat()` to ensure that the total price gets updated every time a product is added or removed. From what I understand, `dataset` is a way to create custom properties kind of like how `:root` and `var(--xyz)` works in CSS, but I feel like there's more to it than that and I feel quite fuzzy about it.
<br/>
<br/>
**How did you handle invalid input for product name or price?**
<br/>
- For the product name, I added an `if` statement where if the product name was empty, it would give the user an alert. I initially had the if statement as `if (productName === "")`, but I was informed by a peer that `if (!productName)` would serve the same purpose as well as `null` and `undefined`. At first, I was going to use form validation to as a way to prevent the empty text input, but that didn't work out as it still managed to add the empty input even if I put `required` on the input element in the HTML, so I opted to use an if statement instead. I also added `trim()` for any unnecessary spaces as well. As for the price, I am quite confused? At first, I thought maybe there could be a chance that a letter might slip in the number input, but that didn't really make sense as when I tried to type letters in the number input, it would not show up, so I tried adding random numbers like 10.00999, but the totalPrice had already rounded up to 2 decimals for me, and I believe it's due to the `toFixed(2)` on line 12 already provided for us.
<br/>
<br/>
**What challenges did you face when implementing the remove functionality?**
  <br/>
  - I didn't have a problem implementing the remove button in the lists itself as it's something we've already done while working with to-do lists, but it did take me a while to find out how to have the total price updated when something was removed. At first, I thought I would need to add an if statement, but I was confused on where I would nestle it into. Maybe in the removeItem function? But if I did, I was not confident on how much I needed to alter the removeItem function, so I asked a peer for help, and with his guidance, I used the dataset property without having to alter the code that's already there.
