import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';

const ComparisonSection = () => {
  const [isSSR, setIsSSR] = useState(true);
  
  const props = useSpring({
    clipPath: isSSR 
      ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
      : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
    config: {
      duration: 800,
    },
  });

  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <div className="has-text-centered" style={{ marginBottom: '2rem' }}>
            <h2 className="title is-3">Screen Space Reflection</h2>
            <div className="buttons is-centered" style={{ marginTop: '1rem' }}>
              <button 
                className={`button is-medium ${isSSR ? 'is-primary' : 'is-light'}`}
                onClick={() => setIsSSR(true)}
              >
                SSR ON
              </button>
              <button 
                className={`button is-medium ${!isSSR ? 'is-primary' : 'is-light'}`}
                onClick={() => setIsSSR(false)}
              >
                SSR OFF
              </button>
            </div>
          </div>
          
          <div className="columns is-centered">
            {/* Reference Image (Left) */}
            <div className="column is-half">
              <figure className="image">
                <img
                  src={`${process.env.PUBLIC_URL}/static/images/edit/edit_ref.png`}
                  alt="Reference"
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                />
              </figure>
              <p className="has-text-centered mt-2">Reference</p>
            </div>

            {/* SSR Comparison (Right) */}
            <div className="column is-half">
              <figure className="image" style={{ position: 'relative' }}>
                {/* Base image (SSR OFF) */}
                <img
                  src={`${process.env.PUBLIC_URL}/static/images/edit/edit_no_ssr.png`}
                  alt="Without SSR"
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                />
                
                {/* Overlay image (SSR ON) with animation */}
                <animated.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    ...props,
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/static/images/edit/edit_ssr.png`}
                    alt="With SSR"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </animated.div>
              </figure>
              <p className="has-text-centered mt-2">
                {isSSR ? 'With SSR' : 'Without SSR'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection; 