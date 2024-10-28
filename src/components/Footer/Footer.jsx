import React, { useEffect, useState } from 'react';
import '../../styles/Footer.css';

const Footer = () => {
    const [showLine, setShowLine] = useState(false);
    
    const handleScroll = () => {
    
        const scrollPosition = window.scrollY + window.innerHeight;
        //window.scrollY:la cantidad de píxeles que se ha desplazado la ventana desde la parte superior de la página
        //window.innerHeight: la altura visible de la ventana del navegador
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= documentHeight - 60) { 
            setShowLine(true);
        } else {
            setShowLine(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer>
            <div className="footer">
                
                <div className="footer-contact">
                    <h3>Información de Contacto:</h3>
                    <p>Dirección física: Calle Ejemplo, Ciudad.</p>
                    <p>Correo electrónico: contacto@ejemplo.com</p>
                    <p>Número de teléfono: (123) 456-7890</p>
                </div>

                <div className="footer-links">
                    <h3>Enlaces Importantes:</h3>
                    <a href="/about">Acerca de nosotros</a>
                    <a href="/privacy">Política de privacidad</a>
                    <a href="/terms">Términos y condiciones</a>
                    <a href="/faq">Preguntas Frecuentes (FAQ)</a>
                    <a href="/support">Soporte al cliente</a>
                </div>

                <div className="footer-social">
                    <h3>Redes Sociales:</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                <div className="footer-map">
                    <h3>Mapa del Sitio:</h3>
                    <a href="/">Inicio</a>
                    <a href="/about">Acerca de</a>
                    <a href="/services">Servicios</a>
                    <a href="/contact">Contacto</a>
                </div>

                <div className="footer-credits">
                    <p>&copy; {new Date().getFullYear()} Futura BioLab. Todos los derechos reservados.</p>
                </div>
            </div>
            
            {/* Línea de scroll */}
            <div className={`scroll-line ${showLine ? 'active' : ''}`}></div>
        </footer>  
    );
};

export default Footer;
