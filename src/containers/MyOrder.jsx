import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import Button from '../components/Button'
import AppContext from '../context/AppContext';
import '@styles/MyOrder.sass';
import IconArrow from '@icons/flechita.svg';

const MyOrder = ({ onToggle }) => {
    const { state } = useContext(AppContext);
    const reducer = (sum, { price, quantity }) => sum + price * quantity
    const totalPrice = state.cart.reduce(reducer, 0)

    const formatPrice = (number) => {
        return new Intl
            .NumberFormat('PE', {
                style: 'currency',
                currency: 'USD'
            })
            .format(number)

    }
    const handleToogle = () => {
        onToggle(false)
    }
    return (
        <aside className="MyOrder">
            <div className="title-container">
                <p className="title"><IconArrow onClick={handleToogle} /> My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map(product => (
                    <OrderItem product={product} key={`orderItem-${product.id}`} />
                ))}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>{formatPrice(totalPrice)}</p>
                </div>
                <Button variant='primary'>Checkout</Button>
            </div>
        </aside>
    );
}

export default MyOrder;

