import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="video-background">
          <div className="video-overlay"></div>
          <video autoPlay muted loop playsInline className="bg-video">
            <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <img 
            src="/assets/images/hero low appearance.png" 
            alt="Hero background" 
            className="bg-image-overlay" 
          />
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Transform Your</span>
              <span className="title-line gradient-text">Digital Vision</span>
              <span className="title-line">Into Reality</span>
            </h1>
            <p className="hero-subtitle">
              Crafting cutting-edge software solutions that propel businesses into the future. 
              From web to mobile, desktop to AI - we turn innovation into impact.
            </p>
            <div className="hero-buttons">
              <Link href="/services" className="btn btn-primary">
                <span>Explore Services</span>
                <div className="btn-glow"></div>
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <span>Get Started</span>
                <div className="btn-glow"></div>
              </Link>
            </div>
          </div>
          <div className="hero-sub-image-card">
            <img src="/assets/images/hero sub.png" alt="Showcase" />
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value-line">
                <span className="stat-number" data-target="10">0</span>
              </div>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <div className="stat-value-line">
                <span className="stat-number" data-target="200">0</span>
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <div className="stat-value-line">
                <span className="stat-number" data-target="150">0</span>
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll to discover</span>
        </div>
      </section>

      {/* Services Preview - Creative Tech Stack Design */}
      <section id="services" className="services-section light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Our Expertise</h2>
            <div className="title-underline"></div>
            <p className="section-description">
              Cutting-edge technologies powering your digital transformation
            </p>
          </div>
          
          <div className="tech-services-grid">
            {/* Web Development */}
            <div className="tech-service-card">
              <div className="tech-card-header">
                <div className="tech-main-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 18L22 12L16 6M8 6L2 12L8 18" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="tech-service-title">Web Development</h3>
              </div>
              <div className="tech-stack-icons">
                <div className="tech-icon" title="React">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="11.99" r="2.5" fill="currentColor" stroke="none"/>
                    <ellipse cx="12" cy="11.99" rx="11" ry="4.2" strokeWidth="1"/>
                    <ellipse cx="12" cy="11.99" rx="11" ry="4.2" strokeWidth="1" transform="rotate(60 12 11.99)"/>
                    <ellipse cx="12" cy="11.99" rx="11" ry="4.2" strokeWidth="1" transform="rotate(-60 12 11.99)"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Next.js">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="currentColor"/>
                    <path d="M15.5 5v14M9 8.5v7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Vue">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 4l10 16L22 4h-4l-6 9.5L6 4z"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Angular">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.5L3 6v11.5l9 4.5 9-4.5V6l-9-3.5zm0 2.2l6.5 10.8h-2l-1.5-3.5h-6l-1.5 3.5h-2L12 4.7z"/>
                    <path d="M12 7.8l-2.1 5h4.2L12 7.8z" fill="#fff" opacity="0.9"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Node.js">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.51 16.5c-.07-.04-.11-.11-.11-.19V7.73c0-.08.04-.15.11-.19l7.44-4.3c.06-.04.16-.04.22 0l7.44 4.3c.07.04.11.11.11.19v8.58c0 .08-.04.15-.11.19l-7.44 4.3c-.06.04-.16.04-.22 0l-1.9-1.12c-.06-.03-.12-.04-.18-.02-.5.28-.6.32-1.07.48-.12.04-.29.1.07.28l2.48 1.47c.24.14.5.2.78.2.27 0 .54-.07.77-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.73c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.77-.2z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="tech-service-card">
              <div className="tech-card-header">
                <div className="tech-main-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2"/>
                    <path d="M12 18H12.01" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="tech-service-title">Mobile Apps</h3>
              </div>
              <div className="tech-stack-icons">
                <div className="tech-icon" title="Android">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                  </svg>
                </div>
                <div className="tech-icon" title="iOS">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Flutter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
                  </svg>
                </div>
                <div className="tech-icon" title="React Native">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="11.99" r="2" fill="currentColor" stroke="none"/>
                    <ellipse cx="12" cy="11.99" rx="11" ry="4.2" strokeWidth="1"/>
                    <ellipse cx="12" cy="11.99" rx="11" ry="4.2" strokeWidth="1" transform="rotate(60 12 11.99)"/>
                    <ellipse cx="12" cy="11.99" rx="11" ry="4.2" strokeWidth="1" transform="rotate(-60 12 11.99)"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Swift">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.508 0c-.287 0-.573.07-.828.21-3.133 1.746-4.65 5.38-3.485 8.73.18.518.41 1.016.686 1.49A8.97 8.97 0 0 0 2.667 15c0 4.97 4.033 9 9 9s9-4.03 9-9c0-3.478-1.978-6.49-4.867-7.99.11-.84.132-1.69.067-2.54-.41-5.31-6.04-6.26-8.359-4.47zm3.387 2.23c.27.18.5.41.68.67 1.02 1.52.87 3.57-.34 4.97-.12.14-.25.27-.39.39 1.43 1.05 2.53 2.53 3.08 4.23.03.11.06.22.09.33-.25-.32-.52-.62-.81-.9-1.43-1.39-3.42-2.18-5.49-2.18-.64 0-1.27.07-1.88.21.47-1.02 1.16-1.94 2.02-2.69 1.41-1.23 3.23-2.03 5.17-2.25-.28-.38-.64-.7-1.05-.94-.9-.52-2.03-.52-2.93 0-.64.37-1.16.93-1.49 1.59.24-1.89 1.47-3.54 3.24-4.43.41-.21.87-.21 1.28 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Desktop Applications */}
            <div className="tech-service-card">
              <div className="tech-card-header">
                <div className="tech-main-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21H16M12 17V21" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="tech-service-title">Desktop Apps</h3>
              </div>
              <div className="tech-stack-icons">
                <div className="tech-icon" title="Electron">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.2"/>
                    <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/>
                    <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none"/>
                    <circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/>
                    <circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none"/>
                    <circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Windows">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.45L9.85 2v9.05H0V3.45zm10.85-1.5L24 0v11.05H10.85V1.95zM0 12.95h9.85v9.05L0 20.55v-7.6zm10.85 0H24V24l-13.15-1.95v-9.1z"/>
                  </svg>
                </div>
                <div className="tech-icon" title="macOS">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Linux">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.581 19.049c-.55-.446-1.08-.455-1.475-.28-.185.042-.357.133-.518.243-.365.24-.655.545-.913.904-.398.55-.795 1.213-1.163 1.89-.65 1.187-1.253 2.41-1.791 3.651-.33.752-.707 1.46-1.156 2.105-.28.403-.582.71-.893.924-.138.096-.293.162-.458.19-.275.042-.564-.026-.8-.17-.358-.226-.67-.602-.945-1.127-.262-.51-.46-1.12-.6-1.8-.207-.955-.326-2.014-.373-3.14-.05-1.17-.02-2.48.11-3.88.127-1.378.366-2.856.74-4.37.354-1.43.82-2.9 1.42-4.36.56-1.35 1.24-2.72 2.1-4.04.87-1.33 1.92-2.66 3.17-3.94 1.23-1.27 2.65-2.49 4.24-3.61 1.58-1.12 3.32-2.13 5.18-2.97 1.85-.84 3.82-1.5 5.88-1.94 2.05-.44 4.18-.65 6.36-.62 2.18.03 4.4.34 6.62.94 2.22.6 4.43 1.49 6.59 2.67 2.15 1.18 4.24 2.65 6.22 4.37 1.98 1.72 3.85 3.67 5.56 5.82 1.71 2.15 3.26 4.5 4.61 6.98 1.35 2.48 2.5 5.08 3.42 7.73.92 2.65 1.61 5.34 2.05 8.01.44 2.67.64 5.32.59 7.88-.05 2.56-.35 5.03-.91 7.35-.56 2.32-1.38 4.49-2.46 6.45-1.08 1.96-2.42 3.7-4.02 5.18-1.6 1.48-3.47 2.7-5.58 3.64-2.11.94-4.47 1.6-7.01 1.98-2.54.38-5.26.48-8.1.29-2.84-.19-5.8-.68-8.83-1.47-3.03-.79-6.12-1.88-9.22-3.25-3.1-1.37-6.2-3.03-9.26-4.95-3.06-1.92-6.07-4.08-8.99-6.46-2.92-2.38-5.74-4.97-8.43-7.72-2.69-2.75-5.24-5.67-7.61-8.7-2.37-3.03-4.55-6.16-6.51-9.34C2.46 17.06.72 13.72 0 10.28c-.72-3.44-.95-6.94-.68-10.46"/>
                  </svg>
                </div>
                <div className="tech-icon" title=".NET">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="11" fill="currentColor"/>
                    <path d="M7.5 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5S9 12.17 9 13s-.67 1.5-1.5 1.5z" fill="#fff"/>
                    <path d="M10.5 8h1l3.5 7h-1.2l-.8-1.7h-3.5L8.7 15H7.5l3-7zm.5 1.5l-1.2 2.7h2.4L10.5 9.5z" fill="#fff"/>
                    <path d="M15.5 8h4v.9h-2.8V11h2.5v.9h-2.5v2.2h2.9V15h-4.1V8z" fill="#fff"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* AI Solutions */}
            <div className="tech-service-card">
              <div className="tech-card-header">
                <div className="tech-main-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="tech-service-title">AI & ML</h3>
              </div>
              <div className="tech-stack-icons">
                <div className="tech-icon" title="TensorFlow">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.5L3 7v10l9 4.5 9-4.5V7l-9-4.5zM12 4l7 3.5v8l-7 3.5-7-3.5v-8l7-3.5z"/>
                    <path d="M12 8v8M9 9.5l3-1.5 3 1.5M9 14.5l3 1.5 3-1.5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                  </svg>
                </div>
                <div className="tech-icon" title="PyTorch">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c-.5 0-1 .2-1.4.6L3 10.2c-.8.8-.8 2 0 2.8l7.6 7.6c.8.8 2 .8 2.8 0l7.6-7.6c.8-.8.8-2 0-2.8l-7.6-7.6c-.4-.4-.9-.6-1.4-.6z"/>
                    <circle cx="12" cy="12" r="4" fill="#fff" opacity="0.9"/>
                  </svg>
                </div>
                <div className="tech-icon" title="OpenAI">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.2 9.3c.2-1.9-1-3.7-2.8-4.2-1.8-.5-3.7.5-4.5 2.2-1.4-.7-3.1-.7-4.5 0-.8-1.7-2.7-2.7-4.5-2.2-1.8.5-3 2.3-2.8 4.2-1.4.8-2.2 2.5-1.8 4.2.4 1.7 1.9 3 3.7 3 .1 1.9 1.4 3.6 3.3 4 1.8.5 3.7-.5 4.5-2.2 1.4.7 3.1.7 4.5 0 .8 1.7 2.7 2.7 4.5 2.2 1.9-.4 3.2-2.1 3.3-4 1.8 0 3.3-1.3 3.7-3 .4-1.7-.4-3.4-1.8-4.2z"/>
                    <circle cx="12" cy="12" r="3" fill="#fff"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Python">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.5 1C7 1 7 3.5 7 3.5V7h4.5v.5H4c-1 0-2 1-2 2v7c0 1.1 1 2 2 2h2.5v-3c0-1.4 1.1-2.5 2.5-2.5h5c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-2.5zM9.5 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
                    <path d="M12.5 23C17 23 17 20.5 17 20.5V17h-4.5v-.5H20c1 0 2-1 2-2v-7c0-1.1-1-2-2-2h-2.5v3c0 1.4-1.1 2.5-2.5 2.5h-5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2.5zM14.5 21c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" opacity="0.7"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Scikit-learn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="7" r="2"/>
                    <circle cx="7" cy="12" r="2"/>
                    <circle cx="17" cy="12" r="2"/>
                    <circle cx="12" cy="17" r="2"/>
                    <path d="M12 9v6M9.5 10.5l5 3M14.5 10.5l-5 3" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Graphics & Design */}
            <div className="tech-service-card">
              <div className="tech-card-header">
                <div className="tech-main-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="tech-service-title">UI/UX Design</h3>
              </div>
              <div className="tech-stack-icons">
                <div className="tech-icon" title="Figma">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 2c-1.7 0-3 1.3-3 3s1.3 3 3 3h3V2H8z"/>
                    <path d="M8 10c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3v-3H8z"/>
                    <circle cx="16" cy="13" r="3"/>
                    <path d="M11 18c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3h-3v3z"/>
                    <path d="M13 2h3c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3V2z"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Sketch">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.5 2L2 8l10 14L22 8l-4.5-6h-11z"/>
                    <path d="M6.5 2l5.5 6 5.5-6M2 8h20M12 22L2 8M12 22L22 8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Illustrator">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="4"/>
                    <path d="M10 7L7.5 16h1.8l.5-1.8h2.4l.5 1.8h1.8L12 7h-2zm-1 5.7l.8-3 .8 3h-1.6z" fill="#FF9A00"/>
                    <path d="M16 11v5h1.5v-5H16zm0-2h1.5V7.5H16V9z" fill="#FF9A00"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Photoshop">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="4"/>
                    <path d="M7 7h2.5c1.4 0 2.5 1.1 2.5 2.5S10.9 12 9.5 12H7v4H5.5V7H7zm0 1.5v2h2c.6 0 1-.4 1-1s-.4-1-1-1H7z" fill="#31A8FF"/>
                    <path d="M14 11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h1c.3 0 .5.2.5.5s-.2.5-.5.5h-2V16h2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2v-1h-2z" fill="#31A8FF"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Framer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 2h16v7.3H12L20 16v6h-8l-8-8.7V6h8L4 2z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Maintenance */}
            <div className="tech-service-card">
              <div className="tech-card-header">
                <div className="tech-main-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6V12L16 14" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="tech-service-title">24/7 Support</h3>
              </div>
              <div className="tech-stack-icons">
                <div className="tech-icon" title="DevOps">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M2 12h7l2-7 4 14 2-7h5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Docker">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="5" y="10" width="2" height="2"/>
                    <rect x="8" y="10" width="2" height="2"/>
                    <rect x="11" y="10" width="2" height="2"/>
                    <rect x="8" y="7" width="2" height="2"/>
                    <rect x="11" y="7" width="2" height="2"/>
                    <rect x="14" y="10" width="2" height="2"/>
                    <path d="M20.5 11c-.3-.5-1-1-2-1-.3 0-.6.1-.8.2-.5-1.5-2-2.5-3.7-2.5v.5h-8v5h12c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.2z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="tech-icon" title="Kubernetes">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l-8 4.5v9l8 4.5 8-4.5v-9L12 2zm0 2.2l5.5 3.1v6.2L12 16.8l-5.5-3.3V7.3L12 4.2z"/>
                    <circle cx="12" cy="10.5" r="1.5"/>
                    <path d="M12 10.5v3M10.5 11.5l3 1.5M10.5 13l3-1.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                  </svg>
                </div>
                <div className="tech-icon" title="AWS">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.76 14.96c0 .38-.06.68-.18.91-.12.23-.3.43-.54.61-.14.1-.19.21-.19.32 0 .1.07.2.22.3l.73.48c.1.07.21.1.3.1.12 0 .24-.06.36-.17.12-.13.23-.27.32-.43.09-.16.18-.35.27-.58.68.8 1.53 1.2 2.56 1.2.73 0 1.31-.21 1.74-.62.43-.42.64-1 .64-1.72 0-.76-.24-1.37-.73-1.82-.49-.45-1.14-.68-1.96-.68-.27 0-.55.02-.84.06v-.82c.32.03.58.04.77.04.7 0 1.36-.09 1.97-.26.61-.17 1.14-.48 1.59-.93l-.32-.47c-.1-.15-.24-.22-.43-.22-.13 0-.3.05-.5.15-.2.1-.46.19-.77.27-.31.08-.68.12-1.1.12-.4 0-.77-.04-1.1-.13-.33-.09-.62-.23-.88-.43-.25-.2-.45-.45-.59-.76-.14-.31-.21-.68-.21-1.1 0-.38.07-.72.22-1.02.15-.3.35-.56.61-.77.26-.21.56-.37.91-.48.35-.11.72-.17 1.12-.17.27 0 .52.02.76.06.24.04.46.1.66.18l.19.09c.09.04.16.07.22.08.13 0 .24-.09.32-.28l.32-.51c-.28-.22-.63-.4-1.05-.53-.42-.13-.87-.2-1.35-.2-.58 0-1.1.1-1.57.29-.47.19-.87.45-1.21.78-.34.33-.59.71-.77 1.15-.18.44-.27.9-.27 1.38 0 .87.24 1.58.73 2.13.49.55 1.17.83 2.05.83.28 0 .57-.02.88-.07v.67c-.24.03-.47.05-.67.05-.85 0-1.52.18-2.01.54-.49.36-.74.89-.74 1.58zm8.49 1.79c-.13 0-.21-.02-.27-.07-.06-.05-.11-.15-.17-.31l-1.9-6.26c-.06-.2-.09-.33-.09-.38 0-.15.08-.23.23-.23h.94c.14 0 .23.02.28.07.06.05.1.15.16.31l1.36 5.37 1.27-5.37c.05-.2.1-.3.15-.31.06-.05.15-.07.29-.07h.77c.14 0 .23.02.29.07.06.05.11.15.15.31l1.28 5.44 1.41-5.44c.05-.2.1-.3.16-.31.06-.05.15-.07.28-.07h.89c.15 0 .23.08.23.23 0 .05-.01.1-.02.16-.01.06-.03.14-.07.26l-1.96 6.26c-.06.2-.11.3-.17.31-.06.05-.15.07-.27.07h-.83c-.14 0-.23-.02-.29-.07-.06-.05-.11-.15-.15-.32l-1.26-5.23-1.25 5.23c-.05.2-.1.3-.15.32-.06.05-.15.07-.29.07h-.83z"/>
                  </svg>
                </div>
                <div className="tech-icon" title="CI/CD">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                    <path d="M8 12l3 3 5-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="services-cta">
            <Link href="/services" className="btn btn-primary">
              <span>Explore All Services</span>
              <div className="btn-glow"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">About TechVision Solutions</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="about-text-center">
            <h3 className="about-heading">Your Trusted Partner in Digital Excellence</h3>
            <p className="about-paragraph">
              At TechVision Solutions, we don&apos;t just write code - we architect digital experiences 
              that transform businesses. With over a decade of expertise under our belt, we&apos;ve evolved 
              from Rubab J Consultancy into a specialized powerhouse dedicated to delivering 
              world-class tech solutions.
            </p>
            <p className="about-paragraph">
              Our team of passionate developers, designers, and strategists work tirelessly to ensure 
              your vision becomes a tangible, successful reality. We believe in the power of technology 
              to solve real-world problems, and we&apos;re committed to making that power accessible to 
              businesses of all sizes.
            </p>
          </div>
          
          <div className="team-structure-two-column">
            <div className="team-cards-left">
              <div className="team-grid-compact">
                <div className="team-role">
                  <div className="role-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 7V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V7" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4>Project Managers</h4>
                  <p>Orchestrating seamless project execution</p>
                </div>
                <div className="team-role">
                  <div className="role-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                      <path d="M4 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M10 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M2 20H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4>Business Analysts</h4>
                  <p>Translating business needs into technical solutions</p>
                </div>
                <div className="team-role">
                  <div className="role-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                      <rect x="4" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M2 19H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4>Development Managers</h4>
                  <p>Leading technical excellence and innovation</p>
                </div>
                <div className="team-role">
                  <div className="role-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                      <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14 21 15 20 15.5 19C16 18 15.5 17 14 17H13C11.9 17 11 16.1 11 15C11 13.9 11.9 13 13 13H14C17.31 13 20 10.31 20 7C20 4.24 16.42 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <circle cx="7.5" cy="12.5" r="1.5" fill="currentColor"/>
                      <circle cx="9" cy="8" r="1.5" fill="currentColor"/>
                      <circle cx="14" cy="7.5" r="1.5" fill="currentColor"/>
                    </svg>
                  </div>
                  <h4>Team Leads</h4>
                  <p>Guiding development teams to success</p>
                </div>
                <div className="team-role">
                  <div className="role-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2"/>
                      <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4>QA Specialists</h4>
                  <p>Ensuring flawless quality at every stage</p>
                </div>
                <div className="team-role">
                  <div className="role-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                      <path d="M8 16L4 12L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 8L20 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4>Developers</h4>
                  <p>Building robust and scalable solutions</p>
                </div>
              </div>
            </div>
            
            <div className="team-heading-right">
              <span className="section-tag">Our Team</span>
              <h3 className="team-heading">Our Professional Hierarchy</h3>
              <div className="title-underline"></div>
              <p className="team-description">
                A structured approach to delivering excellence through specialized expertise at every level
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Two Column Layout */}
      <section className="values-section">
        <div className="values-background-image"></div>
        
        <div className="container">
          <div className="values-two-column">
            <div className="values-left">
              <span className="section-tag values-tag">Why Choose Us</span>
              <h2 className="section-title values-title">Our Core Values</h2>
              <div className="title-underline values-underline"></div>
              <p className="section-description values-description">
                The principles that drive everything we do
              </p>
            </div>

            <div className="values-right">
              <div className="value-card">
                <div className="value-icon-wrapper">
                  <div className="value-icon">✅</div>
                </div>
                <h3 className="value-title">No Compromise on Quality</h3>
                <p className="value-description">
                  We follow strict SDLC processes to deliver excellence every time
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon-wrapper">
                  <div className="value-icon">📢</div>
                </div>
                <h3 className="value-title">Transparent Communication</h3>
                <p className="value-description">
                  Regular updates keep you in the loop at every stage
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon-wrapper">
                  <div className="value-icon">⏱️</div>
                </div>
                <h3 className="value-title">On-Time Delivery</h3>
                <p className="value-description">
                  We respect deadlines and deliver projects as promised
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon-wrapper">
                  <div className="value-icon">🎯</div>
                </div>
                <h3 className="value-title">Client-First Approach</h3>
                <p className="value-description">
                  Your satisfaction and success are our top priorities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section Preview */}
      <section id="process" className="process-section light">
        <div className="container">
          <div className="process-two-column">
            {/* Left Side: Heading with Background Image */}
            <div className="process-left">
              <div className="section-header">
                <span className="section-tag">How We Work</span>
                <h2 className="section-title">Our Development Process</h2>
                <div className="title-underline"></div>
                <p className="section-description">
                  A compact circular view of our six-step SDLC — explore the full details on the Process page
                </p>
              </div>
            </div>

            {/* Right Side: Process Cards */}
            <div className="process-right">
              <div className="process-cards-container">
                <div className="process-card">
                  <div className="process-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="process-card-title">Planning</h3>
                  <div className="process-card-tooltip">
                    <p>Requirements gathering, feasibility analysis, and project scope definition</p>
                  </div>
                </div>

                <div className="process-arrow">→</div>

                <div className="process-card">
                  <div className="process-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="process-card-title">Design</h3>
                  <div className="process-card-tooltip">
                    <p>UI/UX design, architecture planning, and interactive prototyping</p>
                  </div>
                </div>

                <div className="process-arrow">→</div>

                <div className="process-card">
                  <div className="process-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="process-card-title">Development</h3>
                  <div className="process-card-tooltip">
                    <p>Agile coding, version control, and continuous integration practices</p>
                  </div>
                </div>

                <div className="process-arrow">→</div>

                <div className="process-card">
                  <div className="process-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="process-card-title">Testing</h3>
                  <div className="process-card-tooltip">
                    <p>Comprehensive QA, automated testing, and performance optimization</p>
                  </div>
                </div>

                <div className="process-arrow">→</div>

                <div className="process-card">
                  <div className="process-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="process-card-title">Deployment</h3>
                  <div className="process-card-tooltip">
                    <p>CI/CD pipelines, cloud deployment, and production monitoring</p>
                  </div>
                </div>

                <div className="process-arrow">→</div>

                <div className="process-card">
                  <div className="process-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="process-card-title">Maintenance</h3>
                  <div className="process-card-tooltip">
                    <p>24/7 support, regular updates, and continuous improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="process-cta">
            <Link href="/process" className="btn btn-process-purple">
              <span>View Full Process</span>
              <div className="btn-glow"></div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
