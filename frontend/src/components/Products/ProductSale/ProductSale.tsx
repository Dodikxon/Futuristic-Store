import React, {useState} from 'react';
import axios from "axios";
import './ProductSale.scss';
import {createProduct} from "../../../store/action-creators/product";
import { useNavigate } from 'react-router-dom';
import Input from "../../Inputs/Input";
import Textarea from "../../Inputs/Textarea";
import Selector from "../../Inputs/Selector";
import Upload from "../../Inputs/Upload";
import {api, token} from "../../../api/api"
import Title from "../../Title/Title";


const ProductSale = () => {
    let accessToken = token()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [game, setGame] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState<any>()
    const [userId, setUserId] = useState<number>(0)
    if(accessToken){
        const tokenDecode = (token: string ) => {
            const response = axios.get(`${api}/auth/${token}`)
                .then((response) => {
                    setUserId(response.data.token.id)
                })
        }

        tokenDecode(accessToken)
        const uploadImage = (event: any) => {
            setImage(event.target.files[0]);
        };

        const productSubmitHandler = (event: any) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append(`files`, image)
            createProduct(title, description, rating, game, userId, image, price)
            setTimeout( () => {
                navigate('/');
            }, 500);
            }

            if(image){
                return (
                    <section className='login'>
                        <Title title={'Sale'}/>
                        <div className="container">
                            <div className="login-form">
                                <Input type={'text'}
                                       placeholder={'title'}
                                       name={'title'}
                                       value={title}
                                       change={setTitle}
                                />
                                <Textarea
                                    placeholder={'description'}
                                    name={'description'}
                                    value={description}
                                    change={setDescription}
                                />
                                <Input type={'text'}
                                       placeholder={'rating'}
                                       name={'rating'}
                                       value={rating}
                                       change={setRating}
                                />
                                <Selector
                                    selectorValue={game}
                                    change={setGame}
                                    value1={'Dota 2'}
                                    value2={'LOL'}
                                    name={'game'}
                                    placeholder={'Select game'}

                                />
                                <Upload change={uploadImage}
                                        placeholder={image.name}/>
                                <Input
                                       type={'number'}
                                       placeholder={'price'}
                                       name={'price'}
                                       value={price}
                                       change={setPrice}
                                />
                                <button onClick={productSubmitHandler}
                                        type='submit'
                                        name='submit'
                                        className='submit'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </section>
                );
            }else{
                return (
                    <section className='login'>
                        <Title title={'Sale'}/>
                        <div className="container">
                            <div className="login-form">
                                <Input type={'text'}
                                       placeholder={'title'}
                                       name={'title'}
                                       value={title}
                                       change={setTitle}
                                />
                                <Textarea
                                    placeholder={'description'}
                                    name={'description'}
                                    value={description}
                                    change={setDescription}
                                />
                                <Input type={'text'}
                                       placeholder={'rating'}
                                       name={'rating'}
                                       value={rating}
                                       change={setRating}
                                />
                                <Selector
                                    selectorValue={game}
                                    change={setGame}
                                    value1={'Dota 2'}
                                    value2={'LOL'}
                                    name={'game'}
                                    placeholder={'Select game'}

                                />
                                <Upload change={uploadImage}
                                        placeholder={'Select image'}/>
                                <Input
                                    type={'number'}
                                    placeholder={'price'}
                                    name={'price'}
                                    value={price}
                                    change={setPrice}
                                />
                                <button onClick={productSubmitHandler}
                                        type='submit'
                                        name='submit'
                                        className='submit'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </section>
                );
            }
    }
    return (
        <section className='login'>
            <h1 className='login-title'>You`re not authorized!</h1>
        </section>
    )
};

export default ProductSale;