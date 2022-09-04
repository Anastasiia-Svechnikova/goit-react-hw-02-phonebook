import PropTypes from 'prop-types';
import ContactsItem from 'components/contacts-item';
import './contacts-list.css'

export default function ContactsList({ contacts, onDeleteBtn }) {
    return (
        <ul className='contacts-list'>
            {contacts.map(({ id, name, number }) =>
                <ContactsItem
                    key={id}
                    name={name}
                    number={number}
                    id = {id}
                    deleteHandler={onDeleteBtn} />)}
        </ul>
    )
}

ContactsList.propTypes = {
    
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired).isRequired
}