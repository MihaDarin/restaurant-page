class VillagePizza{
    constructor(){
        const village = document.createElement('div');
            village.classList.add('menu_item');

        const info = document.createElement('p');
            info.textContent = 'Деревенская пицца';
            info.classList.add("pizza_info");
            
        const list = document.createElement('p');
            list.classList.add("pizza_ingredients");
            list.textContent = "Ингредиенты:";

        const listItem = document.createElement('p');
            listItem.classList.add("pizza_ingredients");
            listItem.textContent = `Свежие овощи, ветчина, маринованные огурчики`
        list.appendChild(listItem);

        const img = document.createElement('IMG');
            img.classList.add('menu_img');
            img.src =  "/src/content/images/village_pizza.png";

            village.appendChild(info);
            village.appendChild(img);
            village.appendChild(list);
         
        return village;
        
    }
};
export{VillagePizza}