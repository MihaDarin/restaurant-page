class PepperoniPizza{
    constructor(){
        const pepperoni = document.createElement('div');
            pepperoni.classList.add('menu_item');

        const info = document.createElement('p');
            info.textContent = 'Пепперони пицца';
            info.classList.add("pizza_info");

        const list = document.createElement('p');
            list.classList.add("pizza_ingredients");
            list.textContent = "Ингредиенты:";

        const listItem = document.createElement('p');
            listItem.classList.add("pizza_ingredients");
            listItem.textContent = `Сыр, перец "пепперони", грибы, оливки`;
                                    
        list.appendChild(listItem);

        const img = document.createElement('IMG');
            img.classList.add('menu_img');
            img.src =  "/src/content/images/pepperoni.jpg";

        pepperoni.appendChild(info);
        pepperoni.appendChild(img);
        pepperoni.appendChild(list);
         
        return pepperoni;
        
    }
};
export{PepperoniPizza}