import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class Cart extends Component {
    constructor(props) {
        super(props);
    }

        
    render() {
     
        return (
            <section>
                 {this.props.cart.cart.map(function (item, index) {
                    const isItemAdded = item.quantity > 0
            if (isItemAdded)
            {          
            return (
           <ul key={index}>
                {isItemAdded && <li>{item.product_name}</li>}
                 <li>{item.quantity}</li>
                 <li>{item.price * item.quantity}</li>
            </ul> 
            )}
            else {return null}
          })}
            <div>Total = {this.props.cart.total}</div>         
            </section>
            
    )
}
}         

export default Cart;
