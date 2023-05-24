import './CardIcon.styles.scss';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container'>
            <FiShoppingCart className='cart-icon' onClick={toogleIsCartOpen} />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon