import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getAllGuides } from '../data/umrahSteps'
import { getStepDetails } from '../data/umrahStepDetails'
import GuideCard from '../components/GuideCard'

const UmrahGuide = () => {
  const { stepSlug } = useParams()
  const allGuides = getAllGuides()

  // If viewing a specific step
  if (stepSlug) {
    const stepDetails = getStepDetails(stepSlug)
    
    if (!stepDetails) {
      return (
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Step Not Found</h1>
          <p className="text-gray-600">The requested guide step could not be found.</p>
          <Link to="/umrah-guide" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            ← Back to All Guides
          </Link>
        </div>
      )
    }

    return (
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/umrah-guide" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            ← Back to All Guides
          </Link>
        </nav>

        {/* Step Detail */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{stepDetails.icon}</div>
            {stepDetails.step && (
              <div className="text-sm font-medium text-yellow-600 mb-2">{stepDetails.step}</div>
            )}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{stepDetails.title}</h1>
            {stepDetails.arabic && (
              <div className="text-2xl text-gray-600 mb-6 font-arabic">{stepDetails.arabic}</div>
            )}
          </div>

          {/* Detailed Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-gray-700 mb-6">{stepDetails.description}</p>
              
              {stepDetails.instructions && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Detailed Instructions</h2>
                  <div className="space-y-4">
                    {stepDetails.instructions.map((instruction, index) => (
                      <div key={index} className="border-l-4 border-yellow-500 pl-4">
                        <p className="text-gray-700">{instruction}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {stepDetails.duas && (
                <>
                  <h2 className="text-2xl font-bold mb-4 mt-8">Recommended Duas</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    {stepDetails.duas.map((dua, index) => (
                      <div key={index} className="mb-6">
                        {dua.title && (
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">{dua.title}</h3>
                        )}
                        <div className="text-lg font-arabic text-right mb-2 leading-relaxed">{dua.arabic}</div>
                        <div className="text-gray-600 italic mb-1">{dua.transliteration}</div>
                        <div className="text-gray-700">{dua.translation}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {stepDetails.tips && (
                <>
                  <h2 className="text-2xl font-bold mb-4 mt-8">Important Tips</h2>
                  <ul className="list-disc list-inside space-y-2">
                    {stepDetails.tips.map((tip, index) => (
                      <li key={index} className="text-gray-700">{tip}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default: Show all guides
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Umrah Guide</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn every step of the Umrah pilgrimage with detailed instructions, duas, and practical tips
        </p>
      </div>

      {/* Step-by-Step Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Step-by-Step Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGuides.filter(guide => guide.step).map(guide => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>

      {/* Essential Knowledge */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Essential Knowledge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGuides.filter(guide => !guide.step).map(guide => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default UmrahGuide
