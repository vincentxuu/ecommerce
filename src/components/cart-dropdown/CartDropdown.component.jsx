import Button from '../button/Button.component';
import { useNavigate } from 'react-router-dom';
import './CartDropdown.styles.scss';
import CartItem from '../cart-item/CartItem.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown