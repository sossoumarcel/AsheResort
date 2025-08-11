import React from 'react';

const Button = ({ label, onClick, type = "button", style = "primary" }) => {
  const styles = {
    primary: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    secondary: {
      backgroundColor: "#6c757d",
      color: "#fff",
    },
  };

  return (
    <button
      type={type}
      style={{ ...styles[style] }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
