import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetailsCart from './DetailsCart';

class Cart extends Component {
    render() {

        const { cart, isCartVisible, showCart } = this.props;

        const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);
        console.log(quantity)

        return (
            <div>
                <span className='bubble'>
                    {
                        quantity !== 0
                        ? <BubbleAlert  value={quantity} />
                        : null
                    }
                </span>
                <button className='btn-cart' onClick={showCart}>
                    Cart
                </button>
                {
                    isCartVisible
                    ? <DetailsCart cart={cart} />
                    : null
                }
            </div>
        )
    }
}

export default Cart;