
import { Users, FileCheck, TrendingUp, Shield, Target, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Find and attract the best talent for your organization with our comprehensive recruitment strategies."
    },
    {
      icon: FileCheck,
      title: "HR Compliance",
      description: "Stay compliant with employment laws and regulations while minimizing legal risks."
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Optimize employee performance with structured evaluation systems and development programs."
    },
    {
      icon: Shield,
      title: "Employee Relations",
      description: "Build positive workplace relationships and resolve conflicts effectively."
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Align your HR strategy with business objectives for sustainable growth."
    },
    {
      icon: Award,
      title: "Training & Development",
      description: "Enhance employee skills and capabilities through targeted training programs."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive HR solutions designed to streamline your operations and drive business success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
