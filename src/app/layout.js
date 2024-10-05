import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Aman Mishra | Cybersecurity Analyst",
  description:
    "Aman Mishra, a skilled Cybersecurity Analyst, specialized in risk management, network security, and threat analysis, ensuring top-level data protection and secure systems.",
  keywords:
    "Cybersecurity, Risk Management, Network Security, Incident Response, Ethical Hacking, Vulnerability Assessment, Encryption, Security Analyst",
  author: "Mukesh Sharma",
  image: "./icon.png",
  url: "https://aman-mishra-hacker.vercel.app",
  type: "website",
  ogTitle: "Aman Mishra | Cybersecurity Analyst",
  ogDescription:
    "Discover Aman Mishra's expertise in Cybersecurity, ensuring secure networks, ethical hacking, and proactive threat defense strategies.",
  ogImage: "./icon.png",
  twitterTitle: "Aman Mishra | Cybersecurity Specialist",
  twitterDescription:
    "Explore Aman Mishra's skills in safeguarding systems through risk management, encryption, and vulnerability assessment.",
  twitterImage: "./icon.png",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" type="image/png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
