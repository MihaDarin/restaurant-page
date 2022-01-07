class FourCheezes{
    constructor(){
        const fourChese = document.createElement('div');
        const info = document.createElement('p');
            info.textContent = 'Pizza Four Cheezes'
            fourChese.classList.add('fourChese');
        const img = document.createElement('IMG');
            img.classList.add('menu_img');
            img.src =  "/src/content/images/four_cheeses.jpg";
        fourChese.appendChild(info);
        fourChese.appendChild(img);
        
        return fourChese;
    }
};
export{FourCheezes}