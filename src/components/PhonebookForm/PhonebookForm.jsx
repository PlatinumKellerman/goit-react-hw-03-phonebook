import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './phonebook-form.module.css';

export function PhonebookForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).max(20).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
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
              required
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage name="name" />
          </label>
          <label htmlFor="number" className={s.phonebook__label}>
            Number:
            <Field
              className={s.phonebook__input}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              required
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorMessage name="number" />
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
