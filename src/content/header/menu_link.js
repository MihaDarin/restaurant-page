function ourMenu(){
    const menu = document.createElement('button');
    menu.innerHTML = 'Меню';
    menu.classList.add('menuLink');
    menu.classList.add('headerButton');
    menu.id = 'menuLink';
    return menu;
 }
 
 export {ourMenu}