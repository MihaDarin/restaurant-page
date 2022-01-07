import {goHome} from "./home_link";
import {ourMenu} from "./menu_link";
import {ourContacts} from "./contacts_link";
import {aboutUs} from "./about_link";
import {headerTop} from "./header_top";

function Header(){
   const header = document.createElement('div');
      header.classList.add('header');
      header.appendChild(new headerTop());
   const header_links = document.createElement('div');
      header_links.classList.add('header_links');
      header_links.appendChild(goHome());
      header_links.appendChild(ourMenu());
      header_links.appendChild(ourContacts());
      header_links.appendChild(aboutUs());
      header.appendChild(header_links);
      
   return header;
}
export {Header}