import React from "react";

type PackageItem = {
  title: string;
  duration: string;
  price: string;
};

type PackageProps = {
  category: string;
  image: string;
  items: PackageItem[];
  buttonLabel?: string;
};

const Package: React.FC<PackageProps> = ({
  category,
  image,
  items,
  buttonLabel = "View More",
}) => (
  <div
    style={{
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      overflow: "hidden",
      width: 350,
      margin: 16,
      display: "flex",
      flexDirection: "column",
    }}
  >
    <img
      src={image}
      alt={category}
      style={{ width: "100%", height: 180, objectFit: "cover" }}
    />
    <div style={{ padding: 24, flex: 1 }}>
      <h2 style={{ margin: "0 0 16px 0", fontSize: 28 }}>{category}</h2>
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <div>
            <div style={{ fontWeight: 500 }}>{item.title}</div>
            <div style={{ color: "#888", fontSize: 15 }}>{item.duration}</div>
          </div>
          <div style={{ fontWeight: 600, fontSize: 18 }}>{item.price}</div>
        </div>
      ))}
      <button
        style={{
          width: "100%",
          background: "#FFC107",
          color: "#222",
          border: "none",
          borderRadius: 6,
          padding: "14px 0",
          fontSize: 18,
          fontWeight: 500,
          marginTop: 24,
          cursor: "pointer",
        }}
      >
        {buttonLabel}
      </button>
    </div>
  </div>
);

export default Package;
