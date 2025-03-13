import { useState } from 'react';

import AnimatedText from './AnimatedText';

const SectionTop = () => {
    const [isHovered, setIsHovered] = useState(false);
    const imageUrl = 'https://img.freepik.com/fotos-premium/imaginese-biotecnologos-marinos-utilizando-ingenieria-genetica-generativa_1198283-89240.jpg';
   
        return (
            <>
         
            <div className='sectionTop-div'>
                <img 
                    className={`sectionTop-backgroundImage ${isHovered ? 'blur' : ''}`} 
                    src={imageUrl} 
                    alt="Background"
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} 
                />
               
            </div>
            <div className="sectionTop-content">
                <AnimatedText text="FUTURABIOLAB" />
            </div>
            </>
    );
};

export default SectionTop;



