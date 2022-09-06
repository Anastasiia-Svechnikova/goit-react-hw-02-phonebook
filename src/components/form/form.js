import React, { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import "./form.css"
import Button from "components/Button";


export default class Form extends Component{
    
    state = {
        name: '',
        number: '',
    }

    onInputChange = e => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    
    onFormSubmit = e => {
        e.preventDefault();
        const newContact = {id: nanoid(), ...this.state, }
        this.props.onSubmit(newContact);
        this.formReset();
    }
    formReset = () => {
        this.setState({
        name: '',
        number: '',
    })
    }

    render() {

        return (
            <form className="form" onSubmit={this.onFormSubmit}>  
                <label className="label">
                    Name 
                    <input onChange={this.onInputChange}
                        value={this.state.name}
                        className="input"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className="label">
                    Number 
                    <input
                        onChange={this.onInputChange}
                        value={this.state.number}
                        className="input"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <Button type="submit" classes={['sbmt-btn']}>Add contact</Button>
        </form>
    )
}

}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}