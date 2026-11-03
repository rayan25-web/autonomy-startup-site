import React from "react";

function Walker({ x, y = 640, delay = "0s", reverse = false }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${reverse ? -1 : 1} 1)`}>
      <g className="italian-walker" style={{ animationDelay: delay }}>
        <circle cx="0" cy="0" r="9" fill="#39342e"/>
        <path d="M-9 12 L9 12 L13 52 L-13 52Z"
          fill="#a96f52" stroke="#39342e" strokeWidth="2"/>
        <path d="M-8 20 L-19 40 M8 20 L19 40"
          stroke="#39342e" strokeWidth="5" strokeLinecap="round"/>
        <g className="walk-leg-left">
          <path d="M-7 52 L-12 76 L-20 94"
            stroke="#39342e" strokeWidth="6" fill="none"
            strokeLinecap="round"/>
        </g>
        <g className="walk-leg-right">
          <path d="M7 52 L12 76 L20 94"
            stroke="#39342e" strokeWidth="6" fill="none"
            strokeLinecap="round"/>
        </g>
      </g>
    </g>
  );
}

function Shop({ x, title, color, kind }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x="0" y="235" width="470" height="420"
        fill="#e9dfce" stroke="#716456" strokeWidth="4"/>
      <rect x="0" y="235" width="470" height="76" fill={color}/>
      <text x="235" y="284" textAnchor="middle"
        fill="#fff8e9" fontSize="29" fontWeight="800"
        letterSpacing="2">{title}</text>

      <path d="M0 315 H470 V350 H0Z"
        fill="#f7ecda" stroke="#806d59" strokeWidth="2"/>

      {Array.from({length: 9}, (_, i) => (
        <path key={i} d={`M${i * 59} 315 V350`}
          stroke={i % 2 ? "#f7ecda" : color} strokeWidth="28"/>
      ))}

      <rect x="25" y="375" width="195" height="245"
        fill="#c9dedc" stroke="#65594c" strokeWidth="5"/>
      <rect x="245" y="375" width="200" height="245"
        fill="#c9dedc" stroke="#65594c" strokeWidth="5"/>

      {kind === "bakery" && (
        <g fill="#aaa69e">
          <ellipse cx="75" cy="550" rx="28" ry="15"/>
          <ellipse cx="145" cy="550" rx="28" ry="15"/>
          <ellipse cx="110" cy="510" rx="28" ry="15"/>
          <path d="M45 580 H190" stroke="#795439" strokeWidth="7"/>
        </g>
      )}

      {kind === "medical" && (
        <g transform="translate(125 485)" fill="#b64c48">
          <rect x="-12" y="-48" width="24" height="96"/>
          <rect x="-48" y="-12" width="96" height="24"/>
        </g>
      )}

      {kind === "grocery" && (
        <g>
          <path d="M45 570 H190 V600 H45Z" fill="#806342"/>
          <g fill="#aaa69e">
            <circle cx="70" cy="550" r="17"/>
            <circle cx="110" cy="550" r="17"/>
            <circle cx="150" cy="550" r="17"/>
          </g>
          <g fill="#78915d">
            <circle cx="90" cy="515" r="15"/>
            <circle cx="135" cy="515" r="15"/>
          </g>
        </g>
      )}

      <rect x="350" y="375" width="95" height="280"
        fill="#795943" stroke="#594638" strokeWidth="4"/>
      <rect x="362" y="390" width="70" height="130" fill="#c9dedc"/>
      <circle cx="430" cy="550" r="5" fill="#f0d08c"/>
    </g>
  );
}

function Table({ x }) {
  return (
    <g transform={`translate(${x} 650)`}>

      {/* Outdoor chairs */}
      <g fill="#e8e5dc" stroke="#55534d" strokeWidth="3">
        <path d="M-103 -8 V-43 Q-103 -51 -95 -51 H-65 Q-57 -51 -57 -43 V-8"/>
        <path d="M58 -8 V-43 Q58 -51 66 -51 H96 Q104 -51 104 -43 V-8"/>
      </g>

      {/* Left seated customer */}
      <g>
        <circle cx="-80" cy="-76" r="10" fill="#393733"/>
        <path d="M-91 -63 L-69 -63 L-65 -31 L-94 -31Z"
          fill="#aaa9a2" stroke="#393733" strokeWidth="2.5"/>

        {/* Arm resting on table */}
        <path d="M-88 -56 L-65 -31 L-44 -20"
          fill="none" stroke="#393733" strokeWidth="5"
          strokeLinecap="round"/>

        {/* Bent seated legs */}
        <path d="M-88 -31 L-76 -13 L-59 -13 L-55 8"
          fill="none" stroke="#393733" strokeWidth="6"
          strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M-70 -31 L-61 -12 L-46 -12 L-43 8"
          fill="none" stroke="#393733" strokeWidth="6"
          strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      {/* Right seated customer */}
      <g>
        <circle cx="80" cy="-76" r="10" fill="#393733"/>
        <path d="M69 -63 L91 -63 L95 -31 L66 -31Z"
          fill="#85847d" stroke="#393733" strokeWidth="2.5"/>

        <path d="M88 -56 L65 -31 L44 -20"
          fill="none" stroke="#393733" strokeWidth="5"
          strokeLinecap="round"/>

        {/* Bent seated legs */}
        <path d="M88 -31 L76 -13 L59 -13 L55 8"
          fill="none" stroke="#393733" strokeWidth="6"
          strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M70 -31 L61 -12 L46 -12 L43 8"
          fill="none" stroke="#393733" strokeWidth="6"
          strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      {/* Tabletop */}
      <ellipse cx="0" cy="0" rx="57" ry="10"
        fill="#eeeae1" stroke="#4c4a45" strokeWidth="3"/>

      <path d="M-40 7 L-44 48 M40 7 L44 48"
        stroke="#4c4a45" strokeWidth="5"/>

      {/* Coffee and plates */}
      <g fill="#fffdf5" stroke="#494640" strokeWidth="2">
        <rect x="-31" y="-21" width="13" height="18" rx="3"/>
        <rect x="18" y="-21" width="13" height="18" rx="3"/>
        <ellipse cx="0" cy="-5" rx="13" ry="4"/>
      </g>

      <path d="M-29 -15 H-18 M20 -15 H31"
        stroke="#494640" strokeWidth="2"/>
    </g>
  );
}
export default function ItalianStreetScene() {
  return (
    <svg className="italian-street-svg"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice">

      <defs>
        <linearGradient id="italianSky" x2="0" y2="1">
          <stop offset="0%" stopColor="#eee9df"/>
          <stop offset="100%" stopColor="#faf5eb"/>
        </linearGradient>
        <linearGradient id="italianRoad" x2="0" y2="1">
          <stop offset="0%" stopColor="#494540"/>
          <stop offset="100%" stopColor="#282724"/>
        </linearGradient>
      </defs>

      {/* SKY AND SUN */}
      <rect width="1600" height="900" fill="url(#italianSky)"/>
<rect x="0" y="0" width="1600" height="900" fill="#f3f2ed"/>

      <circle cx="1360" cy="130" r="72" fill="#efd28c" opacity=".2"/>
      <circle cx="1360" cy="130" r="48" fill="#edc96e"/>

      {/* CLOUDS */}
      <g className="italian-cloud" fill="#fffdf8">
        <ellipse cx="250" cy="140" rx="75" ry="18"/>
        <ellipse cx="290" cy="125" rx="45" ry="25"/>
        <ellipse cx="340" cy="140" rx="45" ry="18"/>
      </g>
      <g className="italian-cloud cloud-second" fill="#fffdf8">
        <ellipse cx="950" cy="170" rx="85" ry="18"/>
        <ellipse cx="990" cy="150" rx="45" ry="25"/>
      </g>

      {/* BUILDINGS */}
      <path d="M0 230 L100 155 L200 230 V680 H0Z"
        fill="#ddd2bf" stroke="#a99a85" strokeWidth="4"/>
      <path d="M1400 230 L1500 155 L1600 230 V680 H1400Z"
        fill="#ddd2bf" stroke="#a99a85" strokeWidth="4"/>

      {/* THREE SHOP FRONTS */}
      <Shop x={55} title="BAKERY & TEA" color="#777771" kind="bakery"/>
      <Shop x={565} title="MEDICAL STORE" color="#92918a" kind="medical"/>
      <Shop x={1075} title="GROCERY" color="#aaa69c" kind="grocery"/>

      {/* SIDEWALK */}
      <rect x="0" y="655" width="1600" height="125" fill="#c9bba7"/>
      <path d="M0 655 H1600" stroke="#8f806e" strokeWidth="5"/>

      {/* STREET LAMPS */}
      <g stroke="#39352e" strokeWidth="7" fill="none">
        <path d="M40 655 V360 Q40 325 75 325 H100"/>
        <path d="M1560 655 V360 Q1560 325 1525 325 H1500"/>
      </g>
      <g fill="#f1d58d" stroke="#51473a" strokeWidth="3">
        <path d="M60 300 Q90 275 120 300 L112 330 H68Z"/>
        <path d="M1480 300 Q1510 275 1540 300 L1532 330 H1488Z"/>
      </g>

      {/* CAFE UMBRELLAS */}
      <g>
        <path d="M130 555 Q235 435 340 555Z" fill="#777771"
          stroke="#724638" strokeWidth="3"/>
        <path d="M235 555 V660" stroke="#594b3e" strokeWidth="6"/>
        <path d="M180 500 Q235 465 290 500"
          stroke="#f8ead7" strokeWidth="12" fill="none"/>
      </g>
      <g>
        <path d="M790 555 Q895 435 1000 555Z" fill="#758b75"
          stroke="#526a55" strokeWidth="3"/>
        <path d="M895 555 V660" stroke="#594b3e" strokeWidth="6"/>
        <path d="M840 500 Q895 465 950 500"
          stroke="#f8ead7" strokeWidth="12" fill="none"/>
      </g>

      {/* OUTDOOR TABLES AND CUSTOMERS */}
      {/* ONE OUTDOOR CAFE TABLE, TWO CUSTOMERS */}
      <Table x={235}/>

      {/* WAITER: EXIT, SERVE, RETURN INSIDE */}
      <g className="italian-waiter">

        {/* Start inside bakery, exit, serve table, return */}
        <animateMotion
          dur="24s"
          calcMode="linear"
          repeatCount="indefinite"
          path="M460 610 L460 650 L350 650 L350 650 L460 650 L460 610"
          keyPoints="0;0.18;0.42;0.58;0.82;1"
          keyTimes="0;0.18;0.42;0.58;0.82;1"
        />

        {/* Waiter body */}
        <g>
          <circle cx="0" cy="-60" r="9" fill="#393733"/>

          <path d="M-11 -48 H11 L14 -10 H-14Z"
            fill="#f7f1e5" stroke="#393733" strokeWidth="2.5"/>

          {/* Left walking leg */}
          <path d="M-7 -10 L-13 20"
            stroke="#393733" strokeWidth="6" strokeLinecap="round">
            <animateTransform attributeName="transform"
              type="rotate" values="14 -7 -10;-14 -7 -10;14 -7 -10"
              dur=".8s" repeatCount="indefinite"/>
          </path>

          {/* Right walking leg */}
          <path d="M7 -10 L13 20"
            stroke="#393733" strokeWidth="6" strokeLinecap="round">
            <animateTransform attributeName="transform"
              type="rotate" values="-14 7 -10;14 7 -10;-14 7 -10"
              dur=".8s" repeatCount="indefinite"/>
          </path>

          {/* Serving arm holding tray */}
          <path d="M10 -43 L25 -29 L34 -29"
            fill="none" stroke="#393733" strokeWidth="5"
            strokeLinecap="round"/>

          {/* Other arm */}
          <path d="M-10 -43 L-23 -23"
            fill="none" stroke="#393733" strokeWidth="5"
            strokeLinecap="round">
            <animateTransform attributeName="transform"
              type="rotate" values="-12 -10 -43;12 -10 -43;-12 -10 -43"
              dur=".8s" repeatCount="indefinite"/>
          </path>

          {/* Tray */}
          <ellipse cx="43" cy="-29" rx="20" ry="4"
            fill="#b6aa94" stroke="#393733" strokeWidth="1.5"/>

          {/* Food and coffee */}
          <circle cx="37" cy="-36" r="5" fill="#fffdf5"/>
          <rect x="47" y="-39" width="8" height="9"
            rx="2" fill="#eeeae1" stroke="#393733" strokeWidth="1"/>
        </g>
      </g>
      {/* WALKING PEOPLE */}
      <g className="italian-pedestrians">
        <g>
          <Walker x={100} delay="0s"/>
          <animateTransform attributeName="transform" type="translate"
            values="0 0;450 0" dur="42s" calcMode="linear" repeatCount="indefinite"/>
        </g>
        <g>
          <Walker x={1100} reverse delay=".2s"/>
          <animateTransform attributeName="transform" type="translate"
            values="0 0;-400 0" dur="22s" repeatCount="indefinite"/>
        </g>
        <Walker x={1450} reverse delay=".3s"/>
      </g>

      {/* ROAD */}
      <rect x="0" y="780" width="1600" height="120" fill="url(#italianRoad)"/>
      <path d="M0 795 H1600 M0 885 H1600"
        stroke="#ddd6c9" strokeWidth="5"/>
      <path d="M0 840 H1600" stroke="#fffdf7"
        strokeWidth="5" strokeDasharray="55 38"/>

      {/* CARS */}
      <g className="italian-car">
        <animateMotion dur="42s" calcMode="linear" repeatCount="indefinite"
          path="M-250 0 H1850"/>
        <g transform="translate(0 790)">
          <path d="M0 35 L25 0 H125 L155 35 H175 V70 H-10 V45Z"
            fill="#777771" stroke="#292724" strokeWidth="4"/>
          <path d="M32 30 L50 6 H115 L140 30Z"
            fill="#c7d9d5" stroke="#292724" strokeWidth="3"/>
          <circle cx="30" cy="68" r="14" fill="#242321"
            stroke="#b8b0a1" strokeWidth="4"/>
          <circle cx="140" cy="68" r="14" fill="#242321"
            stroke="#b8b0a1" strokeWidth="4"/>
        </g>
      </g>
      <g className="italian-car">
        <animateMotion dur="48s" calcMode="linear" repeatCount="indefinite"
          path="M1850 0 H-300"/>
        <g transform="translate(0 820) scale(.8)">
          <path d="M0 35 L25 0 H125 L155 35 H175 V70 H-10 V45Z"
            fill="#92918a" stroke="#292724" strokeWidth="4"/>
          <path d="M32 30 L50 6 H115 L140 30Z"
            fill="#c7d9d5" stroke="#292724" strokeWidth="3"/>
          <circle cx="30" cy="68" r="14" fill="#242321"/>
          <circle cx="140" cy="68" r="14" fill="#242321"/>
        </g>
      </g>
</svg>
  );
}






