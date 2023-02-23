import React from 'react';
import {Link} from "react-router-dom";
import './Product.scss';

function Button(props: any){
    return <Link to={props.link} className="product-btn">{props.name}</Link>
}

function Title(props: any){
    return <Link to={props.detail} className="product-title">{props.title}</Link>
}

function Rating(props: any){
    return <p className="product-price">{props.rating}</p>
}

function Price(props: any){
    return <h6 className="product-price">{props.price}</h6>
}

function Image(props: any){
    return <img src={props.src} alt={props.alt} className="product-image"/>
}

const Product = (props: any) => {
    return (
        <div className="product">
            <div className="product-text">
                <Image src={`http://localhost:5000/products/${props.productSrc}`} alt={props.productAlt}/>
                <Title detail={props.productDetail} title={props.productTitle}/>
                <Rating rating={props.productRating}/>
                <Price price={props.productPrice} />
                <Button name={'buy'} link={'/basket'} />
            </div>
        </div>
    );
};

export default Product;