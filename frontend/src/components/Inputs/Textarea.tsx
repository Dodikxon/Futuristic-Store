import React from 'react';
import './Input.scss';

const Textarea = (props: any) => {
    return (
        <textarea className='textarea'
                  value={props.value}
                  placeholder={props.placeholder}
                  onChange={e => props.change(e.target.value)}
                  name={props.name}/>
    );
};

export default Textarea;