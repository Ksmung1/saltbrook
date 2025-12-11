import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const location = useLocation()
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* School Info */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-black">Salt Brook School</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering students with quality education and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-black">Quick Links</h3>
            <ul className="space-y-3">
              <li className={`${isActive('/about') ? "text-black font-semibold" : "text-gray-500"}`}>
                <Link to="/about" className="hover:text-black transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li className={`${isActive('/academic') ? "text-black font-semibold" : "text-gray-500"}`}>
                <Link to="/academic" className="hover:text-black transition-colors text-sm">
                  Academic
                </Link>
              </li>
              <li className={`${isActive('/gallery') ? "text-black font-semibold" : "text-gray-500"}`}>
                <Link to="/gallery" className="hover:text-black transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li className={`${isActive('/contact') ? "text-black font-semibold" : "text-gray-500"}`}>
                <Link to="/contact" className="hover:text-black transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-black">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-500 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Churachandpur, Manipur 795128</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 8798539293</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <span>Info.sbsccpur@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Salt Brook School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

