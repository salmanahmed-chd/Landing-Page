import React from 'react';
import fd from "../assets/freeDelivery.png"
import cod from "../assets/cod.png"
import hm from "../assets/handmade.png"
import pq from "../assets/premium.png"

const WhyChooseMeSection = () => {
    return (
        <section className="shadow-md py-12 mb-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Should You Go Ahead With Me?</h2>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 text-center">
                        <img src={fd} alt="Icon 1" className="w-20 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Delivery</h3>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 text-center">
                        <img src={pq} alt="Icon 2" className="w-20 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Premium Quality</h3>

                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 text-center">
                        <img src={cod} alt="Icon 3" className="w-20 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Cash On Delivery</h3>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 text-center">
                        <img src={hm} alt="Icon 4" className="w-20 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Handmade</h3>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseMeSection;
