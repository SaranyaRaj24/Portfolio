
import React, { useEffect, useRef } from "react";
import webDevBackground from "../Assets/bg4.avif";

const ParallaxBackground = () => {
  const layerRefs = useRef([]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    layerRefs.current.forEach((layer, index) => {
      const speed = (index + 1) * 0.03;
      const x = (window.innerWidth - clientX * speed) / 100;
      const y = (window.innerHeight - clientY * speed) / 100;

      layer.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={styles.container}>
      <div
        ref={(el) => (layerRefs.current[0] = el)}
        style={{ ...styles.layer, backgroundImage: `url(${webDevBackground})` }}
      ></div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    zIndex: -1,
  },
  layer: {
    position: "absolute",
    width: "200%",
    height: "200%",
    top: "-50%",
    left: "-50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    willChange: "transform",
  },
};

export default ParallaxBackground;
