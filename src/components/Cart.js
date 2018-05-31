import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
    }


    render() {
    
        // this.props.cart.cart.map((item, index) =>{
        //     console.log('cartmapitem', item)
        // }
        console.log('cartcarat',this.props.cart.cart)
        // const one = this.props.cart.cart[this.props.cart.cart.id].quantity
        // const id = this.props.cart
        const two = this.props.cart.cart[1].quantity
        const three = this.props.cart.cart[2].quantity
        const five = this.props.cart.cart[5].quantity
        console.log('cartprops', this.props.cart)
        // console.log('one', one)
        console.log('two', two)
        console.log('three', three)
        return (
             //mapping
        //     <section>
        //         {this.props.cart.cart.map(function (item, index) {
        //     return (    
        //     //can probably do this manually
        //     console.log('cart_item', item)
        
              
            
        //     )
        //   })}
        //     </section>
//     )
// }

        //manually
        <div>
        <ul>
        {two > 0 && <li>Quant Greater Than Zero</li>}
        {five > 0 && <li>High Five</li>}
        <li></li>
        <li></li>
        </ul>   
        </div> 
        
        )
    }
}

export default Cart;