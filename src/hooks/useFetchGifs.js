import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false,
                    });
                }, 5000);
            })
    }, [category])

    return state;
    //mi state es un objeto, que tiene una data [], y un loading en true
}