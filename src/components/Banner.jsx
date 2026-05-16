import { useState } from "react";

const slides = [
  { src: "/Cancún.jpg", alt: "Cancún" },
  { src: "/rio-de-janeiro.webp", alt: "Río de Janeiro" },
  { src: "/París.webp", alt: "París" },
  { src: "/Barcelona-ciudad.jpg", alt: "Barcelona" },
  { src: "/Miami.jpg", alt: "Miami" },
];

function Banner() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="banner">
      <img
        src={slides[current].src}
        alt={slides[current].alt}
        className="banner-img"
      />
      <div className="banner-overlay" />

      <button className="arrow arrow-prev" onClick={prev}>
        &#8249;
      </button>
      <button className="arrow arrow-next" onClick={next}>
        &#8250;
      </button>

      <div className="banner-search mt-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="¿A dónde quieres ir?"
          />
          <button className="btn btn-buscar " type="button">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
