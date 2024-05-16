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
  let cart = [];

  window.onscroll = function() { scrollFunction() };

  // Function to update cart count displayed in the UI
function updateCartCount() {
  const cartCountElement = document.querySelector('.cartCount');
  cartCountElement.textContent = cart.length;
}

// Load cart items from local storage when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  if (storedCartItems) {
    cart.push(...storedCartItems);
    updateCartCount();
  }
});

fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    
    const productContainer = document.getElementById('product-container');
    const NewarrivalContainer = document.getElementById("newarrivals-container");
    const flashsaleContainer = document.getElementById('flashsales-container');

    let popularProduct = data.popularProducts.splice(0, 8);
    let newarrivalproduct = data.shop.splice(0, 8);
    let flashsaleproduct = data.flashsales.splice(0, 8);



    // Populate featured products
    popularProduct.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <div id="ratings">
        <i class="bi-star-fill" id="rating1"></i>
        <i class="bi-star-fill" id="rating2"></i>
        <i class="bi-star-fill" id="rating3"></i>
        <i class="bi-star-fill" id="rating4"></i>
        <i class="bi-star-fill" id="rating5"></i>
       </div>
        <div class="addtocart-div">
        <p class="price">$<span class="product-price">${product.price}</p>
        <div class="addcartdiv">
          <button class="addtocart"><i class="bi-cart3"></i></button>
          <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      </div>
      `;
      productContainer.appendChild(productElement);
      const singleImage = productElement.querySelector('.product-image');
      const addcart = productElement.querySelector('.addtocart');
      addcart.addEventListener('click', () => {
        cart.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cart));
        updateCartCount();
        addcart.innerHTML = `<i class="bi-check"></i>`;
        addcart.disabled = true;
      });


      singleImage.addEventListener('click', () =>{
        alert('Single product page not yet implemented')
      })
      
    });


    // Populate newarrivals products
    newarrivalproduct.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <div id="ratings">
        <i class="bi-star-fill" id="rating1"></i>
        <i class="bi-star-fill" id="rating2"></i>
        <i class="bi-star-fill" id="rating3"></i>
        <i class="bi-star-fill" id="rating4"></i>
        <i class="bi-star-fill" id="rating5"></i>
       </div>
        <div class="addtocart-div">
        <p class="price">$<span class="product-price">${product.price}</p>
        <div class="addcartdiv">
          <button class="addtocart"><i class="bi-cart3"></i></button>
          <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      </div>
      `;
      NewarrivalContainer.appendChild(productElement);
      const addcart = productElement.querySelector('.addtocart');
      addcart.addEventListener('click', () => {
        cart.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cart));
        updateCartCount();
        addcart.innerHTML = `<i class="bi-check"></i>`;
        addcart.disabled = true;
      });
      
    });


    // Populate flashsales products
    flashsaleproduct.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <div id="ratings">
        <i class="bi-star-fill" id="rating1"></i>
        <i class="bi-star-fill" id="rating2"></i>
        <i class="bi-star-fill" id="rating3"></i>
        <i class="bi-star-fill" id="rating4"></i>
        <i class="bi-star-fill" id="rating5"></i>
       </div>
        <div class="addtocart-div">
        <p class="price">$<span class="product-price">${product.price}</p>
        <div class="addcartdiv">
          <button class="addtocart"><i class="bi-cart3"></i></button>
          <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      </div>
      `;
      flashsaleContainer.appendChild(productElement);
      const addcart = productElement.querySelector('.addtocart');
      addcart.addEventListener('click', () => {
        cart.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cart));
        updateCartCount();
        addcart.innerHTML = `<i class="bi-check"></i>`;
        addcart.disabled = true;
      });

      
      
    });
   
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });



 
  


  


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
  

  // function to Show the "go to top" button when the user scrolls down 20px from the to
function scrollFunction() {
  var goToTopBtn = document.getElementById("goToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the page
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

