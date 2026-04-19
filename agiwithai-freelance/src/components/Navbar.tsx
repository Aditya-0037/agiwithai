'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="logo">AGI With AI</Link>

          {/* Desktop links */}
          <div className="nav-links nav-links-desktop">
            <Link href="#services">Services</Link>
            <Link href="#work">Work</Link>
            <Link href="#process">Process</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#contact" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '14px' }}>
              Start a Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="nav-mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '76px',
          left: 0,
          right: 0,
          background: 'var(--color-soft-white)',
          borderBottom: '2px solid var(--color-black)',
          zIndex: 999,
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {['services', 'work', 'process', 'contact'].map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              style={{ textDecoration: 'none', fontWeight: 600, fontSize: '18px', textTransform: 'capitalize' }}
              onClick={() => setMobileOpen(false)}
            >
              {id}
            </Link>
          ))}
          <Link href="#contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Start a Project
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
