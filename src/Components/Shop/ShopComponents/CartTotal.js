import React from 'react'
import '../ShopComponentsStyling/CartTotal.css';
import logo from '../../../Assets/nike_black.png'
import paypal from '../../../Assets/paypal.png'

const CartTotal = ({ item, price }) => {

    return (
        <div className='CartTotal'>
            <img src={logo} alt="logo" className='cart_logo' />
            <div className='subtotal'>
                <h2>Subtotal ( {item} : ${price} )</h2>
            </div>
            <div className='checkout'>
                <button className='paypal'><img src={paypal} alt='a' className='paypallogo' /></button>
                <h2>OR</h2>
                <button className='checkout_btn'>Proceed To checkout</button>
            </div>
        </div>
    )
}

export default CartTotal;