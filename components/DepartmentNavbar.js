"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ExternalLink,
  GraduationCap,
  Settings,
  Microscope,
  FlaskConical,
  BookOpen,
  Download,
  TestTube
} from "lucide-react";

export default function DepartmentNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when mobile menu is closed
  useEffect(() => {
    if (!mobileMenuOpen) {
      setOpenDropdown(null);
    }
  }, [mobileMenuOpen]);

  const researchLabsDropdown = [
    { 
      name: "Grants & Consultancy", 
      href: "/research-labs/grants-consultancy",
      icon: BookOpen,
      description: "Funding opportunities and industry partnerships"
    },
    {
      name: "Materials Processing Lab",
      href: "/research-labs/materials-processing",
      icon: Settings,
      description: "Advanced material processing techniques"
    },
    {
      name: "Surface Engineering Lab",
      href: "/research-labs/surface-engineering",
      icon: Microscope,
      description: "Surface modification and characterization"
    },
    {
      name: "Casting Simulation & E-Foundry Cell",
      href: "/research-labs/casting-simulation",
      icon: FlaskConical,
      description: "Digital casting simulation and prototyping"
    },
    {
      name: "Manufacturing Technology Lab",
      href: "/research-labs/manufacturing-technology",
      icon: Settings,
      description: "Next-generation manufacturing processes"
    },
    {
      name: "Material Testing & Characterisation Lab",
      href: "/research-labs/material-testing",
      icon: TestTube,
      description: "Comprehensive material analysis and testing"
    },
    {
      name: "Fluid Mechanics and Heat Transfer Lab",
      href: "/research-labs/fluid-mechanics",
      icon: FlaskConical,
      description: "Thermal and fluid dynamics research"
    },
  ];

  const studentCornerDropdown = [
    {
      name: "Download Forms",
      href: "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO",
      isExternal: true,
      icon: Download,
      description: "Access important academic forms"
    },
  ];

  const navItems = [
    { 
      name: "About", 
      href: "/about", 
      icon: GraduationCap 
    },
    {
      name: "Research Labs",
      href: "/research-labs",
      hasDropdown: true,
      dropdownItems: researchLabsDropdown,
      icon: Microscope
    },
    { 
      name: "FESTO", 
      href: "/festo", 
      icon: Settings 
    },
    { 
      name: "Testing Facilities", 
      href: "/testing-facilities", 
      icon: FlaskConical 
    },
    { 
      name: "Events", 
      href: "/events", 
      icon: BookOpen 
    },
    {
      name: "Student Corner",
      href: "/student-corner",
      hasDropdown: true,
      dropdownItems: studentCornerDropdown,
      icon: GraduationCap
    },
  ];

  // Helper function to check if current route is active
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-md border-b border-gray-300"
          : "shadow-sm border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Department Text */}
          <div className="transition-transform duration-200 hover:scale-105">
            <Link href="/" className="flex items-center cursor-pointer group">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-800">
                  CHAMOS Matrusanstha Department of
                </p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-[#004D83] transition-colors duration-300 group-hover:text-[#0066A1]">
                  Mechanical Engineering
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button
                    className={`relative px-4 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 rounded-lg ${
                      isActive(item.href)
                        ? "text-[#0066A1] bg-blue-50"
                        : "text-gray-700 hover:text-[#0066A1] hover:bg-gray-50"
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="font-semibold">{item.name}</span>
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-4 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 rounded-lg ${
                      isActive(item.href)
                        ? "text-[#0066A1] bg-blue-50"
                        : "text-gray-700 hover:text-[#0066A1] hover:bg-gray-50"
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="font-semibold">{item.name}</span>
                  </Link>
                )}

                {/* Modern Dropdown Menu with Icons and Descriptions */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="p-4">
                      {item.dropdownItems.map((dropdownItem) => (
                        <div key={dropdownItem.name}>
                          {dropdownItem.isExternal ? (
                            <a
                              href={dropdownItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/item flex items-start gap-3 px-4 py-3 text-sm hover:bg-blue-50 transition-all duration-200 rounded-xl"
                            >
                              <div className="p-2 rounded-lg bg-blue-50 group-hover/item:bg-blue-100 transition-colors">
                                <dropdownItem.icon className="w-5 h-5 text-[#0066A1]" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 group-hover/item:text-[#0066A1] transition-colors">
                                  {dropdownItem.name}
                                </h3>
                                <p className="text-xs text-gray-600 mt-1">
                                  {dropdownItem.description}
                                </p>
                              </div>
                              <ExternalLink
                                size={16}
                                className="text-gray-400 group-hover/item:text-[#0066A1] transition-colors mt-1"
                              />
                            </a>
                          ) : (
                            <Link
                              href={dropdownItem.href}
                              className={`group/item flex items-start gap-3 px-4 py-3 text-sm transition-all duration-200 rounded-xl ${
                                isActive(dropdownItem.href)
                                  ? "bg-blue-100 border border-blue-200"
                                  : "hover:bg-blue-50"
                              }`}
                            >
                              <div className={`p-2 rounded-lg transition-colors ${
                                isActive(dropdownItem.href)
                                  ? "bg-blue-200"
                                  : "bg-blue-50 group-hover/item:bg-blue-100"
                              }`}>
                                <dropdownItem.icon className="w-5 h-5 text-[#0066A1]" />
                              </div>
                              <div className="flex-1">
                                <h3 className={`font-semibold transition-colors ${
                                  isActive(dropdownItem.href)
                                    ? "text-[#0066A1]"
                                    : "text-gray-900 group-hover/item:text-[#0066A1]"
                                }`}>
                                  {dropdownItem.name}
                                </h3>
                                <p className="text-xs text-gray-600 mt-1">
                                  {dropdownItem.description}
                                </p>
                              </div>
                              <ChevronDown className={`w-4 h-4 transition-colors rotate-[-90deg] mt-1 ${
                                isActive(dropdownItem.href)
                                  ? "text-[#0066A1]"
                                  : "text-gray-400 group-hover/item:text-[#0066A1]"
                              }`} />
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#004D83] bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Professional Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <button
                    className={`w-full flex items-center justify-between px-4 py-4 text-base font-semibold rounded-lg transition-all duration-200 ${
                      openDropdown === item.name
                        ? "text-[#0066A1] bg-blue-50"
                        : "text-gray-700 hover:text-[#0066A1] hover:bg-gray-50"
                    }`}
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-4 text-base font-semibold rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-[#0066A1] bg-blue-50"
                        : "text-gray-700 hover:text-[#0066A1] hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.name}</span>
                    </div>
                  </Link>
                )}

                {/* Mobile Dropdown Items */}
                {item.hasDropdown && item.dropdownItems && openDropdown === item.name && (
                  <div className="ml-6 mt-2 space-y-1 border-l-2 border-gray-200 pl-4 animate-in slide-in-from-top-2 duration-200">
                    {item.dropdownItems.map((dropdownItem) => (
                      <div key={dropdownItem.name}>
                        {dropdownItem.isExternal ? (
                          <a
                            href={dropdownItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:text-[#0066A1] hover:bg-blue-50 rounded-lg transition-colors group"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.icon && <dropdownItem.icon className="w-4 h-4" />}
                            <span className="flex-1 font-medium">
                              {dropdownItem.name}
                            </span>
                            <ExternalLink
                              size={16}
                              className="opacity-60 group-hover:opacity-100"
                            />
                          </a>
                        ) : (
                          <Link
                            href={dropdownItem.href}
                            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-lg transition-colors font-medium ${
                              isActive(dropdownItem.href)
                                ? "text-[#0066A1] bg-blue-100 border border-blue-200"
                                : "text-gray-700 hover:text-[#0066A1] hover:bg-blue-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.icon && <dropdownItem.icon className="w-4 h-4" />}
                            {dropdownItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
