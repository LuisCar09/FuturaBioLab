import React, { useState, useEffect } from 'react';

const Projects = () => {
    const images = [
        'https://i.pinimg.com/564x/50/f8/32/50f832c0f40ea37ddbba5fa57b112edb.jpg',
        'https://i.pinimg.com/564x/7b/dc/08/7bdc08d651e84a9a5ad0a5c37dcc3be5.jpg',
        'https://i.pinimg.com/564x/a1/b1/9b/a1b19b9fbe065d5938bc1dbbe27181c6.jpg',
        'https://i.pinimg.com/564x/fe/97/52/fe97522ba1b3b782c33320349ef4a2ab.jpg',
        'https://i.pinimg.com/564x/8f/65/61/8f6561486c40782bfae8b8db99531ba3.jpg',
        'https://i.pinimg.com/564x/b0/54/d8/b054d871cc71660b71b8e2c540f55ad1.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const startCarousel = () => {
        const id = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 1000);
        setIntervalId(id);
    };

    const stopCarousel = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    useEffect(() => {
        if (isHovering) {
            startCarousel();
        } else {
            stopCarousel();
        }

        return () => stopCarousel(); 
    }, [isHovering]);

    const getVisibleImages = () => {
        const visibleImages = [];
        const numberOfVisibleImages = window.innerWidth < 600 ? 1 : 4
        for (let i = 0; i < numberOfVisibleImages; i++) {
            visibleImages.push(images[(currentIndex + i) % images.length]);
        }
        return visibleImages;
    };

    return (
        <div className='sectionProjects'>
            <h2 className='sectionProjects-Title'>Projects</h2>
            <div 
                className='sectionProject-carousel'
                onMouseEnter={() => setIsHovering(true)} 
                onMouseLeave={() => setIsHovering(false)} 
            >
                <div className='sectionProject-carousel-images'>
                    {getVisibleImages().map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index}`} className='sectionProject-carousel-image' />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;