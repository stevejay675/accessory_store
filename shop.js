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



/*
//display all shop products
fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    
    const productContainer = document.getElementById('product-container');
    let shopproduct = data.shop;
   
    shopproduct.forEach(product => {
     
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-detail">${product.detail}</p>
        <p><span class="price">$<span class="product-price">${product.price}</span> <strike>$ ${product.prevPrice}</strike></p>
        <div class="addcartdiv">
        <button class="addtocart">add to cart <i class="bi-cart3"></i></button>
        <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      `;

      
      productContainer.appendChild(productElement);
    });

    //add to cart implementation
    const addtocartBtn = document.getElementsByClassName('addtocart');

    for(let i=0; i<addtocartBtn.length; i++){
      addtocartBtn[i].addEventListener("click", () =>{

           const addtocartBtn_subparent = addtocartBtn[i].parentNode;
           const addtocartBtn_mainparent = addtocartBtn_subparent.parentNode

           const productImage = addtocartBtn_mainparent.querySelector(".product-image").src;
           const productName = addtocartBtn_mainparent.querySelector(".product-name").textContent;
           const productDetail = addtocartBtn_mainparent.querySelector(".product-detail").textContent;
           const productPrice = addtocartBtn_mainparent.querySelector(".product-price").textContent;

           const productObject = {
              image: productImage,
              name: productName,
              detail: productDetail,
              price: productPrice 
           }

           productArray.push(productObject);
           cartcount.innerHTML = productArray.length;

           console.log(productArray)



        addtocartBtn[i].innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addtocartBtn[i].disabled = true;
      })
    }


    //wish list implementation
    const wishlistbtn = document.getElementsByClassName("wishlistbtn");
    for(let i=0; i<wishlistbtn.length; i++){
      wishlistbtn[i].addEventListener("click", () =>{
        wishlistbtn[i].classList.remove('bi-heart');
        wishlistbtn[i].classList.add("bi-heart-fill");
        wishlistbtn[i].style.color = "red";
        wishlistbtn[i].style.transition = "0.4s";
      })
    }

  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });


  //display all only laptops on shop page
  fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    
    const productContainer = document.getElementById('product-container-laptops');
    let shopproduct = data.laptops;
   
    shopproduct.forEach(product => {
     
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-detail">${product.detail}</p>
        <p><span class="price">$<span class="product-price">${product.price}</span> <strike>$ ${product.prevPrice}</strike></p>
        <div class="addcartdiv">
        <button class="addtocart">add to cart <i class="bi-cart3"></i></button>
        <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      `;

      
      productContainer.appendChild(productElement);
    });

    //add to cart implementation
    const addtocartBtn = document.getElementsByClassName('addtocart');

    for(let i=0; i<addtocartBtn.length; i++){
      addtocartBtn[i].addEventListener("click", () =>{

           const addtocartBtn_subparent = addtocartBtn[i].parentNode;
           const addtocartBtn_mainparent = addtocartBtn_subparent.parentNode

           const productImage = addtocartBtn_mainparent.querySelector(".product-image").src;
           const productName = addtocartBtn_mainparent.querySelector(".product-name").textContent;
           const productDetail = addtocartBtn_mainparent.querySelector(".product-detail").textContent;
           const productPrice = addtocartBtn_mainparent.querySelector(".product-price").textContent;

           const productObject = {
              image: productImage,
              name: productName,
              detail: productDetail,
              price: productPrice 
           }

           productArray.push(productObject);
           cartcount.innerHTML = productArray.length;

           console.log(productArray)



        addtocartBtn[i].innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addtocartBtn[i].disabled = true;
      })
    }



    //function

    //wish list implementation
    const wishlistbtn = document.getElementsByClassName("wishlistbtn");
    for(let i=0; i<wishlistbtn.length; i++){
      wishlistbtn[i].addEventListener("click", () =>{
        wishlistbtn[i].classList.remove('bi-heart');
        wishlistbtn[i].classList.add("bi-heart-fill");
        wishlistbtn[i].style.color = "red";
        wishlistbtn[i].style.transition = "0.4s";
      })
    }

  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });


  //display all only gamepads on shop page
  fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    
    const productContainer = document.getElementById('product-container-gamepads');
    let shopproduct = data.gamepads;
   
    shopproduct.forEach(product => {
     
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-detail">${product.detail}</p>
        <p><span class="price">$<span class="product-price">${product.price}</span> <strike>$ ${product.prevPrice}</strike></p>
        <div class="addcartdiv">
        <button class="addtocart">add to cart <i class="bi-cart3"></i></button>
        <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      `;

      
      productContainer.appendChild(productElement);
    });

    //add to cart implementation
    const addtocartBtn = document.getElementsByClassName('addtocart');

    for(let i=0; i<addtocartBtn.length; i++){
      addtocartBtn[i].addEventListener("click", () =>{

           const addtocartBtn_subparent = addtocartBtn[i].parentNode;
           const addtocartBtn_mainparent = addtocartBtn_subparent.parentNode

           const productImage = addtocartBtn_mainparent.querySelector(".product-image").src;
           const productName = addtocartBtn_mainparent.querySelector(".product-name").textContent;
           const productDetail = addtocartBtn_mainparent.querySelector(".product-detail").textContent;
           const productPrice = addtocartBtn_mainparent.querySelector(".product-price").textContent;

           const productObject = {
              image: productImage,
              name: productName,
              detail: productDetail,
              price: productPrice 
           }

           productArray.push(productObject);
           cartcount.innerHTML = productArray.length;

           console.log(productArray)



        addtocartBtn[i].innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addtocartBtn[i].disabled = true;
      })
    }


    //wish list implementation
    const wishlistbtn = document.getElementsByClassName("wishlistbtn");
    for(let i=0; i<wishlistbtn.length; i++){
      wishlistbtn[i].addEventListener("click", () =>{
        wishlistbtn[i].classList.remove('bi-heart');
        wishlistbtn[i].classList.add("bi-heart-fill");
        wishlistbtn[i].style.color = "red";
        wishlistbtn[i].style.transition = "0.4s";
      })
    }

  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });

  
  
  //display flashsales products
  fetch('data/data.json')
  .then(response => response.json())
  .then(flashsales => {
    // Get reference to product container
    const flashsale = flashsales.flashsalesProduct;
    const flashsalescontainer = document.getElementById('flashsales');

    // Loop through products and generate HTML for each product
    flashsale.forEach(item => {
      // Create product element
      const productElement = document.createElement('div');
      productElement.classList.add('flashsaleproduct');

      // Populate product HTML
      productElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2 class="fs-name">${item.name}</h2>
            <p><span class="fs-price">$${item.price}</span> <strike>$${item.prevPrice}</strike></p>
            <button class="addtocart fs-addtocart">add to cart <i class="bi-cart3"></i></button>
      `;

      // Append product element to container
      flashsalescontainer.appendChild(productElement);
    });

    //add to cart
    const addtocartBtn = document.getElementsByClassName('addtocart');

    for(let i=0; i<addtocartBtn.length; i++){
      addtocartBtn[i].addEventListener("click", () =>{

       


        addtocartBtn[i].innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addtocartBtn[i].disabled = true;


      })
    }
    
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
  

  
*/

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
        <p class="product-detail greyColor">${product.detail}</p>
        <p><span class="price">$<span class="product-price">${product.price}</span> <strike>$ ${product.prevPrice}</strike></p>
        <div class="addcartdiv">
          <button class="addtocart">add to cart <i class="bi-cart3"></i></button>
          <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      `;
      productContainer.appendChild(productElement);
      const addcart = productElement.querySelector('.addtocart');
      addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addcart.disabled = true;
      });
      
    });

    // Populate laptop products
    data.laptops.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-detail greyColor">${product.detail}</p>
        <p><span class="price">$<span class="product-price">${product.price}</span> <strike>$ ${product.prevPrice}</strike></p>
        <div class="addcartdiv">
          <button class="addtocart">add to cart <i class="bi-cart3"></i></button>
          <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      `;
      laptopsContainer.appendChild(productElement);
     const addcart = productElement.querySelector('.addtocart');
     addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addcart.disabled = true;
      });
    });

    // Populate gamepad products
    data.gamepads.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-detail greyColor">${product.detail}</p>
        <p><span class="price">$<span class="product-price">${product.price}</span> <strike>$ ${product.prevPrice}</strike></p>
        <div class="addcartdiv">
          <button class="addtocart">add to cart <i class="bi-cart3"></i></button>
          <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      `;
      gamepadsContainer.appendChild(productElement);
      const addcart = productElement.querySelector('.addtocart');
     addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addcart.disabled = true;
      });
    });

     // Populate mouse products
     data.mouse.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-detail greyColor">${product.detail}</p>
        <p><span class="price">$<span class="product-price">${product.price}</span> <strike>$ ${product.prevPrice}</strike></p>
        <div class="addcartdiv">
          <button class="addtocart">add to cart <i class="bi-cart3"></i></button>
          <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      `;
      laptopsContainer.appendChild(productElement);
     const addcart = productElement.querySelector('.addtocart');
     addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addcart.disabled = true;
      });
    });


     // Populate keyboard products
     data.keyboards.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-detail greyColor">${product.detail}</p>
        <p><span class="price">$<span class="product-price">${product.price}</span> <strike>$ ${product.prevPrice}</strike></p>
        <div class="addcartdiv">
          <button class="addtocart">add to cart <i class="bi-cart3"></i></button>
          <span><i class="bi-heart wishlistbtn"></i></span>
        </div>
      `;
      laptopsContainer.appendChild(productElement);
     const addcart = productElement.querySelector('.addtocart');
     addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addcart.disabled = true;
      });
    });

    // Populate flash sales products
    data.flashsalesProduct.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('flashsaleproduct');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2 class="fs-name">${product.name}</h2>
        <p><span class="fs-price">$${product.price}</span> <strike>$${product.prevPrice}</strike></p>
        <button class="addtocart fs-addtocart">add to cart <i class="bi-cart3"></i></button>
      `;
      flashsalesContainer.appendChild(productElement);


      productElement.querySelector('.addtocart').addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
      });
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