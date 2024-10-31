
import React from 'react';



const GrowSection = () => {
    const title = 'Grow your vision';
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit unde consectetur nemo accusamus deserunt nam numquam? Laudantium ipsum veritatis modi officia praesentium, sed maxime libero nulla. Repellendus, facilis harum.';
    const buttonText = 'Start Now';

    return (
     <div className='sectionGrow'>
        <div className='section-growContainer'>
            <h2 className='section-growTitle'>{title}</h2>
            <p>{description}</p>
            <button className='section-growButton'>{buttonText}</button>
        </div>
     </div>   
    );
};

export default GrowSection;