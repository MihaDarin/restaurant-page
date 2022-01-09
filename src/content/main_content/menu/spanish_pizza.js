class SpanishPizza{
    constructor(){
        const spanish = document.createElement('div');
            spanish.classList.add('menu_item');

        const info = document.createElement('p');
            info.textContent = 'Испанская пицца'
            info.classList.add("pizza_info");
            
        const list = document.createElement('p');
            list.classList.add("pizza_ingredients");
            list.textContent = "Ингредиенты:";

        const listItem = document.createElement('p');
            listItem.classList.add("pizza_ingredients");
            listItem.textContent = `Острые колбаски,
                                    свинина, 
                                    зелень`;
        list.appendChild(listItem);

        const img = document.createElement('IMG');
            img.classList.add('menu_img');
            img.src =  "/src/content/images/spanish.jpg";

        spanish.appendChild(info);
        spanish.appendChild(img);
        spanish.appendChild(list);
         
        return spanish;
        
    }
};
export{SpanishPizza}