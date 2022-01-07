import './style.css';
import {Header} from './content/header/header';
import {Footer} from './content/footer/footer';
import {HomePage} from './content/main_content/home_page';
import {MenuPage} from './content/main_content/menu_page';
import {ContactsPage} from './content/main_content/contacts_page';
import {AboutPage} from './content/main_content/about_page';
const content = document.getElementById('content');
 
document.body.insertBefore(Header(), content);
content.appendChild(new HomePage());
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
      content.appendChild(new HomePage());
   }else if(this.id == 'menuLink'){
      content.appendChild(new MenuPage());
   }else if (this.id == 'contacts'){
      content.appendChild(new ContactsPage());
   }else if(this.id =='about'){
      content.appendChild(new AboutPage());
   }
 }