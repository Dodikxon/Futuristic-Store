import React from 'react';
import './ProductsList.scss';
import {Link} from "react-router-dom";

function Button(props: any){
    return <Link to={props.link} className="product-btn">{props.name}</Link>
}

function Title(props: any){
    return <Link to={props.detail} className="product-title">{props.title}</Link>
}

function Description(props: any){
    return <p className="product-description">{props.description}</p>
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
                <Image src={props.productSrc} alt={props.productAlt}/>
                <Title detail={props.productDetail} title={props.productTitle}/>
                <Description description={props.productDescription}/>
                <Price price={props.productPrice} />
                <Button name={'buy'} link={'/basket'} />
            </div>
        </div>
    );
};

const ProductList = () => {
    return (
        <section className='productList'>
            <div className="container">
                <Product
                    productDetail={'lol'}
                    productSrc={'https://cdn-offer-photos.zeusx.com/2f61b34e-6e43-4889-bffa-cd774a0e886d.jpg'}
                    productAlt={'LOL'}
                    productTitle={'LOL'}
                    productDescription={'Rank: GOLD'}
                    productPrice={'100 Rub'}
                />
                <Product
                    productDetail={'dota'}
                    productSrc={'https://ru.ggheaven.com/wp-content/uploads/2021/04/1.png'}
                    productAlt={'DOTA'}
                    productTitle={'Dota 2'}
                    productDescription={'MMR: 3200'}
                    productPrice={'3200 Rub'}
                />
            </div>
        </section>
    );
};

export default ProductList;