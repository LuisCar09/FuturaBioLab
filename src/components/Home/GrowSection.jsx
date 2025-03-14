import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const GrowSection = () => {
  const ref = useRef(null);

  // useScroll observa el progreso del scroll en la sección
  const { scrollYProgress } = useScroll({
    target: ref,  // El scroll se realiza dentro de esta sección
    offset: ["start end", "center center", "start end"], // La animación se activa cuando el 50% de la sección está en la vista
  });

  // Interpolamos el tamaño y la altura en función del progreso del scroll
  const size = useTransform(
    scrollYProgress, 
    [0, 0.5, 1],  // Rango de progreso del scroll
    ["50vw", "100vw", "50vw"] // El círculo comienza pequeño, se expande en el centro, y luego vuelve a su tamaño original
  );

  const height = useTransform(
    scrollYProgress, 
    [0, 0.5, 1],  // Rango de progreso del scroll
    ["50vh", "100vh", "50vh"] // Similar al tamaño
  );

  const borderRadius = useTransform(
    scrollYProgress, 
    [0, 0.5, 1],  // Rango de progreso del scroll
    ["50%", "0%", "50%"] // Empieza como un círculo, se convierte en rectángulo en el centro y luego vuelve a ser círculo
  );

  return (
    <>
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
    </> 
  );
};

export default GrowSection;



