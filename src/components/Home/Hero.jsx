
import React from 'react';
import '../../styles/Hero.css';
import SectionTop from './SectionTop';
import GrowSection from './GrowSection';
import ProjectsSection from './ProjectsSection.jsx';


const Hero = () => {
    return (
        <main className='main-hero'>
            <section className='sectionTop'>
                
                <SectionTop />
            </section>
            <section className='growSection'>
                <GrowSection />
            </section>
            <section className='projectsSection'>
                <ProjectsSection />
            </section>
        </main>
    );
};

export default Hero;