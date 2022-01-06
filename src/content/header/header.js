import {goHome} from "./home";
import {aboutUs} from "./about";
import {ourMenu} from "./menu";
import {ourContacts} from "./contacts";
import {headerTop} from "./header_top";

function Header(){
   const header = document.createElement('div');
      header.classList.add('header');
      header.appendChild(new headerTop());
   const header_links = document.createElement('div');
      header_links.classList.add('header_links');
      header_links.appendChild(goHome());
      header_links.appendChild(aboutUs());
      header_links.appendChild(ourMenu());
      header_links.appendChild(ourContacts());
      header.appendChild(header_links);
      
   return header;
}
export {Header}