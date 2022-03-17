import * as actionTypes from './shopping-types'
import image1 from '../../../Assets/pcard1.png'
import image2 from '../../../Assets/pcard2.png'
import image3 from '../../../Assets/pcard3.png'

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "Air Zoom 700",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: '140',
            release: '2022',
            image: image1,
        },
        {
            id: 2,
            title: "Air Zoom 700",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: '140',
            release: '2022',
            image: image2,
        },
        {
            id: 3,
            title: "Air Zoom 700",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: '140',
            release: '2022',
            image: image3,
        },
        {
            id: 4,
            title: "Air Zoom 700",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: '140',
            release: '2022',
            image: image1,
        },
        {
            id: 5,
            title: "Air Zoom 700",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: '140',
            release: '2022',
            image: image2,
        },
        {
            id: 6,
            title: "Air Zoom 700",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: '140',
            release: '2022',
            image: image3,
        },
    ],    //{id,title,descr,price,img}

    cart: [],    //{id,title,descr,price,img,qty}
    currentItem: null,
    cart_items: [],
}



const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(prod => prod.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart
                    ? state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.INCREASE_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: action.payload.qty + 1 } : item)
            };
        case actionTypes.DECREASE_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: action.payload.qty - 1 } : item)
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            };
        default:
            return state;
    }
}


export default shopReducer