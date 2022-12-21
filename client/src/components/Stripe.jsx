import React from 'react'
import {loadStripe} from "@stripe/stripe-js"
import {Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import axios from "axios"

const stripePromise = loadStripe("pk_test_51MEv4bIJKT77FNwAfDu9uVLRiTpAaVatrh4lOfZHkKKWES4BBbfgJt7LToCRgH75zkbApxJB8tHPeoLq0mkLi5Vx00wG3er93H")

const CheckoutForm= () =>{
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) =>{
    e.preventDefault()
    const {error, paymentMethod}= await stripe.createPaymentMethod({
        type : "card",
        card : elements.getElement(CardElement)
        })
        if(!error){
            const {id} = paymentMethod;
            const {data} = await axios.post("http://localhost:3001/api/stripe/checkout",{
            id,
            amount : 10000
            })
            console.log(data)
        }
        }



    return <form onSubmit={handleSubmit}>
    <button>
        BUY
    </button>
    <h3>Price : 1000 usd</h3>
     <CardElement>
     </CardElement>
</form>
}


export default function Stripe() {
return (
<Elements stripe = {stripePromise}>
<CheckoutForm/>
</Elements>
 )
}