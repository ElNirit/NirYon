import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userAct';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterPage(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const redirect = props.location.search 
        ? props.location.search.split('=')[1] 
        : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('הסיסמה לא זהה בכל השדרות');} else{
        dispatch(register(name, email, password));
        }
    }
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>פתיחת חשבון חדש</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name"> שם </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="הכניסו את השם פה"
                        required
                        onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="email"> אימייל </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="הכניסו את האימייל פה"
                        required
                        onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password"> סיסמה </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="הכניסו את הסיסמה פה"
                        required
                        onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword"> אשרו סיסמה </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="הכניסו את הסיסמה שוב פה"
                        required
                        onChange={e => setConfirmPassword(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit"> אשר </button>
                </div>
                <div>
                    <label />
                    <div>
                         כבר לקוח? {' '}
                         <Link to={`/signin?redirect=${redirect}`}>הכנסו לחשבון</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
