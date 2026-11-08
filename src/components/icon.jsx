const paths = {
  external: <path d="M6 18 18 6M7 6h11v11" />,
  down: <path d="M12 3.5v16m-6-6 6 6 6-6" />,
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  pause: <path d="M9 5v14m6-14v14" />,
  play: <path d="m8 5 12 7-12 7Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  pin: <><path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2.25" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  phone: <path d="m7.8 4 2 4.3-1.9 2a12 12 0 0 0 5.7 5.7l2-1.9 4.4 2v2.6c0 .7-.6 1.3-1.3 1.3A15.7 15.7 0 0 1 4 5.3C4 4.6 4.6 4 5.3 4Z" />,
  share: <><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8.3 10.9 7.4-3.8m-7.4 6 7.4 3.8" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  tiktok: <path d="M14 3v12a4.5 4.5 0 1 1-4.5-4.5M14 3c.6 3 2.7 4.6 6 5" />,
  facebook: <path d="M14 21v-8h3l.5-3H14V8c0-1 .6-2 2-2h2V3h-2.5C12.5 3 11 4.8 11 7.5V10H8v3h3v8" />,
  star: <path d="m12 2.8 2.85 5.8 6.4.94-4.63 4.5 1.1 6.37L12 17.4l-5.72 3.01 1.1-6.37-4.63-4.5 6.4-.94Z" />,
};

export function Icon({ name, size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
