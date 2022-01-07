function ourContacts(){
    const contacts = document.createElement('button');
    contacts.innerHTML = 'Contacts';
    contacts.classList.add('contactLink');
    contacts.classList.add('headerButton');
    contacts.id = 'contacts';
    return contacts;
 }
 
 export {ourContacts}