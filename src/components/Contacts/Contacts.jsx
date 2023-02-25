import { Container,Label, Input, List, Item, PhoneNumber, ButtonDelete  } from "./Contacts.styled"
import PropTypes from 'prop-types';



const Contacts = ({contacts,  remove, filter, onChange}) => {
    return(
        <Container>
        <Label>
        Find contacts by name
        <Input value={filter} onChange={onChange}/>
        </Label>
        
        <List>
            {contacts.map(({id, name, number}) => (
                <Item key={id}>
                {name}:
                <PhoneNumber>{number}</PhoneNumber>
                <ButtonDelete id={id} onClick={remove}>Delete</ButtonDelete>
            </Item>))}
        </List>

        </Container>
    )
}
Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    remove: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Contacts