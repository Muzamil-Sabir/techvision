export default function Services() {
  return (
    <main>
      <section id='services' className='services-section light'>
        <div className='container'>
          <div className='section-header'>
            <span className='section-tag'>What We Offer</span>
            <h2 className='section-title'>Our Services</h2>
            <div className='title-underline'></div>
            <p className='section-description'>
              Comprehensive technology solutions tailored to elevate your business to new heights
            </p>
          </div>
          <div className='services-grid'>
            <div className='service-card'>
              <div className='service-icon'>
                <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M16 18L22 12L16 6M8 6L2 12L8 18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
              </div>
              <h3 className='service-title'>Web Development</h3>
              <p className='service-description'>
                Build powerful, responsive web applications that captivate users and drive results.
              </p>
              <div className='service-details'>
                <div className='tech-category'>
                  <h4>Frontend Excellence</h4>
                  <ul className='tech-list'>
                    <li><span className='tech-badge'>React</span></li>
                    <li><span className='tech-badge'>Vue.js</span></li>
                    <li><span className='tech-badge'>Angular</span></li>
                    <li><span className='tech-badge'>Next.js</span></li>
                    <li><span className='tech-badge'>Svelte</span></li>
                    <li><span className='tech-badge'>Nuxt.js</span></li>
                  </ul>
                </div>
                <div className='tech-category'>
                  <h4>Backend Power</h4>
                  <ul className='tech-list'>
                    <li><span className='tech-badge'>Node.js</span></li>
                    <li><span className='tech-badge'>Django</span></li>
                    <li><span className='tech-badge'>Laravel</span></li>
                  </ul>
                </div>
              </div>
              <div className='service-hover-effect'></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
