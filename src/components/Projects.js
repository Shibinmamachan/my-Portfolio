import React from "react";
import { motion } from "framer-motion";
import ecommerceImg from "../images/ecom.jpg";
import doctorImg from "../images/hos.webp";
import ytImg from "../images/youtube_clone.webp";
import "./projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Ecommerce Website",
      desc: "Full stack ecommerce platform with product lists, cart & payment.",
      img: ecommerceImg
    },
    {
      name: "Doctor Appointment App",
      desc: "JWT secure booking system with availability checking.",
      img: doctorImg
    },
    {
      name: "YouTube Clone",
      desc: "Video upload, search, and playback using MERN stack.",
      img: ytImg
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <motion.div
            key={p.name}
            className="project-card"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.08, rotate: 1 }}
            viewport={{ once: true }}
          >
            <motion.div className="image-wrapper" whileHover={{ scale: 1.05 }}>
              <img src={p.img} alt={p.name} className="project-img" />
            </motion.div>

            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
