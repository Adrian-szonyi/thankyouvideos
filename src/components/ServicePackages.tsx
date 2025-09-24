import React from 'react';
import ServiceCard from './ServiceCard';

const ServicePackages = () => {
  const services = [
    {
      id: 1,
      title: "Complete Training Package",
      subtitle: "Learn to Create Videos In-House",
      description: "We'll send a professional trainer to your office to teach your team everything they need to know about creating compelling thank you videos.",
      features: [
        "On-site professional training",
        "Equipment recommendations & setup guidance",
        "Team upskilling and hands-on practice",
        "Video editing training",
        "Pre-production planning assistance",
        "Scripting and storyboarding workshops",
        "Ongoing support materials"
      ],
      price: "$3,000",
      priceNote: "+ GST",
      image: "/thankyouvideos/images/Verticaltraining.jpg",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "Training + Editing Service",
      subtitle: "You Film, We Edit",
      description: "Get all the training benefits of Package 1, but let our professionals handle the post-production work for a polished final product.",
      features: [
        "Everything from Package 1",
        "Professional video editing service",
        "Quick turnaround times",
        "Consistent brand styling",
        "Quality assurance",
        "Minimum 10 video outputs",
        "Dedicated project manager"
      ],
      price: "$3,000",
      priceNote: "+ GST + $200 per edited video",
      minOutput: "Minimum 10 videos",
      image: "/thankyouvideos/images/Vertical2.jpg",
      gradient: "from-transparent to-transparent"
    },
    {
      id: 3,
      title: "AI Personalized Videos",
      subtitle: "Automated Thank You Videos",
      description: "Leverage cutting-edge AI technology to create personalized thank you videos that automatically adapt to each donor's contribution and demographic profile.",
      features: [
        "No filming required",
        "AI-powered personalization",
        "Donor-specific content adaptation",
        "Demographic-targeted B-roll selection",
        "Creative template development",
        "Automated text and graphics",
        "Scalable solution for large donor bases"
      ],
      price: "$3,000",
      priceNote: "+ GST setup + $5 per video",
      minOutput: "Minimum 200 videos",
      image: "/thankyouvideos/images/veritcal1.jpg",
      gradient: "from-orange-600 to-orange-800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you want to build internal capabilities, need professional editing support, 
            or prefer automated AI solutions, we have the right package for your charity's needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;