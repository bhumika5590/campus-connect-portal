import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting to server...");

  useEffect(() => {
    fetch("http://localhost:5050/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend connection failed"));
  }, []);

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h2>Campus Connect</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main style={styles.hero}>
        <div>
          <p style={styles.tag}>RV UNIVERSITY</p>

          <h1>
            Welcome to <span>Campus Connect</span>
          </h1>

          <p style={styles.description}>
            Your one-stop platform for connecting students, faculty,
            and campus services.
          </p>

          <div style={styles.buttons}>
            <button style={styles.primaryButton}>Get Started</button>
            <button style={styles.secondaryButton}>Learn More</button>
          </div>
        </div>

        <div style={styles.card}>
          <h3>System Status</h3>
          <div style={styles.status}>
            <span style={styles.dot}></span>
            Backend Connected
          </div>

          <p>{message}</p>
        </div>
      </main>

      <section style={styles.features}>
        <div style={styles.feature}>
          <h3>🎓 Students</h3>
          <p>
            Access academic information, events, announcements and
            campus resources.
          </p>
        </div>

        <div style={styles.feature}>
          <h3>👨‍🏫 Faculty</h3>
          <p>
            Manage courses, communicate with students and share
            important updates.
          </p>
        </div>

        <div style={styles.feature}>
          <h3>🏫 Campus</h3>
          <p>
            Stay connected with everything happening around the
            university.
          </p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f5f7fb",
    color: "#172033",
    fontFamily: "Arial, sans-serif",
  },

  navbar: {
    height: "70px",
    padding: "0 8%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  navLinks: {},

  hero: {
    minHeight: "500px",
    padding: "70px 8%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
  },

  tag: {
    color: "#4f46e5",
    fontWeight: "bold",
    letterSpacing: "2px",
  },

  h1: {},

  description: {
    maxWidth: "600px",
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#64748b",
  },

  buttons: {
    display: "flex",
    gap: "15px",
    marginTop: "30px",
  },

  primaryButton: {
    padding: "14px 25px",
    border: "none",
    borderRadius: "8px",
    background: "#4f46e5",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  secondaryButton: {
    padding: "14px 25px",
    border: "1px solid #4f46e5",
    borderRadius: "8px",
    background: "white",
    color: "#4f46e5",
    fontSize: "16px",
    cursor: "pointer",
  },

  card: {
    width: "300px",
    padding: "30px",
    borderRadius: "15px",
    background: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  status: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },

  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#22c55e",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    padding: "50px 8%",
    background: "white",
  },

  feature: {
    padding: "25px",
    borderRadius: "12px",
    background: "#f8fafc",
  },
};

export default App;