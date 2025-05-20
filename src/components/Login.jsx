import React, { useState } from 'react';
import "./Login.css";


const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username === form.username && user.password === form.password) {
            alert('Login successful!');
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input className="inp" name="username" placeholder="Username" onChange={handleChange} />
            <input className="inp" name="password" placeholder="Password" type="password" onChange={handleChange} />
            <button type="submit">Login</button>
            <div className="footer">
                23071A05P7
            </div>
        </form>
    );
};

export default Login;