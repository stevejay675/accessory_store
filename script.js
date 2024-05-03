fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    // Get reference to product container
    const productContainer = document.getElementById('product-container');

    // Loop through products and generate HTML for each product
    products.forEach(product => {
      // Create product element
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      // Populate product HTML
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.detail}</p>
        <p><span class="price">$${product.price}</span> <strike>$ ${product.prevPrice}</strike></p>
        <div class="addcartdiv">
        <button class="addtocart">add to cart</button>
        <span><i class="bi-heart"></i></span>
     </div>
      `;

      // Append product element to container
      productContainer.appendChild(productElement);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });


  //display flashsales products
  /*fetch('data/headsets.json')
  .then(response => response.json())
  .then(headsets => {
    // Get reference to product container
    const headsettoshow = headsets.slice(0, 8);
    const flashsalescontainer = document.getElementById('flashsale-container');

    // Loop through products and generate HTML for each product
    headsettoshow.forEach(headset => {
      // Create product element
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      // Populate product HTML
      productElement.innerHTML = `
        <img src="${headset.image}" alt="${headset.name}">
        <h2>${headset.name}</h2>
        <p>${headset.detail}</p>
        <p><span class="price">$${headset.price}</span> <strike>$ ${headset.prevPrice}</strike></p>
        <div class="addcartdiv">
        <button class="addtocart">add to cart</button>
        <span><i class="bi-heart"></i></span>
     </div>
      `;

      // Append product element to container
      flashsalescontainer.appendChild(productElement);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  }); */



 
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


  hamburgerIcon.addEventListener("click", () =>{
    sidebar.classList.toggle('active')
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
