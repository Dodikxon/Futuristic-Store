import React, {useState} from 'react';
import './LoginForm.scss';

function Input(props: any){
    return <input type={props.type}
                  className='login-input'
                  value={props.value}
                  placeholder={props.placeholder}
                  onChange={e => props.change(e.target.value)}
                  name={props.name}/>
}


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                    <button type='submit'
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