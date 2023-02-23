import React from 'react';
import './Title.scss';

const Title = (props: any) => {
    return (
        <h1 className='title'>{props.title}</h1>
    );
};

export default Title;