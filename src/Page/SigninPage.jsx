import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function SigninPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>התחברות</h1>
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
                    <label />
                    <button className="primary" type="submit"> אשר </button>
                </div>
                <div>
                    <label />
                    <div>
                        לקוח חדש? {' '}<Link to="/register">פתחו חשבון</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
