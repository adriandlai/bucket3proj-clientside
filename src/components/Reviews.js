import React, { Component } from 'react';
import { Header, Table, Form, Input, TextArea, Button, Icon } from 'semantic-ui-react'
import './Reviews.css'; 


class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
                      review:'',
                      allReviews:'',
                      isLoaded: false
                    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }



  post = (data) => {


      const url = 'http://localhost:3000/reviews'
      let content = {
        name: data.name,
        review: data.review,
        
      };

      console.log('contnet', content)
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(content),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(allReviews => {
        console.log('allreviews?', allReviews) 
        this.setState(
          {allReviews}
        )
        console.log('allrevies',this.state.allReviews)
      })
      .catch(function(error) {
        console.log('error')
      })
    
    }

      handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log('name', this.state.name)
        console.log('review', this.state.review)
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state)
        this.post(this.state)
        event.preventDefault();
        // this.clear
      }

      fetchReviews = () => {
        const apiURL = 'http://localhost:3000/reviews';
    
        return fetch(apiURL)
          .then(response => response.json())
          .then(allReviews => {
            console.log('allreviewsFETCH', allReviews)
            // console.log('allreviewsIndex', allReviews.reviews[0])
            this.setState({allReviews,
                          isLoaded: true
                            })
          })
          .catch((err) => console.log('err', err))
      }

      deleteReview = (e) => {
      console.log('ids', e)
      console.log('etarget', e.target)
      console.log('etargeidt', e.target.id)

      const url = `http://localhost:3000/reviews/${e.target.id}`
      fetch(url, {
        method: 'delete',
      })
      .then(resp => resp.json())
      .then(allReviews => {
        console.log('didthisdelet?', allReviews) 
        this.setState(
          {allReviews}
        )
        // console.log('allrevies',this.state.allReviews)
      })
      .catch(function(error) {
        console.log('error')
      })
      }

      componentDidMount() {
        this.fetchReviews()
      }
    
      render() {
        const isLoaded = this.state.isLoaded
        return (
          <div>
          <h1 className = "form">Enter Review</h1>  
            <Form onSubmit={this.handleSubmit}>
              <Form.Input fluid label='First name' placeholder='Name' 
              name= "name" value={this.state.name} onChange={this.handleChange}/>
              <Form.TextArea label='Review' placeholder='Tell us what you think'
               name="review" value={this.state.review} onChange={this.handleChange} />
              {/* <Form.Button class="positive ui button" class="ui red button">
                Submit Your Review</Form.Button> */}
              <button class="positive ui button" id='submit-button'>Submit your Review</button>
            </Form>
          {/* <form onSubmit={this.handleSubmit}>
          <label>Wass yo name?!?!? </label>  
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            <label>
              Submit your Review
              </label>  
              <input type="text" name="review" value={this.state.review} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form> */}
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>Customer Name</Table.HeaderCell>
                        <Table.HeaderCell>Comments</Table.HeaderCell>
                        <Table.HeaderCell>Remove</Table.HeaderCell>
                    </Table.Row>
                 </Table.Header>   
            <Table.Body>   
            {isLoaded && this.state.allReviews.reviews.map((item, index) => {
              return (
                    <Table.Row>
                    <Table.Cell>
                    <Header as='h2' textAlign='center'>
                        {item.name}
                    </Header>
                    </Table.Cell>
                    <Table.Cell>
                        {item.review}
                    </Table.Cell>
                    <Table.Cell>
                    <Button onClick = {this.deleteReview} id = {item.id} animated='vertical'>
                        <Button.Content id = {item.id} hidden>Delete</Button.Content>
                        <Button.Content id = {item.id} visible>
                        <Icon name='thumbs down' />
                    </Button.Content>
                    </Button>
                    </Table.Cell>
                </Table.Row> 
                )})}
        </Table.Body>
        </Table>

            
           
          </div>         
        
        )

      }
  }

  export default Reviews;


 



                
