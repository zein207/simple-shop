import { Component } from 'react';
import Logo from './Logo';
import Cart from './Cart';

class Navbar extends Component {
    render() {

        const { cart, isCartVisible, showCart } = this.props

        return (
            <nav className='navbar'>
                <Logo />
                <Cart
                    cart={ cart }
                    isCartVisible={isCartVisible}
                    showCart={showCart}
                />
            </nav>
        )
    }
}

export default Navbar