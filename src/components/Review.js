import React, { Component } from 'react';


class MyForm extends React.Component {
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
      console.log('etarget', e.target.id)

      const url = `http://localhost:3000/reviews/${e.target.id}`

      // let content = {
      //   name: data.name,
      //   review: data.review,
        
      // };

      // function deleteData(item, url) {
      //   return fetch(url + '/' + item, {
      //     method: 'delete'
      //   })
      //   .then(response => response.json());
      // }

      // console.log('contnet', content)
      fetch(url, {
        method: 'delete',
      //   body: JSON.stringify(content),
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   }
      })
      .then(resp => resp.json())
      .then(reviews => {
        console.log('didthisdelet?', reviews) 
        // this.setState(
        //   {allReviews}
        // )
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
          <form onSubmit={this.handleSubmit}>
          <label>Wass yo name?!?!? </label>  
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            <label>
              Submit your Review
              </label>  
              <input type="text" name="review" value={this.state.review} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
            <ul>
            {isLoaded && this.state.allReviews.reviews.map((item, index) => {
              return (
                <div>
                <li key={index}>
                  <h4>{item.name}</h4>
                  <small>{item.review} </small>
                </li>
                {/* <button id = {item.id} 
                onClick ={this.deleteReview(item.id)}
                >Delete Me</button> */}
                <button id = {item.id} 
                onClick ={this.deleteReview}
                >Delete Me</button>
                </div>
              )
            })}
           </ul>
          </div>         
        
        )

      }
  }

  export default MyForm;

