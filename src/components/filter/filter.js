import PropTypes from 'prop-types';

export default function Filter({ filterHandler, filter }) {
    return (
        <label className='label'>
            Find contacts by name
            <input
                onChange={filterHandler}
                type="text"
                value={filter}
                className="input"
            ></input>
        </label>
    )
}
Filter.propTypes = {
    filterHandler: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}