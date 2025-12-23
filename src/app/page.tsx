'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { 
  ArrowRight, 
  ChefHat, 
  Home, 
  Layers, 
  PaintBucket, 
  Bath, 
  Hammer,
  Quote,
  Star,
  Phone,
  CheckCircle,
  Award,
  Users,
  Calendar
} from 'lucide-react';

const services = [
  {
    icon: ChefHat,
    title: 'Kitchen Fitting',
    description: 'Bespoke kitchen installations tailored to your lifestyle. From design to completion.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    icon: Home,
    title: 'Extensions',
    description: 'Expand your living space with seamless architectural extensions that add value.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    icon: Layers,
    title: 'Flooring',
    description: 'Premium flooring solutions including hardwood, tile, and luxury vinyl.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
  },
  {
    icon: PaintBucket,
    title: 'Plastering',
    description: 'Expert plastering and rendering for flawless walls and ceilings.',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80',
  },
  {
    icon: Bath,
    title: 'Bathrooms',
    description: 'Luxury bathroom renovations that combine style with functionality.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  },
  {
    icon: Hammer,
    title: 'Roofing',
    description: 'Complete roofing services from repairs to full replacements.',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Chelsea, London',
    text: 'Tillet & Saunders transformed our Victorian terrace with a stunning rear extension. Their attention to detail and professionalism was outstanding. We couldn\'t be happier with the result.',
    project: 'Rear Extension',
    rating: 5,
  },
  {
    name: 'James & Emily Watson',
    location: 'Richmond, Surrey',
    text: 'From initial consultation to final handover, the team was exceptional. Our new kitchen is beyond what we imagined. True craftsmen who take pride in their work.',
    project: 'Kitchen Renovation',
    rating: 5,
  },
  {
    name: 'Dr. Michael Chen',
    location: 'Hampstead, London',
    text: 'Having worked with several builders over the years, I can confidently say Tillet & Saunders are in a league of their own. Impeccable quality and communication throughout.',
    project: 'Full Renovation',
    rating: 5,
  },
];

const stats = [
  { icon: Calendar, value: '25+', label: 'Years Experience' },
  { icon: Home, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '98%', label: 'Client Satisfaction' },
  { icon: Award, value: '15+', label: 'Industry Awards' },
];

const projects = [
  {
    title: 'Georgian Townhouse Restoration',
    location: 'Belgravia, London',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    category: 'Full Renovation',
  },
  {
    title: 'Contemporary Kitchen',
    location: 'Notting Hill, London',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    category: 'Kitchen Fitting',
  },
  {
    title: 'Modern Extension',
    location: 'Wimbledon, London',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    category: 'Extension',
  },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative h-full container flex flex-col justify-center pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-[var(--color-gold)] text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Excellence in Every Detail
            </span>
            <h1 className="text-white mb-6">
              Crafting Exceptional{' '}
              <span className="italic font-normal">Spaces</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              For over 25 years, Tillet & Saunders has been transforming homes across London 
              and the South East with uncompromising quality and meticulous attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link href="/projects" className="btn-secondary text-white border-white hover:bg-white hover:text-[var(--color-charcoal)]">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 h-10 bg-gradient-to-b from-white/60 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-[var(--color-burgundy)] py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4" />
                <div className="font-display text-4xl md:text-5xl text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-label">About Us</span>
              <h2 className="mb-6">Building Trust Through <em>Excellence</em></h2>
              <div className="divider" />
              <p className="text-[var(--color-gray-warm)] mb-6 leading-relaxed">
                Founded in 1998, Tillet & Saunders has built a reputation for delivering 
                exceptional craftsmanship across London and the South East. Our team of 
                skilled tradesmen brings decades of combined experience to every project.
              </p>
              <p className="text-[var(--color-gray-warm)] mb-8 leading-relaxed">
                We believe that every home deserves the finest quality workmanship. From 
                initial consultation to final handover, we maintain the highest standards 
                of professionalism and communication.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Federation of Master Builders Member',
                  'TrustMark Registered',
                  'Fully Insured & Guaranteed',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-[var(--color-burgundy)] flex-shrink-0" size={20} />
                    <span className="text-[var(--color-charcoal)]">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Craftsman at work"
                  className="img-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[var(--color-burgundy)] text-white p-8 max-w-xs hidden md:block">
                <div className="font-display text-5xl mb-2">25+</div>
                <div className="text-white/80">Years of trusted service in the building industry</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="section-label">Our Services</span>
            <h2 className="mb-6">Comprehensive Building <em>Solutions</em></h2>
            <div className="divider divider-center" />
            <p className="text-[var(--color-gray-warm)]">
              From minor renovations to major structural works, our skilled team delivers 
              exceptional results across all aspects of residential construction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group card-hover bg-[var(--color-cream)] overflow-hidden"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-5 left-5 w-14 h-14 bg-[var(--color-burgundy)] rounded-full flex items-center justify-center">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl mb-4">{service.title}</h3>
                  <p className="text-[var(--color-gray-warm)] mb-5 leading-relaxed">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[var(--color-burgundy)] font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-[var(--color-charcoal)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="section-label section-label-light">Our Portfolio</span>
            <h2 className="text-white mb-6">Featured <em>Projects</em></h2>
            <div className="divider divider-light divider-center" />
            <p className="text-[var(--color-gray-light)] mt-6">
              Explore our showcase of completed projects, each representing our commitment 
              to exceptional quality and client satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-[var(--color-gold)] text-sm uppercase tracking-wider mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects" className="btn-primary">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="section-label">Testimonials</span>
            <h2 className="mb-6">What Our Clients <em>Say</em></h2>
            <div className="divider divider-center" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-10 relative"
              >
                <Quote className="absolute top-8 right-8 text-[var(--color-burgundy)]/10" size={48} />
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[var(--color-gold)] fill-current" size={16} />
                  ))}
                </div>
                <p className="text-[var(--color-gray-warm)] mb-8 relative z-10 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-[var(--color-off-white)] pt-6">
                  <div className="font-display font-semibold text-[var(--color-charcoal)]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[var(--color-gray-medium)]">
                    {testimonial.location}
                  </div>
                  <div className="text-sm text-[var(--color-burgundy)] mt-1">
                    {testimonial.project}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-[var(--color-burgundy)]/90" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-white mb-6">
              Ready to Start Your <em>Project</em>?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Contact us today for a free, no-obligation consultation. Let&apos;s discuss how 
              we can bring your vision to life with the quality and craftsmanship you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary bg-white text-[var(--color-burgundy)] hover:bg-[var(--color-off-white)]">
                Get Your Free Quote
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+441234567890" className="btn-secondary text-white border-white hover:bg-white hover:text-[var(--color-burgundy)]">
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
