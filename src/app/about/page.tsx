'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Award, 
  Shield, 
  Users, 
  Target,
  Heart,
  Lightbulb,
  Clock
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We never compromise on quality. Every project receives our full attention and expertise.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honest communication, transparent pricing, and ethical practices define our approach.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace modern techniques while respecting traditional craftsmanship.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work collaboratively with our clients, treating every project as our own.',
  },
];

const timeline = [
  {
    year: '1998',
    title: 'Foundation',
    description: 'Robert Tillet and Michael Saunders establish the company with a shared vision of quality craftsmanship.',
  },
  {
    year: '2005',
    title: 'Expansion',
    description: 'Growing demand leads to expanding our team and service offerings across the South East.',
  },
  {
    year: '2012',
    title: 'Recognition',
    description: 'Awarded "Best Regional Builder" by the Federation of Master Builders.',
  },
  {
    year: '2018',
    title: 'Milestone',
    description: 'Celebrating 20 years and 400+ completed projects with long-standing client relationships.',
  },
  {
    year: '2024',
    title: 'Today',
    description: 'Continuing our legacy of excellence with a team of 25+ skilled professionals.',
  },
];

const team = [
  {
    name: 'Robert Tillet',
    role: 'Co-Founder & Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'With over 30 years in the building industry, Robert brings unmatched expertise and vision to every project.',
  },
  {
    name: 'Michael Saunders',
    role: 'Co-Founder & Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Michael\'s background in architecture ensures our projects are both beautiful and structurally sound.',
  },
  {
    name: 'Sarah Thompson',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Sarah ensures seamless coordination between our teams and clients throughout every project.',
  },
  {
    name: 'James Richardson',
    role: 'Lead Craftsman',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'James leads our skilled workforce with 20+ years of hands-on construction experience.',
  },
];

const accreditations = [
  { icon: Award, name: 'Federation of Master Builders' },
  { icon: Shield, name: 'TrustMark Registered' },
  { icon: CheckCircle, name: 'Which? Trusted Trader' },
  { icon: Award, name: 'NHBC Registered' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl about-hero-content"
            >
              <span className="inline-block text-[var(--color-gold)] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                About Us
              </span>
              <h1 className="text-white mb-4">
                A Legacy of <em>Craftsmanship</em>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed about-hero-paragraph">
                For over 25 years, Tillet & Saunders has been transforming homes and 
                building lasting relationships with our clients across London and the South East.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-[var(--color-cream-dark)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Our Story</span>
              <h2 className="mb-6">Built on Trust, <em>Driven by Excellence</em></h2>
              <div className="divider" />
              <p className="text-[var(--color-gray-warm)] mb-6 leading-relaxed">
                Tillet & Saunders was founded in 1998 by Robert Tillet and Michael Saunders, 
                two craftsmen who shared a vision of delivering exceptional quality in every 
                project they undertook. What started as a small family business has grown 
                into one of the most respected building companies in the South East.
              </p>
              <p className="text-[var(--color-gray-warm)] mb-6 leading-relaxed">
                Our success is built on a simple philosophy: treat every home as if it were 
                our own. This means never cutting corners, always using the finest materials, 
                and maintaining clear communication with our clients throughout every project.
              </p>
              <p className="text-[var(--color-gray-warm)] leading-relaxed">
                Today, with a team of over 25 skilled professionals, we continue to uphold 
                the standards that have made us the builder of choice for discerning 
                homeowners across London and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80"
                      alt="Construction work"
                      className="img-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80"
                      alt="Team planning"
                      className="img-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80"
                      alt="Finished project"
                      className="img-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80"
                      alt="Craftsmanship"
                      className="img-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="section-label">Our Values</span>
            <h2 className="mb-6">The Principles That <em>Guide Us</em></h2>
            <div className="divider divider-center" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-10 bg-[var(--color-cream)] card-hover"
              >
                <div className="w-18 h-18 bg-[var(--color-burgundy)] rounded-full flex items-center justify-center mx-auto mb-8" style={{ width: '4.5rem', height: '4.5rem' }}>
                  <value.icon className="text-white" size={30} />
                </div>
                <h3 className="text-xl mb-4">{value.title}</h3>
                <p className="text-[var(--color-gray-warm)] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-[var(--color-charcoal)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="section-label section-label-light">Our Journey</span>
            <h2 className="text-white mb-6">25 Years of <em>Growth</em></h2>
            <div className="divider divider-light divider-center" />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[var(--color-burgundy)] hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center md:flex-row"
                  >
                    {/* Left side - shows for even indices */}
                    {isEven ? (
                      <div className="flex-1 md:text-right hidden md:block timeline-left">
                        <div className="font-display text-3xl text-[var(--color-gold)] mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-white text-xl mb-2">{item.title}</h3>
                        <p className="text-[var(--color-gray-light)]">{item.description}</p>
                      </div>
                    ) : (
                      <div className="flex-1 hidden md:block" />
                    )}
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-burgundy)] rounded-full border-4 border-[var(--color-charcoal)] hidden md:block z-10" />
                    
                    {/* Right side - shows for odd indices */}
                    {!isEven ? (
                      <div className="flex-1 md:text-left hidden md:block timeline-right">
                        <div className="font-display text-3xl text-[var(--color-gold)] mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-white text-xl mb-2">{item.title}</h3>
                        <p className="text-[var(--color-gray-light)]">{item.description}</p>
                      </div>
                    ) : (
                      <div className="flex-1 hidden md:block" />
                    )}

                    {/* Mobile view */}
                    <div className="md:hidden bg-[var(--color-slate)] p-6 rounded-lg w-full">
                      <div className="font-display text-2xl text-[var(--color-gold)] mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-white text-lg mb-2">{item.title}</h3>
                      <p className="text-[var(--color-gray-light)] text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-[var(--color-cream-dark)] team-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="section-label">Our Team</span>
            <h2 className="mb-6">Meet the <em>Experts</em></h2>
            <div className="divider divider-center" />
            <p className="text-[var(--color-gray-warm)] team-intro-paragraph">
              Our success is driven by our exceptional team of dedicated professionals 
              who bring expertise, passion, and commitment to every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[var(--color-burgundy)]/0 group-hover:bg-[var(--color-burgundy)]/20 transition-colors duration-300" />
                </div>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-[var(--color-burgundy)] font-medium text-sm uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-[var(--color-gray-warm)] text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="section bg-white accreditations-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="section-label">Accreditations</span>
            <h2 className="mb-6">Trusted & <em>Certified</em></h2>
            <div className="divider divider-center" />
            <p className="text-[var(--color-gray-warm)] accreditations-intro-paragraph">
              Our commitment to excellence is recognised by the industry&apos;s leading bodies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 accreditations-grid">
            {accreditations.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-[var(--color-cream)]"
              >
                <item.icon className="w-12 h-12 text-[var(--color-burgundy)] mb-4" />
                <span className="text-sm font-medium text-[var(--color-charcoal)]">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--color-burgundy)] cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-white mb-6">
              Ready to Work With <em>Us</em>?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Let&apos;s discuss your project and discover how our team can bring your vision to life.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-[var(--color-burgundy)] hover:bg-[var(--color-off-white)]">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

