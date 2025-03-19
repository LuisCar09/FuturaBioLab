import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const GrowSection = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);

  const videoUrl = "https://www.dropbox.com/scl/fi/9qzss3gstbijw2elksuym/Gen-3-Alpha-Turbo-575848552-i-want-a-video-where-Cropped-yeyo-salas-M-5.mp4?rlkey=122a89hqngexmb08pyfntbwha&st=r4ajr2az&dl=0&raw=1"; 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("No se pudo reproducir automáticamente:", error);
      });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const size = useTransform(scrollYProgress, [0, 1], ["50vw", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["50vh", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  return (
    <div className="growSection" ref={ref} style={{ position: "relative", overflow: "hidden", height: "150vh" }}>
      
      
      <motion.div
        className="section-growContainer"
        style={{
          width: size,
          height: height,
          borderRadius: borderRadius,
         
        }}
      >
       
        <motion.video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          onError={() => console.error("Error cargando el video")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", 
            borderRadius: borderRadius,
            position: "absolute",
            
          }}
        />

      
       

        <h2 className="section-growTitle" style={{ position: "absolute", zIndex: 2 }}>Grow your vision</h2>
        <button className="section-growButton" style={{ position: "absolute", zIndex: 2 }}>
          <Link to="/search" className="link-growSection">
            Start Now
          </Link>
        </button>
        
       </motion.div> 
    </div>
  );
};

export default GrowSection;



