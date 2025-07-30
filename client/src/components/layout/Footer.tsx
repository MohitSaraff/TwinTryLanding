import { Link } from "wouter";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <div className="flex items-center space-x-2 mb-6">
                <img
                src="/logo.jpeg"
                alt="Twinverse Logo"
                className="w-10 h-10 rounded-full object-cover bg-gradient-to-r from-primary to-violet-500"
                />
              <div>
                <span className="font-display font-bold text-lg text-white">Twinverse</span>
                <span className="block text-xs text-gray-400">Build Beyond Reality</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming retail experiences with AI-powered virtual try-on technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/twinversetech" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/twinversetech" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/twinversetech" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/twinversetech" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="text-right">
            <h3 className="font-display font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">TwinTry™</a></li>
              <li><a href="/twinmock" className="text-gray-400 hover:text-white transition-colors">TwinMock™</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise Solutions</a></li> */}
            </ul>
          </div>

          {/* <div>
            <h3 className="font-display font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR Compliance</a></li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Twinverse Technologies Pvt Ltd. All rights reserved.
            </p>
            {/* <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
