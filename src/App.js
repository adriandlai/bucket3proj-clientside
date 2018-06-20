import React, { Component } from 'react'
import './App.css'
import Menu from './components/Menu.js'
import Carts from './components/Carts.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Checkout from './components/Checkout'
import Reviews from './components/Reviews'

class App extends Component {
  state = {
    menu: [],
    isMenuLoaded: false,
    cart:{},
    isCartLoaded: false,
  }

  updateCart = (cart) => {
    cart.total = (cart.total).toFixed(2)
    this.setState(
      {cart}
    )
  }

  fetchMenu = () => {
    const apiURL = 'https://b3projbackend.herokuapp.com/menu'

    return fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        this.setState({menu: data,
                        isMenuLoaded: true})
      })
      .catch((err) => console.log('err', err))
  }

  fetchCart = () => {
    const apiURL = 'https://b3projbackend.herokuapp.com/cart'

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
        {isCartLoaded && <Carts cart = {this.state.cart}/>}
      </main>
      <Checkout
            name={'BizEatz'}
            description={'Healthy Eating Made Easy!'}
            amount={this.state.cart.total}
            total={this.state.cart.total}
        />
      <Reviews/>
      <Footer />
    </div>
    );
  }
}

export default App





