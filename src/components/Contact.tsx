import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    package: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email content
    const subject = `New enquiry from ${formData.name} - ${formData.organisation}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organisation}
Package Interest: ${formData.package || 'Not specified'}

Message:
${formData.message}

---
This enquiry was sent from the Vidzero website contact form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:adrian@vidzero.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      organisation: '',
      package: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today to discuss which package is right for your charity 
            and start creating meaningful connections with your donors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of video production experts is ready to help your charity 
                create impactful thank you videos that strengthen donor relationships 
                and increase engagement.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">adrian@vidzero.com.au</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">0408 887 232</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-orange-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Level 36, 1 Macquarie Place<br />Sydney, 2000, Australia</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-700">
              <h4 className="font-bold text-gray-900 mb-2">Quick Response Guarantee</h4>
              <p className="text-gray-700">
                We respond to all enquiries within 24 hours and can schedule 
                initial consultations within 48 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@charity.org"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-2">
                  Organisation Name *
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  required
                  value={formData.organisation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your Charity Name"
                />
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                  Interested Package
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a package</option>
                  <option value="training">Complete Training Package</option>
                  <option value="training-editing">Training + Editing Service</option>
                  <option value="ai-personalized">AI Personalized Videos</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your charity, your donor base, and what you hope to achieve with thank you videos..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-700 hover:bg-blue-800 text-white transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                <Send className={`h-5 w-5 transition-transform ${!isSubmitting && 'group-hover:translate-x-1'}`} />
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Your email client should now be open with a pre-filled message. Please send the email to complete your enquiry.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  ❌ There was an error sending your message. Please try again or contact us directly at{' '}
                  <a href="mailto:adrian@vidzero.com.au" className="underline hover:text-red-800">
                    adrian@vidzero.com.au
                  </a>
                </div>
              )}

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  Having trouble with the form? Email us directly at{' '}
                  <a href="mailto:adrian@vidzero.com.au" className="text-blue-700 hover:text-blue-800 underline font-medium">
                    adrian@vidzero.com.au
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;