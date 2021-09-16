import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChanghe = (e) => {
        setInputValue(e.target.value);
    }
    const hundleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={hundleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChanghe}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}// mandamos que sea necesario que provea esta funcion