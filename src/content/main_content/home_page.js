class HomePage{
    constructor(){
        const home = document.createElement('div');
        home.classList.add('home');
        home.innerHTML = 'this is home page';
        return home;   
    };
 };
 export {HomePage}