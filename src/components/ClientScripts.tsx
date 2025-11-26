'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Trigger card animations
          const cards = entry.target.querySelectorAll('.value-card, .service-card, .team-role, .process-card, .detailed-service-card');
          cards.forEach((card) => {
            card.classList.add('is-visible');
          });

          // Animate stat boxes
          const statBoxes = entry.target.querySelectorAll('.stat-box');
          statBoxes.forEach((box) => {
            box.classList.add('is-visible');
          });

          // Animate section header
          const sectionHeader = entry.target.querySelector('.section-header');
          if (sectionHeader) {
            sectionHeader.classList.add('is-visible');
          }

          // Animate title underline
          const underline = entry.target.querySelector('.title-underline');
          if (underline) {
            setTimeout(() => {
              underline.classList.add('is-visible');
            }, 300);
          }
        }
      });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('fade-in-section');
      observer.observe(section);
      
      // Immediately check if section is already in viewport
      const rect = section.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        // Add is-visible class immediately for sections already in view
        setTimeout(() => {
          section.classList.add('is-visible');
          
          // Trigger card animations
          const cards = section.querySelectorAll('.value-card, .service-card, .team-role, .process-card, .detailed-service-card');
          cards.forEach((card) => {
            card.classList.add('is-visible');
          });

          // Animate stat boxes
          const statBoxes = section.querySelectorAll('.stat-box');
          statBoxes.forEach((box) => {
            box.classList.add('is-visible');
          });

          // Animate section header
          const sectionHeader = section.querySelector('.section-header');
          if (sectionHeader) {
            sectionHeader.classList.add('is-visible');
          }

          // Animate title underline
          const underline = section.querySelector('.title-underline');
          if (underline) {
            setTimeout(() => {
              underline.classList.add('is-visible');
            }, 300);
          }
        }, 100);
      }
    });

    // Add slide-in animations to alternating sections
    const aboutSection = document.querySelector('#about');
    const servicesSection = document.querySelector('#services');
    const processSection = document.querySelector('#process');
    
    if (aboutSection) aboutSection.classList.add('slide-in-left');
    if (processSection) processSection.classList.add('scale-in');

    // Counter animations
    const counters = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };
      
      updateCounter();
    };
    
    const heroStatsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          counters.forEach(counter => {
            if (counter.closest('.hero-stats')) {
              animateCounter(counter);
            }
          });
        }
      });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
      heroStatsObserver.observe(heroStats);
    }

    // Parallax effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const videoOverlay = heroSection.querySelector('.video-overlay');
        if (videoOverlay) {
          (videoOverlay as HTMLElement).style.transform = `translateY(${scrolled * 0.3}px)`;
        }
      }
      
      const orbs = document.querySelectorAll('.gradient-orb');
      orbs.forEach((orb, index) => {
        const speed = 0.03 + (index * 0.01);
        const direction = index % 2 === 0 ? 1 : -1;
        (orb as HTMLElement).style.transform = `translate(${scrolled * speed * direction}px, ${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll to top button - check if it already exists
    let scrollTopBtn = document.querySelector('.scroll-to-top') as HTMLButtonElement;
    
    if (!scrollTopBtn) {
      scrollTopBtn = document.createElement('button');
      scrollTopBtn.innerHTML = '↑';
      scrollTopBtn.className = 'scroll-to-top';
      scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 40px;
        right: 40px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #00f0ff, #8338ec);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        box-shadow: 0 5px 20px rgba(0, 240, 255, 0.4);
        transition: all 0.3s ease;
      `;
      document.body.appendChild(scrollTopBtn);
      
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.transform = 'scale(1.1) rotate(360deg)';
      });

      scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.transform = 'scale(1) rotate(0deg)';
      });
    }

    const handleScrollButton = () => {
      if (window.pageYOffset > 500) {
        scrollTopBtn.style.display = 'flex';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScrollButton);

    // Service card tilt effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = (e as MouseEvent).clientX - rect.left;
        const y = (e as MouseEvent).clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollButton);
      sections.forEach(section => observer.unobserve(section));
      // Don't remove scroll button on cleanup - keep it persistent
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
