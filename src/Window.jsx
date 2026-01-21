import React, { useState, useEffect } from 'react';
import { X, Square, Minus } from 'lucide-react';

const Window = ({ title, icon, children, isOpen, onClose, initialPos, zIndex, onFocus }) => {
  const [position, setPosition] = useState(initialPos || { x: 100, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  if (!isOpen) return null;

  return (
    <div 
      className="window-wrapper"
      style={{ left: `${position.x}px`, top: `${position.y}px`, zIndex }}
      onMouseDown={onFocus}
    >
      <div className="window retro-frame">
        <div className="title-bar" onMouseDown={(e) => {
          setIsDragging(true);
          setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
        }}>
          <div className="title-bar-text">
            <img src={icon} width="14" alt="" style={{ marginRight: '5px' }} />
            {title}
          </div>
          <div className="title-bar-controls">
            <button className="mini-btn"><Minus size={10} /></button>
            <button className="mini-btn"><Square size={10} /></button>
            <button className="mini-btn close-btn" onClick={onClose}><X size={10} /></button>
          </div>
        </div>
        <div className="window-content-container" onMouseDown={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Window;