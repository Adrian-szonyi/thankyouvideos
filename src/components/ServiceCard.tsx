import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
  minOutput?: string;
  image: string;
  gradient: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const isEven = index % 2 === 0;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-8 lg:gap-12 mb-20`}>
      {/* Image Section */}
      <div className="w-full lg:w-2/5">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group h-full min-h-[600px]">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-3/5 space-y-6 px-4 lg:px-0 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              Package {service.id}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-4">
            {service.subtitle}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {service.description}
          </p>


          {/* Features List */}
          <div className="space-y-3">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Pricing */}
          <div className="bg-gray-100 rounded-xl p-6 border-l-4 border-blue-700">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">{service.price}</span>
              <span className="text-gray-600">{service.priceNote}</span>
            </div>
            {service.minOutput && (
              <p className="text-sm text-gray-600">{service.minOutput}</p>
            )}
          </div>

          {/* CTA Button */}
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
          >
            Enquire About This Package
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;