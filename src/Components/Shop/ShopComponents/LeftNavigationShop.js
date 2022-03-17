import React, { useState, useEffect } from 'react';
import '../ShopComponentsStyling/LeftNavigationShop.css'
import LeftNavigationLink from './LeftNavigationLink';
import { gendars, sports,tech } from '../../../Components/API/requests';
import jordan from '../../../Assets/jordan.png';
import logo from '../../../Assets/logo.png';
import rtfkt from '../../../Assets/rtfkt.png';

const LeftNavigationShop = () => {

    // const [brands, setBrands] = useState([]);

    // useEffect(() => {
    //     axios.get(requests.fetchBrands, {
    //         headers: header
    //     })
    //         .then(function (response) {
    //             setBrands(response.data.results);
    //         })

    // }, [])

    return (
        <div className='LeftNavigationShop'>

            <div className='super'>
                <div className='Box'>
                    <img src={logo} className='nike_img active' alt='nike' />
                </div>
                <div className='Box'>
                    <img src={jordan} className='jordan_img' alt='jordan'/>
                </div>
                <div className='Box'>
                    <img src={rtfkt} className='rtfkt_img' alt='rtfkt' />
                </div>
            </div>

            <div className='total_products'>
                <h1>76 <span>PRODUCTS</span></h1>
                <p>FILTER BY</p>
            </div>


            <LeftNavigationLink
                name="Gender"
                info={gendars}
            />

            <LeftNavigationLink
                name="Shoe Technology"
                info={tech}
            />

            <LeftNavigationLink
                name="Sports"
                info={sports}
            />
        </div >
    )
}

export default LeftNavigationShop