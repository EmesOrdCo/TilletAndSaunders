'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  ChefHat, 
  Home, 
  Layers, 
  PaintBucket, 
  Bath, 
  Hammer,
  CheckCircle,
  Phone,
  Wrench,
  Building,
  DoorOpen,
  Paintbrush,
  Zap
} from 'lucide-react';

const services = [
  {
    id: 'kitchen-fitting',
    icon: ChefHat,
    title: 'Kitchen Fitting',
    shortDesc: 'Bespoke kitchen installations tailored to your lifestyle.',
    fullDesc: 'Your kitchen is the heart of your home. We specialise in creating stunning, functional kitchens that reflect your personal style while maximising space and efficiency. From contemporary handleless designs to classic shaker styles, our skilled craftsmen deliver exceptional results.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    features: [
      'Full design consultation',
      'Bespoke cabinetry options',
      'Premium worktop installation',
      'Integrated appliance fitting',
      'Lighting design & installation',
      'Plumbing & electrical work',
    ],
  },
  {
    id: 'extensions',
    icon: Home,
    title: 'Extensions',
    shortDesc: 'Expand your living space with seamless architectural extensions.',
    fullDesc: 'Whether you need a single-storey rear extension, a side return, or a double-storey addition, we have the expertise to deliver. Our team handles everything from planning applications to final finishes, ensuring a stress-free experience.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    features: [
      'Architectural design support',
      'Planning permission assistance',
      'Structural engineering',
      'Foundation & groundworks',
      'Full project management',
      'Interior finishing',
    ],
  },
  {
    id: 'flooring',
    icon: Layers,
    title: 'Flooring',
    shortDesc: 'Premium flooring solutions for every room in your home.',
    fullDesc: 'The right flooring transforms a space. We offer expert installation of all flooring types, from luxurious hardwood and engineered timber to practical tiles and contemporary vinyl. Our attention to detail ensures flawless results that last.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80',
    features: [
      'Hardwood & engineered wood',
      'Ceramic & porcelain tiles',
      'Natural stone flooring',
      'Luxury vinyl tile (LVT)',
      'Underfloor heating compatible',
      'Subfloor preparation',
    ],
  },
  {
    id: 'plastering',
    icon: PaintBucket,
    title: 'Plastering',
    shortDesc: 'Expert plastering and rendering for flawless finishes.',
    fullDesc: 'Quality plastering is the foundation of beautiful interiors. Our experienced plasterers deliver smooth, durable finishes that provide the perfect canvas for decoration. We also offer external rendering to enhance your property\'s appearance.',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1200&q=80',
    features: [
      'Traditional wet plastering',
      'Plasterboard & dry lining',
      'Venetian polished plaster',
      'External rendering',
      'Coving & cornices',
      'Repair & restoration',
    ],
  },
  {
    id: 'bathrooms',
    icon: Bath,
    title: 'Bathroom Renovations',
    shortDesc: 'Luxury bathroom renovations combining style with functionality.',
    fullDesc: 'Create your own personal sanctuary with a beautifully designed bathroom. We handle complete bathroom transformations, from initial design through to final installation, including all plumbing, tiling, and electrical work.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    features: [
      'Full bathroom design',
      'Plumbing installation',
      'Wet room construction',
      'Tiling & waterproofing',
      'Underfloor heating',
      'Luxury fixture installation',
    ],
  },
  {
    id: 'roofing',
    icon: Hammer,
    title: 'Roofing',
    shortDesc: 'Complete roofing services from repairs to full replacements.',
    fullDesc: 'Protect your home with expert roofing services. Whether you need minor repairs, a complete re-roof, or a loft conversion, our experienced team ensures your roof is watertight, energy-efficient, and built to last.',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1200&q=80',
    features: [
      'Slate & tile roofing',
      'Flat roof specialists',
      'Roof repairs & maintenance',
      'Chimney work',
      'Guttering & fascias',
      'Skylight installation',
    ],
  },
];

const additionalServices = [
  { icon: DoorOpen, title: 'Doors & Windows', desc: 'Supply and installation of high-quality doors and windows.' },
  { icon: Paintbrush, title: 'Painting & Decorating', desc: 'Professional interior and exterior decoration.' },
  { icon: Wrench, title: 'Plumbing', desc: 'Full plumbing services for all your needs.' },
  { icon: Zap, title: 'Electrical', desc: 'Certified electrical work and rewiring.' },
  { icon: Building, title: 'Structural Work', desc: 'Load-bearing walls, RSJs, and structural modifications.' },
  { icon: Home, title: 'Loft Conversions', desc: 'Transform unused space into valuable living areas.' },
];

const process = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We meet to discuss your vision, assess the space, and understand your requirements and budget.',
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Our team creates detailed plans and provides a comprehensive, transparent quotation.',
  },
  {
    step: '03',
    title: 'Build Phase',
    description: 'Our skilled craftsmen bring your project to life with meticulous attention to detail.',
  },
  {
    step: '04',
    title: 'Completion & Handover',
    description: 'A thorough inspection ensures everything meets our high standards before handover.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden services-hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center services-hero-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <div className="absolute inset-0 flex items-end services-hero-container">
          <div className="container pb-12 md:pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl services-hero-content"
            >
              <span className="inline-block text-[var(--color-gold)] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                Our Services
              </span>
              <h1 className="text-white mb-4">
                Comprehensive Building <em>Solutions</em>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed services-hero-paragraph">
                From kitchen renovations to complete extensions, our skilled team delivers 
                exceptional craftsmanship across all aspects of residential construction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <div className="space-y-40">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`grid lg:grid-cols-2 gap-16 lg:gap-28 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[var(--color-burgundy)] rounded-full flex items-center justify-center">
                      <service.icon className="text-white" size={26} />
                    </div>
                    <h2 className="text-3xl md:text-4xl">{service.title}</h2>
                  </div>
                  <div className="divider" />
                  <p className="text-[var(--color-gray-warm)] leading-relaxed text-lg service-detail-paragraph">
                    {service.fullDesc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 service-features-grid">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="text-[var(--color-burgundy)] flex-shrink-0" size={18} />
                        <span className="text-[var(--color-charcoal)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary service-detail-button">
                    Discuss Your Project
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="img-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-white additional-services-section">
        <div className="container additional-services-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16 additional-services-header"
          >
            <span className="section-label">Additional Services</span>
            <h2 className="mb-6">Complete Home <em>Solutions</em></h2>
            <div className="divider divider-center" />
            <p className="text-[var(--color-gray-warm)] additional-services-intro">
              Beyond our core services, we offer a comprehensive range of building 
              and renovation solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 additional-services-grid mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-[var(--color-cream)] card-hover"
              >
                <service.icon className="text-[var(--color-burgundy)] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg mb-2">{service.title}</h3>
                  <p className="text-[var(--color-gray-warm)] text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-[var(--color-charcoal)] process-section">
        <div className="container process-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16 process-header"
          >
            <span className="section-label section-label-light">Our Process</span>
            <h2 className="text-white mb-6 process-title">How We <em>Work</em></h2>
            <div className="divider divider-light divider-center" />
            <p className="text-[var(--color-gray-light)] process-description">
              A clear, structured approach ensures your project runs smoothly from start to finish.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative process-item"
              >
                <div className="text-6xl font-display text-[var(--color-burgundy)] mb-4 process-number">
                  {item.step}
                </div>
                <h3 className="text-white text-xl mb-3">{item.title}</h3>
                <p className="text-[var(--color-gray-light)]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--color-burgundy)] cta-section">
        <div className="container cta-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto cta-content"
          >
            <h2 className="text-white cta-title">
              Ready to Start Your <em>Project</em>?
            </h2>
            <p className="text-white/80 text-lg mb-10 cta-paragraph">
              Contact us today for a free consultation and quote. Our team is ready to 
              discuss your requirements and bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 cta-buttons">
              <Link href="/contact" className="btn-primary bg-white text-[var(--color-burgundy)] hover:bg-[var(--color-off-white)] cta-button">
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+441234567890" className="btn-secondary text-white border-white hover:bg-white hover:text-[var(--color-burgundy)] cta-button cta-phone-button">
                <Phone size={18} />
                01234 567 890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

