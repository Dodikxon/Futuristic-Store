import React, {useEffect, useState} from 'react';
import './ProductsList.scss';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {fetchProducts, fetchProductsByGame} from "../../../store/action-creators/product";
import Selector from "../../Inputs/Selector";
import Submit from "../../Inputs/Submit";
import Product from "./Product/Product";



const ProductList = () => {
    const {products, error, loading} = useTypedSelector(state => state.product)
    const [game, setGame] = useState('')
    const { fetchProducts } = useActions()
    const { fetchProductsByGame } = useActions()
    const [isSubmit, setIsSubmit] = useState(false)
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
                            <Submit value={isSubmit}
                                    change={setIsSubmit}
                                    action={fetchProductsByGame}
                                    email={game}/>
                        </div>
                    </div>
                    <div className="productList-in-bottom">
                        {products.map( product =>
                            <Product
                                productDetail={product.title}
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