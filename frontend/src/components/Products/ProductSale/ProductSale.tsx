import React, {useState} from 'react';
import axios from "axios";
import './ProductSale.scss';
import {createProduct} from "../../../store/action-creators/product";
import { useNavigate } from 'react-router-dom';
const api = 'http://localhost:5000';

function Input (props: any){
    return <input type={props.type}
                  className='login-input'
                  value={props.value}
                  placeholder={props.placeholder}
                  onChange={e => props.change(e.target.value)}
                  name={props.name} required/>
}

function Selector(props: any){
    return <div className='selector'>
                <label className='login-selector-label'>{props.placeholder}</label>
                <select required value={props.selectorValue} onChange={e => props.change(e.target.value)} name={props.name} className='login-selector'>
                    <option value={props.value}>{props.value}</option>
                    <option value={props.value1}>{props.value1}</option>
                    <option value={props.value2}>{props.value2}</option>
                </select>
            </div>
}

function Textarea (props: any){
    return <textarea className='login-textarea'
                     value={props.value}
                     placeholder={props.placeholder}
                     onChange={e => props.change(e.target.value)}
                     name={props.name}/>
}


const ProductSale = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [game, setGame] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState<any>()
    const [userId, setUserId] = useState<number>(0)
    const token = localStorage.getItem('token')
    if(token){
        const tokenDecode = (token: string ) => {
            const response = axios.get(`${api}/auth/${token}`)
                .then((response) => {
                    setUserId(response.data.token.id)
                })
        }
        const priceChange = (e:any) => {
            const regex = /^[0-9\b]+$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
                setPrice(e.target.value);
            }
        };

        tokenDecode(token)
        const uploadImage = (event: any) => {
            console.log(event.target.files[0])
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
                        <h1 className='login-title'>Sale</h1>
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
                                <label className='login-input-file-label'>
                                    {image.name} <br/>
                                    <input onChange={uploadImage}
                                           type="file"
                                           name='image'
                                           className='login-input-file'/>
                                </label>
                                <input className='login-input'
                                       type={'number'}
                                       placeholder={'price'}
                                       name={'price'}
                                       value={price}
                                       onChange={priceChange}
                                />
                                <button onClick={productSubmitHandler}
                                        type='submit'
                                        name='submit'
                                        className='login-submit'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </section>
                );
            }else{
                return (
                    <section className='login'>
                        <h1 className='login-title'>Sale</h1>
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
                                <label className='login-input-file-label'>
                                    Select image <br/>
                                    <input onChange={uploadImage}
                                           type="file"
                                           name='image'
                                           className='login-input-file'/>
                                </label>
                                <input className='login-input'
                                    type={'number'}
                                       placeholder={'price'}
                                       name={'price'}
                                       value={price}
                                       onChange={priceChange}
                                />
                                <button onClick={productSubmitHandler}
                                        type='submit'
                                        name='submit'
                                        className='login-submit'>
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