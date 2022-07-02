import { Component } from 'react';
import PhonebookForm from './components/PhonebookForm/PhonebookForm';
import Contacts from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  contactHandler = data => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      ...data,
    };
    contacts.push(contact);
    this.setState({
      contacts,
    });
    console.log(contacts);
  };

  getContactsFromList() {
    const { contacts } = this.state;
    return contacts;
  }

  deleteContact(id) {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== id;
    });
    this.setState({
      contacts: filteredContacts,
    });
  }

  render() {
    const ContactsFromList = this.getContactsFromList();
    return (
      <>
        <PhonebookForm onSubmit={this.contactHandler} />
        <Contacts
          title="Contacts"
          ContactsFromList={ContactsFromList}
          deleteContact={this.deleteContact.bind(this)}
        />
      </>
    );
  }
}
