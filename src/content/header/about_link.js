function aboutUs(){
    const about = document.createElement('button');
    about.innerHTML = 'About Us';
    about.classList.add('aboutLink');
    about.classList.add('headerButton');
    about.id = 'about';
    return about;
 }
 
 export {aboutUs}