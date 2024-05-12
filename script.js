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
  let productArray = [];





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
      const addcart = productElement.querySelector('.addtocart');
      addcart.addEventListener('click', () => {
        cart.push(product);
        updateCartCount();
        addcart.innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addcart.disabled = true;
      });
      
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
        updateCartCount();
        addcart.innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
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
        updateCartCount();
        addcart.innerHTML = `<strike>added</strike> <i class="bi-check"></i>`;
        addcart.disabled = true;
      });
      
    });
   
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
  
