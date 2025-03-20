import React, { useEffect, useRef } from 'react';

const RESULTS = [
  { id: 11, path: '11.png' },
  { id: 9, path: '9.jpg' },
  { id: 10, path: '10.jpg' },
  { id: 1, path: '1.jpg' },
  { id: 2, path: '2.jpg' },
  { id: 3, path: '3.jpg' },
  { id: 4, path: '4.jpg' },
  { id: 5, path: '5.jpg' },
  { id: 6, path: '6.jpg' },
  { id: 7, path: '7.jpg' },
  { id: 8, path: '8.jpg' },
];

// 创建三组相同的图片以实现无限循环效果
const LOOP_RESULTS = [...RESULTS, ...RESULTS, ...RESULTS];

const EditingResults = () => {
  const containerRef = useRef(null);
  
  // 组件挂载后将滚动位置初始化到中间组
  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      containerRef.current.scrollLeft = scrollWidth / 3;
    }
  }, []);
  
  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -400 : 400;
    
    // 滚动到新位置（有动画）
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    
    // 检查边界并重置位置（无动画）
    setTimeout(() => {
      const currentScroll = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const singleSetWidth = scrollWidth / 3;
      
      // 暂时禁用滚动行为样式以确保无动画
      container.style.scrollBehavior = 'auto';
      
      // 如果滚动到第一组的区域，跳转到第二组相同位置
      if (currentScroll < singleSetWidth) {
        container.scrollLeft = currentScroll + singleSetWidth;
      } 
      // 如果滚动到第三组的区域，跳转到第二组相同位置
      else if (currentScroll >= singleSetWidth * 2) {
        container.scrollLeft = currentScroll - singleSetWidth;
      }
      
      // 恢复滚动行为样式
      setTimeout(() => {
        container.style.scrollBehavior = '';
      }, 50);
    }, 500); // 等待滚动动画完成
  };

  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <div className="has-text-centered">
            <h2 className="title is-3" style={{ margin: '1rem 0 2rem' }}>Additional Editing Results</h2>
            <p>&nbsp;</p>

            <div style={{ position: 'relative' }}>
              {/* Left Arrow */}
              <button
                className="button is-light"
                style={{
                  position: 'absolute',
                  left: '-50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: 0
                }}
                onClick={() => scroll('left')}
              >
                <span className="icon">
                  <i className="fas fa-chevron-left"></i>
                </span>
              </button>

              {/* Gallery Container */}
              <div
                ref={containerRef}
                style={{
                  display: 'flex',
                  overflowX: 'hidden',
                  scrollBehavior: 'smooth',
                  padding: '1rem 0',
                  margin: '0 -1rem',
                }}
              >
                {LOOP_RESULTS.map((result, index) => (
                  <div
                    key={`${result.id}-${index}`}
                    style={{
                      flex: '0 0 auto',
                      width: '400px',
                      padding: '0 1rem',
                    }}
                  >
                    <figure className="image" style={{ marginBottom: '1rem' }}>
                      <img
                        src={`${process.env.PUBLIC_URL}/static/images/additional/${result.path}`}
                        alt={`Editing result ${result.id}`}
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          borderRadius: '10px',
                          backgroundColor: '#fff'
                        }}
                      />
                    </figure>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                className="button is-light"
                style={{
                  position: 'absolute',
                  right: '-50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: 0
                }}
                onClick={() => scroll('right')}
              >
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditingResults; 