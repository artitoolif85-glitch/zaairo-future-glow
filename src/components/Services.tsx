import { 
  Globe, 
  Smartphone, 
  Settings, 
  Cloud, 
  Code, 
  Shield,
  Database,
  Zap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development & Deployment",
      description: "Full-stack web applications with modern frameworks, responsive design, and seamless deployment to cloud platforms.",
      features: ["React & Next.js", "Node.js Backend", "CI/CD Pipeline", "SEO Optimization"]
    },
    {
      icon: Smartphone,
      title: "iOS & Android Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"]
    },
    {
      icon: Settings,
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed specifically for your business needs and industry requirements.",
      features: ["Enterprise Systems", "API Development", "Microservices", "Legacy Modernization"]
    },
    {
      icon: Cloud,
      title: "Cloud-Based Solutions",
      description: "Scalable cloud infrastructure and services that grow with your business using AWS, Azure, and Google Cloud.",
      features: ["Cloud Migration", "Serverless Architecture", "Auto-scaling", "DevOps Solutions"]
    },
    {
      icon: Code,
      title: "Software Architecture",
      description: "Strategic software architecture consulting to build robust, maintainable, and scalable applications.",
      features: ["System Design", "Code Review", "Performance Optimization", "Best Practices"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Comprehensive security audits and compliance solutions to protect your applications and data.",
      features: ["Security Audits", "GDPR Compliance", "Data Encryption", "Penetration Testing"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Database design, optimization, and management for both SQL and NoSQL databases.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup Strategies"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Application performance analysis and optimization to ensure fast, efficient, and user-friendly experiences.",
      features: ["Speed Optimization", "Load Testing", "Monitoring Setup", "Caching Strategies"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-glass p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-hero">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;