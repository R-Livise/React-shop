import React, { useContext, useState, useEffect } from 'react';
import '@styles/ProductItem.sass';

import AppContext from '../context/AppContext';

import IconAddCart from '@icons/bt_add_to_cart.svg';
import IconAddedCart from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext)
	const [toggleIconCart, setToggleIconCart] = useState(false)
	const handleClick = (product) => {
		addToCart(product);
		setToggleIconCart(true)
	}

	useEffect(() => {
		if (state.lastIdRemoved === product.id) {
			setToggleIconCart(false)
		}
	}, [state.lastIdRemoved])

	useEffect(() => {

		if (state.cart.some(({ id }) => id === product.id)) {
			setToggleIconCart(true)
		}

	}, [])



	const priceFormat = new Intl
		.NumberFormat('PE', {
			style: 'currency',
			currency: 'USD'
		})
		.format(product.price)

	return (
		<div className="ProductItem">

			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>{priceFormat}</p>
					<p>{product.title}</p>

				</div>

				<figure onClick={() => handleClick(product)} >
					{!!toggleIconCart
						? <IconAddedCart />
						: <IconAddCart />}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
