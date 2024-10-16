import '../App.css'

import { information1 } from '../information/information1'
import { information2 } from '../information/information1'

import { useDispatch, UseDispatch } from 'react-redux'
import { addToCart, ProductStore } from '../javascript/cartSlice'

export const Main1: React.FC = ()=>{

    const dispatch = useDispatch();

    const handleAddToCart = (item : ProductStore)=>{
        dispatch(addToCart(item))
    }
    return(
        <div>
            <div data-aos="fade-up" className='main1'>
                {information1.map((information =>(
                    <>
                    <div key={information.id} className='product-main1'>
                    <img  className='img-product-main1' src={information.img}></img>
                    <div className='info-main1'>
                    <h2 className='name-product-main1'>{information.name}</h2>
                    <p className='text-product-main1'>{information.info}</p>
                    <h3 className='price-product-main1'>$ {information.price}</h3>
                    <button onClick={()=> handleAddToCart(information)} className='btn-main1'>add to cart</button>
                    </div>
                    </div>
                    </>
                )))}
                    {information2.map((information =>(
                    <>
                    <div data-aos="fade-up" key={information.id} className='product-main1'>
                    <img className='img-product-main1' src={information.img}></img>
                    <div className='info-main1'>
                    <h2 className='name-product-main1'>{information.name}</h2>
                    <p className='text-product-main1'>{information.info}</p>
                    <h3 className='price-product-main1'>$ {information.price}</h3>
                    <button onClick={()=> handleAddToCart(information)} className='btn-main1'>add to cart</button>
                    </div>
                    </div>
                    </>
                )))}
            </div>
            <div>
        </div>
        </div>
    )
}