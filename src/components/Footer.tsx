
import React from 'react';
import { Download, Shield, Headphones, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Download className="h-8 w-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Instant Download</h3>
              <p className="text-gray-400 text-sm">Get your files immediately after purchase</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <h3 className="font-semibold mb-2">Commercial License</h3>
              <p className="text-gray-400 text-sm">Use designs for your business projects</p>
            </div>
            <div className="text-center">
              <Headphones className="h-8 w-8 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">Get help whenever you need it</p>
            </div>
            <div className="text-center">
              <CreditCard className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-400 text-sm">Safe and encrypted transactions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DesignVault</h3>
            <p className="text-gray-400 text-sm mb-4">
              Premium digital files for CNC machines, laser cutters, and 3D printers. 
              Professional quality designs ready for immediate download.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">CNC Files</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laser Cut Designs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">3D Print Models</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">File Formats Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">License Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">My Downloads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Purchase History</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Account Settings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Favorites</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DesignVault. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
