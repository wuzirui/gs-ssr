import React from 'react';

const Citation = () => {
  const bibtexContent = `@article{wu2024gsssr,
  title={3D Gaussian Inverse Rendering with Approximated Global Illumination},
  author={Wu, Zirui and Li, Laijian and Wu, Shaoteng and Zhu, Zhikai and Xu, Kang and Oswald, Martin R. and Song, Jie},
  journal={arXiv preprint},
  year={2024}
}`;

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <h2 className="title is-3 has-text-centered" style={{ margin: '1rem 0 2rem' }}>BibTeX</h2>
          <p>&nbsp;</p>
          <div className="box" style={{ 
            borderRadius: '15px',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            fontFamily: 'monospace'
          }}>
            {bibtexContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Citation; 