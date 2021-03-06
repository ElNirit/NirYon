import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartAct';
import CheckoutLine from '../components/CheckoutLine';

export default function ShippingAddPage(props) {
    const userSignin = useSelector((state) => state.userSignin);

    const {userInfo}= userSignin;
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;
    if (!userInfo){
        props.history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [zipCode, setZipCode] = useState(shippingAddress.zipCode);

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, city, zipCode}));
        props.history.push('/payment');
    };
    return (
        <div>
            <CheckoutLine step1 step2></CheckoutLine>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>כתובת למשלוח</h1>
                </div>
                <div>
                    <label htmlFor="fullName">שם מלא</label>
                    <input 
                        type="text" 
                        id="fullName" 
                        placeholder="הכניסו פה את השם המלא" 
                        value={fullName}
                        onChange={(e)=> setFullName(e.target.value)}
                        ></input>
                </div>
                <div>
                    <label htmlFor="address"> כתובת </label>
                    <input 
                        type="text" 
                        id="address" 
                        placeholder="הכניסו פה את הרחוב " 
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)}
                        ></input>
                </div>
                <div>
                    <label htmlFor="city">עיר</label>
                    <input 
                        type="text" 
                        id="city" 
                        placeholder="הכניסו פה את העיר " 
                        value={city}
                        onChange={(e)=> setCity(e.target.value)}
                        ></input>
                </div>
                <div>
                    <label htmlFor="zipCode"> מיקוד </label>
                    <input 
                        type="text" 
                        id="zipCode" 
                        placeholder="הכניסו פה את המיקוד " 
                        value={zipCode}
                        onChange={(e)=> setZipCode(e.target.value)}
                        ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">לתשלום</button>
                </div>
            </form>
        </div>
    )
}
