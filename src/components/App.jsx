import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container, TitleContact, TitleForm } from './App.styled';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

import { setLocal, getLocal } from 'util/localStor';

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


    componentDidMount(){
        const localCont = getLocal();
            if(localCont){
                this.setState({contacts: [...localCont]})
            }
    }

    componentDidUpdate(){
        setLocal(this.state.contacts)
    }


    setContact = obj => {
        obj.id = nanoid();

        this.setState(prevState => ({
            contacts: [...prevState.contacts, obj],
        }));

    };

    setFilter = text => {
        this.setState(() => ({
            filter: text,
        }));
    };

    removeContact = id => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts.filter(el => el.id !== id)],
        }));
    };

    onClickRemove = e => {
        this.removeContact(e.target.id);
    };

    onChangFilter = e => {
        const { value } = e.target;
        this.setFilter(value);
    };

    onFilter = name => {
        return this.state.contacts.filter(e =>
            e.name.toLowerCase().includes(name.toLowerCase())
        );
    };

    render() {
        const { contacts, filter } = this.state;
        const filterName = this.onFilter(filter);

        return (
            <Container>
                <TitleForm>Phonebook</TitleForm>
                <ContactForm setContact={this.setContact} contacts={contacts} />

                <TitleContact>Contacts</TitleContact>
                <Contacts
                    contacts={filterName ? filterName : contacts}
                    remove={this.onClickRemove}
                    onChange={this.onChangFilter}
                    filter={filter}
                />
            </Container>
        );
    }
}
