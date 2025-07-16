import React, { useState } from 'react'
import image1 from '../assets/carousel2.jpg'
import image2 from '../assets/zakat.jpg'
function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [image1, image2];

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    return (
        <div className='relative w-full  mx-auto overflow-hidden'>
            <div className='flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                <img src={images[currentIndex]} alt="carousel" className='w-full flex-shrink-0 h-screen object-cover' />
                ))}
            </div>
            <button onClick={prevSlide} className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-gray-500'>prev</button>
            <button onClick={nextSlide} className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-gray-500'>next</button>
        </div>
    )
}

export default HeroCarousel
