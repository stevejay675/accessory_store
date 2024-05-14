document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
  
    // Retrieve cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Function to display cart items
    function displayCartItems() {
      // Clear previous items
      cartItemsContainer.innerHTML = '';
  
      // Update subtotal
      let subtotal = 0;
  
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
          <input type="number" class="quantity">
        </div>
        </div>

        <div class="div2">
            <span style="color: grey">$${item.price * 2}</span>
            <button>del</button>
        </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
  
        // Calculate subtotal
        subtotal += item.price;
      });
  
      // Update subtotal element
      subtotalElement.textContent = subtotal.toFixed(2);
    }
  
    // Display cart items when the page loads
    displayCartItems();
  
    // Event listener for removing items from the cart
    cartItemsContainer.addEventListener('click', event => {
      if (event.target.classList.contains('remove-item')) {
        const index = parseInt(event.target.dataset.index);
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems();
      }
    });
  
    // Event listener for changing quantity
    cartItemsContainer.addEventListener('input', event => {
      if (event.target.classList.contains('item-quantity')) {
        const index = parseInt(event.target.parentElement.querySelector('.remove-item').dataset.index);
        const quantity = parseInt(event.target.value);
        if (!isNaN(quantity) && quantity > 0) {
          cartItems[index].quantity = quantity;
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          displayCartItems();
        }
      }
    });
  
    // Checkout button event listener
    document.querySelector('.checkout-btn').addEventListener('click', () => {
      // Implement your checkout logic here
      alert('Checkout functionality is not implemented yet!');
    });
  });
  