import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const desktopDropdownRef = useRef(null); // ⬅️ Capture dropdown container

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/admission', label: 'Admission' },
    {
      path: '/academic',
      label: 'Academic',
      dropdown: [
        { path: "/academic/activities", label: 'Activities' },
        { path: "/academic/calendar", label: 'Calendar' },
        { path: "/academic/timing", label: "Timing" },
        { path: "/academic/result", label: "Result" },
      ],
    },
    { path: '/news', label: 'News' },
    {
      path: '/administration',
      label: 'Administration',
      dropdown: [
        { path: "/administration/teaching", label: 'Teaching Staff' },
        { path: "/administration/non-teaching", label: 'Non-Teaching Staff' },
        { path: "/administration/student-council", label: 'Student Council' },
      ],
    },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const toggleDropdown = (path) => {
    setOpenDropdown((prev) => (prev === path ? null : path));
  };

  /* ------------------------------------------------------------------
     🔥 CLICK OUTSIDE TO CLOSE DROPDOWN — ONLY FOR DESKTOP DROPDOWNS  
  ------------------------------------------------------------------ */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target)
      ) {
        setOpenDropdown(null); // close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-18 h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-full h-auto rounded flex items-center justify-center">
              <img src={logo} alt="logo" className="w-7 h-8 lg:w-12 lg:h-12" />
              <p className='text-lg font-semibold ml-2'>Salt Brook School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex space-x-7"
            ref={desktopDropdownRef} // ⬅️ Attach ref here
          >
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.path} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.path)}
                    className={`flex items-center gap-1 text-sm font-normal transition-colors pb-1 ${
                      isActive(item.path)
                        ? 'text-gray-800 border-b-2 border-gray-800'
                        : 'text-gray-800 hover:text-gray-800'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 mt-[1px] transition-transform ${
                        openDropdown === item.path ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openDropdown === item.path && (
                    <div className="absolute left-0 mt-2 min-w-[220px] bg-white rounded-md shadow-lg border border-gray-100">
                      <div className="py-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                              isActive(sub.path)
                                ? 'text-black font-medium'
                                : 'text-gray-700'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-normal pb-1 transition-colors ${
                    isActive(item.path)
                      ? 'text-black border-b-2 border-black pb-1'
                      : 'text-gray-800 hover:text-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.path}>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.path)}
                    className="flex w-full items-center justify-between text-base font-medium text-gray-800"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.path ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openDropdown === item.path && (
                    <div className="mt-2 ml-3 space-y-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                          className={`block text-sm ${
                            isActive(sub.path)
                              ? 'text-black font-medium'
                              : 'text-gray-600 hover:text-black'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium ${
                    isActive(item.path)
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
