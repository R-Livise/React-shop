import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.sass';
import { useGetProducts } from '../hooks/useGetProducts';


const API = "https://api.escuelajs.co/api/v1/products?limit=50&offset=1"

const ProductList = () => {

    const { products, } = useGetProducts(API)

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