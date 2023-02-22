import React, {useEffect} from 'react';
import './ProductsList.scss';
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {fetchProducts} from "../../../store/action-creators/product";

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

const ProductList = () => {
    const {products, error, loading} = useTypedSelector(state => state.product)
    const { fetchProducts } = useActions()
    useEffect(() =>{
        fetchProducts()
    }, [])
    if(loading){
        return (
            <div className='articles'>
                <div className="container">
                    <div className="articles-in">
                        <div className="articles-in-title">
                            <h1  className="articles-in-title-text">
                                Loading...
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(error){
        return (
            <div className='articles'>
                <div className="container">
                    <div className="articles-in">
                        <div className="articles-in-title">
                            <h1 className="articles-in-title-text">
                                {error}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section className='productList'>
            <div className="container">
                {products.map( product =>
                    <Product
                        productDetail={product.id}
                        productSrc={product.image}
                        productAlt={product.game}
                        productTitle={product.title}
                        productRating={product.rating}
                        productPrice={product.price + 'RUB'}
                    />
                )}
            </div>
        </section>
    );
};

export default ProductList;