import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const GrowSection = () => {
  const ref = useRef(null);

  // useScroll observa el progreso del scroll en la sección
  const { scrollYProgress } = useScroll({
    target: ref,  // El scroll se realiza dentro de esta sección
  });

  // Interpolamos el tamaño y la altura en función del progreso del scroll
  const size = useTransform(
    scrollYProgress, 
    [0, 1], // Progreso de scroll: desde 0 hasta 1
    ["50vw", "100vw"] // El círculo comienza pequeño y crece hasta ocupar toda la pantalla
  );

  const height = useTransform(
    scrollYProgress, 
    [0, 1], // Progreso de scroll
    ["50vh", "100vh"] // El círculo comienza pequeño y crece hasta ocupar toda la pantalla
  );

  const borderRadius = useTransform(
    scrollYProgress, 
    [0, 1], // Progreso de scroll
    ["50%", "0%"] // El círculo cambia a rectángulo y luego vuelve a ser círculo
  );

  return (
    <div className="growSection" ref={ref}>
      <motion.div
        className="section-growContainer"
        style={{
          width: size,
          height: height,
          borderRadius: borderRadius,
        }}
      >
        <h2 className="section-growTitle">Grow your vision</h2>
        <button className="section-growButton">
          <Link to="/search" className="link-growSection">
            Start Now
          </Link>
        </button>
      </motion.div>
    </div>
  );
};

export default GrowSection;




