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
                  name={props.name}/>
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
    const [price, setPrice] = useState(undefined)
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
                        <Input type={'text'}
                               placeholder={'game'}
                               name={'game'}
                               value={game}
                               change={setGame}
                        />
                        <p className='sale-userid'>You`re ID: {userId}</p>
                        <label className='login-input-file-label'>
                            Select Image <br/>
                            <input onChange={uploadImage}
                                type="file"
                                   name='image'
                                   className='login-input-file'/>
                        </label>
                        <Input type={'text'}
                               placeholder={'price'}
                               name={'price'}
                               value={price}
                               change={setPrice}
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
    return (
        <section className='login'>
            <h1 className='login-title'>You`re not authorized!</h1>
        </section>
    )
};

export default ProductSale;