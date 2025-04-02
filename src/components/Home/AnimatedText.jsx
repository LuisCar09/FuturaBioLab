const AnimatedText = ({ text }) => {
  return (
    <div className="animated-text-container">
      {"FUTURABIOLAB".split("").map((letter, index) => (
        <span key={index} className="animated-letter">
          {letter}
        </span>
      ))}
    </div>
  );
};


export default AnimatedText