import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import './Checkout.styles.scss';

const headerItem = [
    {
        id: 1,
        title: 'Product',
    },
    {
        id: 2,
        title: 'Description',
    },
    {
        id: 3,
        title: 'Quantity',
    },
    {
        id: 4,
        title: 'Price',
    },
    {
        id: 5,
        title: 'Remove',
    }
];

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                {
                    headerItem.map(({ id, title }) => (
                        <div key={id} className="header-block">{title}</div>
                    ))
                }
            </div>
            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }
            <span className='total' >Total:${cartTotal}</span>
        </div>
    )
}

export default Checkout;