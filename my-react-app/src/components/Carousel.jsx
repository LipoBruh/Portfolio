import React from 'react';

export const Carousel = ({ entries }) => {
  if (entries.length === 0) return null;

  return (
    <div id="carouselExampleIndicators" className="carousel slide my-4">
      {/* Indicators */}
      <ol className="carousel-indicators">
        {entries.map((_, index) => (
          <li
            key={index}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>

      {/* Inner */}
      <div className="carousel-inner">
        {entries.map((entry, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img src={entry.src} className="d-block w-100" alt={entry.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{entry.title}</h5>
              <p>{entry.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
