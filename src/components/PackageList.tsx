import Package from "./Package";

const packages = [
  {
    category: "Romantic Holidays",
    image: "/images/romantic.jpg",
    items: [
      { title: "Athirapilly Munnar", duration: "4 days", price: "₹19999" },
      { title: "Kashmir Honeymoon", duration: "6 days", price: "₹24999" },
      {
        title: "Honeymoon Special in Himachal",
        duration: "6 days",
        price: "₹24999",
      },
      { title: "Leh Ladakh Honeymoon", duration: "6 days", price: "₹24999" },
    ],
  },
  {
    category: "Family Fun",
    image: "/images/family.jpg",
    items: [
      { title: "Nainital Corbet Kausani", duration: "6 days", price: "₹23999" },
      { title: "Shimla Manali Dalhousie", duration: "8 days", price: "₹26999" },
      { title: "Romantic Andaman", duration: "6 days", price: "₹19999" },
      { title: "Go Goa", duration: "5 days", price: "₹9999" },
    ],
  },
  {
    category: "Pilgrimage Tours",
    image: "/images/pilgrimage.jpg",
    items: [
      {
        title: "Haridwar Rishikesh",
        duration: "6 days 4 cities",
        price: "₹19999",
      },
      { title: "Chardham Yatra", duration: "10 days", price: "₹37999" },
      {
        title: "Golden Triangle",
        duration: "6 days 3 cities",
        price: "₹15999",
      },
      {
        title: "Mathura-Vrindavan",
        duration: "4 days 3 cities",
        price: "₹15999",
      },
    ],
  },
];

export function PackagesList() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {packages.map((pkg, idx) => (
        <Package key={idx} {...pkg} />
      ))}
    </div>
  );
}
