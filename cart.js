document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const subtotalElement = document.getElementById('subtotal');
  const totalElement = document.getElementById('total');
  const shippingFeeElement = document.getElementById('shipping');

  // Retrieve cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Function to display cart items and update subtotal, shipping, and total
  function displayCartItems() {
      // Clear previous items
      cartItemsContainer.innerHTML = '';

      // Update subtotal
      let subtotal = 0;

      if (cartItems.length === 0) {
          cartItemsContainer.innerHTML = `<div class="emptyCart">CART IS EMPTY</div>`;
      } else {
          // Display each item in the cart
          cartItems.forEach((item, index) => {
              const cartItemElement = document.createElement('div');
              cartItemElement.classList.add('item');
              cartItemElement.innerHTML = `
                  <div class="div1">
                      <img src="${item.image}" alt="${item.name}">
                      <div class="cart-item-details">
                          <h3 class="cart-item-name">${item.name}</h3>
                          <p class="cart-item-price">$${item.price}</p>
                          <input type="number" class="item-quantity" value="${item.quantity || 1}" min="1" data-index="${index}">
                      </div>
                  </div>
                  <div class="div2">
                     <i class="bi-trash deletebtn" data-index="${index}"></i>
                  </div>
              `;
              cartItemsContainer.appendChild(cartItemElement);

              // Calculate subtotal
              subtotal += (item.price || 0) * (item.quantity || 1);
          });
      }

      // Update subtotal, shipping, and total elements
      subtotalElement.textContent = subtotal.toFixed(2);
      const shippingFee = subtotal > 50 ? 0 : 10;
      shippingFeeElement.textContent = shippingFee.toFixed(2);
      totalElement.textContent = (subtotal + shippingFee).toFixed(2);
  }

  // Display cart items when the page loads
  displayCartItems();

  // Event listener for removing items from the cart
  cartItemsContainer.addEventListener('click', event => {
      if (event.target.classList.contains('deletebtn')) {
          const index = parseInt(event.target.dataset.index);
          cartItems.splice(index, 1);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          displayCartItems(); // Update cart items and totals after deletion
      }
  });

  // Event listener for changing item quantity
  cartItemsContainer.addEventListener('input', event => {
      if (event.target.classList.contains('item-quantity')) {
          const index = parseInt(event.target.dataset.index);
          const quantity = parseInt(event.target.value);
          if (!isNaN(quantity) && quantity > 0) {
              cartItems[index].quantity = quantity;
              localStorage.setItem('cartItems', JSON.stringify(cartItems));
              displayCartItems(); // Update cart items and totals after quantity change
          }
      }
  });

  // Checkout button event listener
  document.querySelector('.checkout-btn').addEventListener('click', () => {
      // Implement your checkout logic here
      alert('Checkout functionality is not implemented yet!');
  });
});
