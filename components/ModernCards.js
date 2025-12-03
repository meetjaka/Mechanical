"use client";

import { useState } from "react";

export function ProfessionalCard({
  children,
  className = "",
  hover = true,
  shadow = "card",
  ...props
}) {
  return (
    <div
      className={`
        bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300
        ${hover ? "hover:shadow-lg hover:-translate-y-1" : ""}
        ${
          shadow === "subtle"
            ? "shadow-sm"
            : shadow === "card"
            ? "shadow-md"
            : shadow === "lifted"
            ? "shadow-lg"
            : ""
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = "blue",
  className = "",
}) {
  const accentColors = {
    blue: {
      icon: "text-blue-600 bg-blue-50",
      title: "text-[#004D83] group-hover:text-blue-600",
      border: "group-hover:border-blue-300",
    },
    orange: {
      icon: "text-orange-500 bg-orange-50",
      title: "text-[#004D83] group-hover:text-orange-500",
      border: "group-hover:border-orange-300",
    },
    navy: {
      icon: "text-[#004D83] bg-blue-50",
      title: "text-[#004D83] group-hover:text-blue-600",
      border: "group-hover:border-blue-300",
    },
    electric: {
      icon: "text-blue-500 bg-blue-50",
      title: "text-[#004D83] group-hover:text-blue-500",
      border: "group-hover:border-blue-300",
    },
  };

  const colors = accentColors[accent] || accentColors.blue;

  return (
    <ProfessionalCard
      className={`group transition-all duration-300 hover:border-opacity-50 ${colors.border} ${className}`}
      hover={true}
    >
      <div className="space-y-4">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-lg ${colors.icon} transition-all duration-300 group-hover:scale-110`}
        >
          <Icon size={24} />
        </div>

        <div className="space-y-2">
          <h3
            className={`text-lg font-bold transition-colors duration-300 ${colors.title}`}
          >
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </ProfessionalCard>
  );
}

export function StatCard({ value, label, icon: Icon, className = "" }) {
  return (
    <ProfessionalCard className={`text-center group ${className}`} hover={true}>
      <div className="space-y-3">
        <div className="w-10 h-10 flex items-center justify-center mx-auto rounded-lg bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110">
          <Icon size={20} />
        </div>

        <div className="space-y-1">
          <div className="text-2xl font-bold text-[#004D83] group-hover:text-blue-600 transition-colors duration-300">
            {value}
          </div>
          <div className="text-gray-600 text-xs font-medium uppercase tracking-wide">
            {label}
          </div>
        </div>
      </div>
    </ProfessionalCard>
  );
}

export function InfoCard({ title, description, button, className = "" }) {
  return (
    <ProfessionalCard className={`group ${className}`} hover={true}>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[#004D83] group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed">{description}</p>

        {button && <div className="pt-2">{button}</div>}
      </div>
    </ProfessionalCard>
  );
}

export function VisionMissionCard({
  type,
  title,
  description,
  icon: Icon,
  className = "",
}) {
  const isVision = type === "vision";
  const colors = isVision
    ? "text-blue-600 bg-blue-50 group-hover:bg-blue-100"
    : "text-orange-500 bg-orange-50 group-hover:bg-orange-100";

  return (
    <ProfessionalCard className={`group h-full ${className}`} hover={true}>
      <div className="space-y-6 h-full">
        <div className="flex items-center gap-4">
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-xl ${colors} transition-all duration-300 group-hover:scale-105`}
          >
            <Icon size={32} />
          </div>
          <h3
            className={`text-2xl font-bold ${
              isVision ? "text-blue-600" : "text-orange-500"
            } transition-colors duration-300`}
          >
            {title}
          </h3>
        </div>

        <div className="h-px bg-gradient-to-r from-gray-200 to-transparent w-full" />

        <p className="text-gray-700 text-lg leading-relaxed font-medium flex-1">
          {description}
        </p>
      </div>
    </ProfessionalCard>
  );
}

// Legacy exports for compatibility during transition
export const GlassCard = ProfessionalCard;
export const ModernCard = ProfessionalCard;
