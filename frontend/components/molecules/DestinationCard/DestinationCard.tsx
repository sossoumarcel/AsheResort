import React from "react";

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, description }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: "300px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    margin: "10px",
    textAlign: "center",
    fontFamily: "Cormorant Garamond, serif",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  title: {
    fontSize: "1.2rem",
    margin: "10px 0 5px 0",
    color: "#2c3e50",
  },
  description: {
    fontSize: "1rem",
    padding: "0 10px 10px 10px",
    color: "#34495e",
  },
};

export default DestinationCard;
