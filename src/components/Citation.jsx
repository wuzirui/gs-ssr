import React from 'react';

const Citation = () => {
  const bibtex = `@article{wu_2025_3d_gaussian,
    title={3D Gaussian Inverse Rendering with Approximated Global Illumination},
    author={Wu, Zirui and Li, Laijian and Wu, Shaoteng and Zhu, Zhikai and Xu, Kang and Oswald, Martin R. and Song, Jie},
    journal={arXiv preprint},
    year={2025}
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