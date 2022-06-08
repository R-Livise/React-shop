import React from 'react';
import ProductInfo from '@components/ProductInfo';

import IconClose from '../assets/icon_close.png'
import '@styles/ProductDetail.sass';

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
                <IconClose />
            </div>
            <ProductInfo />
        </aside>
    );
}

export default ProductDetail;