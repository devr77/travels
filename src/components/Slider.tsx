"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const destinations = [
  {
    image: "/darjeeling.jpg",
    title: "Darjeeling: Queen of Hills!",
  },
  {
    image: "/uttarakhand.jpg",
    title: "Uttarakhand- the abode of Gods.",
  },
  {
    image: "/ladakh.jpg",
    title: "Ladakh, the land of highest passes",
  },
  {
    image: "/andaman.jpg",
    title: "Andaman- True Oceanaholic",
  },
];

export default function DestinationSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div style={{ background: "#fbeaff", padding: "30px 0" }}>
      <Slider {...settings}>
        {destinations.map((dest, idx) => (
          <div key={idx} style={{ padding: "0 10px" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                textAlign: "center",
                paddingBottom: "20px",
              }}
            >
              <img
                src={dest.image}
                alt={dest.title}
                style={{ width: "100%", height: "220px", objectFit: "cover" }}
              />
              <div
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  marginTop: "18px",
                  color: "#222",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {dest.title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
