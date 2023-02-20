import React, {useState} from 'react';
import './RegisterForm.scss';
import { useNavigate } from 'react-router-dom';
import {register} from "../../../store/action-creators/user";


function Input(props: any){
    return <input type={props.type}
                  className='login-input'
                  value={props.value}
                  placeholder={props.placeholder}
                  onChange={e => props.change(e.target.value)}
                  name={props.name}/>
}


const RegisterForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    if(isRegister){
        register(email, username, password)
        setTimeout( () => {
            navigate('/');
        }, 500);
    }
    return (
        <section className='login'>
            <h1 className='login-title'>Register</h1>
            <div className="container">
                <div className="login-form">
                    <Input type={'text'}
                           placeholder={'email'}
                           name={'email'}
                           value={email}
                           change={setEmail}
                    />
                    <Input type={'text'}
                           placeholder={'username'}
                           name={'username'}
                           value={username}
                           change={setUsername}
                    />
                    <Input type={'password'}
                           placeholder={'password'}
                           name={'password'}
                           value={password}
                           change={setPassword}
                    />
                    <button onClick={e => setIsRegister(true)}
                        type='submit'
                        name='submit'
                        className='login-submit'>
                        Register
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;