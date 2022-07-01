import { Formik } from 'formik';
import s from './phonebook-form.module.css';

function PhonebookForm({
  title,
  name,
  pattern,
  inputTitle,
  inputType,
  buttonType,
  buttonText,
}) {
  return (
    <>
      <h2 className={s.form__title}>{title}</h2>
      <Formik>
        <form>
          <label htmlFor={name}>
            {name}
            <input
              name={name}
              pattern={pattern}
              title={inputTitle}
              type={inputType}
              required
            />
          </label>
          <button type={buttonType}>{buttonText}</button>
        </form>
      </Formik>
    </>
  );
}

export default PhonebookForm;
