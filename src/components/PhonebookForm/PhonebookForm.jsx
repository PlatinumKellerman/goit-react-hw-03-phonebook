import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './phonebook-form.module.css';

function PhonebookForm({ onSubmit }) {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).max(16).required(),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <>
      <h2 className={s.form__title} title="Phonebook">
        Phonebook
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={s.submit__form}>
          <label htmlFor="name">
            Name:
            <Field
              name="name"
              type="text"
              required
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage name="name" />
          </label>
          <label htmlFor="number">
            Number:
            <Field
              name="number"
              type="number"
              required
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorMessage name="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}

export default PhonebookForm;
