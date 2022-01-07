function goHome(){
    const home = document.createElement('button');
    home.textContent = 'Home';
    home.classList.add('homeLink');
    home.classList.add('headerButton');
    home.id = 'homeLink';
    return home;
 };
 export {goHome}