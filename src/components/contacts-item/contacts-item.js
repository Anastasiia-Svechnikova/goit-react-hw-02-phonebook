import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from "components/Button";


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
            <Button classes={['delete-btn']} type="button" onClickHandler={() => deleteHandler(id)}>Delete</Button>
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