
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Background slideshow
  const images = [
    "https://images.unsplash.com/photo-1503264116251-35a269479413",
    "https://tse1.mm.bing.net/th/id/OIP.Lvjz5u5LQTS4lJIPs1trnwHaEq?w=1022&h=643&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546",
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Floating MERN icons
  const techIcons = [
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      top: "20%",
      left: "10%",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      top: "70%",
      left: "15%",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      top: "25%",
      right: "10%",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      top: "75%",
      right: "15%",
    },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        color: "white",
        padding: "100px 20px 50px",
      }}
    >
      {/* Background Slideshow */}
      <motion.div
        key={bgIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: `url(${images[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: 0,
          zIndex: -3,
          filter: "brightness(0.45)",
        }}
      />

      {/* Floating MERN Tech Icons */}
      {techIcons.map((icon, i) => (
        <motion.img
          key={i}
          src={icon.src}
          alt="Technology icon"
          style={{
            width: "70px",
            position: "absolute",
            top: icon.top,
            left: icon.left,
            right: icon.right,
            opacity: 0.75,
            filter: "drop-shadow(0 0 10px #00d8ff)",
            pointerEvents: "none",
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + i,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Gradient */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 5 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(0,150,255,0.3), rgba(0,0,0,0.8))",
          zIndex: -2,
          pointerEvents: "none",
        }}
      />

      
      
      
      {/* Flowing Code Behind Profile */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          width: "min(600px, 100vw)",
          height: "350px",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
          maskImage:
            "radial-gradient(ellipse, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse, black 20%, transparent 75%)",
        }}
      >
        {[
          "const developer = 'Shibin';",
          "function buildWebsite() { }",
          "React.useState(true);",
          "app.listen(3000);",
          "const skills = ['MERN'];",
          "MongoDB.connect(database);",
          "return <Portfolio />;",
          "npm run build",
          "async function createApp() {}",
          "console.log('Hello World');",
          "import React from 'react';",
          "router.get('/projects', handler);",
        ].map((code, i) => (
          <motion.div
            key={i}
            initial={{
              x: i % 2 === 0 ? -450 : 450,
              opacity: 0,
            }}
            animate={{
              x: i % 2 === 0 ? 450 : -450,
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 7 + (i % 4) * 2,
              repeat: Infinity,
              delay: i * 0.55,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: `${8 + (i * 17) % 85}%`,
              left: 0,
              whiteSpace: "nowrap",
              fontFamily: "Consolas, monospace",
              fontSize: i % 3 === 0 ? "14px" : "12px",
              color: i % 2 === 0 ? "#00d8ff" : "#a5e075",
              textShadow: "0 0 10px rgba(0,216,255,0.8)",
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>


      {/* Animated Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          padding: "4px",
          marginBottom: "25px",
          background:
            "linear-gradient(135deg, #00d8ff, #6c63ff, #00d8ff)",
          boxShadow:
            "0 0 25px rgba(0,216,255,0.45)",
          zIndex: 1,
        }}
      >
        <img
          src="/profile.jpg"
          alt="Shibin Mamachan"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
            display: "block",
            border: "3px solid #080c14",
            boxSizing: "border-box",
          }}
        />
      </motion.div>


      {/* Name */}
      <motion.h1
        style={{
          fontSize: "clamp(32px, 6vw, 60px)",
          fontWeight: "bold",
          textAlign: "center",
          margin: "0",
          textShadow: "0 0 25px rgba(255,255,255,0.6)",
          zIndex: 1,
        }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Shibin Mamachan
      </motion.h1>

      {/* Typewriter Role */}
      <motion.p
        style={{
          fontSize: "clamp(16px, 3vw, 22px)",
          marginTop: "15px",
          color: "#e0e0e0",
          fontFamily: "monospace",
          textAlign: "center",
          maxWidth: "100%",
          overflow: "hidden",
          borderRight: "3px solid #00d8ff",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          zIndex: 1,
        }}
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "260px" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        MERN Stack Developer
      </motion.p>

      {/* Short Introduction */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          maxWidth: "600px",
          textAlign: "center",
          lineHeight: 1.8,
          color: "#e2e8f0",
          fontSize: "16px",
          zIndex: 1,
        }}
      >
        Building responsive websites and modern full-stack
        applications with the MERN stack.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "15px",
          zIndex: 1,
        }}
      >
        <a href="#projects" style={primaryButtonStyle}>
          View Projects
        </a>

        <a href="#contact" style={outlineButtonStyle}>
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

function dotStyle(color) {
  return {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: color,
    flexShrink: 0,
  };
}

const primaryButtonStyle = {
  padding: "12px 20px",
  borderRadius: "8px",
  background: "#00d8ff",
  color: "#07111c",
  fontWeight: "bold",
  textDecoration: "none",
};

const outlineButtonStyle = {
  padding: "12px 20px",
  borderRadius: "8px",
  border: "1px solid #00d8ff",
  color: "#00d8ff",
  fontWeight: "bold",
  textDecoration: "none",
};
