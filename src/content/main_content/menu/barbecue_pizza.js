class BarbecuePizza{
    constructor(){
        const barbecue = document.createElement('div');
            barbecue.classList.add('menu_item');

        const info = document.createElement('p');
            info.textContent = 'Барбекю пицца'
            info.classList.add("pizza_info");
            
        const list = document.createElement('p');
            list.classList.add("pizza_ingredients");
            list.textContent = "Ингредиенты:";

        const listItem = document.createElement('p');
            listItem.classList.add("pizza_ingredients");
            listItem.textContent = `Пряные колбаски, свинина, моцарелла, зелень`;
        list.appendChild(listItem);

        const img = document.createElement('IMG');
            img.classList.add('menu_img');
            img.src =  "/src/content/images/barbecue.jpeg";

        barbecue.appendChild(info);
        barbecue.appendChild(img);
        barbecue.appendChild(list);
         
        return barbecue;
        
    }
};
export{BarbecuePizza}