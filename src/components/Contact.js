import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  form,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <motion.div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "rgba(25, 25, 25, 0.85)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 25px rgba(0, 150, 255, 0.3)",
          backdropFilter: "blur(10px)"
        }}
      >
        <motion.h2
          style={{
            textAlign: "center",
            marginBottom: "15px",
            fontSize: "32px",
            color: "#00aaff"
          }}
        >
          Contact Me
        </motion.h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            value={form.message}
            onChange={handleChange}
            style={inputStyle}
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            type="submit"
            disabled={loading}
            style={{
              ...buttonStyle,
              opacity: loading ? 0.6 : 1,
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {status && (
            <p
              style={{
                marginTop: "15px",
                textAlign: "center",
                color: status.includes("✅") ? "#00ffcc" : "#ff4d4d"
              }}
            >
              {status}
            </p>
          )}
        </form>

        {/* ✅ ✅ ✅ WHATSAPP BUTTON — NOW IN CORRECT PLACE ✅ ✅ ✅ */}
        <motion.a
          href="https://wa.me/918592019430?text=Hello%20Shibin,%20I%20saw%20your%20portfolio"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "block",
            marginTop: "18px",
            width: "100%",
            padding: "12px",
            background: "linear-gradient(45deg,#25D366,#128C7E)",
            borderRadius: "10px",
            color: "white",
            textAlign: "center",
            fontSize: "18px",
            textDecoration: "none",
            boxShadow: "0 0 15px rgba(37, 211, 102, 0.5)"
          }}
        >
          💬 Chat on WhatsApp
        </motion.a>

      </motion.div>
    </motion.section>
  );
}

/* ✅ Input Styles */
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "2px solid #444",
  background: "#111",
  color: "white",
  outline: "none"
};

/* ✅ Button Styles */
const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(45deg, #007bff, #00d4ff)",
  border: "none",
  borderRadius: "10px",
  color: "white",
  fontSize: "18px"
};
