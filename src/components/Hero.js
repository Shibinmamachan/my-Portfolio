import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import reactLogo from "../images/react-logo.webp";

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


  // MERN Icons (working external images)
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
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        color: "white",
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
          alt="Tech Icon"
          style={{
            width: "70px",
            position: "absolute",
            top: icon.top,
            left: icon.left,
            right: icon.right,
            opacity: 0.85,
            filter: "drop-shadow(0 0 10px #00d8ff)",
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
        }}
      ></motion.div>

      {/* Floating Rotating React logo */}
      <motion.img
        src={reactLogo}
        alt="React Logo"
        style={{
          width: "160px",
          marginBottom: "20px",
          filter: "drop-shadow(0 0 20px #00d8ff)",
        }}
        animate={{ rotate: 360, y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      {/* Name */}
      <motion.h1
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          textShadow: "0 0 25px rgba(255,255,255,0.6)",
        }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Shibin Mamachan
      </motion.h1>

      {/* Typewriter */}
      <motion.p
        style={{
          fontSize: "22px",
          marginTop: "10px",
          color: "#e0e0e0",
          fontFamily: "monospace",
          whiteSpace: "nowrap",
          overflow: "hidden",
          borderRight: "3px solid #00d8ff",
          width: "0",
        }}
        initial={{ width: 0 }}
        animate={{ width: "260px" }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      >
        MERN Stack Developer
      </motion.p>
    </section>
  );
}
