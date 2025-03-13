import React, { useState } from 'react';
import '../../styles/Hero.css';
//import SectionTop from './SectionTop';
import First from './First.jsx';
import GrowSection from './GrowSection';
import ProjectsSection from './ProjectsSection.jsx';
import NewsSection from './NewsSection.jsx'


const Hero = () => {
    
   
    return (
        <main> 
            
            <section className='sectionTop'>
                
                <First />
            </section>
            <section className='growSection'>
                <GrowSection />
            </section>
            <section className='projectsSection'>
                <ProjectsSection />
            </section>
            <section className='newsSection'>
                <NewsSection />
            </section>
        </main>
    );
};

export default Hero;