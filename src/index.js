import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadAboutPage } from "./about.js";
import { loadMenuPage } from "./menu.js";

// attach and handle nav button listeners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        buttons.forEach(btn => {
            // make clicked button active and disabled
            // enable other buttons
            btn.classList.remove('active');
            btn.disabled = false;
            this.classList.add('active');
            this.disabled = true;

            // grab button ID to load selected page
            const buttonId = this.id;
            switch(buttonId){
                case 'home':
                    loadHomePage();
                    break;
                case 'menu':
                    loadMenuPage();
                    break;
                case 'about':
                    loadAboutPage();
                    break;
            }
        });
    });
});

// initial page load
loadHomePage();