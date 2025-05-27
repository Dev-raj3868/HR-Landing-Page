
import { BarChart3, Users2, Clock, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users2, number: "500+", label: "Clients Served" },
    { icon: BarChart3, number: "98%", label: "Success Rate" },
    { icon: Clock, number: "15+", label: "Years Experience" },
    { icon: Award, number: "50+", label: "Awards Won" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">HR Dynamics</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in human resources consulting, HR Dynamics has been 
              helping businesses transform their workforce and achieve sustainable growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of certified HR professionals brings deep industry knowledge and innovative 
              solutions to tackle your most complex HR challenges. We pride ourselves on delivering 
              measurable results that drive business success.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-white" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform -rotate-6 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="HR professional working"
              className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
