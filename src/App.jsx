import React, { useState } from 'react';
import Window from './Window';
import EduStack from './EduStack';
import MyPC from './MyPC';
import EduTube from './EduTube'; 
import './App.css';

const INITIAL_RESOURCES = [
  // FRONTEND
  { id: 1, title: 'Documentación oficial de React', category: 'Frontend', url: 'https://react.dev', note: 'Guía esencial para hooks y componentes.' },
  { id: 2, title: 'CSS-Tricks: Guía completa de Flexbox', category: 'Frontend', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', note: 'La mejor referencia para maquetación.' },
  { id: 3, title: 'Tailwind CSS Docs', category: 'Frontend', url: 'https://tailwindcss.com/docs', note: 'Framework de CSS basado en clases de utilidad.' },
  { id: 4, title: 'MDN Web Docs (JavaScript)', category: 'Frontend', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript', note: 'La biblia oficial de la web.' },
  // BACKEND & DEV TOOLS
  { id: 5, title: 'Spring Boot Reference Guide', category: 'Backend', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/', note: 'Para desarrollo de microservicios en Java.' },
  { id: 6, title: 'Documentación de Python 3', category: 'Backend', url: 'https://docs.python.org/3/', note: 'Referencia oficial del lenguaje Python.' },
  { id: 7, title: 'Postman API Platform', category: 'Backend', url: 'https://www.postman.com/', note: 'Herramienta indispensable para testear APIs.' },
  { id: 8, title: 'Docker Docs', category: 'Backend', url: 'https://docs.docker.com/', note: 'Guía de contenedores y despliegue.' },
  // REDES & INFRAESTRUCTURA
  { id: 9, title: 'Cisco Networking Academy', category: 'Redes', url: 'https://www.netacad.com/', note: 'Cursos y recursos de redes de Cisco.' },
  { id: 10, title: 'Wireshark: Análisis de paquetes', category: 'Redes', url: 'https://www.wireshark.org/docs/', note: 'Referencia para análisis de tráfico de red.' },
  { id: 11, title: 'IP Subnetting Guide', category: 'Redes', url: 'https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html', note: 'Guía oficial de subneteo e IP.' },
  { id: 12, title: 'OWASP Top Ten', category: 'Redes', url: 'https://owasp.org/www-project-top-ten/', note: 'Seguridad web y prevención de vulnerabilidades.' },
  // UX/UI & DISEÑO
  { id: 13, title: 'Nielsen Norman Group (UX)', category: 'UX/UI', url: 'https://www.nngroup.com/articles/', note: 'Artículos sobre usabilidad y experiencia de usuario.' },
  { id: 14, title: 'Figma Learning Center', category: 'UX/UI', url: 'https://help.figma.com/hc/en-us', note: 'Tutoriales para prototipado profesional.' },
  { id: 15, title: 'Google Material Design', category: 'UX/UI', url: 'https://m3.material.io/', note: 'Sistema de diseño moderno de Google.' },
  { id: 16, title: 'Refactoring UI', category: 'UX/UI', url: 'https://www.refactoringui.com/', note: 'Tips prácticos para mejorar interfaces.' }
];

function App() {
  const [openWins, setOpenWins] = useState({ edu: true, pc: false, tube: false });
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [resources, setResources] = useState(INITIAL_RESOURCES);
  const [focus, setFocus] = useState('edu');

  const playSound = () => { 
    const audio = new Audio('/clic.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {}); 
  };

  const toggleWin = (win) => {
    setOpenWins(prev => ({ ...prev, [win]: !prev[win] }));
    setFocus(win);
    setIsStartMenuOpen(false); // Cierra el menú si se abre desde otro lado
    playSound();
  };

  const openFromStart = (win) => {
    setOpenWins(prev => ({ ...prev, [win]: true }));
    setFocus(win);
    setIsStartMenuOpen(false);
    playSound();
  };

  return (
    <div className="desktop-environment">
      {/* ICONOS DEL ESCRITORIO */}
      <div className="desktop-icons">
        <div className="desktop-icon-item" onClick={() => toggleWin('pc')}>
          <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png" alt="PC" />
          <span className="icon-label">Mi PC</span>
        </div>

        <div className="desktop-icon-item" onClick={() => toggleWin('edu')}>
          <img src="/src/assets/edu.png" alt="Edu" />
          <span className="icon-label">EduStack.exe</span>
        </div>

        <div className="desktop-icon-item" onClick={() => toggleWin('tube')}>
          <img src="/src/assets/youtube.png" alt="EduTube" />
          <span className="icon-label">EduTube.exe</span>
        </div>
      </div>

      {/* VENTANAS */}
      <Window 
        title="EduStack - Ingeniería" 
        icon="https://win98icons.alexmeub.com/icons/png/directory_open_file_cabinet-0.png"
        isOpen={openWins.edu} 
        onClose={() => toggleWin('edu')}
        zIndex={focus === 'edu' ? 200 : 100}
        onFocus={() => setFocus('edu')}
      >
        <EduStack resources={resources} setResources={setResources} playSound={playSound} />
      </Window>

      <Window 
        title="Mi PC" 
        icon="https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png"
        isOpen={openWins.pc} 
        onClose={() => toggleWin('pc')}
        initialPos={{ x: 200, y: 150 }}
        zIndex={focus === 'pc' ? 200 : 100}
        onFocus={() => setFocus('pc')}
      >
        <MyPC />
      </Window>

      <Window 
        title="EduTube - Videotutoriales" 
        icon="/src/assets/youtube.png"
        isOpen={openWins.tube} 
        onClose={() => toggleWin('tube')}
        initialPos={{ x: 300, y: 80 }}
        zIndex={focus === 'tube' ? 200 : 100}
        onFocus={() => setFocus('tube')}
      >
        <EduTube playSound={playSound} />
      </Window>

      {/* BARRA DE TAREAS Y MENÚ DE INICIO */}
      <div className="taskbar-retro">
        {isStartMenuOpen && (
          <div className="start-menu-panel retro-frame">
            <div className="start-menu-sidebar">
              <span className="sidebar-text">Windows<b>98</b></span>
            </div>
            <div className="start-menu-items">
              <div className="start-item" onClick={() => openFromStart('pc')}>
                <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png" width="24" alt="" />
                Mi PC
              </div>
              <div className="start-item" onClick={() => openFromStart('edu')}>
                <img src="/src/assets/edu.png" width="24" alt="" />
                EduStack.exe
              </div>
              <div className="start-item" onClick={() => openFromStart('tube')}>
                <img src="/src/assets/youtube.png" width="24" alt="" />
                EduTube.exe
              </div>
              <div className="start-divider"></div>
              <div className="start-item" onClick={() => window.location.reload()}>
                <img src="https://win98icons.alexmeub.com/icons/png/shut_down_normal-4.png" width="24" alt="" />
                Cerrar Sesión
              </div>
            </div>
          </div>
        )}

        <button 
          className={`start-btn ${isStartMenuOpen ? 'pressed' : ''}`} 
          onClick={() => { setIsStartMenuOpen(!isStartMenuOpen); playSound(); }}
        >
          <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" width="16" alt="inicio" /> 
          Inicio
        </button>
        
        <div className="taskbar-divider"></div>

        {openWins.edu && <div className={`active-task ${focus === 'edu' ? 'focused' : ''}`} onClick={() => setFocus('edu')}>EduStack</div>}
        {openWins.pc && <div className={`active-task ${focus === 'pc' ? 'focused' : ''}`} onClick={() => setFocus('pc')}>Mi PC</div>}
        {openWins.tube && <div className={`active-task ${focus === 'tube' ? 'focused' : ''}`} onClick={() => setFocus('tube')}>EduTube</div>}
        
        <div className="task-time">
          {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
      </div>
    </div>
  );
}

export default App;