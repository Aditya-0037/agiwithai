import Link from 'next/link';

const Hero = () => (
  <section className="hero">
    <div className="container">
      <span className="hero-tag">✦ Startup-Focused Development Agency</span>
      <h1>Build, Launch, and Scale Your Startup Faster</h1>
      <p className="hero-sub">
        We design and develop high-performance websites, SaaS dashboards, and AI-powered tools for startups and growing businesses.
      </p>
      <div className="hero-btns">
        <Link href="#contact" className="btn btn-primary">Start a Project</Link>
        <a href="https://wa.me/919690609737" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          Chat on WhatsApp
        </a>
      </div>
      <p className="hero-note">No fixed pricing. Flexible based on your project.</p>
    </div>
  </section>
);

export default Hero;
