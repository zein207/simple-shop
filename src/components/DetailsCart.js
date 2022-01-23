import { Component } from 'react';

class DetailsCart extends Component {
    render() {
        
        const { cart } = this.props;

        return (
            <div className='details-cart'>
                <ul className='cart-list'>
                    { cart.map(x => 
                        <li key={x.name} className='cart-product'>
                            <img className='thumbnails' alt={x.name} src={x.img} />
                            {x.name}
                            <span> {x.quantity}</span>
                        </li>) }
                </ul>
            </div>
        )
    }
}

export default DetailsCart;