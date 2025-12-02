"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";

export default function DepartmentNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const researchLabsDropdown = [
    { name: "Grants & Consultancy", href: "/research-labs/grants-consultancy" },
    {
      name: "Materials Processing Lab",
      href: "/research-labs/materials-processing",
    },
    {
      name: "Surface Engineering Lab",
      href: "/research-labs/surface-engineering",
    },
    {
      name: "Casting Simulation & E-Foundry Cell",
      href: "/research-labs/casting-simulation",
    },
    {
      name: "Manufacturing Technology Lab",
      href: "/research-labs/manufacturing-technology",
    },
    {
      name: "Material Testing & Characterisation Lab",
      href: "/research-labs/material-testing",
    },
    {
      name: "Fluid Mechanics and Heat Transfer Lab",
      href: "/research-labs/fluid-mechanics",
    },
  ];

  const studentCornerDropdown = [
    {
      name: "Download Forms",
      href: "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO",
      isExternal: true,
    },
  ];

  const navItems = [
    { name: "About", href: "/about", active: false },
    {
      name: "Research Labs",
      href: "/research-labs",
      active: false,
      hasDropdown: true,
      dropdownItems: researchLabsDropdown,
    },
    { name: "FESTO", href: "/festo", active: false },
    { name: "Testing Facilities", href: "/testing-facilities", active: false },
    { name: "Events", href: "/events", active: false },
    {
      name: "Student Corner",
      href: "/student-corner",
      active: false,
      hasDropdown: true,
      dropdownItems: studentCornerDropdown,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-nav border-b border-light-gray"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Section: Department Text */}
          <div className="transition-transform duration-200 hover:scale-105">
            <Link href="/" className="flex items-center cursor-pointer group">
              <div>
                <p className="text-sm text-gray-dark font-medium transition-colors duration-300 group-hover:text-gray-darker">
                  CHAMOS Matrusanstha Department of
                </p>
                <p className="text-xl font-bold text-navy transition-colors duration-300 group-hover:text-blue-primary">
                  Mechanical Engineering
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`relative px-4 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 rounded-lg ${
                    item.active
                      ? "text-blue-primary bg-blue-primary/10"
                      : "text-gray-dark hover:text-blue-primary hover:bg-light-gray"
                  }`}
                >
                  <span className="font-semibold">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {/* Professional Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lifted border border-light-gray overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <div key={dropdownItem.name}>
                          {dropdownItem.isExternal ? (
                            <a
                              href={dropdownItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-3 text-sm text-gray-dark hover:text-blue-primary hover:bg-light-gray transition-all duration-200 rounded-md group/item"
                            >
                              <span className="flex-1 font-medium">
                                {dropdownItem.name}
                              </span>
                              <ExternalLink
                                size={16}
                                className="opacity-60 group-hover/item:opacity-100 transition-opacity"
                              />
                            </a>
                          ) : (
                            <Link
                              href={dropdownItem.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-dark hover:text-blue-primary hover:bg-light-gray transition-all duration-200 rounded-md font-medium"
                            >
                              {dropdownItem.name}
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
              className="p-2 text-gray-dark hover:text-blue-primary bg-light-gray hover:bg-gray-medium rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Professional Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-light-gray shadow-lifted">
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-4 text-base font-semibold rounded-lg transition-all duration-200 ${
                    item.active
                      ? "text-blue-primary bg-blue-primary/10"
                      : "text-gray-dark hover:text-blue-primary hover:bg-light-gray"
                  }`}
                  onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={20} />}
                </Link>

                {/* Mobile Dropdown Items */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="ml-6 mt-2 space-y-1 border-l-2 border-light-gray pl-4">
                    {item.dropdownItems.map((dropdownItem) => (
                      <div key={dropdownItem.name}>
                        {dropdownItem.isExternal ? (
                          <a
                            href={dropdownItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-3 text-sm text-gray-dark hover:text-blue-primary rounded-lg transition-colors group"
                            onClick={() => setMobileMenuOpen(false)}
                          >
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
                            className="block px-4 py-3 text-sm text-gray-dark hover:text-blue-primary rounded-lg transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                          >
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
