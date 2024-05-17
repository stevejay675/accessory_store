document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const subtotalElement = document.getElementById('subtotal');
  const totalElement = document.getElementById('total');
  const shippingFeeElement = document.getElementById('shipping');

  // Retrieve cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];



   // Function to update cart count displayed in the UI
function updateCartCount() {
    const cartCountElement = document.querySelector('.cartCount');
    cartCountElement.textContent = cartItems.length;
  }

  updateCartCount();

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
      subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
      const shippingFee = subtotal > 200 ? 0 : 10;
      shippingFeeElement.textContent = `$${shippingFee.toFixed(2)}`;
      totalElement.textContent = `$${(subtotal + shippingFee).toFixed(2)}`;
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
          updateCartCount();
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
  });
});



const hamburgerIcon = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");
  const darkenBG = document.querySelector(".darken");
  const searchIcon = document.querySelector(".search");
  const searchbar = document.querySelector(".searchbar");
  const subcategoriesSidebar = document.querySelector(".subcategories-sidebar");
  const CategorySidebar = document.querySelector(".Category-sidebar");
  const chevronIcon = document.querySelector(".chevron-down-icon");
  const addtocartBtn = document.getElementsByClassName("addtocart"); 
  const product = document.getElementsByClassName("product");
  const cartcount = document.querySelector(".cartCount");
  const subcategories = document.querySelector(".categories-topMenu");
  const Category = document.querySelector(".Category");
  const categBTN = document.querySelector(".categBTN");



  hamburgerIcon.addEventListener("click", () =>{
    sidebar.classList.toggle('active');
    line1.classList.toggle("active");
    line2.classList.toggle("active");
    line3.classList.toggle("active");
    darkenBG.classList.toggle("active");
    if(searchbar.classList.contains("active")){
        searchbar.classList.remove("active");
        darkenBG.classList.toggle("active");
    }

  })



  //remove all toggled elements when any part of the window is clicked
  document.addEventListener('click', function(event) {
    const targetElement = event.target;

    if (!sidebar.contains(targetElement) && !hamburgerIcon.contains(targetElement)) {
      sidebar.classList.remove('active');
      line1.classList.remove("active");
      line2.classList.remove("active");
      line3.classList.remove("active");
      darkenBG.classList.remove("active")
    }

  });
  
