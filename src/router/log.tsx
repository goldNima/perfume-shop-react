import { log } from 'console';
import '../App.css'

import logo from '../logo/logo-login.png'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Log = () =>{

        const navigate = useNavigate();

        const [firstname , setFirstname] = useState<string>('');
        const [Lastname , setFirstLastname] = useState<string>('');
        const [number , setNumber] = useState<number>();
        const [password , setPassword] = useState<string>('');

        const handleSubmit = (event: any)=>{
            event.preventDefault();

            localStorage.setItem('firstName :' , firstname);
            localStorage.setItem('lastName :' , Lastname);
            localStorage.setItem('number :' , number?.toString() || '');
            localStorage.setItem('password :' , password);

            if (firstname === "Nima" && Lastname === "Tajik" && number === 9367779999 && password === "NimaTajik39"){
                navigate("/PanelAdmin")
            }else{
                navigate("/Dashboard")
            }
        }

        return (
            <div className='log'>
                <div data-aos="zoom-in" className='log-in'>
                    <form>
                    <h1 className='title-log'>Log In</h1>
                    <br></br>
                    <input onChange={(e)=> setFirstname(e.target.value)} id='name-log' className='input-log' placeholder='Enter your name :'></input>
                    <br></br>
                    <input onChange={(e)=> setFirstLastname(e.target.value)} id='last-name-log' className='input-log' placeholder='Enter your last name :'></input>
                    <br></br>
                    <input onChange={(e)=> setNumber(Number(e.target.value))} id='number-log' className='input-log' placeholder='Enter your phone number :'></input>
                    <br></br>
                    <input onChange={(e)=> setPassword(e.target.value)} id='password-log' className='input-log' placeholder='Enter your password :'></input>
                    <br></br>
                    <button onClick={handleSubmit} className='btn-log'>Log In</button>
                    </form>
                </div>
            </div>
        )
    }

