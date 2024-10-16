import '../App.css'

import profile from '../logo/log-in.png'

import { useNavigate } from 'react-router-dom';

export const Dashboard = () =>{

    const navigate = useNavigate();

    const handleHome = ()=>{
        navigate('/')
    }
    const handleCart = ()=>{
        navigate('/Cart')
    }

    const FirstName = localStorage.getItem('firstName :');
    const LastName = localStorage.getItem('lastName :');
    const PhoneNumber = localStorage.getItem('number :');
    const Password = localStorage.getItem('password :');

    return (
        <div className='dashboard'>
            <h1 className='title-dashboard'>DashBoard</h1>
            <div data-aos="flip-up" className='dashboard-container'>
                <h3 className='profile-title-dashboard'>Your Profile :</h3>
                <div className='info-profile-dashboard'>
                    <img className='logo-dashboard' src={profile}></img>
                    <p className='text-info-dashboard'>Name : <span className='info-dashboard'>{FirstName}</span></p>
                    <p className='text-info-dashboard'>LastName : <span className='info-dashboard'>{LastName}</span></p>
                    <p className='text-info-dashboard'>Phone Number : <span className='info-dashboard'>{PhoneNumber}</span></p>
                    <p className='text-info-dashboard'>Password : <span className='info-dashboard'>{Password}</span></p>
                    <button onClick={handleHome} className='btn-dashboard'>Home</button>
                    <button onClick={handleCart} className='btn-dashboard'>Shopping Cart</button>
                </div>
            </div>
        </div>
    )
}