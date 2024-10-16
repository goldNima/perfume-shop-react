import '../App.css'

import { informationMain2 } from '../information/information2'

import { useDispatch, UseDispatch } from 'react-redux'
import { addToCart, ProductStore } from '../javascript/cartSlice'

export const Main2 = ()=>{

    const dispatch = useDispatch();

    const handleAddToCart = (item : ProductStore)=>{
        dispatch(addToCart(item))
    }

    return(
        <div className='main2'>
            {informationMain2.map((infoMain2=>(
                <>
                <div data-aos="fade-up" className='product-main2'>
                    <img className='img-product-main2' src={infoMain2.img}></img>
                    <div className='info-main2'>
                        <h2 className='name-product-main2'>{infoMain2.name}</h2>
                        <p className='information-product-main2'>{infoMain2.info}</p>
                        <h3 className='price-main2'>$ {infoMain2.price}</h3>
                        <button onClick={()=> handleAddToCart(infoMain2)} className='btn-main2'>add to cart</button>
                    </div>
                </div>
                </>
            )))}
        </div>
    )
}