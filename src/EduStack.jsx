import React, { useState } from 'react';
import { Search, PlusCircle, UserCircle, ExternalLink } from 'lucide-react';

const EduStack = ({ resources, setResources, playSound }) => {
  const [filter, setFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('Frontend');

  const handleSave = (e) => {
    e.preventDefault();
    if (!title || !url) return;
    const newResource = {
      id: Date.now(),
      title, url, category,
      note: `Agregado el ${new Date().toLocaleDateString()}`
    };
    setResources([newResource, ...resources]);
    setTitle(''); setUrl('');
    playSound();
  };

  const filtered = resources.filter(res => 
    (filter === 'Todos' || res.category === filter) &&
    res.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="window-content-modern">
      <nav className="modern-nav">
        <div className="modern-logo"><span className="logo-main">EduStack</span></div>
        <div className="modern-nav-actions">
          <button className="m-btn-pri">Iniciar Sesión</button>
          <UserCircle size={28} />
        </div>
      </nav>
      <div className="modern-body">
        <div className="m-search-box">
          <Search size={16} />
          <input placeholder="Buscar material..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="modern-grid">
          <aside className="modern-sidebar">
            {['Todos', 'Frontend', 'Backend', 'Redes', 'UX/UI'].map(cat => (
              <button key={cat} className={`m-filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
            ))}
          </aside>
          <main className="modern-main">
            <form className="m-form-card m-form" onSubmit={handleSave}>
              <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <input placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Redes">Redes</option>
              </select>
              <button type="submit">Guardar</button>
            </form>
            <div className="m-cards-container">
              {filtered.map(res => (
                <div key={res.id} className={`m-card border-${res.category.toLowerCase()}`}>
                  <div className="m-card-badge">{res.category}</div>
                  <h3>{res.title}</h3>
                  <a href={res.url} target="_blank" className="m-visit-link">Visitar <ExternalLink size={14} /></a>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EduStack;