import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    
    componentDidMount() {
        console.log('menu', this.props.menu.menu)
        console.log('props', this.props)
      }

    render() {
        return (
            <section>
                <h2>Menu Items</h2>
        <ul id="Menu_Items">
          {this.props.menu.menu.map(function (item, index) {
            return (
              <li key={index}>
                <h4>{item.picture_url}</h4>
                <h3>{item.price}</h3>
                <p>{item.product_name}</p>
              </li>
            )
          })}
        </ul>
            </section>

        )
    }
}

export default Menu;


