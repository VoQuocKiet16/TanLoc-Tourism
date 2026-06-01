import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(15, 118, 110, 0.08)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '1rem 1.2rem' : '1rem 2.5rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'space-between',
          gap: isMobile ? '1rem' : '0',
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'flex-start',
          }}
        >
          <h2
            style={{
              color: '#006d5b',
              fontSize: isMobile ? '1.65rem' : '1.9rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              margin: 0,
              position: 'relative',
              textAlign: 'center',
            }}
          >
            Hành Trình Du Lịch Tân Lộc
            <span
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '-6px',
                width: '45%',
                height: '4px',
                borderRadius: '999px',
                background: 'linear-gradient(90deg, #006d5b, #14b8a6)',
              }}
            />
          </h2>
        </div>

        {/* NAVIGATION */}
        <nav style={{ width: isMobile ? '100%' : 'auto' }}>
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'flex-start',
              gap: isMobile ? '1.1rem' : '2.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              flexWrap: 'wrap',
            }}
          >
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  fontWeight: 600,
                  color: isActive ? '#006d5b' : '#333',
                  padding: '0.35rem 0',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  borderBottom: isActive ? '3px solid #006d5b' : '3px solid transparent',
                })}
              >
                Trang Chủ
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/hanh-trinh"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  fontWeight: 600,
                  color: isActive ? '#006d5b' : '#333',
                  padding: '0.35rem 0',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  borderBottom: isActive ? '3px solid #006d5b' : '3px solid transparent',
                })}
              >
                Hành Trình
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;