import React, { useRef, useEffect, useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import cpp from './cpp.png';

export default function ProgressBarrr() {
  const containerRef = useRef(null);
  const progressBarsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Запускаем анимацию для каждого прогресс-бара
          progressBarsRef.current.forEach(bar => {
            if (bar) {
              bar.style.width = bar.getAttribute('data-width');
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Функция для добавления ref к прогресс-бару
  const addProgressBarRef = (ref, width) => {
    if (ref && !progressBarsRef.current.includes(ref)) {
      progressBarsRef.current.push(ref);
      ref.setAttribute('data-width', `${width}%`);
      ref.style.width = '0%'; // Начинаем с 0
    }
  };

  return (
    <div style={{maxWidth: '1000px', textAlign: 'left', margin: '0 auto', marginTop: '192px'}}>
      <div>
        <div style={{color: 'red'}}>#skills</div>
        <div></div>
      </div>
      
      <div
        ref={containerRef}
        className="all"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",            
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 80,
          textAlign: "center",
          marginTop: '10px',
          flexWrap: 'wrap'
        }}
      >
        {/* Левый столбец */}
        <div className="left" style={{ flex: 1, minWidth: '300px', maxWidth: '500px' }}>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 0,
            width: "100%", 
            marginBottom: 15,
            border: "1px solid #E0E0E0",
            borderRadius: "22px",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "8px"
          }}>
            <div style={{ 
              width: 60, 
              textAlign: "center",
              padding: "5px"
            }}>
              <img src={cpp} alt="C++" style={{ width: 60, height: 60 }} />
            </div>
            <div style={{ 
              flex: 1,
              height: "30px",
              background: "#e0e0e0",
              borderRadius: "8px",
              overflow: 'hidden'
            }}>
              <div 
                ref={ref => addProgressBarRef(ref, 86)}
                style={{
                  height: "100%",
                  background: "#2A68AF",
                  borderRadius: "8px",
                  transition: 'width 1s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '10px',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  width: '0%' // Начинаем с 0
                }}
              >
                86%
              </div>
            </div>
          </div>

          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 0,
            width: "100%", 
            marginBottom: 15,
            border: "1px solid #E0E0E0",
            borderRadius: "22px",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "8px"
          }}>
            <div style={{ 
              width: 60, 
              textAlign: "center",
              padding: "5px"
            }}>
              <img src={cpp} alt="C++" style={{ width: 50, height: 50 }} />
            </div>
            <div style={{ 
              flex: 1,
              height: "30px",
              background: "#e0e0e0",
              borderRadius: "8px",
              overflow: 'hidden'
            }}>
              <div 
                ref={ref => addProgressBarRef(ref, 88)}
                style={{
                  height: "100%",
                  background: "#2A68AF",
                  borderRadius: "8px",
                  transition: 'width 1s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '10px',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  width: '0%'
                }}
              >
                88%
              </div>
            </div>
          </div>
        </div>

        {/* Правый столбец */}
        <div className="right" style={{ 
          flex: 1, 
          minWidth: '300px', 
          maxWidth: '500px'
        }}>
          {/* Прогресс-бары правого столбца */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 0,
            width: "100%", 
            marginBottom: 15,
            border: "1px solid #E0E0E0",
            borderRadius: "22px",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "8px"
          }}>
            <div style={{ 
              width: 60, 
              textAlign: "center",
              padding: "5px"
            }}>
              <img src={cpp} alt="C++" style={{ width: 50, height: 50 }} />
            </div>
            <div style={{ 
              flex: 1,
              height: "30px",
              background: "#e0e0e0",
              borderRadius: "8px",
              overflow: 'hidden'
            }}>
              <div 
                ref={ref => addProgressBarRef(ref, 86)}
                style={{
                  height: "100%",
                  background: "#2A68AF",
                  borderRadius: "8px",
                  transition: 'width 1s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '10px',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  width: '0%'
                }}
              >
                86%
              </div>
            </div>
          </div>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 0,
            width: "100%", 
            marginBottom: 15,
            border: "1px solid #E0E0E0",
            borderRadius: "22px",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "8px"
          }}>
            <div style={{ 
              width: 60, 
              textAlign: "center",
              padding: "5px"
            }}>
              <img src={cpp} alt="C++" style={{ width: 50, height: 50 }} />
            </div>
            <div style={{ 
              flex: 1,
              height: "30px",
              background: "#e0e0e0",
              borderRadius: "8px",
              overflow: 'hidden'
            }}>
              <div 
                ref={ref => addProgressBarRef(ref, 88)}
                style={{
                  height: "100%",
                  background: "#2A68AF",
                  borderRadius: "8px",
                  transition: 'width 1s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '10px',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  width: '0%'
                }}
              >
                88%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}