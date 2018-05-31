import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'


class MenuCard extends Component{
    constructor(props) {
        super(props);
    }


// const MenuCardGroup = () => (
//   <Card.Group menucard = {this.menucard}>
//     <Card>
//       <Card.Content>
//         <Image floated='right' size='mini' src='{menucard.picture_url}' />
//         <Card.Header>
//           Steve Sanders
//         </Card.Header>
//         <Card.Meta>
//           Friends of Elliot
//         </Card.Meta>
//         <Card.Description>
//           Steve wants to add you to the group <strong>best friends</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>Approve</Button>
//           <Button basic color='red'>Decline</Button>
//         </div>
//       </Card.Content>
//     </Card>
//   </Card.Group>
// )

render() {
    return (
            <Card.Group menucard = {this.menucard}>
              <Card>
                <Card.Content>
                  <Image floated='right' size='mini' src='{menucard.picture_url}' />
                  <Card.Header>
                    Steve Sanders
                  </Card.Header>
                  <Card.Meta>
                    Friends of Elliot
                  </Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                  </Card.Description>
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