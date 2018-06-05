import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
    }

    logit = (item) => {
        console.log('item', item)
    }
    // {isCartLoaded && <Cart cart = {this.state.cart}/>}    

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
            </section>
    )
}
}
            

export default Cart;
