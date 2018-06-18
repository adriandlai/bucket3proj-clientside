import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'


class MenuCard extends Component{
    constructor(props) {
        super(props);
    }


render() {
    return (
            <Card.Group menucard = {this.menucard}>
              <Card>
                <Card.Content>
                  <Image floated='right' size='mini' src='{menucard.picture_url}' />
                  <Card.Header>
                    Menu Item
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>Approve</Button>
                    <Button basic color='red'>Decline</Button>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          
    )
}


}
export default MenuCard;