import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './LoginPage.css'

function LoginPage({users, onLogin}) {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [showInvalidLogin, setShowInvalidLogin] = useState(false);
    const activeUser = useContext(ActiveUserContext);

    if (activeUser) {
        return <Redirect to="/"/>
    }

    function login() {
        
        // let activeUser = null;
        // for (const user of users) {
        //     if (user.email === email && user.pwd === pwd) {
        //         activeUser = user;
        //         break;
        //     }
        // }

        const activeUser = users.find(user => user.email === email && user.pwd === pwd);

        if (activeUser) {
            // Invoke parent (App) function to update the activeUser state in the app
            onLogin(activeUser);
        } else {
            // Showing an alert
            setShowInvalidLogin(true);
        }
    }

    return (
        <div className="p-login">
            <h1>התחברות</h1>
            <h2>או  <Link to="/signup"> הרשמה </Link> </h2>
            {showInvalidLogin ?
                <Alert variant="danger" onClose={() => setShowInvalidLogin(false)} dismissible>שם או סיסמה לא נכונים</Alert> : null}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>דוא"ל</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>סיסמה</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        value={pwd} onChange={e => setPwd(e.target.value)} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="success" type="button" onClick={login}>
                        התחברות
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginPage;