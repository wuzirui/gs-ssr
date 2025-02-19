import React from 'react';

const TeaserVideo = () => {
  // Try different path formats
  const imagePath = process.env.PUBLIC_URL + '/static/images/teaser.png';
  // or const imagePath = './static/images/teaser.png';
  // or const imagePath = 'static/images/teaser.png';

  console.log('Trying to load image from:', imagePath); // Debug log

  return (
    <section className="hero teaser">
      <div className="container is-max-desktop">
        <div className="hero-body">
          <img 
            src={imagePath}
            alt="Method Overview"
            style={{ width: '100%', borderRadius: '10px' }}
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              console.log('Current PUBLIC_URL:', process.env.PUBLIC_URL); // Debug log
            }}
          />
          <h2 className="subtitle has-text-centered">
            Overview of our method
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TeaserVideo; 