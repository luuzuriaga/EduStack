import React from 'react';
import MiDisco from './assets/disco.png';

const MyPC = () => (
  <div className="window-content-modern pc-content">
    <div className="pc-grid">
      <div className="pc-item">
        <img src={MiDisco} alt="Disco" />
        <span>Disco local (C:)</span>
      </div>
      <div className="pc-item">
       <img src={MiDisco} alt="Disco" />
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