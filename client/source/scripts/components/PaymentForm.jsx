import React from 'react';
// import {ReactScriptLoaderMixin} from 'react-script-loader';
import {asyncLoad} from 'react-async-loader';

const PaymentForm = React.createClass({
  mixins: [ asyncLoad ],

  getInitialState() {
    return {
      stripeLoading: true,
      stripeLoadingError: true,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null
    };
  },

  getScriptURL() {
    return 'https://js.stripe.com/v2/';
  },

  onScriptLoaded() {
    if (!PaymentForm.getStripeToken) {
      // Put your publishable key here
      Stripe.setPublishableKey('pk_test_LIdnwiIbBXe0tFM0JIDyjitV');
      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  },

  onScriptError() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  },

  onSubmit(event) {
    const self = this;
    event.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null });
    // send form here
    Stripe.createToken(event.target, (status, response) => {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
      }
      else {
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
        // make request to your server here!
      }
    });
  },

  render() {
    // if (this.state.stripeLoading) {
    //   console.log(this.state);
    //   return <div>Loading</div>;
    // }
    // else if (this.state.stripeLoadingError) {
    //   return <div>Error</div>;
    // }
    if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>;
    }
    else {
      return (<form onSubmit={this.onSubmit}>
        <span>{ this.state.paymentError }</span><br />
        <input type='text' data-stripe='number' placeholder='credit card number' /><br />
        <input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
        <input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
        <input type='text' data-stripe='cvc' placeholder='cvc' /><br />
        <input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
        </form>);
    }
});

export default PaymentForm;



