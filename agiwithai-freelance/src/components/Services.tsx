import { Globe, LayoutDashboard, Cpu, Smartphone, ShoppingCart } from 'lucide-react';
import type { ReactNode } from 'react';

interface ServiceProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceProps) => (
  <div className="card service-card">
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const services: ServiceProps[] = [
  {
    title: 'Web Development for Startups',
    description: 'Landing pages, business websites, and scalable frontend systems built for performance.',
    icon: <Globe size={22} strokeWidth={1.75} />,
  },
  {
    title: 'SaaS Dashboards',
    description: 'Custom dashboards with clean UI, fast performance, and scalable architecture.',
    icon: <LayoutDashboard size={22} strokeWidth={1.75} />,
  },
  {
    title: 'AI Integrations & Automation',
    description: 'Automate workflows, integrate AI tools, and build smarter systems for your business.',
    icon: <Cpu size={22} strokeWidth={1.75} />,
  },
  {
    title: 'UI/UX + Frontend Development',
    description: 'Modern, responsive, and conversion-focused interfaces that delight users.',
    icon: <Smartphone size={22} strokeWidth={1.75} />,
  },
  {
    title: 'E-commerce & Local Business Sites',
    description: 'Online stores, cafe websites, and service-based business sites designed to convert.',
    icon: <ShoppingCart size={22} strokeWidth={1.75} />,
  },
];

const Services = () => (
  <section id="services" className="bg-grey">
    <div className="container">
      <div className="section-title">
        <h2>What We Build</h2>
        <p>End-to-end digital solutions tailored for speed and growth.</p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
