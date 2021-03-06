class FourCheezes{
    constructor(){
        const fourChese = document.createElement('div');
            fourChese.classList.add('menu_item');
            
        const info = document.createElement('p');
            info.textContent = 'Пицца Четыре Сыра';
            info.classList.add("pizza_info");
            
        const list = document.createElement('p');
            list.classList.add("pizza_ingredients");
            list.textContent = "Ингредиенты:";

        const listItem = document.createElement('p');
            listItem.classList.add("pizza_ingredients");
            listItem.textContent = `Сыры: маасдам, дорблю, пармезан, моцарелла`;
        list.appendChild(listItem);

        const img = document.createElement('IMG');
            img.classList.add('menu_img');
            img.src =  "/src/content/images/four_cheeses.jpg";

        fourChese.appendChild(info);
        fourChese.appendChild(img);
        fourChese.appendChild(list);
         
        return fourChese;
        
    }
};
export{FourCheezes}