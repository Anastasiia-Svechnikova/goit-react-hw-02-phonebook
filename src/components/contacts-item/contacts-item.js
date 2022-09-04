import React, { Component } from "react";
import PropTypes from 'prop-types';


export default class ContactsItem extends Component {
    onItemMouseOver = (e) => {
        e.currentTarget.classList.toggle('focus');
    }
    onItemMouseleave = (e) => {
        e.currentTarget.classList.toggle('focus');
    }
    render(){ 
        const { name, number, deleteHandler, id } = this.props;
    return (
        <li onMouseOut={this.onItemMouseleave} onMouseOver={this.onItemMouseOver} className='contact-item'>
            <span className='contact-name'>{name}:</span>
            <span className='contact-num'>{number}</span>
            <button className='delete-btn' type='button' onClick={() => deleteHandler(id)}>Delete</button>
        </li>
    )
}
}
ContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteHandler: PropTypes.func.isRequired,
}