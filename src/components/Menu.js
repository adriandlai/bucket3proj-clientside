import React, { Component } from 'react';
import './Menu.css';
import MenuCard from './MenuCard.js';
import { Button, Card, Image } from 'semantic-ui-react'

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    determinAddorSubtract = (e) => {

       const url = (e.target.innerText == '+') ? `http://localhost:3000/cart/add/${e.target.id}` : `http://localhost:3000/cart/delete/${e.target.id}`
       console.log('url', url)
       return url
    
    }

    addItem = (e) => {
    console.log('innertext', e.target.innerText) 
  
    const url = this.determinAddorSubtract(e)     

    let content = {
        id: e.target.id,
        quantity: 0
      };
    
      fetch(url, {

        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(content)
  
      })
      .then(resp => resp.json())
      .then(data => { 
        console.log('dataFE', data)
        console.log('data.cart', data.cart)
        this.props.updateCart(data)  
      })
      .catch(function(error) {
        console.log('error')
      })
  
  }   



    componentDidMount() {
        console.log('menu', this.props.menu.menu)
        console.log('props', this.props)
      }

    render() {
        // const addItem = this.addItem()
        return (
            <section>
                <h2>Menu Items</h2>
        <ul id="Menu_Items">
        {/* <Card.Group itemsPerRow = '3'> */}
        <Card.Group itemsPerRow = '3'>
          {this.props.menu.menu.map((item, index) => {
            return (    
            <Card menucard = {item}
                 indexId = {index}
                 >
                <Card.Content menu = {item}>
                  <Image floated='right' size='large' src= {item.picture_url} />
                  <Card.Header>
                    {item.product_name}
                  </Card.Header>
                  <Card.Meta>
                    ${item.price}
                  </Card.Meta>
                  {/* <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                  </Card.Description> */}
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green' onClick = {this.addItem} id ={item.productkey}>+</Button>
                    <Button basic color='red' onClick = {this.addItem} id ={item.productkey}>-</Button>
                  </div>
                </Card.Content>
              </Card>
              
            
            )
          })}
        </Card.Group>  
        </ul>
            </section>

        )
    }
}

export default Menu;


