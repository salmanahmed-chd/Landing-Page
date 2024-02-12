import React from 'react'
import founder from "../assets/Founder.png"


const Founder = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden px-4 md:px-14 pt-8 md:pt-12 pb-4 mt-12 md:mt-36 mb-12 md:mb-20">
            <div className="text-4xl md:text-5xl font-bold mx-auto text-center mb-8 md:mb-12">
                About Founder
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly mb-8 md:mb-16">
                <div className="w-full md:w-2/5 mb-6 md:mb-0">
                    <img className="h-48 md:h-64 object-cover object-center mx-auto" src={founder} alt="Darsheel Savla" />
                </div>
                <div className="px-6 md:w-3/5 text-justify">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-8">Meet Darsheel Savla: Culinary Maestro & D2C Expert</h2>
                    <p className="text-sm md:text-base text-gray-600 mb-4">Darsheel Savla, co-founder of PatilKaki, is a dynamic force in the culinary world. Fueled by his passion for food and brand building, he's on a mission to share PatilKaki's legendary recipes with the world.</p>
                    <p className="text-sm md:text-base text-gray-600 mb-4">As a visionary leader, Darsheel specializes in Direct-to-Consumer (D2C) businesses. He's launching a consultancy program to help founders navigate the complexities of D2C commerce, offering industry secrets and strategies for accelerated growth.</p>
                    <p className="text-sm md:text-base text-gray-600 mb-4">Join Darsheel on this journey to unlock insights, supercharge your learning, and propel your business forward. 🚀📈</p>
                </div>
            </div>
        </div>
    );
}

export default Founder;
