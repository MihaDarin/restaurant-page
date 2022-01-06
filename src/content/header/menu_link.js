function ourMenu(){
    const menu = document.createElement('button');
    menu.innerHTML = 'Menu';
    menu.classList.add('menu');
    menu.classList.add('headerButton');
    menu.id = 'menuLink';
    return menu;
 }
 
 export {ourMenu}