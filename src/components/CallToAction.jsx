import React from 'react';

const CallToAction = () => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
    };

    return (
        <section className=" py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-8">Don't miss out on this opportunity. Join us today!</p>
                <button
                    className="bg-sage-green hover:bg-gray-custom text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
                    onClick={handleButtonClick}
                >
                    Sign Up Now
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
