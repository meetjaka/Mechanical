"use client";

import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "CHAMOS Matrusanstha, Mechanical Engineering Department",
      link: null
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 XXX XXX XXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: Mail,
      title: "Email",
      content: "mechanical@chamos.edu",
      link: "mailto:mechanical@chamos.edu"
    }
  ];

  const quickLinks = [
    { name: "About Department", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Research Labs", href: "/research-labs" },
    { name: "FESTO Center", href: "/festo" },
    { name: "Testing Facilities", href: "/testing-facilities" },
    { name: "Student Activities", href: "/student-activities" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Department Information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Department of Mechanical Engineering
              </h2>
              <p className="text-blue-200 text-sm mb-4">
                CHAMOS Matrusanstha
              </p>
              <p className="text-gray-300 leading-relaxed">
                Pioneering excellence in mechanical engineering education and research. 
                We are committed to developing innovative engineers who contribute to 
                technological advancement and societal progress.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <info.icon size={20} className="text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-100">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="block text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links & Quick Actions */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-200 hover:bg-white/20 hover:scale-105 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <a 
                href="https://drive.google.com/file/d/your-brochure-file-id/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-200 text-sm hover:text-white transition-colors duration-200"
              >
                <span>Download Brochure</span>
                <ExternalLink size={16} />
              </a>
              
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-blue-200 text-sm hover:text-white transition-colors duration-200"
              >
                <span>Back to Top</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CHAMOS Matrusanstha - Department of Mechanical Engineering. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                Terms of Use
              </Link>
              <Link href="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}