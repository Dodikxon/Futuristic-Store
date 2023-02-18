import React, {useState} from 'react';
import './RegisterForm.scss';

function Input(props: any){
    return <input type={props.type}
                  className='login-input'
                  value={props.value}
                  placeholder={props.placeholder}
                  onChange={e => props.change(e.target.value)}
                  name={props.name}/>
}


const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
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
                    <button type='submit'
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