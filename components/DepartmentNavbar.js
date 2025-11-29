"use client";

import { useState } from "react";
import Link from "next/link";

export default function DepartmentNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Department Text */}
          <Link href="/" className="flex items-center cursor-pointer">
            <div>
              <p className="text-sm text-gray-600 font-normal">
                CHAMOS Matrusanstha Department of
              </p>
              <p className="text-xl font-bold text-[#004D83]">
                Mechanical Engineering
              </p>
            </div>
          </Link>

            {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setOpenDropdown(item.name)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-1 ${
                    item.active
                      ? "text-[#004D83] bg-blue-50"
                      : "text-gray-600 hover:text-[#004D83] hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown &&
                  item.dropdownItems &&
                  openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-80 bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden z-20 animate-in slide-in-from-top-2 duration-200">
                      <div className="p-2 pt-3">
                        {item.dropdownItems.map((dropdownItem, index) =>
                          dropdownItem.isExternal ? (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#004D83] transition-colors rounded-lg group"
                            >
                              <span className="flex-1">
                                {dropdownItem.name}
                              </span>
                              <svg
                                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          ) : (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#004D83] transition-colors rounded-lg"
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#004D83] hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                    item.active
                      ? "text-[#004D83] bg-blue-50"
                      : "text-gray-700 hover:text-[#004D83] hover:bg-gray-50"
                  }`}
                  onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {/* Mobile Dropdown Items */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdownItems.map((dropdownItem) =>
                      dropdownItem.isExternal ? (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2.5 text-sm text-gray-600 hover:text-[#004D83] hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="flex-1">{dropdownItem.name}</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#004D83] hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      )
                    )}
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
