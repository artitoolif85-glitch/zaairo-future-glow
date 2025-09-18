const Success = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      client: "TechMart Solutions",
      description: "Built a scalable e-commerce platform handling 100K+ daily transactions",
      tech: ["React", "Node.js", "AWS", "MongoDB"],
      result: "300% increase in sales",
      image: "🛒"
    },
    {
      title: "Healthcare Management System",
      client: "MediCore Hospital",
      description: "Developed comprehensive patient management and scheduling system",
      tech: ["React Native", "Python", "PostgreSQL", "Docker"],
      result: "50% reduction in wait times",
      image: "🏥"
    },
    {
      title: "Financial Dashboard",
      client: "InvestPro Analytics",
      description: "Created real-time financial analytics and trading dashboard",
      tech: ["Vue.js", "FastAPI", "Redis", "WebSockets"],
      result: "Real-time data processing",
      image: "📊"
    },
    {
      title: "IoT Monitoring Platform",
      client: "SmartFactory Inc",
      description: "Built IoT device monitoring and control system for manufacturing",
      tech: ["Angular", "Java", "Kafka", "InfluxDB"],
      result: "40% efficiency improvement",
      image: "🏭"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechMart Solutions",
      comment: "Zaairo delivered beyond our expectations. Their technical expertise and attention to detail are exceptional.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      position: "Director, MediCore Hospital",
      comment: "The healthcare system they built has transformed our patient care. Highly professional team!",
      rating: 5
    },
    {
      name: "Robert Williams",
      position: "CEO, InvestPro Analytics",
      comment: "Outstanding work on our financial dashboard. The real-time features are exactly what we needed.",
      rating: 5
    }
  ];

  return (
    <section id="success" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Success</span> Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses achieve their digital transformation goals with innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{project.image}</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-primary font-medium">{project.client}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-success">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="font-semibold">{project.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-3xl font-bold text-center mb-12">
            What Our <span className="text-gradient">Clients Say</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-card rounded-2xl p-8 shadow-large hover:shadow-glow-accent transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gradient-primary rounded-2xl p-8 shadow-glow-primary">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative software solutions.
            </p>
            <button className="btn-hero bg-white text-primary hover:bg-white/90">
              <span>Start Your Project</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;