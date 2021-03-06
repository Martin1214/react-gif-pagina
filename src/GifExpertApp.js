import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    return (<>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        <ol>
            {
                categories.map(
                    category =>
                        // <li key={category} > {category}</li>
                        <GifGrid
                            key={category}
                            category={category} />
                )// el map me sive para mostrar los elementos de mi arreglo
            }
        </ol>
    </>);
}

export default GifExpertApp;
// crear un functinalComponent
