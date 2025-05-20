import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        if (Object.values(form).some((field) => field === '')) {
            setError("All fields are required!");
            return;
        }

        localStorage.setItem('user', JSON.stringify(form));
        alert('Registration successful!');
        setError('');
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder="First Name" onChange={handleChange} />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} />
                <input name="username" placeholder="Username" onChange={handleChange} />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} />
                <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
                <input name="phone" placeholder="Phone Number" onChange={handleChange} />
                <input name="address" placeholder="Address" onChange={handleChange} />
                
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;