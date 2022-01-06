class headerTop {
    constructor(){
        const header_top = document.createElement('div');
        header_top.classList.add('header_top');
        header_top.innerHTML = "WELCOME TO THE PAGE OF PIZZA'S RESTAURANT"
        return header_top;
    }
    
};

export {headerTop};