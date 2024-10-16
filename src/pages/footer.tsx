import '../App.css'

import { Part } from '../part/part-footer'

import back from '../logo/logo-back.png'
import call from '../logo/call.png'
import telegram from '../logo/telegram.png'
import instagram from '../logo/instagram.png'

export const Footer = () =>{

    const scrollToTop = ()=>{
        window.scrollTo({top: 0 , behavior: 'smooth'})
    }

    return(
        <div className='footer'>
            <Part />
            <div className='footer-main'>
            <div className='box-footer'>
                    <h3 className='title-box-footer'>"Perfume is the art that <br></br> makes memory speak."</h3>
                    <p className='text-box-footer'>Francis Kurkdjian, <br></br> Master Perfumer</p>
                </div>
                <div className='title-footer-container'>
                    <h1 className='title-Footer'>Resources</h1>
                    <h1 className='title-Footer'>Company</h1>
                    <h1 className='title-Footer'>Legal</h1>
                </div>
                <ul className='btn-footer-container'>
                    <li className='btn-footer'>Blog</li>
                    <br></br>
                    <li className='btn-footer'>Newsletter</li>
                    <br></br>
                    <li className='btn-footer'>Support</li>
                    <br></br>
                    <li className='btn-footer'>Help center</li>
                    <br></br>
                    <li className='btn-footer'>Abaut us</li>
                    <br></br>
                    <li className='btn-footer'>News</li>
                    <br></br>
                    <li className='btn-footer'>Contact</li>
                    <br></br>
                    <li className='btn-footer'>Best seller</li>
                    <br></br>
                    <li className='btn-footer'>Terms of service</li>
                    <br></br>
                    <li className='btn-footer'>Privacy policy</li>
                    <br></br>
                    <li className='btn-footer'>Cookies policy</li>
                    <br></br>
                    <li className='btn-footer'>Data processing</li>
                    <br></br>
                </ul>
                <img onClick={scrollToTop} className='btn-back-footer' src={back}></img>
            </div>
            <div className='footer-footer'>
                <div className='last-btn-footer'>
                    <img className='btn-phone' src={call}></img>
                    <img className='btn-telegram' src={telegram}></img>
                    <img className='btn-instagram' src={instagram}></img>
                </div>
            </div>
        </div>
    )
}