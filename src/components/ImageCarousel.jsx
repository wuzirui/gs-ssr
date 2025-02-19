import React from 'react';

const ImageCarousel = () => {
  return (
    <section className="hero is-small">
      <div className="hero-body">
        <div className="container">
          <div id="results-carousel" className="carousel results-carousel">
            <div className="item">
              <img src="static/images/placeholder.jpg" alt="Placeholder" />
              <h2 className="subtitle has-text-centered">
                Image description (placeholder)
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel; 