import React from 'react';
import GradientText from './GradientText';

const Hero = () => {
  return (
    <section className="hero relative min-h-screen">
      <div className="hero-body relative z-10" style={{ padding: '1rem 1.5rem' }}>
        <div className="container is-max-desktop">
          <div className="columns is-centered">
            <div className="column has-text-centered">
              <div style={{ marginBottom: '0.5rem' }}>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={10}
                  showBorder={false}
                  className="title is-1 publication-title">
                  3D Gaussian Inverse Rendering with Approximated Global Illumination
                </GradientText>
              </div>
              <div className="is-size-5 publication-authors" style={{ marginTop: '0.25rem' }}>
                <span className="author-block">
                  <a href="https://wuzirui.github.io/" target="_blank" rel="noopener noreferrer">
                    Zirui Wu
                  </a><sup>1,2</sup>,
                </span>
                <span className="author-block">
                  <a href="https://scholar.google.com/citations?user=mS3a3acAAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">
                    Laijian Li
                  </a><sup>2</sup>,
                </span>
                <span className="author-block">
                  <a href="https://openreview.net/profile?id=~Shaoteng_Wu1" target="_blank" rel="noopener noreferrer">
                    Shaoteng Wu
                  </a><sup>2</sup>,
                </span>
                <span className="author-block">
                  <a href="https://openreview.net/profile?id=~Zhikai_Zhu1" target="_blank" rel="noopener noreferrer">
                    Zhikai Zhu
                  </a><sup>2</sup>,
                </span>
                <span className="author-block">
                  <a href="https://openreview.net/profile?id=~Kang_Xu5" target="_blank" rel="noopener noreferrer">
                    Kang Xu
                  </a><sup>2</sup>,
                </span>
                <span className="author-block">
                  <a href="https://oswaldm.github.io/" target="_blank" rel="noopener noreferrer">
                    Martin R. Oswald
                  </a><sup>3</sup>,
                </span>
                <span className="author-block">
                  <a href="https://scholar.google.com/citations?user=kBN1B6YAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    Jie Song
                  </a><sup>1,4</sup>
                </span>
              </div>

              <div className="is-size-5 publication-authors">
                <span className="author-block">
                  <sup>1</sup>HKUST(GZ)
                </span>
                <span className="author-block">
                  <sup>2</sup>NIO
                </span>
                <span className="author-block">
                  <sup>3</sup>University of Amsterdam
                </span>
                <span className="author-block">
                  <sup>4</sup>HKUST
                </span>
              </div>

              <div className="column has-text-centered">
                <div className="publication-links">
                  {/* Paper Link */}
                  <span className="link-block">
                    <a
                      href="https://arxiv.org/pdf/<ARXIV PAPER ID>.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link button is-normal is-rounded is-dark"
                    >
                      <span className="icon">
                        <i className="fas fa-file-pdf"></i>
                      </span>
                      <span>Paper</span>
                    </a>
                  </span>
                  
                  {/* Code Link */}
                  <span className="link-block">
                    <a
                      href="https://github.com/wuzirui/gs-ssr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link button is-normal is-rounded is-dark"
                    >
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Code</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 