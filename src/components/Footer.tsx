'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Award,
  Shield,
  CheckCircle
} from 'lucide-react';

const services = [
  'Kitchen Fitting',
  'Extensions',
  'Flooring',
  'Plastering',
  'Bathroom Renovations',
  'Roofing',
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const accreditations = [
  { icon: Award, label: 'Federation of Master Builders' },
  { icon: Shield, label: 'TrustMark Registered' },
  { icon: CheckCircle, label: 'Which? Trusted Trader' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-off-white)]" role="contentinfo">
      {/* Accreditations Bar */}
      <div className="border-b border-white/10">
        <div className="container py-10">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {accreditations.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-[var(--color-gray-light)]"
              >
                <item.icon size={24} className="text-[var(--color-gold)]" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-semibold text-white">
                Tillet & Saunders
              </span>
              <span className="block text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-gold)] mt-1">
                Building Excellence
              </span>
            </Link>
            <p className="text-[var(--color-gray-light)] mb-6 leading-relaxed">
              With over 25 years of experience, we deliver exceptional craftsmanship 
              and uncompromising quality on every project.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-burgundy)] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-burgundy)] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-burgundy)] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-gray-light)] hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-[var(--color-gray-light)] hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+441234567890"
                  className="flex items-start gap-3 text-[var(--color-gray-light)] hover:text-white transition-colors duration-300"
                >
                  <Phone size={18} className="text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>01234 567 890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tilletandsaunders.co.uk"
                  className="flex items-start gap-3 text-[var(--color-gray-light)] hover:text-white transition-colors duration-300"
                >
                  <Mail size={18} className="text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <span>info@tilletandsaunders.co.uk</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-gray-light)]">
                <MapPin size={18} className="text-[var(--color-gold)] mt-1 flex-shrink-0" />
                <span>
                  123 Builder&apos;s Lane<br />
                  London, SW1A 1AA
                </span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-gray-light)]">
                <Clock size={18} className="text-[var(--color-gold)] mt-1 flex-shrink-0" />
                <span>
                  Mon - Fri: 8:00 - 18:00<br />
                  Sat: 9:00 - 14:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--color-gray-light)] text-sm text-center md:text-left">
              © {new Date().getFullYear()} Tillet & Saunders. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-[var(--color-gray-light)]">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[var(--color-burgundy)] flex items-center justify-center hover:bg-[var(--color-burgundy-light)] transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

