import '../App.css';

import { Part } from '../part/part-footer';
import { Main1 } from './main1';
import { Main2 } from './main2';
import { Footer } from './footer';
import { Header } from './header';

import { useNavigate } from 'react-router-dom';



export const Home = ()=>{
    
    const navigate = useNavigate();

    const handleMovie = ()=>{
        navigate('/Movie')
    }

    return(
        <div>
            <Header />
            <div className='main'>
                <h1 className='title-home'>Best Perfumes <br></br> For You</h1>
                <img className='img-home' src=''></img>
                <p className='text-home'>Discover the perfect fragrance for you <br></br> with our wide selection of perfumes</p>
                <div className='btn-home-container'>
                    <button id='btn-shop-header' className='btn-home'>order now</button>
                    <button onClick={handleMovie} id='btn-watch-header' className='btn-home'>watch video</button>
                </div>
            <div className='info-home'>
                <h4>500 k <br></br> customers</h4>
                <div className='info-home'></div>
                <h4>2k <br></br> perfumes</h4>
            </div>
            </div>
            <Part />
            <Main1 />
            <Main2 />
            <Footer />
        </div>
    )
}