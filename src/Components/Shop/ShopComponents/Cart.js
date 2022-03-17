import React from 'react'
import { useState, useEffect } from 'react';
import '../ShopComponentsStyling/Cart.css'
import CartTotal from './CartTotal';
import CartProduct from './CartProduct';
import cart_banner from '../../../Assets/cart_banner.jpg'
import { useSelector } from 'react-redux';


const Cart = () => {

  const cartitems = useSelector((c) => c.shop.cart);
  const [totalprice, settotalprice] = useState(0)
  const [totalitem, settotalitem] = useState(0)

  useEffect(() => {

    let items = 0
    let price = 0

    cartitems.forEach(item => {
      items += item.qty
      price += item.qty * item.price

    });

    settotalitem(items)
    settotalprice(price)

  }, [cartitems, totalprice, totalitem, settotalprice, settotalitem])


  return (
    <div className='Cart'>
      <img src={cart_banner} width="100%" />
      <h1 className='Cart_heading'>Your Bag</h1>
      <hr />

      <div className='cart_list'>
        <div className='cart_listing'>
          {
            cartitems.map(item => (
              <CartProduct key={item.id} itemData={item} />
            ))
          }
        </div>
        <div className='cart_total'>
          {
            totalitem !== 0
              ? <CartTotal
                item={totalitem}
                price={totalprice}
              />
              :
              <h2>YOUR CART IS EMPTY. GO AHEAD AND BUY YOUR FAVOURITE SHOE</h2>
          }

        </div>
      </div>

    </div>
  )
}

export default Cart