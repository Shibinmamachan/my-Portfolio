import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        borderTop: "2px solid #555",
        borderBottom: "2px solid #555",
        position: "relative",
        overflow: "hidden",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Floating React logo */}
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React logo"
        style={{
          width: "120px",
          position: "absolute",
          top: "20%",
          right: "10%",
          opacity: 0.3,
        }}
        animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Floating Node.js logo */}
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        alt="Node logo"
        style={{
          width: "110px",
          position: "absolute",
          bottom: "15%",
          left: "10%",
          opacity: 0.3,
        }}
        animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          backdropFilter: "blur(6px)",
          background: "rgba(0,0,0,0.5)",
          padding: "40px",
          borderRadius: "16px",
          border: "2px solid rgba(255,255,255,0.2)",
        }}
      >
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          About Me
        </motion.h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Profile Image */}
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
            alt="Developer"
            style={{
              width: "180px",
              borderRadius: "50%",
              border: "3px solid #00d8ff",
              boxShadow: "0 0 20px #00d8ff99",
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.p
            style={{
              maxWidth: "600px",
              lineHeight: "1.7",
              fontSize: "1.1rem",
              color: "#ddd",
            }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            I am a dedicated **MERN Stack Developer** with strong experience in
            building modern full-stack web applications. I specialize in:
            <br /><br />
            ✔ React.js for dynamic UI  
            ✔ Node.js & Express for backend APIs  
            ✔ MongoDB for database systems  
            ✔ JWT Authentication  
            ✔ RESTful APIs & Cloud Deployment
            <br /><br />
            I focus on writing **clean, scalable, and optimized code** while
            ensuring smooth user experiences and responsive UI designs.
          </motion.p>
        </div>

        {/* Skills Bar Animation */}
        <div style={{ marginTop: "30px" }}>
          {[
            { skill: "React.js", width: "90%" },
            { skill: "Node.js", width: "85%" },
            { skill: "Express.js", width: "80%" },
            { skill: "MongoDB", width: "75%" },
          ].map((item, index) => (
            <motion.div
              key={index}
              style={{ marginBottom: "15px" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <span style={{ color: "#fff", fontSize: "1rem" }}>
                {item.skill}
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: item.width }}
                transition={{ duration: 1 }}
                style={{
                  height: "8px",
                  background: "#00d8ff",
                  borderRadius: "4px",
                  marginTop: "5px",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
