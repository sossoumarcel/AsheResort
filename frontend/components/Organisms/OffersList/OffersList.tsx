import React from "react";

export interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface OffersListProps {
  offers: Offer[];
}

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {offers.map((offer) => (
        <div
          key={offer.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            width: "250px",
            textAlign: "center",
          }}
        >
          <img
            src={offer.image}
            alt={offer.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3 style={{ margin: "10px 0 5px" }}>{offer.title}</h3>
          <p>{offer.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OffersList;
