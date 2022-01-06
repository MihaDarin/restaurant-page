function goHome(){
    const home = document.createElement('button');
    home.textContent = 'Go Home';
    home.classList.add('homeLink');
    home.id = 'homeLink';
    return home;
 };
 export {goHome}