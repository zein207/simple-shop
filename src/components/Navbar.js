import { Component } from 'react';
import Logo from './Logo';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <Logo />
                <p>Cart</p>
            </nav>
        )
    }
}

export default Navbar