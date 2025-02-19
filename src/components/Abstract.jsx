import React from 'react';

const Abstract = () => {
  return (
    <section className="section hero is-light">
      <div className="container is-max-desktop">
        <div className="columns is-centered has-text-centered">
          <div className="column is-four-fifths">
            <h2 className="title is-3">Abstract</h2>
            <div className="content has-text-justified">
              <p>
                3D Gaussian Splatting shows great potential in reconstructing photo-realistic 3D scenes. However, these methods typically bake illumination into their representations, limiting their use for physically-based rendering and scene editing...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abstract; 