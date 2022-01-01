import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = "pk_test_51KD63uFcbbNlhNXMY5yB5u5SQEKcrPlsDYPUh5VNUCyn9cyThKMNyPmV3GIaPZa2wPFurPQNWnOHE2wdUEt304zR00dJxzTqyq";

    const onToken = token=>{
        console.log(token)
        alert("Payment successful")
    }
    return (
        <StripeCheckout 
        label ="Pay Now"
        name = "CRWN Clothing Ltd"
        billingAddress
        shippingAddress
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;