'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Fixed Header Container */}
      <header 
        className="fixed top-0 w-full z-50" 
        role="banner"
        data-scrolled={isScrolled}
      >
        {/* Top Bar - Hidden when scrolled */}
        <div 
          className={`hidden lg:block bg-[var(--color-charcoal)] text-[var(--color-off-white)] transition-all duration-300 overflow-hidden ${
            isScrolled ? 'h-0 py-0' : 'h-auto py-2'
          }`}
        >
          <div className="container flex justify-between items-center text-sm">
            <div className="flex items-center gap-8">
              <a href="tel:+441234567890" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors" aria-label="Call us at 01234 567 890">
                <Phone size={14} aria-hidden="true" />
                <span>01234 567 890</span>
              </a>
              <a href="mailto:info@tilletandsaunders.co.uk" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors" aria-label="Email us at info@tilletandsaunders.co.uk">
                <Mail size={14} aria-hidden="true" />
                <span>info@tilletandsaunders.co.uk</span>
              </a>
            </div>
            <div className="text-[var(--color-gray-light)]">
              Serving London & the South East
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full transition-all duration-500 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg py-4 header-scrolled'
              : 'bg-transparent py-6 header-top'
          }`}
        >
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <span
                className={`font-display text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen
                    ? 'text-[var(--color-burgundy)]'
                    : 'text-white'
                }`}
              >
                Tillet & Saunders
              </span>
              <span
                className={`text-[0.65rem] tracking-[0.3em] uppercase font-medium transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen
                    ? 'text-[var(--color-gray-medium)]'
                    : 'text-white/70'
                }`}
              >
                Building Excellence
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  style={{
                    color: isScrolled
                      ? pathname === link.href
                        ? 'var(--color-burgundy)'
                        : 'var(--color-charcoal)'
                      : 'white'
                  }}
                  className={`relative font-medium text-sm uppercase tracking-wider transition-colors duration-300 group ${
                    isScrolled
                      ? pathname === link.href
                        ? 'hover:text-[var(--color-burgundy)]'
                        : 'hover:text-[var(--color-burgundy)]'
                      : 'hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    } ${
                      isScrolled 
                        ? 'bg-[var(--color-burgundy)]' 
                        : pathname === link.href 
                          ? 'bg-white' 
                          : 'bg-white'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/contact" className="btn-primary ml-4">
                Get a Quote
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-10 p-2 transition-colors duration-300 min-w-[44px] min-h-[44px] ${
              isScrolled || isMobileMenuOpen
                ? 'text-[var(--color-charcoal)]'
                : 'text-white'
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <nav className="flex flex-col gap-6" role="navigation" aria-label="Mobile navigation">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-2xl font-display ${
                          pathname === link.href
                            ? 'text-[var(--color-burgundy)]'
                            : 'text-[var(--color-charcoal)]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto pb-10">
                  <div className="border-t border-[var(--color-off-white)] pt-8 mb-8">
                    <a
                      href="tel:+441234567890"
                      className="flex items-center gap-3 text-[var(--color-charcoal)] mb-4"
                    >
                      <Phone size={18} className="text-[var(--color-burgundy)]" />
                      <span>01234 567 890</span>
                    </a>
                    <a
                      href="mailto:info@tilletandsaunders.co.uk"
                      className="flex items-center gap-3 text-[var(--color-charcoal)]"
                    >
                      <Mail size={18} className="text-[var(--color-burgundy)]" />
                      <span>info@tilletandsaunders.co.uk</span>
                    </a>
                  </div>
                  <Link href="/contact" className="btn-primary w-full text-center">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

