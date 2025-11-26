export default function Services() {
  return (
    <main>
      {/* Services Detailed - Alternating Layout */}
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
          
          <div className="services-detailed-grid">
            {/* Web Development - Card on Left */}
            <div className="service-detail-row">
              <div className="tech-service-card-detailed">
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
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="2"/>
                      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
                      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Next.js">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 20h20L12 2zm0 3.5L18.5 18h-13L12 5.5z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Vue">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 3h4l6 9 6-9h4L12 21 2 3z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Angular">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 6l1.5 13L12 22l8.5-3L22 6 12 2zm0 2.5l6.5 11h-2l-1.5-3h-6l-1.5 3h-2L12 4.5z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Node.js">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2l7 3.5v7L12 18l-7-3.5v-7L12 4z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="service-detail-content">
                <h3 className="detail-title">Modern Web Solutions</h3>
                <p className="detail-description">
                  We craft responsive, high-performance web applications using the latest frameworks and technologies. 
                  Our expertise spans from single-page applications to complex enterprise portals. Whether you need a 
                  dynamic React-based SPA, a server-rendered Next.js application, or a full-stack solution with Node.js, 
                  we deliver scalable and maintainable code that grows with your business.
                </p>
                <p className="detail-description">
                  Our team specializes in modern JavaScript frameworks including React, Vue, and Angular, combined with 
                  powerful backend technologies like Node.js, Express, and NestJS. We focus on performance optimization, 
                  SEO-friendly architecture, and creating intuitive user experiences that drive engagement and conversions.
                </p>
              </div>
            </div>

            {/* Mobile Development - Card on Right */}
            <div className="service-detail-row service-detail-row-reverse">
              <div className="service-detail-content">
                <h3 className="detail-title">Native & Cross-Platform Mobile Apps</h3>
                <p className="detail-description">
                  Build powerful mobile experiences for iOS and Android. From native apps to cross-platform solutions, 
                  we deliver seamless performance and intuitive user experiences. Our mobile development expertise covers 
                  native iOS development with Swift and SwiftUI, native Android with Kotlin and Java, and cross-platform 
                  solutions using Flutter and React Native.
                </p>
                <p className="detail-description">
                  We create mobile applications that feel natural on each platform while maintaining code efficiency through 
                  cross-platform frameworks when appropriate. Our apps feature smooth animations, offline capabilities, push 
                  notifications, and seamless integration with device features like camera, GPS, and biometric authentication.
                </p>
              </div>
              <div className="tech-service-card-detailed">
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
                      <path d="M6 18c0 .5.4 1 1 1h1v3.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V19h2v3.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V19h1c.6 0 1-.5 1-1V8H6v10zM3.5 8C2.7 8 2 8.7 2 9.5v7c0 .8.7 1.5 1.5 1.5S5 17.3 5 16.5v-7C5 8.7 4.3 8 3.5 8zm17 0c-.8 0-1.5.7-1.5 1.5v7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7c0-.8-.7-1.5-1.5-1.5zM15.5 2.4l1-1.7c.1-.1 0-.3-.1-.4-.1-.1-.3 0-.4.1l-1 1.7C13.9 1.4 13 1 12 1c-1 0-1.9.4-3 1.1l-1-1.7c-.1-.1-.3-.2-.4-.1-.1.1-.2.3-.1.4l1 1.7C7.1 3.5 6 5.1 6 7h12c0-1.9-1.1-3.5-2.5-4.6z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="iOS">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5 10c-2.8 0-5.1 2.3-5.1 5.1 0 2.8 2.3 5.1 5.1 5.1 2.8 0 5.1-2.3 5.1-5.1 0-2.8-2.3-5.1-5.1-5.1zm-7.4-7C9 3 8 4 8 5.1v13.8C8 20 9 21 10.1 21h.2c1.1 0 2.1-1 2.1-2.1V5.1C12.4 4 11.4 3 10.3 3h-.2zm7.4 2c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.6-1.3 1.3-1.3z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Flutter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.3 2L6 10.3l3.7 3.7L21 2.6V2h-.7zM13 15.7L9.3 12 2 19.3 5.7 23 13 15.7z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="React Native">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="2"/>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Swift">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 3L3 7v10l4 4h10l4-4V7l-4-4H7zm9.5 13.5c-2.5 1-5 .5-7-1.5 1.5 1 3.5 1.5 5.5 1 1-.3 2-.8 2.8-1.5.5-.5.9-1 1.2-1.5-.3 1.2-1.2 2.5-2.5 3.5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Applications - Card on Left */}
            <div className="service-detail-row">
              <div className="tech-service-card-detailed">
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
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="2"/>
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Windows">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="macOS">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.7 6.5c-1-.8-2.4-1.3-3.7-1.3-1.5 0-2.7.6-3.5.6-.9 0-2.2-.6-3.7-.6-2.8 0-5.5 2.3-5.5 6.5 0 2.6 1 5.4 2.3 7.2 1 1.4 1.9 2.1 2.9 2.1 1.2 0 1.9-.8 3.5-.8 1.6 0 2.2.8 3.5.8 1 0 1.9-.7 2.9-2.1.7-1 1.3-2.1 1.6-3.3-2.4-1-4-3.6-4-6.5 0-2.1.9-3.8 2.3-4.9-.7-.9-1.8-1.4-2.9-1.4-.3 0-.5 0-.7.1"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Linux">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.7 2 6 4.7 6 8c0 1.9.9 3.6 2.3 4.7-.4.8-.6 1.7-.6 2.6 0 2.2 1.3 4.2 3.3 5.1V22h2v-1.6c2-.9 3.3-2.9 3.3-5.1 0-.9-.2-1.8-.6-2.6C16.1 11.6 17 9.9 17 8c0-3.3-2.7-6-5-6zm0 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title=".NET">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3v18h18V3H3zm8 14H5v-2h6v2zm0-4H5v-2h6v2zm0-4H5V7h6v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="service-detail-content">
                <h3 className="detail-title">Cross-Platform Desktop Applications</h3>
                <p className="detail-description">
                  Develop powerful desktop applications for Windows, macOS, and Linux. From business tools to 
                  creative software, we build native and cross-platform solutions with seamless user experiences. 
                  Our desktop development spans from Electron-based cross-platform applications to native Windows 
                  apps with WPF and UWP, macOS applications with SwiftUI, and Linux applications with GTK and Qt.
                </p>
                <p className="detail-description">
                  We specialize in creating robust desktop applications that leverage the full power of the operating 
                  system, including file system access, system tray integration, and hardware acceleration. Whether you 
                  need a single codebase for all platforms or platform-specific native experiences, we deliver efficient 
                  and maintainable solutions with .NET, Electron, and modern desktop frameworks.
                </p>
              </div>
            </div>

            {/* AI & ML - Card on Right */}
            <div className="service-detail-row service-detail-row-reverse">
              <div className="service-detail-content">
                <h3 className="detail-title">Artificial Intelligence & Machine Learning</h3>
                <p className="detail-description">
                  Transform your business with AI-powered solutions. From predictive analytics to computer vision, 
                  we implement cutting-edge machine learning models tailored to your needs. Our AI expertise includes 
                  deep learning with TensorFlow and PyTorch, natural language processing with OpenAI's GPT models, 
                  computer vision, recommendation systems, and classical machine learning algorithms.
                </p>
                <p className="detail-description">
                  We build end-to-end AI solutions from data collection and preprocessing to model training, deployment, 
                  and monitoring. Our team works with Python-based ML frameworks, implements MLOps best practices, and 
                  creates scalable AI systems that integrate seamlessly with your existing infrastructure. Whether you need 
                  chatbots, predictive analytics, image recognition, or custom AI models, we deliver intelligent solutions 
                  that drive real business value.
                </p>
              </div>
              <div className="tech-service-card-detailed">
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
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8v8l-7 3.5L5 16V8l7-3.5zM12 7L7 9.5v5L12 17l5-2.5v-5L12 7z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="PyTorch">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1zm0 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="OpenAI">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="2"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Python">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm2-10c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Scikit-learn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* UI/UX Design - Card on Left */}
            <div className="service-detail-row">
              <div className="tech-service-card-detailed">
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
                      <path d="M8 2c-1.7 0-3 1.3-3 3s1.3 3 3 3h3V2H8zm0 8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3v-3H8zm8-8c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3V2h3zm0 8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm-3 8c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3h-3v3z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Framer">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 2h16v7H12l8 7H4v-7l8-7H4V2z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Sketch">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 2L2 7l10 15L22 7l-4-5H6zm6 3l4 2-4 10-4-10 4-2z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Illustrator">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="2"/>
                      <text x="12" y="16" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Ai</text>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Photoshop">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="2"/>
                      <text x="12" y="16" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Ps</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="service-detail-content">
                <h3 className="detail-title">User-Centered Design Excellence</h3>
                <p className="detail-description">
                  Create stunning, intuitive interfaces that delight users. Our design team combines aesthetic 
                  excellence with usability research to craft experiences that drive engagement and conversion. 
                  We specialize in UI/UX design using industry-leading tools like Figma for collaborative design 
                  and prototyping, Framer for interactive animations, and Adobe Creative Suite for visual assets.
                </p>
                <p className="detail-description">
                  Our design process includes user research, wireframing, high-fidelity mockups, interactive prototypes, 
                  and comprehensive design systems. We create responsive designs that work beautifully across all devices, 
                  with careful attention to accessibility, color theory, typography, and micro-interactions. From initial 
                  sketches in Sketch to polished assets in Illustrator and Photoshop, we deliver complete design packages 
                  ready for development.
                </p>
              </div>
            </div>

            {/* Support & DevOps - Card on Right */}
            <div className="service-detail-row service-detail-row-reverse">
              <div className="service-detail-content">
                <h3 className="detail-title">24/7 Support & DevOps Excellence</h3>
                <p className="detail-description">
                  Ensure your applications run smoothly with our comprehensive support and DevOps services. 
                  From continuous integration to cloud infrastructure, we keep your systems reliable and scalable. 
                  Our DevOps expertise includes containerization with Docker, orchestration with Kubernetes, cloud 
                  infrastructure on AWS and Azure, and automated CI/CD pipelines using GitHub Actions, Jenkins, and GitLab.
                </p>
                <p className="detail-description">
                  We implement infrastructure as code, automated monitoring and alerting, log aggregation, and disaster 
                  recovery strategies. Our 24/7 support team ensures rapid response to incidents, proactive system 
                  monitoring, performance optimization, and regular security updates. We help you achieve high availability, 
                  zero-downtime deployments, and seamless scaling to handle traffic spikes while maintaining optimal 
                  performance and security.
                </p>
              </div>
              <div className="tech-service-card-detailed">
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
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8v8l-7 3.5L5 16V8l7-3.5z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Docker">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 5h2v2h-2V5zm0 3h2v2h-2V8zm-3-3h2v2h-2V5zm0 3h2v2h-2V8zM7 8h2v2H7V8zm13.5 1c-.3 0-.5.1-.7.2-1.1-2.2-3.9-2.9-6.3-1.6L13 8.4c-.2.1-.3.4-.2.6.1.2.4.3.6.2l.5-.2c1.9-1.1 4.3-.5 5.3 1.4.1.2.4.3.6.2.2-.1.3-.4.2-.6-.2-.4-.5-.8-.9-1-.4-.4-.9-.5-1.4-.5z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="Kubernetes">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="AWS">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 14l6 4 6-4v-4l-6-4-6 4v4zm6-10l8 5.3v8.4L12 22 4 17.7V9.3L12 4z"/>
                    </svg>
                  </div>
                  <div className="tech-icon" title="CI/CD">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 12l3 3 5-6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="services-section light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">Selected Portfolio</h2>
            <div className="title-underline"></div>
            <p className="section-description">A snapshot of projects delivered across industries.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div style={{borderRadius: '16px', overflow: 'hidden', marginBottom: '16px', height: '220px'}}>
                <img src="/assets/images/GlobalRetail.png" alt="Global Retail" style={{width: '100%', height: '100%', objectFit: 'cover'}} loading="lazy" />
              </div>
              <h3 className="service-title">Global Retail Platform</h3>
              <p className="service-description">Full-stack e‑commerce solution with analytics and payments.</p>
              <div className="tech-list">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">MongoDB</span>
              </div>
            </div>
            <div className="service-card">
              <div style={{borderRadius: '16px', overflow: 'hidden', marginBottom: '16px', height: '220px'}}>
                <img src="/assets/images/medcare.png" alt="MedCare App" style={{width: '100%', height: '100%', objectFit: 'cover'}} loading="lazy" />
              </div>
              <h3 className="service-title">MedCare Mobile App</h3>
              <p className="service-description">Telemedicine, scheduling, and patient engagement.</p>
              <div className="tech-list">
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Laravel</span>
                <span className="tech-badge">MySQL</span>
              </div>
            </div>
            <div className="service-card">
              <div style={{borderRadius: '16px', overflow: 'hidden', marginBottom: '16px', height: '220px'}}>
                <img src="/assets/images/SmartAnalytics.png" alt="Smart Analytics" style={{width: '100%', height: '100%', objectFit: 'cover'}} loading="lazy" />
              </div>
              <h3 className="service-title">Smart Analytics Platform</h3>
              <p className="service-description">Predictive dashboards and automated reporting.</p>
              <div className="tech-list">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">TensorFlow</span>
                <span className="tech-badge">Django</span>
              </div>
            </div>
            <div className="service-card">
              <div style={{borderRadius: '16px', overflow: 'hidden', marginBottom: '16px', height: '220px'}}>
                <img src="/assets/images/banking.png" alt="Digital Banking" style={{width: '100%', height: '100%', objectFit: 'cover'}} loading="lazy" />
              </div>
              <h3 className="service-title">Digital Banking Solution</h3>
              <p className="service-description">Secure wallet, transfers, and real-time insights.</p>
              <div className="tech-list">
                <span className="tech-badge">Angular</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">PostgreSQL</span>
              </div>
            </div>
            <div className="service-card">
              <div style={{borderRadius: '16px', overflow: 'hidden', marginBottom: '16px', height: '220px'}}>
                <img src="/assets/images/EduTechLearning.png" alt="EduTech" style={{width: '100%', height: '100%', objectFit: 'cover'}} loading="lazy" />
              </div>
              <h3 className="service-title">EduTech Learning Platform</h3>
              <p className="service-description">Streaming, assessments, and progress tracking.</p>
              <div className="tech-list">
                <span className="tech-badge">Vue.js</span>
                <span className="tech-badge">Laravel</span>
                <span className="tech-badge">Redis</span>
              </div>
            </div>
            <div className="service-card">
              <div style={{borderRadius: '16px', overflow: 'hidden', marginBottom: '16px', height: '220px'}}>
                <img src="/assets/images/propertyhub.png" alt="PropertyHub" style={{width: '100%', height: '100%', objectFit: 'cover'}} loading="lazy" />
              </div>
              <h3 className="service-title">PropertyHub Platform</h3>
              <p className="service-description">Virtual tours and automated valuations.</p>
              <div className="tech-list">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
