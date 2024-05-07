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
  .then(popularProducts => {
    
    const productContainer = document.getElementById('product-container');

    let popularProduct = popularProducts.popularProducts;
   
    popularProduct.forEach(product => {
     
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



        addtocartBtn[i].innerHTML = `<strike class="added">added</strike> <i class="bi-check"></i>`;
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

       


        addtocartBtn[i].innerHTML = `<strike class="added">added</strike> <i class="bi-check"></i>`;
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
  
