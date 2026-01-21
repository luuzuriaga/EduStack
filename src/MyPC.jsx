import React from 'react';

const MyPC = () => (
  <div className="window-content-modern pc-content">
    <div className="pc-grid">
      <div className="pc-item">
        <img src="/src/assets/disco.png" />
        <span>Disco local (C:)</span>
      </div>
      <div className="pc-item">
        <img src="/src/assets/disco.png" />
        <span>Unidad CD (D:)</span>
      </div>
      <div className="pc-item">
        <img src="https://win98icons.alexmeub.com/icons/png/network_drive-0.png" />
        <span>Red</span>
      </div>
    </div>
  </div>
);

export default MyPC;