import './style.css';
import {Header} from './content/header/header';
import {MainContent} from './content/main_content/main_content';
import {Footer} from './content/footer/footer';
import {homePage} from './content/main_content/home';
import {menuPage} from './content/main_content/menu';

const content = document.getElementById('content');
 
document.body.insertBefore(Header(), content);
content.appendChild(new MainContent());
document.body.appendChild(Footer());

    let home = document.getElementById('homeLink');
    home.addEventListener('click', Home);
    
    function Home(){
       document.querySelector('.main_content').remove();
       content.appendChild(new homePage());
    };

    let menu = document.getElementById('menuLink');
    menu.addEventListener('click', Menu);

    function Menu(){
        document.querySelector('.main_content').remove();
        content.appendChild(new menuPage());
     };
 