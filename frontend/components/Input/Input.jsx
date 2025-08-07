import React from 'react';

const Input = ({ type = "text", placeholder, value, onChange, label }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      {label && <label style={{ display: 'block', marginBottom: '5px' }}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          padding: "10px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default Input;
