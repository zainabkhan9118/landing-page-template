import React, { useState } from 'react'

const Policy = () => {
  const [activeTab, setActiveTab] = useState('privacy')

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Information</h1>
          <p className="text-lg text-gray-600">
            Your privacy and legal rights matter to us. Please review our policies below.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'privacy' 
                  ? 'bg-yellow-500 text-white' 
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'terms' 
                  ? 'bg-yellow-500 text-white' 
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {activeTab === 'privacy' && (
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
              <p className="text-sm text-gray-500 mb-8">Last updated: August 5, 2025</p>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900">Personal Information</h4>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Name and email address when you contact us</li>
                      <li>Phone number (optional) when provided through contact forms</li>
                      <li>Messages and inquiries you send to us</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automatically Collected Information</h4>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>IP address and browser information</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Device type and operating system</li>
                      <li>Referral sources (how you found our website)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To improve our website content and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To prevent fraud and ensure website security</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h3>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With trusted service providers who assist in website operations (under strict confidentiality agreements)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h3>
                <p className="text-gray-700">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking</h3>
                <p className="text-gray-700 mb-4">
                  Our website may use cookies and similar tracking technologies to enhance your experience. You can control 
                  cookie settings through your browser preferences.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand website usage</li>
                  <li>Performance cookies to improve website speed</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h3>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h3>
                <p className="text-gray-700">
                  If you have questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@umrahcompanion.com
                  <br />
                  Address: [Your Business Address]
                </p>
              </section>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
              <p className="text-sm text-gray-500 mb-8">Last updated: August 5, 2025</p>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h3>
                <p className="text-gray-700">
                  By accessing and using Umrah Companion website, you accept and agree to be bound by the terms and 
                  provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h3>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Umrah Companion's website 
                  for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Religious Content Disclaimer</h3>
                <p className="text-gray-700">
                  The Islamic guidance and Umrah information provided on this website is for educational purposes only. 
                  While we strive for accuracy and authenticity based on Quran and Sunnah, we recommend consulting with 
                  qualified Islamic scholars for specific religious questions. We are not responsible for any religious 
                  decisions made based solely on our content.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclaimer</h3>
                <p className="text-gray-700">
                  The materials on Umrah Companion's website are provided on an 'as is' basis. Umrah Companion makes no 
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties including without 
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or 
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitations</h3>
                <p className="text-gray-700">
                  In no event shall Umrah Companion or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
                  use the materials on Umrah Companion's website, even if Umrah Companion or its authorized representative has 
                  been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. User Conduct</h3>
                <p className="text-gray-700 mb-4">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use the website for any unlawful purposes</li>
                  <li>Post or transmit any content that is offensive, inappropriate, or violates Islamic values</li>
                  <li>Interfere with or disrupt the website or servers</li>
                  <li>Attempt to gain unauthorized access to any part of the website</li>
                  <li>Impersonate any person or entity</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h3>
                <p className="text-gray-700">
                  All content on this website, including text, graphics, logos, images, and software, is the property of 
                  Umrah Companion and is protected by copyright and other intellectual property laws. Islamic texts and 
                  teachings referenced are acknowledged as originating from their respective sources.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications</h3>
                <p className="text-gray-700">
                  Umrah Companion may revise these terms of service at any time without notice. By using this website, 
                  you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h3>
                <p className="text-gray-700">
                  If you have any questions about these Terms of Service, please contact us at:
                  <br />
                  Email: legal@umrahcompanion.com
                  <br />
                  Address: [Your Business Address]
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            This page is provided for legal transparency and user protection. 
            Please read these policies carefully and contact us with any questions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Policy
