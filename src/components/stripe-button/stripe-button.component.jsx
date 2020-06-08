import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51GrplwKAlIF1IJKFSHPBgJw5N95h33AC43H65YcMcu9ydNPYkTPYJy189JVxvg9Nmq6H4eKugVKTWv4Nt3J9U8TJ002nRKK6Rm'

  const onToken = token => {
    console.log(token)
    alert('Payment Success!')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Threads'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}


    />
  )
}

export default StripeCheckoutButton