class PitsburgerPizza{
    constructor(){
        const pitsburger = document.createElement('div');
            pitsburger.classList.add('menu_item');

        const info = document.createElement('p');
            info.textContent = 'Пиццбургер пицца'
            info.classList.add("pizza_info");
            
        const list = document.createElement('p');
            list.classList.add("pizza_ingredients");
            list.textContent = "Ингредиенты:";

        const listItem = document.createElement('p');
            listItem.classList.add("pizza_ingredients");
            listItem.textContent = `Три вида мяса, свежие овощи, соус бургер, острый соус`;
        list.appendChild(listItem);

        const img = document.createElement('IMG');
            img.classList.add('menu_img');
            img.src =  "/src/content/images/pitsburger_pizza.jpeg";

        pitsburger.appendChild(info);
        pitsburger.appendChild(img);
        pitsburger.appendChild(list);
         
        return pitsburger;
        
    }
};
export{PitsburgerPizza}