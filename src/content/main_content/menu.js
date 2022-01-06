class menuPage{
    constructor(){
        const menu = document.createElement('div');
        menu.classList.add('menu');
        menu.innerHTML = 'this is menu page';
        return menu;   
    };
 };
 export {menuPage}