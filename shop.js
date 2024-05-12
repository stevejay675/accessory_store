const option = document.querySelectorAll(".options");
const shopOptions = document.querySelector(".shop-options");


shopOptions.addEventListener("click", function(event){
    if(event.target.classList.contains("options-img")){
        optImage.forEach(function(image){
            image.classList.remove("active")
        })
    }

    event.target.classList.add("active");
}) 




const hamburgerIcon = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");
  const darkenBG = document.querySelector(".darken");
  const searchIcon = document.querySelector(".search");
  const searchbar = document.querySelector(".searchbar");
  const subcategories = document.querySelector(".categories-topMenu");
  const Category = document.querySelector(".Category");
  const categBTN = document.querySelector(".categBTN");
  const subcategoriesSidebar = document.querySelector(".subcategories-sidebar");
  const CategorySidebar = document.querySelector(".Category-sidebar");
  const chevronIcon = document.querySelector(".chevron-down-icon");
  const addtocartBtn = document.getElementsByClassName("addtocart"); 
  const product = document.getElementsByClassName("product");
  const cartcount = document.querySelector(".cartCount");
  const optImage = document.querySelectorAll(".options-img");
  const allcartBTn = document.querySelectorAll(".opt-allcategory");
  const laptopOPT = document.querySelectorAll(".opt-laptop");
  const gamepadOPT = document.querySelectorAll(".opt-gamepad");
  const keyboardOPT = document.querySelectorAll(".opt-keyboard");
  const mouseOPT = document.querySelectorAll(".opt-mouse");
  const headsetOPT = document.querySelectorAll(".opt-headset");
  const allCat = document.getElementById("product-container");
  const laptopsCat = document.getElementById("product-container-laptops")
  const gamepadsCat = document.getElementById("product-container-gamepads")
  const keyboardsCat = document.getElementById("product-container-keyboards")
  const mouseCat = document.getElementById("product-container-mouse")
  const headsetsCat = document.getElementById("product-container-headsets");
  const changeThemebtn = document.querySelector(".theme");
  const navbar = document.querySelector(".navbar");
  const footer = document.querySelector('.footer');
  const herobanner = document.querySelector(".hero-banner");
  const greyColor = document.querySelectorAll(".greyColor");
  const categlabels = document.querySelector(".categ-labels");
  
  const body = document.getElementsByTagName("body")[0];

  let productArray = [];


  //toggle btwn dark and bright mode
  changeThemebtn.addEventListener('click', () =>{
    if(changeThemebtn.classList.contains('bi-sun')){
      changeThemebtn.classList.remove("bi-sun");
      changeThemebtn.classList.add("bi-moon");
      body.style.backgroundColor = '#222';
      navbar.style.backgroundColor = "#121212";
      sidebar.style.backgroundColor = "#333";
      sidebar.style.color = "white";
      footer.style.backgroundColor = "#121212";
      herobanner.classList.toggle("darkmode");
      for(let i=0; i<product.length; i++){
        product[i].classList.toggle('darkmode')
      }
      for(let i=0; i<addtocartBtn.length; i++){
        addtocartBtn[i].classList.toggle('darkmode')
      }
      for(let i=0; i<greyColor.length; i++){
        greyColor[i].classList.toggle('darkmode')
      }
      
    } 
    else if(changeThemebtn.classList.contains("bi-moon")){
      changeThemebtn.classList.add("bi-sun");
      changeThemebtn.classList.remove("bi-moon");
      body.style.backgroundColor = "white";
      navbar.style.backgroundColor = "#222";
      sidebar.style.backgroundColor = "white";
      sidebar.style.color = "black";
      footer.style.backgroundColor = "#222";
      herobanner.classList.toggle('darkmode');
      for(let i=0; i<product.length; i++){
        product[i].classList.toggle('darkmode')
      }
      for(let i=0; i<addtocartBtn.length; i++){
        addtocartBtn[i].classList.toggle('darkmode')
      }
    }
  })




//toggle between the various categories options
allcartBTn.forEach(allcarteg =>{
  allcarteg.addEventListener("click", ()=>{
    allCat.style.display = "flex";
    mouseCat.style.display = "flex";
    headsetsCat.style.display = "flex";
    gamepadsCat.style.display = "flex";
    keyboardsCat.style.display = 'flex';
    laptopsCat.style.display = "flex";
    subcategories.classList.remove("active");
    categlabels.innerHTML = `<span>All Category <i class="bi-laptop"></i></span>`;
  })
})  


laptopOPT.forEach(laptop =>{
  laptop.addEventListener('click', () =>{
    allCat.style.display = "none";
    mouseCat.style.display = "none";
    headsetsCat.style.display = "none";
    gamepadsCat.style.display = "none";
    keyboardsCat.style.display = 'none';
    laptopsCat.style.display = "flex";
    subcategories.classList.remove("active");
    categlabels.innerHTML = `<span>Laptops <i class="bi-laptop"></i></span>`;
})
})


gamepadOPT.forEach(gamepad =>{
  gamepad.addEventListener("click", () =>{
    allCat.style.display = "none";
    mouseCat.style.display = "none";
    headsetsCat.style.display = "none";
    gamepadsCat.style.display = "flex";
    keyboardsCat.style.display = 'none';
    laptopsCat.style.display = "none";
    subcategories.classList.remove("active");
    categlabels.innerHTML = `<span>Gamepads <i class="bi-game"></i></span>`;
})
})


keyboardOPT.forEach(keyboard =>{
  keyboard.addEventListener("click", () =>{
    allCat.style.display = "none";
    mouseCat.style.display = "none";
    headsetsCat.style.display = "none";
    gamepadsCat.style.display = "none";
    keyboardsCat.style.display = 'flex';
    laptopsCat.style.display = "none";
    subcategories.classList.remove("active");
    categlabels.innerHTML = `<span>Keyboards <i class="bi-keyboard"></i></span>`;
})
})




mouseOPT.forEach(mouse =>{
  mouse.addEventListener("click", () =>{
    allCat.style.display = "none";
    mouseCat.style.display = "flex";
    headsetsCat.style.display = "none";
    gamepadsCat.style.display = "none";
    keyboardsCat.style.display = 'none';
    laptopsCat.style.display = "none";
    subcategories.classList.remove("active");
    categlabels.innerHTML = `<span>Mouse <i class="bi-mouse"></i></span>`;
})
})


headsetOPT.forEach(headset =>{
  headset.addEventListener("click", () =>{
    allCat.style.display = "none";
    mouseCat.style.display = "none";
    headsetsCat.style.display = "flex";
    gamepadsCat.style.display = "none";
    keyboardsCat.style.display = 'none';
    laptopsCat.style.display = "none";
    subcategories.classList.remove("active");
    categlabels.innerHTML = `<span>Headsets <i class="bi-headset"></i></span>`;
}) 
})


// Array to store products in the cart
const cart = [];



// Fetch data from JSON file and populate shop products
fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('product-container');
    const laptopsContainer = document.getElementById('product-container-laptops');
    const gamepadsContainer = document.getElementById('product-container-gamepads');
    const headsetsContainer = document.getElementById("product-container-headsets");
    const keyboardsContainer = document.getElementById("product-container-keyboards");
    const mouseContainer = document.getElementById("product-container-mouse")
    const flashsalesContainer = document.getElementById('flashsales');

    // Populate shop products
    data.shop.forEach(product => {
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
          <span class="wishlist"><i class="bi-heart "></i></span>
        </div>
      </div>
      `;
      productContainer.appendChild(productElement);
      const addcart = productElement.querySelector('.addtocart');
      addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<i class="bi-check"></i>`;
        addcart.disabled = true;
      });

      const addtowishlist = productElement.querySelector('.wishlist');
      addtowishlist.addEventListener('click', () =>{
        console.log(addtowishlist)
        addtowishlist.innerHTML = `<i class="bi-heart-fill"></i>`
      })
      
    });

    // Populate laptop products
    data.laptops.forEach(product => {
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
     <span class="wishlist"><i class="bi-heart "></i></span>
   </div>
</div>
      `;
      laptopsContainer.appendChild(productElement);
     const addcart = productElement.querySelector('.addtocart');
     addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<i class="bi-check"></i>`;
        addcart.disabled = true;
      });

      const addtowishlist = productElement.querySelector('.wishlist');
      addtowishlist.addEventListener('click', () =>{
        console.log(addtowishlist)
        addtowishlist.innerHTML = `<i class="bi-heart-fill"></i>`
      })
    });

    // Populate gamepad products
    data.gamepads.forEach(product => {
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
     <span class="wishlist"><i class="bi-heart "></i></span>
   </div>
</div>
      `;
      gamepadsContainer.appendChild(productElement);
      const addcart = productElement.querySelector('.addtocart');
     addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<i class="bi-check"></i>`;
        addcart.disabled = true;
      });

      const addtowishlist = productElement.querySelector('.wishlist');
      addtowishlist.addEventListener('click', () =>{
        console.log(addtowishlist)
        addtowishlist.innerHTML = `<i class="bi-heart-fill wishlistbtn"></i>`
      })
    });

     // Populate mouse products
     data.mouse.forEach(product => {
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
     <span class="wishlist"><i class="bi-heart"></i></span>
   </div>
</div>
      `;
      laptopsContainer.appendChild(productElement);
     const addcart = productElement.querySelector('.addtocart');
     addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<i class="bi-check"></i>`;
        addcart.disabled = true;
      });

      const addtowishlist = productElement.querySelector('.wishlist');
      addtowishlist.addEventListener('click', () =>{
        console.log(addtowishlist)
        addtowishlist.innerHTML = `<i class="bi-heart-fill"></i>`
      })
    });


     // Populate keyboard products
     data.keyboards.forEach(product => {
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
        <p><span class="price">$<span class="product-price">${product.price}</span> <strike></p>
        <div class="addcartdiv">
          <button class="addtocart">add to cart <i class="bi-cart3"></i></button>
          <span class="wishlist"><i class="bi-heart"></i></span>
        </div>
      `;
      laptopsContainer.appendChild(productElement);
     const addcart = productElement.querySelector('.addtocart');
     addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<i class="bi-check"></i>`;
        addcart.disabled = true;
      });


      const addtowishlist = productElement.querySelector('.wishlist');
      addtowishlist.addEventListener('click', () =>{
        console.log(addtowishlist)
        addtowishlist.innerHTML = `<i class="bi-heart-fill"></i>`
      })
    });

    // Populate flash sales products
    data.flashsalesProduct.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('flashsaleproduct');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2 class="fs-name">${product.name}</h2>
        <div id="ratings">
        <i class="bi-star-fill" id="rating1"></i>
        <i class="bi-star-fill" id="rating2"></i>
        <i class="bi-star-fill" id="rating3"></i>
        <i class="bi-star-fill" id="rating4"></i>
        <i class="bi-star-fill" id="rating5"></i>
        </div>
        <p><span class="fs-price">$${product.price}</span></p>
        <button class="addtocart fs-addtocart">add to cart <i class="bi-cart3"></i></button>
      `;
      flashsalesContainer.appendChild(productElement);


      productElement.querySelector('.addtocart').addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
      });

      const addtowishlist = productContainer.querySelector('.bi-heart');
      addtowishlist.addEventListener('click', () =>{
       
        addtowishlist.innerHTML = `<i class="bi-heart-fill"></i>`
      })
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });

// Function to update cart count displayed in the UI
function updateCartCount() {
  const cartCountElement = document.querySelector('.cartCount');
  cartCountElement.textContent = cart.length;
}

 
        
//hamburger menu
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

  searchIcon.addEventListener("click", () =>{
       searchbar.classList.toggle("active");
       darkenBG.classList.add("active")
  })

  categBTN.addEventListener("click", () =>{
    subcategories.classList.toggle("active");
    chevronIcon.style.transform = "rotate(90deg)";
  })

  CategorySidebar.addEventListener("click", () =>{
    subcategoriesSidebar.classList.toggle("active");
    chevronIcon.style.transform = "rotate(90deg)";
  })

  //remove all toggled elements when any part of the window is clicked
  document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!subcategories.contains(targetElement) && !categBTN.contains(targetElement)) {
      subcategories.classList.remove('active');
    }

    if (!sidebar.contains(targetElement) && !hamburgerIcon.contains(targetElement)) {
      sidebar.classList.remove('active');
      line1.classList.remove("active");
      line2.classList.remove("active");
      line3.classList.remove("active");
      darkenBG.classList.remove("active")
    }

  });

console.log(cart)