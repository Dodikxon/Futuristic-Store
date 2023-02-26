import React from 'react';
import {Link} from "react-router-dom";
import './Product.scss';
import {api} from "../../../../api/api";
import Button from "../../../Inputs/Button";



function Title(props: any){
    function getDetailLink(){
        let page = props.detail
        return localStorage.setItem('detailPage', page)
    }
    return <Link to={props.detail} onClick={getDetailLink} className="product-title">{props.title}</Link>
}


function Rating(props: any){
    return <p className="product-price">Rating: {props.rating}</p>
}

function Price(props: any){
    return <h6 className="product-price">Price: {props.price}</h6>
}

function Image(props: any){
    return <img src={props.src} alt={props.alt} className="product-image"/>
}

const Product = (props: any) => {

    return (
        <Title detail={props.productDetail} title={
            <div className="product">
                <div className="product-text">
                    <Image src={`${api}/products/${props.productSrc}`} alt={props.productAlt}/>
                    <Title title={props.productTitle}/>
                    <Rating rating={props.productRating}/>
                    <Price price={props.productPrice} />
                    <Button name={'buy'} link={`/${props.productDetail}`} />
                </div>
            </div>
        }>
        </Title>
    );
};

export default Product;