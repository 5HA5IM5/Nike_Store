import React from 'react';
import '../ShopComponentsStyling/ShopProductCard.css'
import logo from '../../../Assets/nike_black.png'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { IconButton } from "@material-ui/core";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import { addToCart } from '../../Redux/Shopping/shopping-actions'
import { useDispatch } from 'react-redux';

const ShopProductCard = ({ productData }) => {

    const dispatch = useDispatch()

    return (
        <div className='ShopProductCard'>
            <div className='top'>
                <img className="ShopProductCard_card_logo" src={logo} alt="logo" />
                <div className="cardside-btn">
                    <IconButton >
                        <CompareArrowsIcon className="bc" fontSize='medium' />
                    </IconButton>
                    <IconButton>
                        <VisibilityIcon className="bc" />
                    </IconButton>
                    <IconButton>
                        <ThreeDRotationIcon className="bc" />
                    </IconButton>
                </div>
            </div>
            <div className='ShopProductCard_slideshow'>
                <img className='card_image' src={productData.image} alt="logo" />
            </div>
            <div className='ShopProductCard_price'>
                <p><span>$</span>{productData.price}</p>
            </div>

            <div className='ShopProductCard_heading'>
                <h3>{productData.title}</h3>
                <p>{productData.release}</p>
                <p>{productData.description}</p>
            </div>
            <div className="productcard_color_Values">
                <div className="colorPallete seablue"></div>
                <div className="colorPallete red"></div>
                <div className="colorPallete purple"></div>
            </div>
            <div className='cartbutton'>
                <button onClick={() => dispatch(addToCart(productData.id))} className='button_Addtocart'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShopProductCard;