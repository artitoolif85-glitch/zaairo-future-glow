const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About</span> Zaairo Software
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a cutting-edge software consultancy dedicated to transforming businesses through innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with next-generation software solutions that drive growth, efficiency, and innovation in an ever-evolving digital landscape.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading force in digital transformation, creating intelligent solutions that shape the future of business technology.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-large">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Zaairo?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-success-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">Expert team of senior developers</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-success-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">Cutting-edge technology stack</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-success-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">Agile development methodology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-success-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">24/7 support and maintenance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-success-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">Cost-effective solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;