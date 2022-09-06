import PropTypes from 'prop-types';
import './button.css';

export default function Button({ type, classes, onClickHandler, children }) {

    const allClasses = classes.join(' ');
    return (
        <button className={allClasses} type={type} onClick={onClickHandler}>{children}</button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    class: PropTypes.arrayOf(PropTypes.string.isRequired),
    onClickHandler: PropTypes.func,
    children: PropTypes.node.isRequired,
}