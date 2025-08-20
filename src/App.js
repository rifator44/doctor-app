import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Sidebar({ collapsed, onToggle }) {
  return (
    <nav className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={onToggle}>
        {collapsed ? '→' : '←'}
      </button>
      <ul className="menu">
        <li>
          <Link to="/">
            <span className="icon">🏠</span>
            {!collapsed && <span className="label">Home</span>}
          </Link>
        </li>
        <li>
          <Link to="/services">
            <span className="icon">🦷</span>
            {!collapsed && <span className="label">Services</span>}
          </Link>
        </li>
        <li>
          <Link to="/doctors">
            <span className="icon">👩‍⚕️</span>
            {!collapsed && <span className="label">Doctors</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="page">
      <h1>Welcome to SmileCare Dental</h1>
      <p>
        At SmileCare, we make booking your dentist visit easy. Use the sidebar
        to see our services or find a doctor.
      </p>
    </div>
  );
}

function Services() {
  const services = [
    { id: 1, title: 'Teeth Cleaning', desc: 'Gentle cleaning for healthy teeth.' },
    { id: 2, title: 'Braces', desc: 'Straighten your teeth with braces.' },
    { id: 3, title: 'Whitening', desc: 'Brighten your smile in one visit.' },
    { id: 4, title: 'Root Canal', desc: 'Pain relief and tooth preservation.' },
  ];

  return (
    <div className="page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.id} className="service-card">
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Doctors() {
  const allDoctors = [
    { id: 1, name: 'Dr. Amina Rahman', email: 'amina@smilecare.bd', img: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Dr. Karim Hossain', email: 'karim@smilecare.bd', img: 'https://via.placeholder.com/80' },
    { id: 3, name: 'Dr. Laila Siddiqua', email: 'laila@smilecare.bd', img: 'https://via.placeholder.com/80' },
    { id: 4, name: 'Dr. Rashid Khan', email: 'rashid@smilecare.bd', img: 'https://via.placeholder.com/80' },
    { id: 5, name: 'Dr. Nipa Chowdhury', email: 'nipa@smilecare.bd', img: 'https://via.placeholder.com/80' },
    { id: 6, name: 'Dr. Sohail Ahmed', email: 'sohail@smilecare.bd', img: 'https://via.placeholder.com/80' },
  ];

  const [page, setPage] = useState(0);
  const pageSize = 3;
  const pageCount = Math.ceil(allDoctors.length / pageSize);
  const start = page * pageSize;
  const visible = allDoctors.slice(start, start + pageSize);

  return (
    <div className="page">
      <h1>Our Doctors</h1>
      <ul className="doctor-list">
        {visible.map((doc) => (
          <li key={doc.id} className="doctor-card">
            <img src={doc.img} alt={doc.name} />
            <div>
              <h2>{doc.name}</h2>
              <p>{doc.email}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            className={page === i ? 'active' : ''}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((c) => !c)}
        />
        <main className={sidebarCollapsed ? 'main collapsed' : 'main'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;