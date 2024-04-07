import React, { useState, useEffect } from 'react';
import './ProductLaunch.css'; // Import CSS file with styles

const ProductLaunch = () => {
    const [countdownNumber, setCountdownNumber] = useState(3);
    const [displayHours, setDisplayHours] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdownNumber(prevCountdownNumber => {
                if (prevCountdownNumber > 0) {
                    return prevCountdownNumber - 1;
                } else {
                    return prevCountdownNumber;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const emailInput = document.getElementById('emailInput');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const handleEmailInput = () => {
            const email = emailInput.value;
            setDisplayHours(!emailPattern.test(email));
        };

        emailInput.addEventListener('input', handleEmailInput);

        return () => emailInput.removeEventListener('input', handleEmailInput);
    }, []);

    const updateDisplay = () => {
        if (displayHours) {
            return `01 : 00 : 0${countdownNumber}`;
        } else {
            return `00 : 0${countdownNumber}`;
        }
    };

    return (
        <div className="bg-purple-800 text-white flex items-center justify-center h-screen">
            <div className="text-center p-4">
                <div className="mb-8">
                    <p className="text-xs uppercase tracking-widest">The Product Platform</p>
                    <h1 className="text-3xl font-bold mb-4">Launching New Module Soon!</h1>
                    <p>Exciting things are in the works! We're currently crafting a new feature for you.<br />Keep an eye out for updates – We're working to make it available soon!</p>
                </div>

                <div className="countdown">
                    <i className="fas fa-rocket"></i>
                    <span className="text-lg font-bold" id="countdown">{updateDisplay()}</span>
                    <p>Minutes : Seconds</p>
                    <p className="mt-4 font-semibold">Sudeesh Kumar</p>
                    <p>Get ready for the reveal!</p>
                </div>

                <div className="my-8">
                    <p>Be the first to know! Share your email and We'll notify you when it's live</p>
                    <form className="flex flex-col items-center mt-4">
                        <input className="px-4 py-2 rounded-l-md focus:outline-none" type="email" placeholder="Please enter your email id" id="emailInput" />
                        <button className="bg-yellow-500 px-6 py-2 rounded-md text-black font-semibold hover:bg-yellow-600 transition-colors">Notify Me</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductLaunch;
