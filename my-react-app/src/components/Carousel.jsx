import React, { useRef, useEffect, useState } from 'react';


export const Carousel = ({ entries }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset or clamp the current slide index when entries change
  useEffect(() => {
    if (currentIndex >= entries.length) {
      setCurrentIndex(0);
    }
    if (carouselRef.current) {
      const carousel = new bootstrap.Carousel(carouselRef.current, {
        interval: false, // Disable auto cycling
      });
      carousel.to(currentIndex);
    }
  }, [entries, currentIndex]);

  const goToSlide = (index) => {
    if (index >= 0 && index < entries.length) {
      setCurrentIndex(index);
      const carousel = new bootstrap.Carousel(carouselRef.current);
      carousel.to(index);
    }
  };

  const handleInputChange = (e) => {
    const index = parseInt(e.target.value, 10);
    if (!isNaN(index) && index >= 0 && index < entries.length) {
      goToSlide(index);
    }
  };

  if (entries.length === 0) return null;

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" ref={carouselRef}>
        {/* Indicators */}
        <ol className="carousel-indicators">
          {entries.map((_, index) => (
            <li
              key={index}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => goToSlide(index)}
            ></li>
          ))}
        </ol>

        {/* Inner */}
        <div className="carousel-inner">
          {entries.map((entry, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={entry.src} className="d-block w-100 carousel-img" alt={entry.title} />
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
          onClick={() => goToSlide(currentIndex - 1)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() => goToSlide(currentIndex + 1)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



    </div>
  );
};


