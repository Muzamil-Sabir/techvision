// ========================================
// SMOOTH SCROLL & NAVIGATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functions
    initNavigation();
    initScrollAnimations();
    initCounterAnimations();
    initParallaxEffects();
    initFormHandling();
    initCursorEffects();
    
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Smooth scroll for in-page nav links only (href starts with '#')
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href') || '';
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    // Update active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Update active nav link based on scroll position (in single-page context)
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Set active nav link based on current page (multi-page context)
    const path = (window.location.pathname || '').toLowerCase();
    if (path.endsWith('about.html')) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector('.nav-link[href="about.html"]');
        if (a) a.classList.add('active');
    } else if (path.endsWith('services.html')) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector('.nav-link[href="services.html"]');
        if (a) a.classList.add('active');
    } else if (path.endsWith('process.html')) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector('.nav-link[href="process.html"]');
        if (a) a.classList.add('active');
    } else if (path.endsWith('journey.html')) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector('.nav-link[href="journey.html"]');
        if (a) a.classList.add('active');
    } else if (path.endsWith('contact.html')) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector('.nav-link[href="contact.html"]');
        if (a) a.classList.add('active');
    } else if (path.endsWith('index.html') || path.endsWith('/') || path === '' ) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector('.nav-link[href="index.html"]');
        if (a) a.classList.add('active');
    }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Animate children with stagger effect
                const children = entry.target.querySelectorAll('.value-card, .service-card, .team-role, .process-step, .timeline-item, .commitment-item, .stat-box');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
    
    // Observe individual animated elements
    const animatedElements = document.querySelectorAll('.value-card, .service-card, .team-role, .process-step, .timeline-item, .commitment-item, .stat-box');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
}

// ========================================
// COUNTER ANIMATIONS
// ========================================

function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Observe hero stats
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
    
    // Observe journey stats
    const journeyStatsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statsInView = entry.target.querySelectorAll('.stat-value');
                statsInView.forEach(counter => {
                    if (counter.textContent === '0') {
                        animateCounter(counter);
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        journeyStatsObserver.observe(statsGrid);
    }
}

// ========================================
// PARALLAX EFFECTS
// ========================================

function initParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for hero section
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            const videoOverlay = heroSection.querySelector('.video-overlay');
            if (videoOverlay) {
                videoOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }
        
        // Parallax for floating elements
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = 0.05 + (index * 0.02);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Parallax for gradient orbs
        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = 0.03 + (index * 0.01);
            const direction = index % 2 === 0 ? 1 : -1;
            orb.style.transform = `translate(${scrolled * speed * direction}px, ${scrolled * speed}px)`;
        });
    });
}

// ========================================
// FORM HANDLING
// ========================================

function initFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Show success message (you can replace this with actual form submission)
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // In production, you would send this data to your backend:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });
        });
        
        // Form field animations
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.style.transform = 'translateY(0)';
            });
        });
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 40px;
        background: linear-gradient(135deg, rgba(0, 240, 255, 0.95), rgba(131, 56, 236, 0.95));
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.4s ease-out;
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 500;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 5000);
}

// Add notification animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// CURSOR EFFECTS
// ========================================

function initCursorEffects() {
    // Custom cursor trail effect
    let mouseX = 0;
    let mouseY = 0;
    let cursorTrail = [];
    const trailLength = 20;
    
    // Create cursor trail elements
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: ${10 - i * 0.3}px;
            height: ${10 - i * 0.3}px;
            background: radial-gradient(circle, rgba(0, 240, 255, ${1 - i / trailLength}), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease-out;
        `;
        document.body.appendChild(dot);
        cursorTrail.push({
            element: dot,
            x: 0,
            y: 0
        });
    }
    
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate cursor trail
    function animateCursorTrail() {
        let x = mouseX;
        let y = mouseY;
        
        cursorTrail.forEach((dot, index) => {
            dot.x += (x - dot.x) * (0.5 - index * 0.02);
            dot.y += (y - dot.y) * (0.5 - index * 0.02);
            
            dot.element.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
            
            x = dot.x;
            y = dot.y;
        });
        
        requestAnimationFrame(animateCursorTrail);
    }
    
    animateCursorTrail();
    
    // Hide cursor trail on mobile
    if (window.innerWidth <= 768) {
        cursorTrail.forEach(dot => {
            dot.element.style.display = 'none';
        });
    }
}

// ========================================
// BUTTON HOVER EFFECTS
// ========================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: translate(-50%, -50%);
            animation: ripple 0.6s ease-out;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ========================================
// SERVICE CARD TILT EFFECT
// ========================================

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// TEXT TYPING EFFECT (Optional Enhancement)
// ========================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
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

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top on click
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

// ========================================
// LAZY LOADING IMAGES
// ========================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

initLazyLoading();

// ========================================
// PRELOADER (Optional)
// ========================================

window.addEventListener('load', () => {
    // Hide preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
    
    // Trigger initial animations
    document.body.classList.add('loaded');
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// DYNAMIC YEAR IN FOOTER
// ========================================

const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});

// ========================================
// CONSOLE MESSAGE (Easter Egg)
// ========================================

console.log('%c🚀 TechVision Solutions', 'color: #00f0ff; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with passion and cutting-edge technology', 'color: #8338ec; font-size: 14px;');
console.log('%cInterested in working with us? Visit our Contact section!', 'color: #06ffa5; font-size: 12px;');

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

// Add keyboard navigation for interactive elements
document.querySelectorAll('.service-card, .value-card, .team-role').forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            card.click();
        }
    });
});

// Focus visible for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add focus styles for keyboard navigation
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid #00f0ff;
        outline-offset: 4px;
    }
`;
document.head.appendChild(focusStyle);