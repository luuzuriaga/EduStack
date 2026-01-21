import React, { useState } from 'react';
import { Search, PlusCircle, Youtube, ExternalLink, Play } from 'lucide-react';

const INITIAL_VIDEOS = [
  // FRONTEND
  { id: 1, title: 'Curso de React.js para principiantes (2024)', channel: 'midulive', url: 'https://www.youtube.com/watch?v=7iobxzdnQHc', category: 'Frontend' },
  { id: 2, title: 'Aprende Tailwind CSS en 15 minutos', channel: 'HolaMundo', url: 'https://www.youtube.com/watch?v=f7G9X7_e9lU', category: 'Frontend' },
  { id: 3, title: 'TypeScript en 100 Segundos', channel: 'Fireship', url: 'https://www.youtube.com/watch?v=zQnBQ4tB3ZA', category: 'Frontend' },

  // BACKEND & PROGRAMACIÓN
  { id: 4, title: 'Spring Boot y Microservicios desde Cero', channel: 'TodoCode', url: 'https://www.youtube.com/watch?v=fX-6m_N7i8g', category: 'Backend' },
  { id: 5, title: 'Python para Principiantes (Curso Completo)', channel: 'FreeCodeCamp Español', url: 'https://www.youtube.com/watch?v=chPhlsHoEPo', category: 'Backend' },
  { id: 6, title: '¿Qué es una API? Explicación simple', channel: 'EDteam', url: 'https://www.youtube.com/watch?v=u2Ms34GE14U', category: 'Backend' },
  { id: 7, title: 'Docker: De 0 a Profesional', channel: 'Pelado Nosinmás', url: 'https://www.youtube.com/watch?v=4Dko5W96WHg', category: 'Backend' },

  // REDES (Súper útil para tus exámenes de Cisco)
  { id: 8, title: 'El Modelo OSI explicado fácil', channel: 'Cisco Networking Academy', url: 'https://www.youtube.com/watch?v=xSSTzE_u2m0', category: 'Redes' },
  { id: 9, title: 'Configuración de VLANs en Packet Tracer', channel: 'NetAcad Tips', url: 'https://www.youtube.com/watch?v=M9p_B-8_j9A', category: 'Redes' },
  { id: 10, title: 'Subnetting IPv4: El método más rápido', channel: 'NetworkChuck', url: 'https://www.youtube.com/watch?v=ecCuyq-Wprc', category: 'Redes' },
  { id: 11, title: 'TCP vs UDP: ¿Cuál es la diferencia?', channel: 'PowerCert Animated Videos', url: 'https://www.youtube.com/watch?v=uwoD5YsGACg', category: 'Redes' },

  // UX/UI & PRODUCTIVIDAD
  { id: 12, title: 'Fundamentos de UI: Diseño de Interfaces', channel: 'UX Tips', url: 'https://www.youtube.com/watch?v=680D_7H-58A', category: 'UX/UI' },
  { id: 13, title: 'Tutorial de Figma para Desarrolladores', channel: 'DesignCode', url: 'https://www.youtube.com/watch?v=Gu1axZ24qas', category: 'UX/UI' }
];

const EduTube = ({ playSound }) => {
  const [videos, setVideos] = useState(INITIAL_VIDEOS);
  const [searchTerm, setSearchTerm] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newTitle, setNewTitle] = useState('');

  // Función para extraer el ID de un video de YouTube para la miniatura
  const getThumbnail = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const id = (match && match[2].length === 11) ? match[2] : null;
    return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : 'https://win98icons.alexmeub.com/icons/png/video_file-2.png';
  };

  const handleAddVideo = (e) => {
    e.preventDefault();
    if (!newUrl || !newTitle) return;
    const video = {
      id: Date.now(),
      title: newTitle,
      channel: 'Manual',
      url: newUrl,
      category: 'YouTube'
    };
    setVideos([video, ...videos]);
    setNewTitle(''); setNewUrl('');
    playSound();
  };

  return (
    <div className="window-content-modern" style={{ background: '#f0f2f5' }}>
      <nav className="modern-nav" style={{ background: '#ff0000', color: 'white' }}>
        <div className="modern-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Youtube size={28} />
          <span className="logo-main" style={{ color: 'white' }}>EduTube</span>
        </div>
      </nav>

      <div className="modern-body">
        {/* Formulario para añadir videos */}
        <section className="m-form-card">
          <div className="m-form-title"><PlusCircle size={18} /> Añadir Tutorial</div>
          <form className="m-form" onSubmit={handleAddVideo}>
            <input placeholder="Título del video" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
            <input placeholder="URL de YouTube" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} required />
            <button type="submit" style={{ background: '#ff0000' }}>Añadir</button>
          </form>
        </section>

        <div className="m-search-box">
          <Search size={16} />
          <input 
            placeholder="Buscar tutoriales..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="video-grid">
          {videos.filter(v => v.title.toLowerCase().includes(searchTerm.toLowerCase())).map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumb-container">
                <img src={getThumbnail(video.url)} alt="thumbnail" className="video-thumb" />
                <div className="play-overlay"><Play fill="white" size={24} /></div>
              </div>
              <div className="video-info">
                <h4>{video.title}</h4>
                <p>{video.channel}</p>
                <a href={video.url} target="_blank" rel="noreferrer" className="m-visit-link" onClick={playSound}>
                  Ver video <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EduTube;