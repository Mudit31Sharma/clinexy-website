'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Add js-anim class to html root
    document.documentElement.classList.add('js-anim');

    // 2. FAQ Accordion feel: close siblings when one opens
    const faqLists = document.querySelectorAll('.faq-list');
    const faqListeners: { details: HTMLDetailsElement; listener: () => void }[] = [];

    faqLists.forEach((listEl) => {
      const faqItems = listEl.querySelectorAll('details.faq-item');
      faqItems.forEach((dt) => {
        const detailsEl = dt as HTMLDetailsElement;
        const handleToggle = () => {
          if (detailsEl.open) {
            faqItems.forEach((o) => {
              if (o !== detailsEl) {
                (o as HTMLDetailsElement).open = false;
              }
            });
          }
        };
        detailsEl.addEventListener('toggle', handleToggle);
        faqListeners.push({ details: detailsEl, listener: handleToggle });
      });
    });

    // 3. Scroll Reveal (IntersectionObserver)
    const selectors = [
      '.section h2',
      '.section h3',
      '.quick-answer',
      '.definition-box',
      '.summary-box',
      '.prose',
      '.split-text',
      '.split-media',
      '.mockup',
      '.testimonial',
      '.compare-table',
      '.stat-band .stat',
      '.cards-grid > *',
      '.photo-cards-grid > *',
      '.related-grid > *',
      '.plan-grid > *',
      '.steps .step',
      '.point-list',
      '.faq-item',
      '.section-cta',
      '.contact-methods > *',
      '.diagram'
    ];

    const seenElements = new Set<Element>();
    const elementsToReveal: HTMLElement[] = [];

    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        // Skip elements inside hero header to let hero animate on its own
        if (el.closest('.hero')) return;
        if (seenElements.has(el)) return;
        seenElements.add(el);
        if (el instanceof HTMLElement) {
          elementsToReveal.push(el);
          el.classList.add('reveal');
        }
      });
    });

    // Stagger transition delays for grid/list children
    const gridSelectors = [
      '.cards-grid',
      '.photo-cards-grid',
      '.related-grid',
      '.plan-grid',
      '.stat-band'
    ];

    gridSelectors.forEach((gs) => {
      document.querySelectorAll(gs).forEach((g) => {
        Array.from(g.children).forEach((c, i) => {
          if (c instanceof HTMLElement && c.classList.contains('reveal')) {
            c.style.transitionDelay = `${i * 0.08}s`;
          }
        });
      });
    });

    if (!('IntersectionObserver' in window)) {
      elementsToReveal.forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -7% 0px',
      }
    );

    elementsToReveal.forEach((el) => observer.observe(el));

    // Cleanup function on path change or unmount
    return () => {
      observer.disconnect();
      faqListeners.forEach(({ details, listener }) => {
        details.removeEventListener('toggle', listener);
      });
    };
  }, [pathname]);

  return null;
}
