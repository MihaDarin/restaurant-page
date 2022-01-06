class MainContent{
    constructor(){
        const main = document.createElement('div');
        main.innerHTML = 'this is main';
        main.classList.add('main_content');
        return main;
    }
   
};

export {MainContent};