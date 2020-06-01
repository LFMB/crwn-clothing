import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// stripe wants data in cents 

const StripeCheckoutBtn = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_ouBs77J6BLh1hDM7BnuHoi1800dLuIpux5';

	const onToken = token => {
		console.log(token);
		alert("Payment Successful");
	}

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLablel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};


export default StripeCheckoutBtn;
