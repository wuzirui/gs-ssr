import { animated, useTrail } from '@react-spring/web';
import React from 'react';

export const SplitText = ({ children }) => {
  const items = children.split('');
  const config = { mass: 5, tension: 2000, friction: 200 };

  const trail = useTrail(items.length, {
    config,
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {trail.map(({ opacity, y }, index) => (
        <animated.span
          key={index}
          style={{
            opacity,
            transform: y.to(y => `translate3d(0,${y}px,0)`),
            display: 'inline-block',
            letterSpacing: 'normal',
            marginRight: items[index] === ' ' ? '0.5em' : '0.05em',
          }}
        >
          {items[index]}
        </animated.span>
      ))}
    </div>
  );
}; 