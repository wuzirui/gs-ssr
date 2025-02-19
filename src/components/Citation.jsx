import React, { useState } from 'react';

const Citation = () => {
  const [copied, setCopied] = useState(false);
  
  const bibtexContent = `@article{wu2024gsssr,
  title={3D Gaussian Inverse Rendering with Approximated Global Illumination},
  author={Wu, Zirui and Li, Laijian and Wu, Shaoteng and Zhu, Zhikai and Xu, Kang and Oswald, Martin R. and Song, Jie},
  journal={arXiv preprint},
  year={2024}
}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtexContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒后重置状态
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <h2 className="title is-3 has-text-centered" style={{ margin: '1rem 0 2rem' }}>BibTeX</h2>
          <p>&nbsp;</p>
          <div style={{ position: 'relative' }}>
            <div className="box" style={{ 
              borderRadius: '15px',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              fontFamily: 'monospace'
            }}>
              {bibtexContent}
            </div>
            <button
              className={`button ${copied ? 'is-success' : 'is-light'}`}
              onClick={handleCopy}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '8px',
                padding: '0 12px',
                height: '32px'
              }}
            >
              <span className="icon is-small">
                <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
              </span>
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Citation; 