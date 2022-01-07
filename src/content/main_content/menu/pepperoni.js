class PepperoniPizza{
    constructor(){
        const pepperoni = document.createElement('div');
        const info = document.createElement('p');
            info.textContent = 'Pizza Pepperoni'
        pepperoni.classList.add('pepperoni');
        const img = document.createElement('IMG');
            img.classList.add('menu_img');
            img.src =  "/src/content/images/pepperoni_pizza.jpg";
        pepperoni.appendChild(info);
        pepperoni.appendChild(img);
        
        return pepperoni;
    }
};
export{PepperoniPizza}