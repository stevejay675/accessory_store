const option = document.querySelectorAll(".options");
const shopOptions = document.querySelector(".shop-options");


shopOptions.addEventListener("click", function(event){
    if(event.target.classList.contains("options")){
        option.forEach(function(opt){
            opt.classList.remove("active")
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
  const subcategories = document.querySelector(".subcategories");
  const Category = document.querySelector(".Category");
  const chevronIcon = document.querySelector(".chevron-down-icon");
  const addtocartBtn = document.getElementsByClassName("addtocart"); 
  const product = document.getElementsByClassName("product");
  const cartcount = document.querySelector(".cartCount");
  const allcartBTn = document.getElementById("opt-allcategory");
  const laptopOPT = document.getElementById("opt-laptop");
  const gamepadOPT = document.getElementById("opt-gamepad");
  const keyboardOPT = document.getElementById("opt-keyboard");
  const mouseOPT = document.getElementById("opt-mouse");
  const headsetOPT = document.getElementById("opt-headset");
  const allCat = document.getElementById("product-container");
  const laptopsCat = document.getElementById("product-container-laptops")
  const gamepadsCat = document.getElementById("product-container-gamepads")
  const keyboardsCat = document.getElementById("product-container-keyboards")
  const mouseCat = document.getElementById("product-container-mouse")
  const headsetsCat = document.getElementById("product-container-headsets")

  let productArray = [];


  allcartBTn.addEventListener("click", () =>{
    allCat.style.display = "flex";
    mouseCat.style.display = "none";
    headsetsCat.style.display = "none";
    gamepadsCat.style.display = "none";
    keyboardsCat.style.display = 'none';
    laptopsCat.style.display = "none";
})



//toggle between the various categories options
laptopOPT.addEventListener('click', () =>{
    allCat.style.display = "none";
    mouseCat.style.display = "none";
    headsetsCat.style.display = "none";
    gamepadsCat.style.display = "none";
    keyboardsCat.style.display = 'none';
    laptopsCat.style.display = "flex";
})


gamepadOPT.addEventListener("click", () =>{
    allCat.style.display = "none";
    mouseCat.style.display = "none";
    headsetsCat.style.display = "none";
    gamepadsCat.style.display = "flex";
    keyboardsCat.style.display = 'none';
    laptopsCat.style.display = "none";
})


keyboardOPT.addEventListener("click", () =>{
    allCat.style.display = "none";
    mouseCat.style.display = "none";
    headsetsCat.style.display = "none";
    gamepadsCat.style.display = "none";
    keyboardsCat.style.display = 'flex';
    laptopsCat.style.display = "none";
})


mouseOPT.addEventListener("click", () =>{
    allCat.style.display = "none";
    mouseCat.style.display = "flex";
    headsetsCat.style.display = "none";
    gamepadsCat.style.display = "none";
    keyboardsCat.style.display = 'none';
    laptopsCat.style.display = "none";
})


headsetOPT.addEventListener("click", () =>{
    allCat.style.display = "none";
    mouseCat.style.display = "none";
    headsetsCat.style.display = "flex";
    gamepadsCat.style.display = "none";
    keyboardsCat.style.display = 'none';
    laptopsCat.style.display = "none";
})





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
  

  

 
        

 

  for(let i=0; i<addtocartBtn.length; i++){
    addtocartBtn[i].addEventListener("click", () =>{
      alert('item added to cart')
    })
  }
  


  


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
       darkenBG.classList.toggle("active")
  })

  Category.addEventListener("click", () =>{
    subcategories.classList.toggle("active");
    chevronIcon.style.transform = "rotate(90deg)";
  })
