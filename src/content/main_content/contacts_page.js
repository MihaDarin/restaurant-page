class ContactsPage{
    constructor(){
        const contact = document.createElement('div');
        contact.classList.add('contact');
        contact.innerHTML = 'this is contact page';
        return contact;   
    };
 };
 export {ContactsPage}