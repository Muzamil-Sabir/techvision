export default function Journey() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{textAlign: 'center', position: 'relative', zIndex: 2}}>
          <span style={{
            display: 'inline-block',
            padding: '8px 24px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '1px',
            marginBottom: '24px',
            backdropFilter: 'blur(10px)'
          }}>OUR STORY</span>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '24px',
            letterSpacing: '-1px'
          }}>
            A Decade of Impact
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            From Rubab J Consultancy to TechVision Solutions — a journey shaped by innovation, dedication, and client success
          </p>
        </div>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
      </section>

      {/* Timeline Section */}
      <section style={{padding: '100px 0', background: '#ffffff'}}>
        <div className="container">
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            color: '#1e293b',
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            Our Journey Through Time
          </h2>

          {/* Timeline with vertical line */}
          <div style={{maxWidth: '900px', margin: '0 auto', position: 'relative'}}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
              transform: 'translateX(-50%)'
            }}></div>

            {/* 2015 */}
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '80px', position: 'relative'}}>
              <div style={{flex: 1, textAlign: 'right', paddingRight: '60px'}}>
                <div style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '2px solid #f0f0f0'
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    background: '#667eea',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '700',
                    marginBottom: '12px'
                  }}>2015</span>
                  <h3 style={{fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '12px'}}>
                    Humble Beginnings
                  </h3>
                  <p style={{fontSize: '15px', color: '#64748b', lineHeight: '1.7', margin: 0}}>
                    Started as Rubab J Consultancy, offering bespoke solutions to SMEs with a passion for quality and integrity.
                  </p>
                </div>
              </div>
              <div style={{
                width: '24px',
                height: '24px',
                background: '#667eea',
                borderRadius: '50%',
                border: '6px solid white',
                boxShadow: '0 0 0 3px #667eea',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0
              }}></div>
              <div style={{flex: 1}}></div>
            </div>

            {/* 2017 */}
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '80px', position: 'relative'}}>
              <div style={{flex: 1}}></div>
              <div style={{
                width: '24px',
                height: '24px',
                background: '#764ba2',
                borderRadius: '50%',
                border: '6px solid white',
                boxShadow: '0 0 0 3px #764ba2',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0
              }}></div>
              <div style={{flex: 1, paddingLeft: '60px'}}>
                <div style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '2px solid #f0f0f0'
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    background: '#764ba2',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '700',
                    marginBottom: '12px'
                  }}>2017</span>
                  <h3 style={{fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '12px'}}>
                    Expanding Horizons
                  </h3>
                  <p style={{fontSize: '15px', color: '#64748b', lineHeight: '1.7', margin: 0}}>
                    Grew from a solo practice to a dedicated team delivering web and mobile solutions across industries.
                  </p>
                </div>
              </div>
            </div>

            {/* 2019 */}
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '80px', position: 'relative'}}>
              <div style={{flex: 1, textAlign: 'right', paddingRight: '60px'}}>
                <div style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '2px solid #f0f0f0'
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    background: '#667eea',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '700',
                    marginBottom: '12px'
                  }}>2019</span>
                  <h3 style={{fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '12px'}}>
                    Enterprise Projects
                  </h3>
                  <p style={{fontSize: '15px', color: '#64748b', lineHeight: '1.7', margin: 0}}>
                    Took on large-scale digital transformation projects with mission-critical reliability and performance.
                  </p>
                </div>
              </div>
              <div style={{
                width: '24px',
                height: '24px',
                background: '#667eea',
                borderRadius: '50%',
                border: '6px solid white',
                boxShadow: '0 0 0 3px #667eea',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0
              }}></div>
              <div style={{flex: 1}}></div>
            </div>

            {/* 2021 */}
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '80px', position: 'relative'}}>
              <div style={{flex: 1}}></div>
              <div style={{
                width: '24px',
                height: '24px',
                background: '#764ba2',
                borderRadius: '50%',
                border: '6px solid white',
                boxShadow: '0 0 0 3px #764ba2',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0
              }}></div>
              <div style={{flex: 1, paddingLeft: '60px'}}>
                <div style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '2px solid #f0f0f0'
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    background: '#764ba2',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '700',
                    marginBottom: '12px'
                  }}>2021</span>
                  <h3 style={{fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '12px'}}>
                    AI & Data-driven
                  </h3>
                  <p style={{fontSize: '15px', color: '#64748b', lineHeight: '1.7', margin: 0}}>
                    Integrated AI, automation, and real-time analytics into core offerings to help clients move faster and smarter.
                  </p>
                </div>
              </div>
            </div>

            {/* 2024 */}
            <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
              <div style={{flex: 1, textAlign: 'right', paddingRight: '60px'}}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
                  color: 'white'
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    background: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '700',
                    marginBottom: '12px',
                    backdropFilter: 'blur(10px)'
                  }}>2024</span>
                  <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '12px'}}>
                    TechVision Solutions
                  </h3>
                  <p style={{fontSize: '15px', lineHeight: '1.7', margin: 0, opacity: 0.95}}>
                    Rebranded with a broader vision, stronger partnerships, and an unwavering focus on client outcomes.
                  </p>
                </div>
              </div>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                border: '6px solid white',
                boxShadow: '0 0 0 3px #667eea, 0 0 20px rgba(102, 126, 234, 0.5)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0
              }}></div>
              <div style={{flex: 1}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{padding: '80px 0', background: '#f8fafc'}}>
        <div className="container">

          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            color: '#1e293b',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            By The Numbers
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'white',
              padding: '48px 32px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              border: '2px solid #f0f0f0',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px'
              }}>120+</div>
              <div style={{fontSize: '16px', color: '#64748b', fontWeight: '600'}}>
                Projects Delivered
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: '48px 32px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              border: '2px solid #f0f0f0',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px'
              }}>45+</div>
              <div style={{fontSize: '16px', color: '#64748b', fontWeight: '600'}}>
                Happy Clients
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: '48px 32px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              border: '2px solid #f0f0f0',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px'
              }}>12+</div>
              <div style={{fontSize: '16px', color: '#64748b', fontWeight: '600'}}>
                Countries Served
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: '48px 32px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              border: '2px solid #f0f0f0',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px'
              }}>10+</div>
              <div style={{fontSize: '16px', color: '#64748b', fontWeight: '600'}}>
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section style={{padding: '100px 0', background: '#ffffff'}}>
        <div className="container">
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            color: '#1e293b',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            Featured Projects
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#64748b',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            A showcase of our finest work across various industries and technologies
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              background: 'white'
            }}>
              <div style={{height: '240px', overflow: 'hidden'}}>
                <img src="/assets/images/GlobalRetail.png" alt="Global Retail ERP" loading="lazy" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
              </div>
              <div style={{padding: '28px'}}>
                <h4 style={{fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '10px'}}>
                  Global Retail ERP
                </h4>
                <p style={{fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0}}>
                  Inventory, billing, and analytics at scale
                </p>
              </div>
            </div>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              background: 'white'
            }}>
              <div style={{height: '240px', overflow: 'hidden'}}>
                <img src="/assets/images/medcare.png" alt="MedCare Health" loading="lazy" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
              </div>
              <div style={{padding: '28px'}}>
                <h4 style={{fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '10px'}}>
                  MedCare Health
                </h4>
                <p style={{fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0}}>
                  Telemedicine and EMR platform
                </p>
              </div>
            </div>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              background: 'white'
            }}>
              <div style={{height: '240px', overflow: 'hidden'}}>
                <img src="/assets/images/SmartAnalytics.png" alt="Smart Analytics" loading="lazy" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
              </div>
              <div style={{padding: '28px'}}>
                <h4 style={{fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '10px'}}>
                  Smart Analytics
                </h4>
                <p style={{fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0}}>
                  Real-time dashboards and AI insights
                </p>
              </div>
            </div>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              background: 'white'
            }}>
              <div style={{height: '240px', overflow: 'hidden'}}>
                <img src="/assets/images/banking.png" alt="Banking Suite" loading="lazy" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
              </div>
              <div style={{padding: '28px'}}>
                <h4 style={{fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '10px'}}>
                  Secure Banking Suite
                </h4>
                <p style={{fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0}}>
                  High-trust financial applications
                </p>
              </div>
            </div>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              background: 'white'
            }}>
              <div style={{height: '240px', overflow: 'hidden'}}>
                <img src="/assets/images/EduTechLearning.png" alt="EduTech Learning" loading="lazy" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
              </div>
              <div style={{padding: '28px'}}>
                <h4 style={{fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '10px'}}>
                  EduTech Learning
                </h4>
                <p style={{fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0}}>
                  Smart classrooms and LMS
                </p>
              </div>
            </div>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              background: 'white'
            }}>
              <div style={{height: '240px', overflow: 'hidden'}}>
                <img src="/assets/images/propertyhub.png" alt="Property Hub" loading="lazy" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
              </div>
              <div style={{padding: '28px'}}>
                <h4 style={{fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '10px'}}>
                  Property Hub
                </h4>
                <p style={{fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0}}>
                  Real estate marketplace
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
