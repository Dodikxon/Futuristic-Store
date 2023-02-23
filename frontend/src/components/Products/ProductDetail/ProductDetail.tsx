import React, {useEffect} from 'react';
import {fetchProductByTitle} from "../../../store/action-creators/product";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import Title from "../../Title/Title";

const ProductDetail = () => {
    const {products, error, loading} = useTypedSelector(state => state.product)
    const title = localStorage.getItem('detailPage')
    useEffect(() =>{
        fetchProductByTitle(title)
    }, [])
    return (
        <section className='login'>
            {products.map( product =>
                <Title title={product.title} />
                )}
        </section>
    );
};

export default ProductDetail;