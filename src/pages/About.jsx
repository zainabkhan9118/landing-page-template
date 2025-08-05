import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Umrah Companion</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Dedicated to helping Muslims perform Umrah with confidence, knowledge, and spiritual fulfillment
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-6xl mb-6">🕋</div>
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                Helping Muslims Do Umrah Right
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every Muslim deserves to perform their Umrah pilgrimage with complete confidence and understanding. 
                Our mission is to provide authentic, comprehensive guidance that ensures your spiritual journey is performed 
                according to Islamic teachings, creating a meaningful and transformative experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Born from Personal Experience</h3>
                <p className="text-gray-700 mb-6">
                  Umrah Companion was founded by a team of Islamic scholars and tech enthusiasts who experienced 
                  firsthand the challenges many Muslims face when preparing for their pilgrimage. We noticed that 
                  reliable, easy-to-understand guidance was scattered across different sources.
                </p>
                <p className="text-gray-700">
                  This inspired us to create a comprehensive platform that brings together authentic Islamic teachings, 
                  practical advice, and modern technology to serve the global Muslim community.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-48 h-48 mx-auto flex items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Trust Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Islamic Scholars</h3>
                <p className="text-gray-600">
                  Our content is reviewed and approved by qualified Islamic scholars who ensure 
                  authenticity and adherence to Quranic and Sunnah teachings.
                </p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentic Sources</h3>
                <p className="text-gray-600">
                  All our guidance is based on the Quran, authentic Hadith, and established 
                  Islamic jurisprudence from recognized scholars and institutions.
                </p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focused</h3>
                <p className="text-gray-600">
                  We serve Muslims worldwide with content available in multiple languages 
                  and practical advice for different circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Authenticity First</h3>
                  <p className="text-gray-700">
                    Every piece of guidance we provide is rooted in authentic Islamic teachings, 
                    ensuring your worship is accepted by Allah.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility for All</h3>
                  <p className="text-gray-700">
                    We make Islamic knowledge accessible to Muslims regardless of their background, 
                    language, or level of Islamic education.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
                  <p className="text-gray-700">
                    We constantly update and improve our content based on scholarly feedback 
                    and community needs to serve you better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Umrah Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of Muslims who have successfully performed their Umrah with our guidance
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a href="/umrah-guide" className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Start Learning
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
