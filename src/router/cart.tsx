import '../App.css'

import DeleteLogo from '../logo/Trash Can.png'

import { useSelector , useDispatch} from 'react-redux'
import { RootState } from '../javascript/store'

import { deleteFromCart } from '../javascript/cartSlice'

export const Cart: React.FC = () =>{

    const items = useSelector((state: RootState)=> state.cart.items);
    const totalPrice = useSelector((state: RootState)=> state.cart.totalPrice)
    console.log('item :' , items);
    
    const dispatch = useDispatch();
    
    const handleDelete = (id: number) =>{
        dispatch(deleteFromCart(id))
    }

    return (
        <div className='cart'>
            <h1 className='title-cart'>cart</h1>
            {items.length > 0 ?items.map((item)=>(
                <div key={item.img} className='cart-container'>
                    <img className='img-cart' src={item.img}></img>
                    <h2 className='name-product-cart'><span className='span'>Name : </span>{item.name}</h2>
                    <h4 className='price-product-cart'><span className='span'>Price : </span> $ {item.price}</h4>
                    <img onClick={()=> handleDelete(item.id)} className='delete-product' src={DeleteLogo}></img>
                </div>
            )) : <h3>Empty ...</h3>}

            <h2 className='total-price'><span className='span'>Total Price :</span> $ {totalPrice}</h2>
        </div>
    )
}