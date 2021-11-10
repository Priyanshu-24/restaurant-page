import { homePage } from "./Home";
import { contactPage } from "./Contact";
import { menuPage } from "./Menu";


const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

console.log(home);
homePage();

home.addEventListener("click", function(){

    const content = document.getElementById("content");

    content.innerHTML = ``;

    homePage();
})


menu.addEventListener("click", function(){

    const content = document.getElementById("content");

    content.innerHTML = ``;

    menuPage();
})


contact.addEventListener("click", function(){

    const content = document.getElementById("content");

    content.innerHTML = ``;

    contactPage();
})




