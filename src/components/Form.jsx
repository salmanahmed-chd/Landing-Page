import React, { useState, useEffect } from 'react';

const Form = () => {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
        setShowForm(false);
    };

    return (
        <div className={`fixed bottom-0 left-0 w-full transition-transform duration-500 transform ${showForm ? 'translate-y-0' : 'translate-y-full'}`}>
            <form className="bg-white p-8 rounded-t-lg shadow-lg" onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold mb-4">Get Exclusive Offers</h2>
                <p className="text-gray-600 mb-6">Enter your phone number and email address to receive exclusive offers:</p>
                <input className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded" type="tel" placeholder="Phone Number" required />
                <input className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded" type="email" placeholder="Email Address" required />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
