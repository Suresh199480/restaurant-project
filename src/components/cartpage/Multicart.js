import React, { useState, useEffect } from 'react';
import "./multicart.css";
import Singlecart from './singlecart/Singlecart';
import { connect } from 'react-redux';






import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";




const Multicart = ({ cart }) => {
    const [open, setOpen] = useState(false)

    const amount = "2";
    const currency = "USD";
    const style = { "layout": "vertical" };



    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return ( < > {
                (showSpinner && isPending) && < div className = "spinner" / > } <
            PayPalButtons style = { style }
            disabled = { false }
            forceReRender = {
                [amount, currency, style] }
            fundingSource = { undefined }
            createOrder = {
                (data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [{
                                amount: {
                                    currency_code: currency,
                                    value: amount,
                                },
                            }, ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }
            }
            onApprove = {
                function(data, actions) {
                    return actions.order.capture().then(function() {
                        // Your code here after capture the order
                    });
                }
            }
            /> <
            />
        );
    }


    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)


    useEffect(() => {
        let items = 0
        let price = 0

        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        })
        setTotalPrice(price)
        setTotalItems(items)
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
    return ( <
        >
        <
        div className = 'multicart' >
        <
        div className = 'multicart-items' > {
            cart.map((item) => ( <
                Singlecart key = { item.id }
                itemData = { item }
                />
            ))
        } <
        /div>

        <
        div className = 'cart-summary' >
        <
        h4 className = 'summary-title' > Order Summary < /h4> <
        div className = 'summary-price' >
        <
        span > Total: ({ totalItems }) Items < /span> <
        span > ₹{ totalPrice } < /span> <
        /div> <
        button className = 'cash-on-delivery' > CASH ON DELIVERY < /button>

        <
        PayPalScriptProvider options = {
            {
                "client-id": "AVWuxzpRchtS4iT46cmvXNYZXMXvLc_z2QKqfZSIoNbINByDOovBQqm3gUW3OWL-xMPZaNPiCQkmfHyb",
                components: "buttons",
                currency: "USD"
            }
        } >
        <
        ButtonWrapper currency = { currency }
        showSpinner = { false }
        /> <
        /PayPalScriptProvider>






        <
        /div> <
        /div> <
        />
    )
}
const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
    }
}
export default connect(mapStateToProps)(Multicart);