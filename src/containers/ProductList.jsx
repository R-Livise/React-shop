import React, { useState, useEffect } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.sass';
import axios from 'axios';

const API = "https://api.escuelajs.co/api/v1/products?limit=5&offset=10"

const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios.get(API)
        setProducts(res.data)

    }
    return (
        <section className="main-container">
            <div className="ProductList">

                {
                    products.map((product, idx) =>
                    (<ProductItem
                        key={idx}
                        product={product}
                    />)
                    )
                }
            </div>
        </section>
    );
}

export default ProductList;