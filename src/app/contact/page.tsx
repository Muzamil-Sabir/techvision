export default function Contact() {
  return (
    <main>
      {/* Hero Section with Background */}
      <section style={{
        background: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url("/assets/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0',
        position: 'relative'
      }}>
        <div className="container" style={{textAlign: 'center'}}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '16px',
            letterSpacing: '-0.5px'
          }}>
            Get in Touch
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            We&apos;re here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{padding: '80px 0', background: '#f8fafc'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start'}}>
            
            {/* Left Side - Contact Info */}
            <div>
              <h2 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '32px'
              }}>
                Let&apos;s Connect
              </h2>
              <p style={{
                fontSize: '15px',
                color: '#64748b',
                lineHeight: '1.7',
                marginBottom: '40px'
              }}>
                Fill out the form and our team will reach out to you within 24 hours. We can&apos;t wait to work with you!
              </p>

              <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                {/* Our Office */}
                <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#3b82f6',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{width: '24px', height: '24px'}}>
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '6px'}}>Our Office</h3>
                    <p style={{fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0}}>
                      123 Tech Boulevard, Suite 100<br/>
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#3b82f6',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{width: '24px', height: '24px'}}>
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '6px'}}>Email us</h3>
                    <a href="mailto:contact@techvisionsolutions.com" style={{
                      fontSize: '14px',
                      color: '#3b82f6',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '4px'
                    }}>
                      contact@techvisionsolutions.com
                    </a>
                  </div>
                </div>

                {/* Call Us */}
                <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#3b82f6',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{width: '24px', height: '24px'}}>
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '6px'}}>Call us</h3>
                    <a href="tel:+12345678900" style={{
                      fontSize: '14px',
                      color: '#3b82f6',
                      textDecoration: 'none',
                      display: 'block'
                    }}>
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div style={{
              background: '#ffffff',
              padding: '48px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <form id="contactForm" style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <label htmlFor="firstName" style={{fontSize: '14px', fontWeight: '600', color: '#334155'}}>First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    placeholder="Your first name" 
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      fontSize: '15px',
                      color: '#1e293b',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <label htmlFor="lastName" style={{fontSize: '14px', fontWeight: '600', color: '#334155'}}>Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Your last name" 
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      fontSize: '15px',
                      color: '#1e293b',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <label htmlFor="email" style={{fontSize: '14px', fontWeight: '600', color: '#334155'}}>Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="you@company.com" 
                    required 
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      fontSize: '15px',
                      color: '#1e293b',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <label htmlFor="subject" style={{fontSize: '14px', fontWeight: '600', color: '#334155'}}>Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="How can we help?" 
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      fontSize: '15px',
                      color: '#1e293b',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <label htmlFor="message" style={{fontSize: '14px', fontWeight: '600', color: '#334155'}}>Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    placeholder="Tell us more about your project..."
                    required
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      fontSize: '15px',
                      color: '#1e293b',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  style={{
                    padding: '14px 32px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{height: '500px', background: '#f1f5f9', position: 'relative', overflow: 'hidden'}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019283048303!2d-122.41941708468177!3d37.78825797975687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{border: 0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
        ></iframe>
        
        {/* Optional: Map overlay with address card */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          background: 'white',
          padding: '24px 32px',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          maxWidth: '350px',
          zIndex: 10
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px'}}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#3b82f6',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{width: '24px', height: '24px'}}>
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <h3 style={{fontSize: '18px', fontWeight: '700', color: '#1e293b', margin: 0}}>Our Office</h3>
            </div>
          </div>
          <p style={{
            fontSize: '14px',
            color: '#64748b',
            lineHeight: '1.6',
            margin: 0
          }}>
            123 Tech Boulevard, Suite 100<br/>
            San Francisco, CA 94105<br/>
            United States
          </p>
          <a 
            href="https://maps.google.com/?q=San+Francisco,+CA" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '16px',
              padding: '10px 20px',
              background: '#3b82f6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            Get Directions →
          </a>
        </div>
      </section>
    </main>
  );
}
