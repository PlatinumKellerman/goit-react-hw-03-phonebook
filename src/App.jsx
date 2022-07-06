import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './components/Container/index';
import { PhonebookForm } from './components/PhonebookForm/index';
import { Contacts } from 'components/Contacts/index';
import { Filter } from './components/Filter/index';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  contactHandler = data => {
    const { contacts } = this.state;
    const findContact = contacts.find(contact => contact.name === data.name);
    if (findContact) {
      alert(`${data.name} is already in contact`);
    } else {
      const contact = {
        id: nanoid(),
        ...data,
      };
      contacts.push(contact);
      this.setState({
        contacts,
      });
    }
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

  onContactDelete = id => {
    const { contacts } = this.state;
    const contactToDelete = contacts.filter(contact => {
      return contact.id !== id;
    });
    this.setState({
      contacts: contactToDelete,
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.contactHandler} title="Phonebook" />
        <Filter
          value={filter}
          title="Find contacts by name:"
          onChange={this.handleSearchChange}
        />
        <h2>Contacts</h2>
        <Contacts
          title="Contacts"
          filteredContacts={this.onFilteredContacts(filter)}
          onContactDelete={this.onContactDelete.bind(this)}
        />
      </Container>
    );
  }
}
