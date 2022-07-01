import { Component } from 'react';
import PhonebookForm from './components/PhonebookForm/PhonebookForm';
import Contacts from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <PhonebookForm
          title="Phonebook"
          name="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          inputTitle="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          inputType="text"
          buttonType="submit"
          buttonText="Add contact"
        />
        <Contacts title="Contacts" />
      </>
    );
  }
}
