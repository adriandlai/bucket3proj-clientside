import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import './Checkout.css'
import STRIPE_PUBLISHABLE from '../constants/stripe'
import PAYMENT_SERVER_URL from '../constants/server'


const CURRENCY = 'usd'
const fromEuroToCent = amount => parseInt(amount * 100)


const successPayment = data => {
  alert('Payment Successful')
};

const errorPayment = data => {
 console.log('errorData', data)
  alert('Payment Error')
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment)

const Checkout = ({ name, description, amount }) =>
{
  return(
<div className="buttonContainer">
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
 </div> 
  )
}

export default Checkout