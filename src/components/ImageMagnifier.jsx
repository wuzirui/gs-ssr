import React, { useState } from 'react';

const ImageMagnifier = ({
  src,
  alt,
  width = "100%",
  magnifierHeight = 200,
  magnifierWidth = 200,
  zoomLevel = 2.5
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const updateMagnifierPos = (e) => {
    const elem = e.currentTarget;
    const { top, left, width, height } = elem.getBoundingClientRect();
    
    // 计算鼠标相对位置
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // 计算放大图片的位置限制
    const zoomOffset = (zoomLevel - 1) / 2;
    const leftLimit = -magnifierWidth * zoomOffset;
    const rightLimit = width + magnifierWidth * zoomOffset;
    const topLimit = -magnifierHeight * zoomOffset;
    const bottomLimit = height + magnifierHeight * zoomOffset;
    
    // 限制放大镜位置，但允许部分溢出
    const magnifierX = Math.max(leftLimit, Math.min(rightLimit, x));
    const magnifierY = Math.max(topLimit, Math.min(bottomLimit, y));
    
    setXY([magnifierX, magnifierY]);
  };

  return (
    <div style={{ position: "relative", width: width }}>
      <img
        src={src}
        alt={alt}
        style={{ 
          width: "100%",
          borderRadius: "10px",
          display: "block"
        }}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
          updateMagnifierPos(e);
        }}
        onMouseMove={updateMagnifierPos}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
      />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${x - magnifierWidth/2}px`,
            top: `${y - magnifierHeight/2}px`,
            width: `${magnifierWidth}px`,
            height: `${magnifierHeight}px`,
            border: "2px solid #fff",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            pointerEvents: "none",
            overflow: "hidden",
            backgroundColor: "#fff"
          }}
        >
          <img
            src={src}
            style={{
              position: "absolute",
              left: `${-x * zoomLevel + magnifierWidth/2}px`,
              top: `${-y * zoomLevel + magnifierHeight/2}px`,
              width: `${imgWidth * zoomLevel}px`,
              height: `${imgHeight * zoomLevel}px`,
              maxWidth: "none",
              pointerEvents: "none"
            }}
            alt="magnified"
          />
        </div>
      )}
    </div>
  );
};

export default ImageMagnifier; 