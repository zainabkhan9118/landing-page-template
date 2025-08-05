import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:text-yellow-400 transition-colors">
            🕋 Umrah Companion
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive('/') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive('/blog') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/umrah-guide" 
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive('/umrah-guide') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                >
                  Umrah Guide
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive('/about') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive('/contact') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive('/privacy-policy') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                >
                  Legal
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive('/') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive('/blog') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/umrah-guide" 
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive('/umrah-guide') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Umrah Guide
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive('/about') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive('/contact') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive('/privacy-policy') 
                      ? 'bg-yellow-500 text-white font-semibold' 
                      : 'hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Legal
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;