const mainContainer1 = document.getElementById("main-container1");
const mainContainer2 = document.getElementById("main-container2");
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");

login.addEventListener("click", () =>{
    mainContainer1.style.display = "flex";
    mainContainer2.style.display = "none";
    document.title = "Login"
})

signup.addEventListener("click", () =>{
    mainContainer1.style.display = "none";
    mainContainer2.style.display = "flex";
    document.title = "Sign Up";
})