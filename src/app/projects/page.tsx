'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const categories = [
  'All',
  'Extensions',
  'Kitchens',
  'Bathrooms',
  'Full Renovations',
  'Flooring',
];

const projects = [
  {
    id: 1,
    title: 'Georgian Townhouse Restoration',
    location: 'Belgravia, London',
    category: 'Full Renovations',
    description: 'A comprehensive restoration of a Grade II listed Georgian townhouse, carefully preserving original features while introducing modern amenities.',
    scope: 'Full interior renovation including structural work, new kitchen, four bathrooms, and period-appropriate joinery throughout.',
    duration: '8 months',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
  },
  {
    id: 2,
    title: 'Contemporary Kitchen',
    location: 'Notting Hill, London',
    category: 'Kitchens',
    description: 'A sleek, modern kitchen design featuring handleless cabinetry, a large central island, and integrated high-end appliances.',
    scope: 'Complete kitchen installation including structural modifications, new flooring, and custom lighting scheme.',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    ],
  },
  {
    id: 3,
    title: 'Modern Glass Extension',
    location: 'Wimbledon, London',
    category: 'Extensions',
    description: 'A stunning glass-box rear extension creating a seamless connection between the kitchen and garden.',
    scope: 'Single-storey rear extension with structural glazing, underfloor heating, and full interior fit-out.',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    ],
  },
  {
    id: 4,
    title: 'Luxury Master Bathroom',
    location: 'Chelsea, London',
    category: 'Bathrooms',
    description: 'A spa-inspired master bathroom featuring natural stone, a freestanding bath, and a walk-in rainfall shower.',
    scope: 'Complete bathroom renovation including waterproofing, underfloor heating, and bespoke vanity unit.',
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752734-c9cd8e4b3daf?w=1200&q=80',
    ],
  },
  {
    id: 5,
    title: 'Victorian Terrace Extension',
    location: 'Islington, London',
    category: 'Extensions',
    description: 'A side return and rear extension transforming a narrow Victorian terrace into a spacious, light-filled home.',
    scope: 'Side return extension, rear extension, and full ground floor reconfiguration.',
    duration: '14 weeks',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    ],
  },
  {
    id: 6,
    title: 'Herringbone Oak Flooring',
    location: 'Richmond, Surrey',
    category: 'Flooring',
    description: 'Installation of premium European oak herringbone flooring throughout a five-bedroom family home.',
    scope: 'Subfloor preparation, installation of 600sqm engineered oak flooring, and finishing.',
    duration: '2 weeks',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80',
    ],
  },
  {
    id: 7,
    title: 'Shaker Kitchen Renovation',
    location: 'Hampstead, London',
    category: 'Kitchens',
    description: 'A classic shaker kitchen with a modern twist, featuring marble worktops and brass hardware.',
    scope: 'Full kitchen removal and installation, new lighting, and integration of premium appliances.',
    duration: '5 weeks',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80',
    ],
  },
  {
    id: 8,
    title: 'Complete Home Renovation',
    location: 'Clapham, London',
    category: 'Full Renovations',
    description: 'A top-to-bottom renovation of a period property, combining original character with contemporary design.',
    scope: 'Structural alterations, new kitchen and bathrooms, rewiring, replumbing, and full redecoration.',
    duration: '6 months',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
    ],
  },
  {
    id: 9,
    title: 'Guest Bathroom Suite',
    location: 'Kensington, London',
    category: 'Bathrooms',
    description: 'An elegant guest bathroom featuring geometric tiles, brass fixtures, and a floating vanity.',
    scope: 'Complete bathroom fit-out including new plumbing and electrical installation.',
    duration: '3 weeks',
    image: 'https://images.unsplash.com/photo-1600566752734-c9cd8e4b3daf?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566752734-c9cd8e4b3daf?w=1200&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    ],
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden projects-hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <div className="absolute bottom-0 left-0 right-0 projects-hero-wrapper">
          <div className="container pb-12 md:pb-16 projects-hero-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl projects-hero-content"
            >
              <span className="inline-block text-[var(--color-gold)] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                Our Portfolio
              </span>
              <h1 className="text-white mb-4">
                Featured <em>Projects</em>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed projects-hero-description">
                Explore our showcase of completed projects, each representing our commitment 
                to exceptional quality and client satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b border-[var(--color-off-white)] sticky top-[72px] z-30 project-filters">
        <div className="container">
          <div className="project-filters-container">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`project-filter-button ${selectedCategory === category ? 'project-filter-active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => openProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[var(--color-gold)] text-sm uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl mb-2 group-hover:text-[var(--color-burgundy)] transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 text-[var(--color-gray-warm)] text-sm">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeProject}
          >
            <div className="absolute inset-0 bg-black/90" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image Gallery */}
              <div className="relative aspect-[16/9] bg-[var(--color-charcoal)] project-modal-image">
                <img
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={selectedProject.title}
                  className="img-cover"
                />
                
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.gallery.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 project-modal-content">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-[var(--color-burgundy)] text-sm font-semibold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="text-[var(--color-gray-light)]">•</span>
                  <span className="text-[var(--color-gray-warm)] text-sm flex items-center gap-2">
                    <MapPin size={14} />
                    {selectedProject.location}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl mb-6">{selectedProject.title}</h2>
                <div className="divider" />
                
                <p className="text-[var(--color-gray-warm)] mb-6 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-display text-lg mb-2">Project Scope</h3>
                    <p className="text-[var(--color-gray-warm)]">{selectedProject.scope}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-2">Duration</h3>
                    <p className="text-[var(--color-gray-warm)]">{selectedProject.duration}</p>
                  </div>
                </div>
                
                <Link href="/contact" className="btn-primary">
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section bg-[var(--color-burgundy)] projects-cta-section">
        <div className="container projects-cta-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto projects-cta-content"
          >
            <h2 className="text-white mb-6 projects-cta-title">
              Inspired by What You <em>See</em>?
            </h2>
            <p className="text-white/80 text-lg mb-10 projects-cta-paragraph">
              Let&apos;s discuss how we can create something equally impressive for your home.
              Contact us today for a free consultation.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-[var(--color-burgundy)] hover:bg-[var(--color-off-white)] projects-cta-button">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

