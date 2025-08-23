import React from 'react';
import { 
  Shield, 
  MessageSquare, 
  CreditCard, 
  Waves, 
  Bell, 
  Car, 
  Settings, 
  QrCode, 
  MessageCircle, 
  AlertTriangle, 
  BarChart3 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Visitor Entry Management',
      description: 'Smart gate management with automated visitor tracking and approval system',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/50'
    },
    {
      id: 2,
      title: 'Complaint Management',
      description: 'Streamlined complaint resolution with tracking and status updates',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:shadow-green-500/50'
    },
    {
      id: 3,
      title: 'Billing & Payments',
      description: 'Automated billing system with online payment integration',
      icon: CreditCard,
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:shadow-orange-500/50'
    },
    {
      id: 4,
      title: 'Amenities Booking',
      description: 'Easy booking system for club house, swimming pool, and other amenities',
      icon: Waves,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:shadow-purple-500/50'
    },
    {
      id: 5,
      title: 'Notice Board',
      description: 'Digital notice board with instant notifications to all residents',
      icon: Bell,
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'hover:shadow-pink-500/50'
    },
    {
      id: 6,
      title: 'Vehicle Management',
      description: 'Comprehensive vehicle registration and parking management',
      icon: Car,
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:shadow-red-500/50'
    },
    {
      id: 7,
      title: 'Preference Management',
      description: 'Personalized settings and communication preferences',
      icon: Settings,
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'hover:shadow-teal-500/50'
    },
    {
      id: 8,
      title: 'QR Access',
      description: 'Secure QR code-based access control for residents and visitors',
      icon: QrCode,
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'hover:shadow-indigo-500/50'
    },
    {
      id: 9,
      title: 'Resident Web Chat',
      description: 'Community chat platform for better neighborhood communication',
      icon: MessageCircle,
      color: 'from-cyan-500 to-cyan-600',
      hoverColor: 'hover:shadow-cyan-500/50'
    },
    {
      id: 10,
      title: 'Emergency Alerts',
      description: 'Instant emergency notification system for critical situations',
      icon: AlertTriangle,
      color: 'from-rose-500 to-rose-600',
      hoverColor: 'hover:shadow-rose-500/50'
    },
    {
      id: 11,
      title: 'Admin Dashboard',
      description: 'Comprehensive analytics and management dashboard for admins',
      icon: BarChart3,
      color: 'from-violet-500 to-violet-600',
      hoverColor: 'hover:shadow-violet-500/50'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Complete Society Management Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your society efficiently in one comprehensive platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`group relative p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl ${feature.hoverColor} transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className={`relative z-10 flex flex-col items-center text-center`}>
                  <div className={`p-3 rounded-full bg-gradient-to-br ${feature.color} mb-3 group-hover:animate-pulse`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;