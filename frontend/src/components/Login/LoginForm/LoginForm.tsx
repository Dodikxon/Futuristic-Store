import React, {useState} from 'react';
import './LoginForm.scss';
import {login} from "../../../store/action-creators/user";
import { useNavigate } from 'react-router-dom';

function Input(props: any){
    return <input type={props.type}
                  className='login-input'
                  value={props.value}
                  placeholder={props.placeholder}
                  onChange={e => props.change(e.target.value)}
                  name={props.name}/>
}


const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    if (isSubmit){
        login(email, password);
        setTimeout( () => {
            navigate('/');
        }, 500);
    }
    return (
        <section className='login'>
            <h1 className='login-title'>Login</h1>
            <div className="container">
                <div className="login-form">
                    <Input type={'text'}
                           placeholder={'email'}
                           name={'email'}
                           value={email}
                           change={setEmail}
                           />
                    <Input type={'password'}
                           placeholder={'password'}
                           name={'password'}
                           value={password}
                           change={setPassword}
                    />
                    <button onClick={e => setIsSubmit(true)}
                        type='submit'
                        name='submit'
                        className='login-submit'>
                        Login
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;