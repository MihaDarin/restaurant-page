function ourContacts(){
    const contacts = document.createElement('button');
    contacts.innerHTML = 'Contacts';
    contacts.classList.add('contacts');
    contacts.classList.add('headerButton');
    return contacts;
 }
 
 export {ourContacts}