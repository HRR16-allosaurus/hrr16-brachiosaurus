import React from 'react';
import {asyncLoad} from 'react-async-loader';

const PaymentForm = React.createClass({
  mixins: [ asyncLoad ],

  getInitialState() {
    return {
      stripeLoading: false,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null
    };
  },

  onSubmit(event) {
    const self = this;
    event.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null});

      Stripe.createToken(event.target, (status, response) => {
        if (response.error) {
          self.setState({ paymentError: response.error.message, submitDisabled: false });
        }
        else {
          self.setState({stripeLoading: true, token: response.id});
        
          $.ajax({
              url: '/stripe',
              contentType: 'application/json',
              type: 'POST',
              data: JSON.stringify({
                token: this.state.token,
              }),
              success: function(result){
                var result = JSON.parse(result);
                if(result.error){
                  self.setState({ paymentError:"Payment Error", stripeLoading: false});
                } 
                if(result.success){
                self.setState({ paymentComplete: true, stripeLoading: false});
                }
              },
              error: function(result){
                console('Cannot communicate to server');
              }
          });
        
      }
    });
  },

  render() {
    if (this.state.stripeLoading) {
      return <div>Processing...</div>;
    }
    
    if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>;
    }
    
      return (
      <div className='container'>
      <form onSubmit={this.onSubmit} >
        <span>{ this.state.paymentError }</span><br />
        <input type='text' data-stripe='number' placeholder='credit card number' /><br />
        <input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
        <input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
        <input type='text' data-stripe='cvc' placeholder='cvc' /><br />
        <input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
      </form>
      </div>
      );
  }
});

export default PaymentForm;
