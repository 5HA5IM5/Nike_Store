import React from 'react'
import '../ShopComponentsStyling/CartProduct.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton, TextField } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import pcard1 from '../../../Assets/pcard1.png'
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty } from '../../Redux/Shopping/shopping-actions';

const CartProduct = (itemData) => {

    const dispatch = useDispatch()

    return (
        <div className='CartProduct'>
            <div className='Cart_imgBox'>
                <img src={itemData.itemData.image} className="Cart_img" alt='a' />
            </div>
            <div className='Cart_detail'>
                <div className='Cart_title'>
                    <div className='Cart_name'>
                        <h1>{itemData.itemData.title}</h1>
                        <h2>CLOUD WHITE / CLOUD WHITE / CORE BLACK</h2>
                        <h2>SIZE: 11 (US MEN)</h2>
                        <h3>${itemData.itemData.price}</h3>
                    </div>
                    <div className='Cart_cross'>
                        <div class="value-button" id="decrease" onClick={() => dispatch(decreaseQty(itemData.itemData.id, itemData.itemData.qty))} value="Decrease Value">-</div>
                        <input type="number" id="number" value={itemData.itemData.qty === 0 ? dispatch(removeFromCart(itemData.itemData.id)) : itemData.itemData.qty} />
                        <div class="value-button" id="increase" onClick={() => dispatch(increaseQty(itemData.itemData.id, itemData.itemData.qty))} value="Increase Value">+</div>
                    </div>
                </div>
                <div className='Cart_control'>
                    <IconButton onClick={() => dispatch(removeFromCart(itemData.itemData.id))}>
                        <CloseRoundedIcon className='bc' />
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderIcon className='bc' />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default CartProduct