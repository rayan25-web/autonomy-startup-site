import React, { useEffect, useRef } from "react";

const art = {
  manifesto: (
    <g>
      <circle cx="100" cy="80" r="30"/>
      <path d="M100 110 V160 M75 130 L100 115 L125 130"/>
      <path d="M65 160 H135 M80 160 L72 190 M120 160 L128 190"/>
      <rect x="150" y="70" width="55" height="90" rx="9"/>
      <circle cx="167" cy="95" r="5" fill="currentColor"/>
      <circle cx="188" cy="95" r="5" fill="currentColor"/>
      <path d="M165 125 H190 M177 160 V185"/>
      <path d="M135 95 H150 M125 110 L150 130"/>
      <path d="M35 45 L20 30 M165 35 L180 20 M100 30 V10"/>
    </g>
  ),

  platform: (
    <g>
      <rect x="70" y="55" width="65" height="55" rx="4"/>
      <rect x="170" y="55" width="65" height="55" rx="4"/>
      <rect x="120" y="155" width="65" height="55" rx="4"/>
      <path d="M135 82 H170 M102 110 L140 155 M202 110 L165 155"/>
      <circle cx="102" cy="82" r="9"/>
      <circle cx="202" cy="82" r="9"/>
      <circle cx="152" cy="182" r="9"/>
      <path d="M85 95 L120 95 M185 95 L220 95"/>
      <path d="M45 130 H75 M230 130 H260"/>
    </g>
  ),

  approach: (
    <g>
      <circle cx="150" cy="115" r="75"/>
      <circle cx="150" cy="115" r="58"/>
      <path d="M150 25 V205 M60 115 H240"/>
      <path d="M150 45 L172 120 L150 108 L128 120Z"/>
      <circle cx="150" cy="115" r="8"/>
      <path d="M35 210 L100 175 L145 190 L220 130 L265 90"/>
      <circle cx="100" cy="175" r="6"/>
      <circle cx="220" cy="130" r="6"/>
    </g>
  ),

  plan: (
    <g>
      <rect x="65" y="45" width="170" height="165" rx="4"/>
      <path d="M65 85 H235 M105 25 V65 M195 25 V65"/>
      <path d="M90 115 H115 V140 H90Z M135 115 H160 V140 H135Z M180 115 H205 V140 H180Z"/>
      <path d="M90 160 H115 V185 H90Z M135 160 H160 V185 H135Z"/>
      <path d="M185 170 L197 183 L220 153"/>
      <path d="M45 215 H255 M150 210 V235"/>
    </g>
  ),

  people: (
    <g>
      <path d="M45 185 Q150 230 255 185"/>
      <circle cx="95" cy="78" r="15"/>
      <circle cx="150" cy="60" r="15"/>
      <circle cx="205" cy="78" r="15"/>
      <path d="M70 145 Q95 105 120 145 L130 190 H60Z"/>
      <path d="M125 135 Q150 95 175 135 L185 190 H115Z"/>
      <path d="M180 145 Q205 105 230 145 L240 190 H170Z"/>
      <path d="M40 100 Q150 5 260 100" fill="none"/>
      <path d="M40 100 L55 90 M260 100 L245 90"/>
      <path d="M75 205 H225"/>
    </g>
  ),

  founder: (
    <g>
      <path d="M65 205 V90 L150 30 L235 90 V205Z"/>
      <path d="M85 205 V100 H215 V205"/>
      <path d="M110 120 H135 V150 H110Z M165 120 H190 V150 H165Z"/>
      <path d="M110 170 H190"/>
      <circle cx="150" cy="115" r="100" fill="none" strokeDasharray="3 7"/>
      <path d="M150 10 V30 M150 200 V220 M30 115 H50 M250 115 H270"/>
      <path d="M150 75 L164 120 L150 145 L136 120Z"/>
    </g>
  ),

  contact: (
    <g>
      <rect x="55" y="100" width="180" height="115" rx="5"/>
      <path d="M55 105 L145 170 L235 105"/>
      <path d="M80 190 L130 150 M210 190 L160 150"/>
      <path d="M115 55 L230 20 L195 95 L170 65Z"/>
      <path d="M170 65 L145 100"/>
      <path d="M230 20 L195 95"/>
      <circle cx="230" cy="20" r="5"/>
    </g>
  )
};

const captions = {
  manifesto: "PEOPLE + TECHNOLOGY",
  platform: "CONNECTED INTELLIGENCE",
  approach: "THE DIRECTION FORWARD",
  plan: "A PLAN TAKES SHAPE",
  people: "HUMAN POTENTIAL",
  founder: "A VISION TAKES FORM",
  contact: "LET'S BUILD SOMETHING"
};

export default function SketchPoster({ variant = "platform" }) {
  const posterRef = useRef(null);

  useEffect(() => {
    const element = posterRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-drawing");
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add("is-drawing");
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={posterRef} className={"sketch-poster sketch-" + variant} aria-hidden="true">
      <div className="sketch-top">
        <span>AUTONOMY</span>
        <span>FIG. 00{Object.keys(art).indexOf(variant) + 1}</span>
      </div>

      <svg viewBox="0 0 300 250" className="sketch-art">
        <g className="sketch-construction">
          <path d="M15 20 H285 V225 H15Z"/>
          <path d="M25 30 L275 215 M275 30 L25 215" opacity=".18"/>
          <path d="M150 10 V240 M10 125 H290" opacity=".25"/>
        </g>

        <g className="sketch-drawing">
          {art[variant] || art.platform}
        </g>

        <g className="sketch-details">
          <circle cx="15" cy="20" r="3"/>
          <circle cx="285" cy="20" r="3"/>
          <circle cx="15" cy="225" r="3"/>
          <circle cx="285" cy="225" r="3"/>
          <path d="M15 12 V28 M7 20 H23 M277 20 H293"/>
        </g>
      </svg>

      <div className="sketch-caption">
        {captions[variant] || "AUTONOMY"}
      </div>
      <div className="sketch-number">DESIGN STUDY / 2026</div>
    </div>
  );
}


