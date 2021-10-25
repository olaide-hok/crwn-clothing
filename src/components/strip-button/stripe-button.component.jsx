import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jo6tyA2iBxXzYIAd6jPe2OzUel8rSg6QLf07HpcSFWuzu6yFBIsrFUkBDZ4T4ChLoxtlD68isqt0KDL0e892yaf00CwHSRcsL'

    const onToken = token => {
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}      
        />
    );
};

export default StripeCheckoutButton;