import React, { Component } from 'react'
import './Menu.css'
import { Button, Card, Image } from 'semantic-ui-react'

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    determinAddorSubtract = (e) => {

       const url = (e.target.innerText == '+') ? `https://b3projbackend.herokuapp.com/cart/add/${e.target.id}` : `https://b3projbackend.herokuapp.com/cart/delete/${e.target.id}`
       return url
    }

    addItem = (e) => {
    const url = this.determinAddorSubtract(e)     

    let content = {
        id: e.target.id,
        quantity: 0
      }
    
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
        this.props.updateCart(data)  
      })
      .catch(function(error) {
        console.log('error')
      })
  
  }   

    render() {
        return (
            <section>
                <h1 className = "menuItems">Menu Items</h1>
        <ul id="Menu_Items">
        <Card.Group itemsPerRow = '3'>
          {this.props.menu.menu.map((item, index) => {
            return (    
            <Card indexId = {index}>
                <Card.Content>
                  <Image floated='right' size='large' src= {item.picture_url} />
                  <Card.Header>
                    {item.product_name}
                  </Card.Header>
                  <Card.Meta>
                    ${item.price}
                  </Card.Meta>
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

export default Menu


