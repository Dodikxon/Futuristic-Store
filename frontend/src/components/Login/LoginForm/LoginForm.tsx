import React, {useState} from 'react';
import './LoginForm.scss';
import {login} from "../../../store/action-creators/user";
import {useCookies} from "react-cookie";
import Input from "../../Inputs/Input";
import Submit from "../../Inputs/Submit";
import Title from "../../Title/Title";


const LoginForm = () => {
    const [emailCookie, setEmailCookie] = useCookies(['email']);
    const [passwordCookie, setPasswordCookie] = useCookies(['password']);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    return (
        <section className='login'>
            <Title title={'Login'} />
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
                    <Submit change={setIsSubmit}
                            emailCookie={setEmailCookie}
                            passwordCookie={setPasswordCookie}
                            action={login}
                            email={email}
                            password={password}
                            value={isSubmit}
                            navigate={'/'}/>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;