import React, {useEffect, useState} from 'react';
import axios from "axios";
import './ProductDetail.scss';
import {api} from "../../../api/api";
import Title from "../../Title/Title";

const ProductDetail = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [game, setGame] = useState('')
    const [username, setUsername] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const link = localStorage.getItem('detailPage')
    const fetchProductByTitle = () => {
        const response = axios.get(`${api}/products/product/${link}`)
            .then((response) => {
                setTitle(response.data.title)
                setDescription(response.data.description)
                setRating(response.data.rating)
                setGame(response.data.game)
                setUsername(response.data.author.username)
                setImage(response.data.image)
                setPrice(response.data.price)
            })
    }
    useEffect(() =>{
        fetchProductByTitle()
    }, [])
    return (
        <section className='detail'>
            <div className="container">
                <div className="detail-in">
                    <Title title={title}/>
                    <div className="detail-in-left">
                        <div className="detail-in-left-bottom">
                            <img src={`${api}/products/${image}`}
                                 className='detail-in-left-bottom-img'
                                 alt={game}/>
                            <p className="detail-in-left-bottom-desc">
                                {description} <br/>
                                <br/>
                                Rating: {rating} <br/>
                                Game: {game} <br/>
                                Seller: {username} <br/>
                                Price: {price} RUB
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProductDetail;