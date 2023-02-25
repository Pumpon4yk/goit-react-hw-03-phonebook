import { Form, Label, Input, Button, Messege } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup'
import 'yup-phone';


const namePattern =
/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberPattern =/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const checkContscts = (arr, obj) => {
  return arr.every(e => e.name.toLowerCase() !== obj.name.toLowerCase());
};

const initialValues = { name: '', number: '' };
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      namePattern,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
  .phone(numberPattern, true, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")
  .required('Required'),
})

const ContactForm = ({ setContact, contacts }) => {
  return (
    <Formik
      initialValues={initialValues}

      validationSchema={validationSchema}

      onSubmit={(values, actions) => {
        if (checkContscts(contacts, values)) {
          setContact(values);
          actions.resetForm();
        } else {
          alert(`${values.name} is already in contacts`);
        }
      }}
    >
      {props => (
        <Form onSubmit={props.handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
            />
            <Messege component="span" name="name"/>
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
            />
            <Messege component="span" name="number"/>
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContact: PropTypes.func.isRequired,
};

export default ContactForm;
