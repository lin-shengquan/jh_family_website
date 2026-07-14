import { useState, useEffect } from 'react';
import { Home, Users, Images, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: '首页', icon: Home },
    { path: '/family', label: '家庭介绍', icon: Users },
    { path: '/gallery', label: '照片相册', icon: Images },
    { path: '/diary', label: '生活日记', icon: BookOpen },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 shadow-lg backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-[#5D4E37]">
            幸福之家
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-[#F5A623]/10 text-[#F5A623]'
                      : 'text-[#5D4E37] hover:bg-[#FDF6E3] hover:text-[#F5A623]'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-[#FDF6E3] text-[#5D4E37]"
            aria-expanded={menuOpen}
            aria-label="打开导航菜单"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-xl bg-white/95 p-2 shadow-lg border border-[#8B7355]/10">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-2 px-3 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-[#F5A623]/10 text-[#F5A623]'
                        : 'text-[#5D4E37] hover:bg-[#FDF6E3] hover:text-[#F5A623]'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
