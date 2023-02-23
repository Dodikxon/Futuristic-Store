import React from 'react';
import './Input.scss';
import { useNavigate } from 'react-router-dom';


const Submit = (props: any) => {
    const navigate = useNavigate()
    props.change(false)
    if (props.value === true){
        props.action(props.email, props.password, props.username)
        props.emailCookie("email", props.email)
        props.passwordCookie("password", props.password)
        setTimeout( () => {
            navigate(props.navigate);
            }, 500);
        props.change(false)
    }
    return (
        <button onClick={e => props.change(true)}
                value={props.value}
                type='submit'
                name='submit'
                className='submit'>
            Submit
        </button>
    );
};

export default Submit;