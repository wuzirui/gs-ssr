import React from 'react';
import ImageMagnifier from './ImageMagnifier';
import { SplitText } from './SplitText';

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
          <ImageMagnifier
            src={imagePath}
            alt="Method Overview"
            magnifierHeight={150}
            magnifierWidth={150}
            zoomLevel={2.5}
          />
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <SplitText
              text="Overview of our method"
              className="subtitle has-text-centered"
              delay={10}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-150px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeaserVideo; 