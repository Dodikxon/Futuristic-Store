import React from 'react';
import './Input.scss';

const Input = (props: any) => {
    if(props.type === "number"){
        const priceChange = (e:any) => {
            const regex = /^[0-9\b]+$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
                props.change(e.target.value);
            }
        };
        return(
            <input type={props.type}
                   className='input'
                   value={props.value}
                   placeholder={props.placeholder}
                   onChange={priceChange}
                   name={props.name}/>
        );
    }else{
        return (
            <input type={props.type}
                   className='input'
                   value={props.value}
                   placeholder={props.placeholder}
                   onChange={e => props.change(e.target.value)}
                   name={props.name}/>
        );
    }
};

export default Input;