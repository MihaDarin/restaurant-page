function Footer(){
    let footer = document.createElement('div');
    footer.innerHTML = "this is footer";
    footer.classList.add('footer');
    return footer;
};

export {Footer}