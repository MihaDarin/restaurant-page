import './style.css';
import {Header} from './content/header/header';
import {MainContent} from './content/main_content/main_content';
import {Footer} from './content/footer/footer';
import {homePage} from './content/main_content/home_page';
import {menuPage} from './content/main_content/menu_page';

const content = document.getElementById('content');
 
document.body.insertBefore(Header(), content);
content.appendChild(new MainContent());
document.body.appendChild(Footer());

    let buttons = document.querySelectorAll('.headerButton');
    buttons.forEach(function(btn){
       btn.addEventListener('click', currentPage);
    })

 function currentPage(){
   while (content.firstChild){
      content.removeChild(content.firstChild);
   }
   if(this.id == 'homeLink'){
      content.appendChild(new homePage());
   }else if(this.id == 'menuLink'){
      content.appendChild(new menuPage());
   }
 }