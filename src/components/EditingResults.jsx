import React, { useRef } from 'react';

const RESULTS = [
  { id: 1, path: '1.jpg' },
  { id: 2, path: '2.jpg' },
  { id: 3, path: '3.jpg' },
  { id: 4, path: '4.jpg' },
  { id: 5, path: '5.jpg' },
  { id: 6, path: '6.jpg' },
];

// 创建循环数组，在前后各添加一组图片
const LOOP_RESULTS = [...RESULTS, ...RESULTS, ...RESULTS];

const EditingResults = () => {
  const containerRef = useRef(null);
  
  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -400 : 400;
    
    // 获取当前滚动位置
    const currentScroll = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    
    // 在中间部分滚动
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    
    // 检查是否需要重置位置（无动画）
    setTimeout(() => {
      if (currentScroll + scrollAmount <= 400) {
        // 如果滚动到最左边，跳转到中间组的开始
        container.scrollTo({ left: scrollWidth / 3, behavior: 'auto' });
      } else if (currentScroll + scrollAmount + containerWidth >= (scrollWidth - 400)) {
        // 如果滚动到最右边，跳转到中间组的结束
        container.scrollTo({ left: scrollWidth / 3, behavior: 'auto' });
      }
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