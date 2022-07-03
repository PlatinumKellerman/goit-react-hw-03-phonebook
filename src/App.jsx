import { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './components/Container/Container';
import PhonebookForm from './components/PhonebookForm/PhonebookForm';
import Contacts from 'components/Contacts/Contacts';
import SearchContact from './components/SearchContact/SearchContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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
  };

  handleSearchChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFilteredContacts = value => {
    const filterNormalize = value.toLowerCase();
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterNormalize);
    });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const contactToDelete = contacts.filter(contact => {
      return contact.id !== id;
    });
    this.setState({
      contacts: contactToDelete,
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <PhonebookForm onSubmit={this.contactHandler} />
        <SearchContact
          value={filter}
          title="Find contacts by name"
          onChange={this.handleSearchChange}
        />
        <Contacts
          title="Contacts"
          filteredContacts={this.onFilteredContacts(filter)}
          deleteContact={this.deleteContact.bind(this)}
        />
      </Container>
    );
  }
}
