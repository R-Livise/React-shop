import React, { useState, useEffect } from 'react';
import axios from 'axios';
const useGetProducts = (API) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios.get(API)
        setProducts(res.data)

    }
    return {
        products
    }
}

export { useGetProducts }