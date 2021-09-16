import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { data: imagenes, loading } = useFetchGifs(category);
    return (
        <>
            <h3 className='animate__animated animate__bounceInLeft' >{category}</h3>
            {loading && <p>cargando</p>}
            <div className='card-grid animate__animated animate__bounceInLeft'>
                {
                    imagenes.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))// el map me sive para mostrar los elementos de mi arreglo
                }
            </div>
        </>)
}