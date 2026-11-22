// Ikon buatan sendiri untuk web MSU. Grid 24, garis 1.75, ujung membulat.
// Bagian aksen memakai --icon-accent (default emas) dan beberapa ikon memuat
// bentuk jendela gedung MSU sebagai ciri.

type IconProps = React.SVGProps<SVGSVGElement>;
export type Icon = (props: IconProps) => React.JSX.Element;

const accent = { fill: "var(--icon-accent, var(--color-gold-400))" };

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconArrowUpRight: Icon = (props) => (
  <Svg {...props}>
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </Svg>
);

export const IconArrowRight: Icon = (props) => (
  <Svg {...props}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Svg>
);

export const IconMosque: Icon = (props) => (
  <Svg {...props}>
    <path d="M10.5 20.5v-4l1.5-1.3 1.5 1.3v4Z" style={accent} stroke="none" />
    <path d="M12 2.5v2M7.5 8.5 12 4.5l4.5 4ZM3.5 12.5l4-4h9l4 4ZM5.5 12.5v8M18.5 12.5v8M2.5 20.5h19" />
  </Svg>
);

export const IconCalendar: Icon = (props) => (
  <Svg {...props}>
    <path d="M7.5 18v-3l1.75-1.5L11 15v3Z" style={accent} stroke="none" />
    <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
    <path d="M8 3v4M16 3v4M3.5 10h17" />
  </Svg>
);

export const IconClock: Icon = (props) => (
  <Svg {...props}>
    <path d="M12 12V3a9 9 0 0 1 9 9Z" style={accent} stroke="none" />
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </Svg>
);

export const IconLocation: Icon = (props) => (
  <Svg {...props}>
    <path d="M10.4 12.2V9.8L12 8.5l1.6 1.3v2.4Z" style={accent} stroke="none" />
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
  </Svg>
);

export const IconQuran: Icon = (props) => (
  <Svg {...props}>
    <path d="M12 7c-2-1.5-5.5-2-8.5-1.5v13c3-.5 6.5 0 8.5 1.5Z" style={accent} stroke="none" opacity={0.55} />
    <path d="M12 7c-2-1.5-5.5-2-8.5-1.5v13c3-.5 6.5 0 8.5 1.5 2-1.5 5.5-2 8.5-1.5v-13C17.5 5 14 5.5 12 7ZM12 7v13" />
  </Svg>
);

export const IconDonation: Icon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="5" r="2.5" style={accent} stroke="none" />
    <path d="M4 10.5h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2ZM9.5 10.5h5" />
    <path d="M12 18.2s-2.6-1.5-2.6-3.2a1.3 1.3 0 0 1 2.6-.4 1.3 1.3 0 0 1 2.6.4c0 1.7-2.6 3.2-2.6 3.2Z" strokeWidth={1.5} />
  </Svg>
);

export const IconCommunity: Icon = (props) => (
  <Svg {...props}>
    <circle cx="16.5" cy="9" r="2.5" style={accent} stroke="none" />
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19c.5-3.5 2.8-5 5.5-5s5 1.5 5.5 5M15.5 14.2c2.5-.2 4.5 1.3 5 4.3" />
  </Svg>
);

export const IconKey: Icon = (props) => (
  <Svg {...props}>
    <circle cx="8" cy="16" r="4.5" style={accent} stroke="none" opacity={0.55} />
    <circle cx="8" cy="16" r="4.5" />
    <path d="M11.2 12.8 19.5 4.5M16.5 7.5l2.5 2.5M14 10l2 2" />
  </Svg>
);

export const IconStar: Icon = (props) => (
  <Svg {...props}>
    <path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6Z" style={accent} stroke="none" opacity={0.55} />
    <path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6ZM5.6 5.6h12.8v12.8H5.6Z" />
  </Svg>
);

export const IconInstagram: Icon = (props) => (
  <Svg {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconWhatsapp: Icon = (props) => (
  <Svg {...props}>
    <path d="M20.5 11.8A8.6 8.6 0 0 1 7.8 19.4l-4.3 1.1 1.2-4.2a8.6 8.6 0 1 1 15.8-4.5Z" />
    <path
      d="M9.3 8.2c-.6.3-1 1-.8 2 .5 2.3 2.4 4.3 4.7 5 .9.3 1.7-.1 2.1-.7l.3-.6-1.7-1-.8.7c-.9-.4-1.8-1.3-2.2-2.2l.7-.8-1-1.7Z"
      fill="currentColor"
      strokeWidth={1}
    />
  </Svg>
);

export const IconMenu: Icon = (props) => (
  <Svg {...props}>
    <path d="M4 7.5h16M4 12h16M4 16.5h10" />
  </Svg>
);

export const IconClose: Icon = (props) => (
  <Svg {...props}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Svg>
);
