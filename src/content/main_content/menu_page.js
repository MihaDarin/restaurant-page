import {PepperoniPizza} from "./menu/pepperoni";
import {FourCheezes} from "./menu/four_cheezes";

class MenuPage{
    constructor(){
        const menu = document.createElement('div');
        menu.classList.add('menu_page');
        menu.innerHTML = 'MENU';

        const wrapper = document.createElement('div');
        wrapper.classList.add('menuWrapper');
        menu.appendChild(wrapper);
            wrapper.appendChild(new PepperoniPizza());
            wrapper.appendChild(new FourCheezes());
        return menu;   
    };
 };
 export {MenuPage}