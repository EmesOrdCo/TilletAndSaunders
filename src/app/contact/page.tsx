'use client';

import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import GhlContactForm from '@/components/GhlContactForm';

const faqs = [
  {
    question: 'How do I get a quote?',
    answer: 'Simply fill out our contact form or give us a call. We\'ll arrange a convenient time to visit your property, discuss your requirements, and provide a detailed, no-obligation quotation.',
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer free initial consultations for all projects. This allows us to understand your vision and provide accurate advice and pricing.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We primarily serve London and the South East, including Surrey, Kent, Essex, and Hertfordshire. Contact us to confirm coverage in your area.',
  },
  {
    question: 'Are you fully insured?',
    answer: 'Absolutely. We carry comprehensive public liability insurance and employer\'s liability insurance. We\'re happy to provide copies of our certificates upon request.',
  },
  {
    question: 'How long will my project take?',
    answer: 'Project timelines vary depending on scope and complexity. We provide detailed schedules in our quotations and keep you informed throughout the build process.',
  },
  {
    question: 'Do you handle planning permission?',
    answer: 'Yes, we can manage the entire planning process on your behalf, from initial applications through to approval, liaising with local authorities as needed.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden contact-hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <div className="absolute bottom-0 left-0 right-0 contact-hero-wrapper">
          <div className="container pb-12 md:pb-16 contact-hero-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl contact-hero-content"
            >
              <span className="inline-block text-[var(--color-gold)] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                Get in Touch
              </span>
              <h1 className="text-white mb-4">
                Let&apos;s Discuss Your <em>Project</em>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Ready to start your home transformation? Contact us today for a free, 
                no-obligation consultation and quote.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="section-label">Contact Information</span>
              <h2 className="mb-6">Get in <em>Touch</em></h2>
              <div className="divider" />
              <p className="text-[var(--color-gray-warm)] mb-10 contact-intro-paragraph">
                We&apos;d love to hear about your project. Reach out using any of the methods 
                below, or fill in the form and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-10 contact-info-items">
                <a
                  href={siteConfig.phone.telHref}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[var(--color-burgundy)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-burgundy-dark)] transition-colors">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-charcoal)] mb-1">Phone</div>
                    <div className="text-[var(--color-gray-warm)] group-hover:text-[var(--color-burgundy)] transition-colors">
                      {siteConfig.phone.display}
                    </div>
                  </div>
                </a>

                <a
                  href={siteConfig.email.mailtoHref}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[var(--color-burgundy)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-burgundy-dark)] transition-colors">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-charcoal)] mb-1">Email</div>
                    <div className="text-[var(--color-gray-warm)] group-hover:text-[var(--color-burgundy)] transition-colors">
                      {siteConfig.email.address}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-burgundy)] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-charcoal)] mb-1">Address</div>
                    <div className="text-[var(--color-gray-warm)]">
                      {siteConfig.address.line1}<br />
                      {siteConfig.address.line2}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-burgundy)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-charcoal)] mb-1">Working Hours</div>
                    <div className="text-[var(--color-gray-warm)]">
                      Monday - Friday: 8:00 - 18:00<br />
                      Saturday: 9:00 - 14:00<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video bg-[var(--color-gray-light)] relative overflow-hidden contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.542156896357!2d-0.1276524!3d51.5013449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sWestminster%2C%20London!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Interactive map showing Tillet & Saunders location in Westminster, London"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white shadow-lg contact-form-container p-8 md:p-10">
                <h3 className="text-2xl mb-2">Request a Quote</h3>
                <p className="text-[var(--color-gray-warm)] mb-8">
                  Fill in the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <GhlContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="section-label">FAQs</span>
            <h2 className="mb-6">Frequently Asked <em>Questions</em></h2>
            <div className="divider divider-center" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[var(--color-cream)]"
              >
                <h3 className="font-display text-lg mb-3 text-[var(--color-charcoal)]">
                  {faq.question}
                </h3>
                <p className="text-[var(--color-gray-warm)]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--color-burgundy)] contact-cta-section">
        <div className="container contact-cta-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto contact-cta-content"
          >
            <h2 className="text-white mb-6 contact-cta-title">
              Prefer to Talk <em>Directly</em>?
            </h2>
            <p className="text-white/80 text-lg mb-10 contact-cta-paragraph">
              Give us a call and speak with a member of our team. We&apos;re here to answer 
              your questions and discuss your project requirements.
            </p>
            <a href={siteConfig.phone.telHref} className="btn-primary bg-white text-[var(--color-burgundy)] hover:bg-[var(--color-off-white)] contact-cta-button">
              <Phone size={18} />
              Call {siteConfig.phone.display}
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

