'use client';

import { useState, useEffect } from 'react';
import { 
  Accessibility, 
  X, 
  Type, 
  Contrast, 
  Eye, 
  MousePointerClick,
  RotateCcw,
  ChevronUp,
  ChevronDown,
  ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100); // percentage
  const [contrast, setContrast] = useState('normal');
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [showFocus, setShowFocus] = useState(true);
  const [textSpacing, setTextSpacing] = useState(false);

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedFontSize = localStorage.getItem('accessibility-fontSize');
    const savedContrast = localStorage.getItem('accessibility-contrast');
    const savedHighlightLinks = localStorage.getItem('accessibility-highlightLinks');
    const savedShowFocus = localStorage.getItem('accessibility-showFocus');
    const savedTextSpacing = localStorage.getItem('accessibility-textSpacing');

    if (savedFontSize) setFontSize(Number(savedFontSize));
    if (savedContrast) setContrast(savedContrast);
    if (savedHighlightLinks === 'true') setHighlightLinks(true);
    if (savedShowFocus === 'false') setShowFocus(false);
    if (savedTextSpacing === 'true') setTextSpacing(true);
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-fontSize', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('accessibility-contrast', contrast);
  }, [contrast]);

  useEffect(() => {
    localStorage.setItem('accessibility-highlightLinks', highlightLinks.toString());
  }, [highlightLinks]);

  useEffect(() => {
    localStorage.setItem('accessibility-showFocus', showFocus.toString());
  }, [showFocus]);

  useEffect(() => {
    localStorage.setItem('accessibility-textSpacing', textSpacing.toString());
  }, [textSpacing]);

  // Keyboard shortcut: Alt + A to toggle accessibility menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Apply font size
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    return () => {
      document.documentElement.style.fontSize = '';
    };
  }, [fontSize]);

  // Apply contrast mode
  useEffect(() => {
    const body = document.body;
    if (contrast === 'high') {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }
    return () => {
      body.classList.remove('high-contrast');
    };
  }, [contrast]);

  // Apply link highlighting
  useEffect(() => {
    const body = document.body;
    if (highlightLinks) {
      body.classList.add('highlight-links');
    } else {
      body.classList.remove('highlight-links');
    }
    return () => {
      body.classList.remove('highlight-links');
    };
  }, [highlightLinks]);

  // Apply text spacing
  useEffect(() => {
    const body = document.body;
    if (textSpacing) {
      body.classList.add('increased-text-spacing');
    } else {
      body.classList.remove('increased-text-spacing');
    }
    return () => {
      body.classList.remove('increased-text-spacing');
    };
  }, [textSpacing]);

  // Apply focus indicators
  useEffect(() => {
    const body = document.body;
    if (showFocus) {
      body.classList.remove('hide-focus');
    } else {
      body.classList.add('hide-focus');
    }
    return () => {
      body.classList.remove('hide-focus');
    };
  }, [showFocus]);

  const resetAll = () => {
    setFontSize(100);
    setContrast('normal');
    setHighlightLinks(false);
    setShowFocus(true);
    setTextSpacing(false);
    // Clear localStorage
    localStorage.removeItem('accessibility-fontSize');
    localStorage.removeItem('accessibility-contrast');
    localStorage.removeItem('accessibility-highlightLinks');
    localStorage.removeItem('accessibility-showFocus');
    localStorage.removeItem('accessibility-textSpacing');
    announce('All accessibility settings have been reset');
  };

  const announce = (message: string) => {
    const announcement = document.getElementById('accessibility-announcements');
    if (announcement) {
      announcement.textContent = message;
      setTimeout(() => {
        announcement.textContent = '';
      }, 1000);
    }
  };

  const increaseFontSize = () => {
    setFontSize(prev => {
      const newSize = Math.min(prev + 10, 200);
      announce(`Font size increased to ${newSize}%`);
      return newSize;
    });
  };

  const decreaseFontSize = () => {
    setFontSize(prev => {
      const newSize = Math.max(prev - 10, 50);
      announce(`Font size decreased to ${newSize}%`);
      return newSize;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-[9999] w-14 h-14 bg-[var(--color-burgundy)] text-white rounded-full shadow-lg hover:bg-[var(--color-burgundy-dark)] transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[var(--color-burgundy)] focus:ring-offset-2"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} aria-hidden="true" />
      </button>

      {/* Accessibility Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[var(--color-burgundy)] text-white rounded-full shadow-lg hover:bg-[var(--color-burgundy-dark)] transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[var(--color-burgundy)] focus:ring-offset-2"
        aria-label={isOpen ? "Close accessibility menu" : "Open accessibility menu"}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        id="accessibility-toggle"
      >
        <Accessibility size={24} aria-hidden="true" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 z-[9998]"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              id="accessibility-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="accessibility-title"
              className="fixed bottom-24 right-6 z-[9999] w-[380px] max-h-[80vh] bg-white rounded-lg shadow-2xl border border-[var(--color-off-white)] overflow-hidden flex flex-col"
              style={{ paddingLeft: '0', paddingRight: '0' }}
            >
              {/* Header */}
              <div className="bg-[var(--color-burgundy)] text-white flex items-center justify-between flex-shrink-0 accessibility-header" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1.25rem', paddingBottom: '1.5rem' }}>
                <h2 id="accessibility-title" className="font-semibold text-base">
                  Accessibility Options
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-burgundy)]"
                  aria-label="Close accessibility menu"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              {/* Screen reader announcements */}
              <div role="status" aria-live="polite" aria-atomic="true" className="sr-only" id="accessibility-announcements"></div>

              {/* Content */}
              <div className="py-4 overflow-y-auto flex-1" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                {/* Font Size */}
                <div className="font-size-section" style={{ marginBottom: '1.5rem' }}>
                  <label className="block text-xs font-semibold text-[var(--color-charcoal)] flex items-center gap-2" style={{ marginBottom: '0.75rem' }}>
                    <Type size={14} aria-hidden="true" />
                    Font Size
                  </label>
                  <div className="flex items-center gap-3" style={{ marginBottom: '0.5rem' }}>
                    <button
                      onClick={decreaseFontSize}
                      className="w-10 h-10 flex items-center justify-center border border-[var(--color-gray-light)] rounded hover:bg-[var(--color-cream)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-burgundy)]"
                      aria-label="Decrease font size"
                    >
                      <ChevronDown size={16} aria-hidden="true" />
                    </button>
                    <div className="flex-1 text-center">
                      <span className="text-sm font-medium text-[var(--color-gray-warm)]">{fontSize}%</span>
                    </div>
                    <button
                      onClick={increaseFontSize}
                      className="w-10 h-10 flex items-center justify-center border border-[var(--color-gray-light)] rounded hover:bg-[var(--color-cream)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-burgundy)]"
                      aria-label="Increase font size"
                    >
                      <ChevronUp size={16} aria-hidden="true" />
                    </button>
                  </div>
                  <p className="text-xs text-[var(--color-gray-medium)]" style={{ marginTop: '0.5rem' }}>
                    Adjust text size (50% - 200%)
                  </p>
                </div>

                {/* Contrast */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="block text-xs font-semibold text-[var(--color-charcoal)] flex items-center gap-2" style={{ marginBottom: '0.75rem' }}>
                    <Contrast size={14} aria-hidden="true" />
                    Contrast Mode
                  </label>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setContrast('normal');
                        announce('Contrast mode set to normal');
                      }}
                      className={`w-full px-4 py-2.5 text-left text-xs rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-burgundy)] ${
                        contrast === 'normal'
                          ? 'bg-[var(--color-burgundy)] text-white border-[var(--color-burgundy)]'
                          : 'bg-white text-[var(--color-charcoal)] border-[var(--color-gray-light)] hover:bg-[var(--color-cream)]'
                      }`}
                      style={{ paddingLeft: '1.5rem' }}
                      aria-pressed={contrast === 'normal'}
                    >
                      Normal
                    </button>
                    <button
                      onClick={() => {
                        setContrast('high');
                        announce('High contrast mode enabled');
                      }}
                      className={`w-full px-4 py-2.5 text-left text-xs rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-burgundy)] ${
                        contrast === 'high'
                          ? 'bg-[var(--color-burgundy)] text-white border-[var(--color-burgundy)]'
                          : 'bg-white text-[var(--color-charcoal)] border-[var(--color-gray-light)] hover:bg-[var(--color-cream)]'
                      }`}
                      style={{ paddingLeft: '1.5rem' }}
                      aria-pressed={contrast === 'high'}
                    >
                      High Contrast
                    </button>
                  </div>
                </div>

                {/* Highlight Links */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="flex items-center justify-between cursor-pointer" style={{ marginBottom: '0.5rem' }}>
                    <span className="text-xs font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
                      <MousePointerClick size={14} aria-hidden="true" />
                      Highlight Links
                    </span>
                    <button
                      onClick={() => {
                        setHighlightLinks(!highlightLinks);
                        announce(highlightLinks ? 'Link highlighting disabled' : 'Link highlighting enabled');
                      }}
                      className={`relative rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-burgundy)] focus:ring-offset-2 toggle-switch ${
                        highlightLinks ? 'bg-[var(--color-burgundy)]' : 'bg-[var(--color-gray-light)]'
                      }`}
                      role="switch"
                      aria-checked={highlightLinks}
                      aria-label="Toggle link highlighting"
                    >
                      <span
                        className={`absolute top-0 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
                          highlightLinks ? 'left-auto right-0 translate-x-0' : 'left-0 translate-x-0'
                        }`}
                      />
                    </button>
                  </label>
                  <p className="text-xs text-[var(--color-gray-medium)]" style={{ marginTop: '0.5rem' }}>
                    Make all links more visible
                  </p>
                </div>

                {/* Text Spacing */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="flex items-center justify-between cursor-pointer" style={{ marginBottom: '0.5rem' }}>
                    <span className="text-xs font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
                      <Type size={14} aria-hidden="true" />
                      Increased Text Spacing
                    </span>
                    <button
                      onClick={() => {
                        setTextSpacing(!textSpacing);
                        announce(textSpacing ? 'Increased text spacing disabled' : 'Increased text spacing enabled');
                      }}
                      className={`relative rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-burgundy)] focus:ring-offset-2 toggle-switch ${
                        textSpacing ? 'bg-[var(--color-burgundy)]' : 'bg-[var(--color-gray-light)]'
                      }`}
                      role="switch"
                      aria-checked={textSpacing}
                      aria-label="Toggle increased text spacing"
                    >
                      <span
                        className={`absolute top-0 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
                          textSpacing ? 'left-auto right-0 translate-x-0' : 'left-0 translate-x-0'
                        }`}
                      />
                    </button>
                  </label>
                  <p className="text-xs text-[var(--color-gray-medium)]" style={{ marginTop: '0.5rem' }}>
                    Increase spacing between words and lines
                  </p>
                </div>

                {/* Show Focus Indicators */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="flex items-center justify-between cursor-pointer" style={{ marginBottom: '0.5rem' }}>
                    <span className="text-xs font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
                      <Eye size={14} aria-hidden="true" />
                      Show Focus Indicators
                    </span>
                    <button
                      onClick={() => {
                        setShowFocus(!showFocus);
                        announce(showFocus ? 'Focus indicators disabled' : 'Focus indicators enabled');
                      }}
                      className={`relative rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-burgundy)] focus:ring-offset-2 toggle-switch ${
                        showFocus ? 'bg-[var(--color-burgundy)]' : 'bg-[var(--color-gray-light)]'
                      }`}
                      role="switch"
                      aria-checked={showFocus}
                      aria-label="Toggle focus indicators"
                    >
                      <span
                        className={`absolute top-0 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
                          showFocus ? 'left-auto right-0 translate-x-0' : 'left-0 translate-x-0'
                        }`}
                      />
                    </button>
                  </label>
                  <p className="text-xs text-[var(--color-gray-medium)]" style={{ marginTop: '0.5rem' }}>
                    Highlight focused elements
                  </p>
                </div>

                {/* Keyboard Shortcuts Info */}
                <div className="border-t border-[var(--color-off-white)]" style={{ paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                  <div className="text-xs">
                    <div className="text-[var(--color-gray-warm)] font-medium mb-2 py-1">
                      Keyboard Shortcuts
                    </div>
                    <div className="mt-2 space-y-1.5 text-xs text-[var(--color-gray-medium)] pl-1">
                      <p className="py-0.5"><kbd className="px-1.5 py-0.5 bg-[var(--color-cream)] border border-[var(--color-gray-light)] rounded text-xs">Alt</kbd> + <kbd className="px-1.5 py-0.5 bg-[var(--color-cream)] border border-[var(--color-gray-light)] rounded text-xs">A</kbd> - Toggle this menu</p>
                      <p className="py-0.5"><kbd className="px-1.5 py-0.5 bg-[var(--color-cream)] border border-[var(--color-gray-light)] rounded text-xs">Esc</kbd> - Close menu</p>
                      <p className="py-0.5"><kbd className="px-1.5 py-0.5 bg-[var(--color-cream)] border border-[var(--color-gray-light)] rounded text-xs">Tab</kbd> - Navigate between options</p>
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <div className="border-t border-[var(--color-off-white)]" style={{ paddingTop: '1.5rem', marginTop: '1.5rem', paddingBottom: '1rem' }}>
                  <button
                    onClick={resetAll}
                    className="w-full px-4 py-2.5 bg-[var(--color-cream)] text-[var(--color-charcoal)] rounded border border-[var(--color-gray-light)] hover:bg-[var(--color-off-white)] transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-burgundy)] font-medium text-xs"
                    aria-label="Reset all accessibility settings"
                  >
                    <RotateCcw size={14} aria-hidden="true" />
                    Reset All Settings
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

