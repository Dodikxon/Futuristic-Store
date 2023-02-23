import React, {useState} from 'react';
import './RegisterForm.scss';
import {register} from "../../../store/action-creators/user";
import {useCookies} from "react-cookie";
import Input from "../../Inputs/Input";
import Submit from "../../Inputs/Submit";


const RegisterForm = () => {
    const [emailCookie, setEmailCookie] = useCookies(['email']);
    const [passwordCookie, setPasswordCookie] = useCookies(['password']);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [isRegister, setIsRegister] = useState(false)
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
                    <Submit change={setIsRegister}
                            email={email}
                            password={password}
                            username={username}
                            emailCookie={setEmailCookie}
                            passwordCookie={setPasswordCookie}
                            navigate={'/'}
                            action={register}
                            value={isRegister} />
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;