class AboutPage{
    constructor(){
        const about = document.createElement('div');
        about.classList.add('about');
        about.innerHTML = 'this is about us page';
       
        return about;   
    };
 };
 export {AboutPage}