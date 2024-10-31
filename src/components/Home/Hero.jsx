
import React from 'react';
import '../../styles/Hero.css';
import SectionTop from './SectionTop';
import GrowSection from './GrowSection';
import ProjectsSection from './ProjectsSection.jsx';

const Hero = () => {
    return (
        <main>
            <section>
                <SectionTop />
            </section>
            <section>
                <GrowSection />
            </section>
            <section>
                <ProjectsSection />
            </section>
        </main>
    );
};

export default Hero;