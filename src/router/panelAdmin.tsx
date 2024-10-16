import '../App.css'

import { useNavigate } from 'react-router-dom';

export const PanelAdmin = () =>{

    const navigate = useNavigate();

    const handleHome = ()=>{
        navigate('/')
    }
    const handleLog = ()=>{
        navigate('/Log')
    }

    const FirstName = localStorage.getItem('firstName :');
    const LastName = localStorage.getItem('lastName :');
    const PhoneNumber = localStorage.getItem('number :');

    return (
        <div className='panelAdmin'>
            <h1 className='title-panel'>Panel Admin</h1>
            <div className='panelAmin-container'>
                <div data-aos="zoom-in-right" className='left-panel'>
                    <h2 className='title-left-panel'>Logins :</h2>
                    <h3 className='info-panel-log'>Names : <span className='text-info-panel'>{FirstName}</span></h3>
                    <h3 className='info-panel-log'>LastNames : <span className='text-info-panel'>{LastName}</span></h3>
                    <h3 className='info-panel-log'>Phone Numbers : <span className='text-info-panel'>{PhoneNumber}</span></h3>
                    <button onClick={handleHome} className='btn-panel'>Home</button>
                    <button onClick={handleLog} className='btn-panel'>Login</button>
                </div>
                <div data-aos="zoom-in-left" className='right-panel'>
                <h2 className='title-right-panel'>Shops :</h2>
                </div>
            </div>
        </div>
    )
}