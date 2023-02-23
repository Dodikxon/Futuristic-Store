import React from 'react';
import './Input.scss';

const Upload = (props: any) => {
    return (
        <label className='login-input-file-label'>
            {props.placeholder} <br/>
            <input onChange={props.change}
                   type="file"
                   name='image'
                   className='login-input-file'/>
        </label>
    );
};

export default Upload;