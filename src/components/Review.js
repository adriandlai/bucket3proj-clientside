import React, { Component } from 'react';


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
                      review:'',
                      allReviews:''
                    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }



      post = (data) => {
       console.log('insidepostdata', data)
       const url = 'http://localhost:3000/reviews'
      let content = {
        name: data.name,
        review: data.review,
        
      };

      console.log('contnet', content)
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
        //set state here
        // this.props.updateCart(data) 
        console.log('ReviewReponse', data) 
      })
      .catch(function(error) {
        console.log('error')
      })
    
    }



      handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log('handlechange', this.state.value)
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state);
        this.post(this.state)
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <label>Wass yo name?!?!? </label>  
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            <label>
              Submit your Review
              </label>  
              <input type="text" name="review" value={this.state.review} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        );
      }

    //   <label htmlFor="title">Title</label>
    //   <input onChange={this.handleChange} type="text" name="title" value={this.state.title} />
    //   <label htmlFor="pay">Compensation</label>
    //   <input onChange={this.handleChange} type="text" name="pay" value={this.state.pay} />




    // constructor() {
    //   super();
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
  
    // handleSubmit(event) {
    //   event.preventDefault();
    //   console.log('eventarge', event.target)
    //   const data = new FormData(event.target);
    //   console.log('formdata', data)
    // //   fetch('/api/form-submit-url', {
    // //     method: 'POST',
    // //     body: data,
    // //   });
    // }
  
    // render() {
    //   return (
    //     <form onSubmit={this.handleSubmit}>
    //       <label htmlFor="username">Enter username</label>
    //       <input id="username" name="username" type="text" />
    //       <label htmlFor="email">Submit Your Review</label>
    //       <input id="email" name="review" type="text" />
    //       <button>Submit My Review</button>
    //     </form>
    //   );
    // }
  }

  export default MyForm;