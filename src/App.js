import { Component } from 'react';
import './App.css';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {

  state = {
    products: [
      { name: 'Iphone 13 Pro', price: 999, img:  '/products/iphone.jpg' },
      { name: 'HomePod Mini', price: 179, img:  '/products/homepod.jpg' },
      { name: 'Airpods 3', price: 99, img:  '/products/airpods.jpg' },
    ]
  }

  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products
            addToCart={() => console.log('Add to cart')}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
