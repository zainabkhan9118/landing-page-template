import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'general'
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your backend or email service here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch for collaborations, sponsorships, partnerships, or any questions about Umrah guidance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What can we help you with?
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media & Press</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Tell us about your inquiry, collaboration idea, or question..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Links */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* WhatsApp */}
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                  <div className="text-2xl">📱</div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-600 hover:text-yellow-700"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                  <div className="text-2xl">📧</div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a 
                      href="mailto:contact@umrahcompanion.com"
                      className="text-yellow-600 hover:text-yellow-700"
                    >
                      contact@umrahcompanion.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://facebook.com/umrahcompanion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    <span className="text-2xl">📘</span>
                    <span className="font-medium">Facebook</span>
                  </a>
                  <a 
                    href="https://instagram.com/umrahcompanion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-pink-50 hover:border-pink-300 transition-colors"
                  >
                    <span className="text-2xl">📷</span>
                    <span className="font-medium">Instagram</span>
                  </a>
                  <a 
                    href="https://twitter.com/umrahcompanion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    <span className="text-2xl">🐦</span>
                    <span className="font-medium">Twitter</span>
                  </a>
                  <a 
                    href="https://youtube.com/umrahcompanion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors"
                  >
                    <span className="text-2xl">📺</span>
                    <span className="font-medium">YouTube</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Partnership Opportunities */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Partnership Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">🤝</span>
                    <span>Content Collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">💰</span>
                    <span>Sponsorship Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">📱</span>
                    <span>Technology Partnerships</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">🎓</span>
                    <span>Educational Partnerships</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">🌍</span>
                    <span>Community Outreach</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  We're always looking for meaningful partnerships that serve the Muslim community better.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
