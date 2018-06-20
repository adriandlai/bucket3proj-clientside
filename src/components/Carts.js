import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import './Carts.css'; 


class Carts extends Component {
    constructor(props) {
        super(props);
    }

render() {
    return (
    <div>  
    <h1 className = "cartItems">Cart</h1>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Product</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
          {this.props.cart.cart.map((item,index)=> {
           const isItemAdded = item.quantity > 0
                   if (isItemAdded)   
            {
              return(
            <Table.Row>          
                <Table.Cell>{item.product_name}</Table.Cell>
                {item.price ? <Table.Cell>{item.quantity}</Table.Cell> : <Table.Cell></Table.Cell>}
                {item.price ? <Table.Cell>{"$" +(item.price * item.quantity).toFixed(2)}</Table.Cell> : <Table.Cell>$</Table.Cell>}
            </Table.Row>
              )
          }
          else {return null}
        })
    } 
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>Total</Menu.Item>
            {this.props.cart.total ? <Menu.Item as='a'>{"$" + this.props.cart.total}</Menu.Item> : null}
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  </div>
    )
    
    
    }
}


export default Carts;

