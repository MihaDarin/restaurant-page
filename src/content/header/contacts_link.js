function ourContacts(){
    const contacts = document.createElement('button');
    contacts.innerHTML = 'Контакты';
    contacts.classList.add('contactLink');
    contacts.classList.add('headerButton');
    contacts.id = 'contacts';
    return contacts;
 }
 
 export {ourContacts}