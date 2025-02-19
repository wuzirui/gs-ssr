import React from 'react';

const VideoPresentation = () => {
  return (
    <section className="hero is-small">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <div className="has-text-centered" style={{ marginTop: '1rem', marginBottom: '4rem' }}>
            <h2 className="title is-3">Video Presentation</h2>
            <div style={{ height: '1rem' }}></div>
            <div className="columns is-centered">
              <div className="column">
                <div className="publication-video">
                  <iframe 
                    src="https://www.youtube.com/embed/hdyaAKl7zzE" 
                    title="Project Video"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPresentation; 