
import React from 'react';
import '../../styles/Hero.css';
import SectionTop from './SectionTop';
import GrowSection from './GrowSection';

const Hero = () => {
    return (
        <main>
            <section>
                <SectionTop />
            </section>
            <section>
                <GrowSection />
            </section>
        </main>
    );
};

export default Hero;