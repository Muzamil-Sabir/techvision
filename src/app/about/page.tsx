export default function About() {
  return (
    <main>
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
    </main>
  );
}
