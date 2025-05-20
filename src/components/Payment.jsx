import React, { useState } from 'react';
import './Payment.css'

const Payment = () => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        cvv: '',
        expiry: '',
        otp: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment submitted (demo only)');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Payment Page</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        maxLength={16}
                        required
                        className="w-full border px-3 py-2 rounded inp"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="block mb-1 font-medium">CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            maxLength={3}
                            required
                            className="w-full border px-3 py-2 rounded inp"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block mb-1 font-medium">Expiry</label>
                        <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded inp"
                        />
                    </div>
                </div>
                <div>
                    <label className="block mb-1 font-medium">OTP</label>
                    <input
                        type="text"
                        name="otp"
                        value={formData.otp}
                        onChange={handleChange}
                        maxLength={6}
                        required
                        className="w-full border px-3 py-2 rounded inp"
                        placeholder="Enter OTP"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Proceed to Pay
                </button>
            </form>
            <div className="footer">
                23071A05P7
            </div>
        </div>
    );
};

export default Payment;
