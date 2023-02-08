import React, {useState} from 'react';
import './style.css'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'
import axios from "axios";

import {useNavigate} from 'react-router-dom'
const Form = () => {
    const [status,setStatus] = useState(false)
    const [email,setEmail]= useState('')


    const [eye,setEye]=useState(false)

    const navigate = useNavigate()

    const [user,setUser] = useState([])

    const registerUser = (e)=>{
        e.preventDefault()
       let newUser = {
            email,
           password:e.target[0].value
       }

       axios.post('http://localhost:8080/user',newUser)
           .then(({data})=>setUser(data))


    }


    return (
        <div className='content'>
            <form action="" className='form' onSubmit={registerUser} >
                {
                    status && <p className='form__email' onClick={()=>setStatus(false)} >{email} <BsFillPencilFill/></p>
                }

                <h2 className='form__register'>
                    {
                        status ? 'Придумайте пароль для входа' : 'Регистрация'
                    }
                </h2>
                {
                    status && <>
                    <div className='form__eye'>
                        <input type={eye ? 'text': 'password'} placeholder='введите пароль' className='input__password'/>
                        <span className='eye' onClick={()=>setEye(prev=>!prev)}>
                            {
                                eye ? <AiFillEyeInvisible/> : <AiFillEye/>
                            }

                        </span>
                    </div>
                        <button  type='submit' className='btn__create'>Создать</button>
                    </> }
                {!status &&
                        <>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Введите Email'/>
                            <div onClick={()=>setStatus(true)} className='btn__submit'>Продолжить</div>
                        </>
                }


            </form>
        </div>
    );
};

export default Form;