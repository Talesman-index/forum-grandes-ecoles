"use client";

import React from "react";

type FlagProps = { country: string; className?: string };

const flags: Record<string, React.ReactNode> = {
  france: (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="9.33" height="20" fill="#002395"/>
      <rect x="9.33" width="9.33" height="20" fill="#fff"/>
      <rect x="18.67" width="9.33" height="20" fill="#ED2939"/>
    </svg>
  ),
  canada: (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="7" height="20" fill="#FF0000"/>
      <rect x="7" width="14" height="20" fill="#fff"/>
      <rect x="21" width="7" height="20" fill="#FF0000"/>
      <polygon points="14,4 15.2,7.5 19,7.5 16,9.5 17.2,13 14,11 10.8,13 12,9.5 9,7.5 12.8,7.5" fill="#FF0000"/>
    </svg>
  ),
  belgique: (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="9.33" height="20" fill="#000"/>
      <rect x="9.33" width="9.33" height="20" fill="#FAE042"/>
      <rect x="18.67" width="9.33" height="20" fill="#EF3340"/>
    </svg>
  ),
  suisse: (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" fill="#FF0000"/>
      <rect x="11.5" y="5" width="5" height="10" fill="white"/>
      <rect x="7" y="8" width="14" height="4" fill="white"/>
    </svg>
  ),
  'etats-unis': (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" fill="#fff"/>
      <rect y="0" width="28" height="2.2" fill="#B22234"/>
      <rect y="4.4" width="28" height="2.2" fill="#B22234"/>
      <rect y="8.8" width="28" height="2.2" fill="#B22234"/>
      <rect y="13.2" width="28" height="2.2" fill="#B22234"/>
      <rect y="17.6" width="28" height="2.2" fill="#B22234"/>
      <rect width="12" height="10" fill="#3C3B6E"/>
    </svg>
  ),
  maroc: (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" fill="#C1272D"/>
      <polygon points="14,6 15.4,10.2 19.8,10.2 16.2,12.8 17.6,17 14,14.4 10.4,17 11.8,12.8 8.2,10.2 12.6,10.2"
        fill="none" stroke="#006233" strokeWidth="0.8"/>
    </svg>
  ),
  allemagne: (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="6.67" fill="#000"/>
      <rect y="6.67" width="28" height="6.67" fill="#DD0000"/>
      <rect y="13.33" width="28" height="6.67" fill="#FFCE00"/>
    </svg>
  ),
  'royaume-uni': (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" fill="#012169"/>
      <path d="M0,0 L28,20 M28,0 L0,20" stroke="#fff" strokeWidth="3"/>
      <path d="M0,0 L28,20 M28,0 L0,20" stroke="#C8102E" strokeWidth="2"/>
      <path d="M14,0 V20 M0,10 H28" stroke="#fff" strokeWidth="5"/>
      <path d="M14,0 V20 M0,10 H28" stroke="#C8102E" strokeWidth="3"/>
    </svg>
  ),
};

export default function FlagSVG({ country, className }: FlagProps) {
  const key = country.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-');
  const flag = flags[key];
  if (!flag) return null;
  return (
    <div
      className={className}
      style={{
        width: 28, height: 20,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.5)',
        flexShrink: 0,
      }}
    >
      {flag}
    </div>
  );
}
