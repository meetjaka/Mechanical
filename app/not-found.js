"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-[#004D83] opacity-20">
            404
          </h1>
          <div className="relative -mt-20 md:-mt-32">
            <div className="inline-block p-6 bg-white rounded-full shadow-lg">
              <Search className="w-16 h-16 md:w-20 md:h-20 text-[#004D83]" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-base text-gray-500">
            It might have been moved or deleted, or the URL might be incorrect.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#004D83] text-white font-semibold rounded-lg hover:bg-[#0066A1] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Go to Homepage</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#004D83] font-semibold rounded-lg border-2 border-[#004D83] hover:bg-[#004D83] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? Contact the{" "}
            <span className="font-semibold text-[#004D83]">
              Mechanical Engineering Department
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
