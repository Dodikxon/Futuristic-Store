import React from 'react';

function Input (props: any){
    return <input type={props.type}
                  className='login-input'
                  value={props.value}
                  placeholder={props.placeholder}
                  onChange={e => props.change(e.target.value)}
                  name={props.name}/>
}

const Popup = (props: any) => {
    return (
        <div className="popup-in">
            <div className="sale">
                <div className="sale-in">
                    <Input/>
                </div>
            </div>
        </div>
    );
};

const ProductSale = () => {
    return (
        <div className='popup'>

        </div>
    );
};

export default ProductSale;