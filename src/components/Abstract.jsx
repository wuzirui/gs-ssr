import React from 'react';
import { SplitText } from './SplitText';

const Abstract = () => {
  return (
    <section className="section hero is-light">
      <div className="container is-max-desktop">
        <div className="columns is-centered has-text-centered">
          <div className="column is-four-fifths">
            <h2 className="title is-3">
              <SplitText>-Abstract-</SplitText>
            </h2>
            <div className="content has-text-justified">
              <p>
                3D Gaussian Splatting shows great potential in reconstructing photo-realistic 3D scenes. However, these methods typically bake illumination into their representations, limiting their use for physically-based rendering and scene editing. Although recent inverse rendering approaches aim to decompose scenes into material and lighting components, they often rely on simplifying assumptions that fail when editing.
              </p>
              <p>
                We present a novel approach that enables efficient global illumination for 3D Gaussians Splatting through screen-space ray tracing. Our key insight is that a substantial amount of indirect light can be traced back to surfaces visible within the current view frustum. We further introduce a learned per-Gaussian consistency parameter that helps resolve view-dependent artifacts by quantifying the reliability of screen-space approximations across different viewpoints. Our method achieves realistic global illumination effects while preserving the computational efficiency and editability benefits of 3D Gaussians. The screen-space approximation we utilize allows for dynamic indirect illumination and supports real-time rendering and editing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abstract; 