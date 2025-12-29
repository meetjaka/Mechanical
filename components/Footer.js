"use client";

import { 
  Mail, 
  Phone, 
  MapPin, 
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
      content: "CHAMOS Matrusanstha, Mechanical Engineering Department, CHARUSAT Campus, Changa, Gujarat 388421",
      link: "https://www.google.com/maps/dir//Charotar+University+of+Science+and+Technology+(CHARUSAT),+CHARUSAT+Campus,+139,+Highway,+off+Nadiad+-+Petlad+Road,+Changa,+Gujarat+388421/@22.5957092,72.8160861,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x395e50c43cdea6c7:0x5074fe9e0c1c8bd!2m2!1d72.8204989!2d22.6023482?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91-2697-265221",
      link: "tel:+912697265221"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hod.me@charusat.ac.in",
      link: "mailto:hod.me@charusat.ac.in"
    }
  ];

  const quickLinks = [
    { name: "About Department", href: "/about" },
    { name: "Research Labs", href: "/research-labs" },
    { name: "FESTO Center", href: "/festo" },
    { name: "Testing Facilities", href: "/testing-facilities" },
    { name: "Events", href: "/events" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/mechanical.charusat", name: "Facebook" },
    { icon: Twitter, href: "https://x.com/MCharusat", name: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hod-mechanical-cspit-charusat-8663611ab/", name: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/mechanical_charusat/", name: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#004D83] mb-4">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-1 flex-shrink-0">
                    <info.icon size={18} className="text-[#0066A1]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 mb-1">{info.title}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-600 text-sm hover:text-[#0066A1] transition-colors duration-200"
                        target={info.title === "Address" ? "_blank" : "_self"}
                        rel={info.title === "Address" ? "noopener noreferrer" : ""}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#004D83] mb-4">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="block text-gray-600 text-sm hover:text-[#0066A1] transition-colors duration-200 hover:translate-x-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#004D83] mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-[#004D83] rounded-lg flex items-center justify-center text-white hover:bg-[#0066A1] transition-all duration-200 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            {/* Back to Top */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#0066A1] text-sm hover:text-[#004D83] transition-colors duration-200 mt-6"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © Copyright CHARUSAT. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}