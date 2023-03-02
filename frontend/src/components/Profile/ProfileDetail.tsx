import React, {useEffect, useState} from 'react';
import Title from "../Title/Title";
import axios from "axios";
import {api} from "../../api/api";
import Product from "../Products/ProducstList/Product/Product";
import './ProfileDetail.scss';

const ProfileDetail = () => {
    const [username, setUsername] = useState('')
    const [products, setProducts] = useState([])
    const fetchUserByUsername = () => {
        const response = axios.get(`${api}/users/${localStorage.getItem('goToProfile')}`)
            .then(response => {
                setUsername(response.data.username)
                setProducts(response.data.products)
        })
    }

    useEffect(() =>{
        fetchUserByUsername()
    }, [])
    return (
        <div className='profile'>
            <div className="container">
                <div className="profile-in">
                    <Title title={'Profile ' + username}/>
                    <br/>
                    <Title title={'Products list'}/>
                    <div className="profile-in-products">
                        {products.map( ({game, image, price, rating, title}) =>
                            <Product
                                productDetail={`${title}`}
                                productSrc={image}
                                productAlt={game}
                                productTitle={title}
                                productRating={rating}
                                productPrice={price + 'RUB'}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetail;