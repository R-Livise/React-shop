import React, { useContext } from 'react';
import '@styles/OrderItem.sass';
import close from '@icons/icon_close.png'

import AppContext from '../context/AppContext';

const OrderItem = ({ product }) => {

	const { removeToCart } = useContext(AppContext)

	const handleRemove = () => {
		removeToCart(product)
	}

	const formatPrice = (number) => {
		return new Intl
			.NumberFormat('PE', {
				style: 'currency',
				currency: 'USD'
			})
			.format(number)

	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>x{product.quantity || 0}</p>
			<p>{formatPrice(product.price)}</p>
			<img src={close} alt="close" onClick={handleRemove} />
		</div>
	);
}

export default OrderItem;
