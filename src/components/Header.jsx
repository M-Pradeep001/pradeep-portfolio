import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-6 relative z-20">
      <Link to="/" className="flex items-center group">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
          <span className="text-white font-bold text-lg">P</span>
        </div>
        <span className="ml-3 text-xl font-bold text-black transition-all duration-300 group-hover:text-gray-700">DevDeep</span>
      </Link>
      
      <div className="flex space-x-8">
        <Link 
          to="/works" 
          className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group"
        >
          Works
          <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full ${location.pathname === '/works' ? 'w-full' : 'w-0'}`}></span>
        </Link>
        <Link 
          to="/about" 
          className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group"
        >
          About Me
          <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full ${location.pathname === '/about' ? 'w-full' : 'w-0'}`}></span>
        </Link>
        <Link 
          to="/fun-times" 
          className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group"
        >
          Fun Times
          <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full ${location.pathname === '/fun-times' ? 'w-full' : 'w-0'}`}></span>
        </Link>
      </div>
    </nav>
  )
}

export default Header 