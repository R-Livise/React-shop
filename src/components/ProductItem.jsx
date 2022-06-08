import React, { useContext } from 'react';
import '@styles/ProductItem.sass';

import AppContext from '../context/AppContext';

import IconAddCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext)

	const handleClick = () => {
		addToCart([]);
	}
	const priceFormat = new Intl
		.NumberFormat('PE', {
			style: 'currency',
			currency: 'USD'
		})
		.format(product.price)

	return (
		<div className="ProductItem">

			<img src={product.images[1]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>{priceFormat}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<IconAddCart className="icon-svg" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
