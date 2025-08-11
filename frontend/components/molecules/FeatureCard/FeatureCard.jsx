import React from "react";

export const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "1rem",
        maxWidth: "600px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          style={{ width: "100%",height: "300px", borderRadius: "12px", marginBottom: "1rem" }}
        />
      )}
      <h3 style={{ margin: "0 0 0.5rem 0" }}>{title}</h3>
      <p style={{ color: "#555", margin: 0 }}>{description}</p>
    </div>
  );
};
