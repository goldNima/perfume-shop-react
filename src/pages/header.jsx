import '../App.css';

import {useNavigate } from 'react-router-dom';

import search from '../logo/search-icon.png'
import log from '../logo/log-in.png'
import cart from '../logo/cart.png'

export const Header = ()=>{

    const navigate = useNavigate();

    const btnHome = ()=>{
        navigate('/')
    }

    const btnCart = () =>{
        navigate('/Cart')
    }

    const btnLog = () =>{
        navigate('/Log')
    }

    return(
        <div>
            <div className='header'>
                <h1 className='title-header'>PERFUME</h1>
                <p onClick={btnHome} className='btn-header'>Home</p>
                <p className='btn-header'>Shop</p>
                <p className='btn-header'>Abaut</p>
                <p className='btn-header'>Blog</p>
                <img id='logo-serch-header' className='logo-btn-header' src={search}></img>
                <img id='logo-cart-header' onClick={btnCart} className='logo-btn-header' src={cart}></img>
                <img id='logo-log-header' onClick={btnLog} className='logo-btn-header' src={log}></img>
            </div>
        </div>
    )
}