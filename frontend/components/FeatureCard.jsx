export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
