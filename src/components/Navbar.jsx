import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Activity } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/architecture', label: 'Architecture' },
    { path: '/metrics', label: 'Metrics' },
    { path: '/cicd', label: 'CI/CD' },
    { path: '/code-snippets', label: 'Code' },
    { path: '/alerting', label: 'Alerting' },
    { path: '/conclusion', label: 'Benefits' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-200">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="font-extrabold text-xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hidden sm:block">
                System Monitoring
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
