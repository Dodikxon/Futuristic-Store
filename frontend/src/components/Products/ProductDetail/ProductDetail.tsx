import React, {useEffect, useState} from 'react';
import axios from "axios";
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
        <section className='login'>
            <Title title={title}/>
            <Title title={description}/>
            <Title title={rating}/>
            <Title title={game}/>
            <Title title={username}/>
            <img src={`${api}/products/${image}`} alt={game}/>
            <Title title={price}/>
        </section>
    );
};

export default ProductDetail;