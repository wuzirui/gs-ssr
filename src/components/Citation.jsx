import React from 'react';

const Citation = () => {
  const bibtex = `@article{wu2024gsssr,
    title={3D Gaussian Inverse Rendering with Approximated Global Illumination},
    author={Wu, Zirui and Li, Laijian and Wu, Shaoteng},
    journal={arXiv preprint},
    year={2024}
}`;

  return (
    <section className="section" id="BibTeX">
      <div className="container is-max-desktop content">
        <h2 className="title">BibTeX</h2>
        <pre><code>{bibtex}</code></pre>
      </div>
    </section>
  );
};

export default Citation; 