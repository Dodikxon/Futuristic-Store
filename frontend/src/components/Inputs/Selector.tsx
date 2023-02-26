import React from 'react';
import './Input.scss';

const Selector = (props: any) => {
    if(props.placeholder){
        return (
            <div className='selector'>
                <label className='selector-label'>{props.placeholder}</label>
                <select required value={props.selectorValue} onChange={e => props.change(e.target.value)} name={props.name} className='selector-select'>
                    <option value={props.value}>{props.value}</option>
                    <option value={props.value1}>{props.value1}</option>
                    <option value={props.value2}>{props.value2}</option>
                </select>
            </div>
        );
    }else{
        return (
            <div className='selector'>
                <select required value={props.selectorValue} onChange={e => props.change(e.target.value)} name={props.name} className='selector-select'>
                    <option value={props.value}>{props.value}</option>
                    <option value={props.value1}>{props.value1}</option>
                    <option value={props.value2}>{props.value2}</option>
                </select>
            </div>
        );
    }
};

export default Selector;