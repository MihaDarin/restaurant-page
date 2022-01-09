import {PepperoniPizza} from "./menu/pepperoni";
import {FourCheezes} from "./menu/four_cheezes";
import {SpanishPizza} from "./menu/spanish_pizza";
import {VillagePizza} from "./menu/village_pizza";
import {BarbecuePizza} from "./menu/barbecue_pizza";
import {PitsburgerPizza} from "./menu/pitsburger";
class MenuPage{
    constructor(){
        const menu = document.createElement('div');
        menu.classList.add('menu_page');
        
        const menuText = document.createElement('span');
            menuText.innerHTML = 'Меню';
            menuText.classList.add("menuText");
        menu.appendChild(menuText);
        const wrapper = document.createElement('div');
        wrapper.classList.add('menuWrapper');
        menu.appendChild(wrapper);
            wrapper.appendChild(new PepperoniPizza());
            wrapper.appendChild(new FourCheezes());
            wrapper.appendChild(new SpanishPizza());
            wrapper.appendChild(new VillagePizza());
            wrapper.appendChild(new BarbecuePizza());
            wrapper.appendChild(new PitsburgerPizza());
        return menu;   
    };
 };
 export {MenuPage}