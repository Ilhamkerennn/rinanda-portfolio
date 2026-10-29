export type Project = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  year: string;
  status: string;
  image?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "gps-attendance",
    number: "01",
    title: "GPS Attendance System",
    shortDescription:
      "A GPS-based attendance system with location radius validation and a Laravel API backend.",
    description:
      "A practical attendance system designed to validate employee or student attendance based on their geographic location. The system combines a mobile application with a REST API backend and location-based validation.",
    category: "Web & Mobile Application",
    technologies: [
      "Flutter",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "GPS",
      "Sanctum",
    ],
    features: [
      "User registration and authentication",
      "GPS-based location validation",
      "Attendance check-in",
      "Attendance check-out",
      "Attendance history",
      "Radius-based location verification",
      "REST API authentication with Sanctum",
    ],
    year: "2026",
    status: "Completed",
      image: "/projects/gps-attendance.jpg",
  },

  {
  slug: "crypto-dashboard",
  number: "02",
  title: "Crypto Market Dashboard",
  shortDescription:
    "A modern cryptocurrency dashboard for monitoring market prices, charts, favorites, and asset details.",
  description:
    "A cryptocurrency market dashboard built to display market information in a clean and responsive interface. The application consumes cryptocurrency market data and provides search, favorites, sorting, charts, and individual asset details.",
  category: "Web Application",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "CoinGecko API",
    "React",
    "LocalStorage",
  ],
  features: [
    "Cryptocurrency search",
    "Market price monitoring",
    "Favorites and watchlist",
    "Price charts",
    "Asset detail pages",
    "Market sorting",
    "Responsive interface",
  ],
  year: "2026",
  status: "Completed",
  image: "/projects/crypto-dashboard.jpg",
},

  {
    slug: "ssh-2fa",
    number: "03",
    title: "SSH 2FA Security Research",
    shortDescription:
      "Implementation and analysis of Two-Factor Authentication for mitigating brute-force attacks on SSH VPS services.",
    description:
      "An experimental cybersecurity research project focused on implementing and analyzing Two-Factor Authentication as an additional security layer for SSH services. The research compares SSH authentication with and without TOTP under controlled attack scenarios.",
    category: "Cybersecurity Research",
    technologies: [
      "Ubuntu",
      "SSH",
      "PAM",
      "TOTP",
      "Google Authenticator",
      "Hydra",
      "VPS",
    ],
    features: [
      "SSH password authentication",
      "TOTP-based second factor",
      "Google Authenticator integration",
      "Brute-force testing",
      "Authentication flood testing",
      "SSH authentication log analysis",
      "Comparison of authentication scenarios",
    ],
    year: "2026",
    status: "Research",
    image: "/projects/ssh-2fa-methodology.png",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}