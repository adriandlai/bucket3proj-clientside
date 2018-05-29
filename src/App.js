import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import Cart from './components/Cart.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

class App extends Component {
  state = {
    menu: {},
    isLoaded: false
  }


  fetchMenu() {
    const apiURL = 'http://localhost:3000/menu';

    return fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        this.setState({menu: data,
                        isLoaded: true})
      })
      .catch((err) => console.log('err', err))
  }

  componentDidMount() {
    this.fetchMenu()
  }

  render() {
    const isLoaded = this.state.isLoaded
    return (
    <div>
      <Header />
      <main>
        {isLoaded && <Menu menu={this.state.menu} />}
          <Cart />
      </main>
      <Footer />
    </div>
    );
  }
}

export default App;





