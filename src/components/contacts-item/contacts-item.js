import PropTypes from 'prop-types';


export default function ContactsItem ({ name, number, deleteHandler, id}){
    return (
        <li className='contact-name'>{name}:
            <span className='contact-num'>{number}</span>
            <button className='delete-btn' type='button' onClick={()=> deleteHandler(id)}>Delete</button>
        </li>
)
}
ContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteHandler: PropTypes.func.isRequired,
}