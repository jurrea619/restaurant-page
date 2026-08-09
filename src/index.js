import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadAboutPage } from "./about.js";
import { loadMenuPage } from "./menu.js";

// attach and handle nav button listeners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        buttons.forEach(btn => {
            btn.classList.remove('active');
            this.classList.add('active');
        });
    });
});

loadHomePage();