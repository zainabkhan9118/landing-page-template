const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video 
          src="/umrah.mov" 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
        />
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to Your 
            <span className="block text-yellow-400">Umrah Companion</span>
          </h1>
          <p className="text-xl md:text-2xl italic mb-8 text-gray-200 leading-relaxed">
            "The reward for an accepted Umrah is Paradise."
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-300 w-full sm:w-auto">
              Start Your Journey
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
