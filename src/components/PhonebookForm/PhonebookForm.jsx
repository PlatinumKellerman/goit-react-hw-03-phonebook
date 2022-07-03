import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './phonebook-form.module.css';

export function PhonebookForm({ onSubmit }) {
  const schema = yup.object().shape({
    name: yup.string().required('This field cannot be empty'),
    number: yup.string().min(6).max(18).required('This field cannot be empty'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={s.submit__form}>
          <label htmlFor="name" className={s.phonebook__label}>
            Name:
            <Field
              className={s.phonebook__input}
              name="name"
              type="text"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage
              name="name"
              render={message => (
                <span className={s.error_text}>{message}</span>
              )}
            />
          </label>
          <label htmlFor="number" className={s.phonebook__label}>
            Number:
            <Field
              className={s.phonebook__input}
              name="number"
              type="tel"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorMessage
              render={message => (
                <span className={s.error_text}>{message}</span>
              )}
              name="number"
            />
          </label>
          <button type="submit" className={s.add__button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
