function aboutUs(){
    const about = document.createElement('button');
    about.innerHTML = 'О нас';
    about.classList.add('aboutLink');
    about.classList.add('headerButton');
    about.id = 'about';
    return about;
 }
 
 export {aboutUs}