import React, { useState } from 'react';

const SCENES = [1, 2, 3, 4, 5];
const CHANNELS = [
  { id: 'rendered', label: 'Rendered' },
  { id: 'albedo', label: 'Albedo' },
  { id: 'roughness', label: 'Roughness' },
  { id: 'consistency', label: 'Consistency' }
];

const DecompositionSection = () => {
  const [selectedScene, setSelectedScene] = useState(1);
  const [selectedChannel, setSelectedChannel] = useState('rendered');

  // 获取图片路径
  const getImagePath = (scene, channel) => {
    return `${process.env.PUBLIC_URL}/static/images/channels/scene${scene}_${channel}.png`;
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <div className="has-text-centered">
            <h2 className="title is-3" style={{ margin: '1rem 0 2rem' }}>Material Decomposition</h2>
            <p>&nbsp;</p>

            {/* Channel Selection */}
            <div className="buttons is-centered" style={{ marginBottom: '2rem' }}>
              {CHANNELS.map((channel) => (
                <button
                  key={channel.id}
                  className={`button is-medium ${selectedChannel === channel.id ? 'is-primary' : 'is-light'}`}
                  onClick={() => setSelectedChannel(channel.id)}
                >
                  {channel.label}
                </button>
              ))}
            </div>

            {/* Frame Selection and Images */}
            <div className="columns">
              {/* Frame Selection (Left) */}
              <div className="column is-2">
                <div className="buttons is-flex is-flex-direction-column">
                  {SCENES.map((scene) => (
                    <button
                      key={scene}
                      className={`button is-medium ${selectedScene === scene ? 'is-info' : 'is-light'}`}
                      onClick={() => setSelectedScene(scene)}
                      style={{ width: '100%', marginBottom: '0.5rem' }}
                    >
                      Frame {scene}
                    </button>
                  ))}
                </div>
              </div>

              {/* Images (Right) */}
              <div className="column">
                <div className="columns is-centered">
                  {/* Reference Image (Left) */}
                  <div className="column is-half">
                    <figure className="image">
                      <img
                        src={getImagePath(selectedScene, 'gt')}
                        alt="Reference"
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '10px',
                          backgroundColor: '#fff'
                        }}
                      />
                    </figure>
                    <p className="has-text-centered mt-2">Reference</p>
                  </div>

                  {/* Channel Image (Right) */}
                  <div className="column is-half">
                    <figure className="image">
                      <img
                        src={getImagePath(selectedScene, selectedChannel)}
                        alt={`${selectedChannel} channel`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '10px',
                          backgroundColor: '#fff'
                        }}
                      />
                    </figure>
                    <p className="has-text-centered mt-2">{CHANNELS.find(c => c.id === selectedChannel)?.label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecompositionSection; 