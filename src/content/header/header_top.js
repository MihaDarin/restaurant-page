class headerTop {
    constructor(){
        const header_top = document.createElement('div');
        header_top.classList.add('header_top');
        const header_top_text = document.createElement('span');
        header_top_text.classList.add("header_top_text");
        header_top_text.innerHTML = "ДОБРО ПОЖАЛОВАТЬ НА СТРАНИЦУ ПИЦЦЦЕРИИ";
        header_top.appendChild(header_top_text);
        return header_top;
    }
    
};

export {headerTop};