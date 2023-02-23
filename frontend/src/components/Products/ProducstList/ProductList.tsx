import React, {useEffect, useState} from 'react';
import './ProductsList.scss';
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {fetchProducts, fetchProductsByGame} from "../../../store/action-creators/product";

function Button(props: any){
    return <Link to={props.link} className="product-btn">{props.name}</Link>
}

function Selector(props: any){
    return <div className='filter-selector'>
        <select required value={props.selectorValue} onChange={e => props.change(e.target.value)} name={props.name} className='filter-selector-input'>
            <option value={props.value}>{props.value}</option>
            <option value={props.value1}>{props.value1}</option>
            <option value={props.value2}>{props.value2}</option>
        </select>
    </div>
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
    const [game, setGame] = useState('')
    const { fetchProducts } = useActions()
    useEffect(() =>{
        if(game){
            fetchProductsByGame(game)
        }else{
            fetchProducts()
        }
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
                <div className="productList-in">
                    <div className="productList-in-top">
                        <div className='filter'>
                            <Selector value1={'Dota 2'} value={'select game'}
                                      name={'game'}
                                      change={setGame}
                                      selectorValue={game}
                                      value2={'LOL'}/>
                            <button type='submit'
                                    name='submit'
                                    className='filter-submit'>Submit</button>
                        </div>
                    </div>
                    <div className="productList-in-bottom">
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
                </div>
            </div>
        </section>
    );
};

export default ProductList;