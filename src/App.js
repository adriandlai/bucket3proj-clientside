import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import Cart from './components/Cart.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Checkout from './components/Checkout';
import MyForm from './components/Review';

class App extends Component {
  state = {
    menu: [],
    isMenuLoaded: false,
    cart:{},
    isCartLoaded: false,
  }

  updateCart = (cart) => {
    this.setState(
      {cart}
    )
  }

  // updateTotal = (car) =>

  fetchMenu = () => {
    const apiURL = 'http://localhost:3000/menu';

    return fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        this.setState({menu: data,
                        isMenuLoaded: true})
      })
      .catch((err) => console.log('err', err))
  }

  fetchCart = () => {
    const apiURL = 'http://localhost:3000/cart';

    return fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        this.setState({cart: data,
                       isCartLoaded: true
                        })
      })
      .catch((err) => console.log('err', err))
  }

  componentDidMount() {
    this.fetchMenu()
    this.fetchCart()
  }

  render() {
    const isMenuLoaded = this.state.isMenuLoaded
    const isCartLoaded = this.state.isCartLoaded
    
    return (
    <div>
      <Header />
      <main>
        {isMenuLoaded && <Menu menu={this.state.menu} updateCart = {this.updateCart} />}
        {isCartLoaded && <Cart cart = {this.state.cart}/>}
      </main>
      <Checkout
            name={'The Road to learn React'}
            description={'Only the Book'}
            amount={1}
        />
      <MyForm/>
      <Footer />
    </div>
    );
  }
}

export default App;





