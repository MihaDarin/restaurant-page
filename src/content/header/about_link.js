function aboutUs(){
    const about = document.createElement('button');
    about.innerHTML = 'About Us';
    about.classList.add('about');
    about.classList.add('headerButton');
    return about;
 }
 
 export {aboutUs}