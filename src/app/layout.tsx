import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Northstead Immigration Inc. | Licensed Canadian Immigration Consultancy",
  description:
    "Northstead Immigration is a licensed Canadian immigration agency helping with work permits, study visas, LMIA applications, permanent residency, and consultation bookings. Trusted guidance for your journey to Canada.",
  authors: { name: "Joy Villanueva" },
  keywords: [
    "Work permits",
    "Study visas",
    "LMIA applications",
    "Permanent residency",
    "Consultation bookings",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      link: "/",
    },
    {
      label: "LinkedIn",
      link: "/",
    },
  ];

  const contacts = [
    {
      label: "123 Main Street, Toronto, ON",
      link: "https://maps.google.com/?q=123 Main Street, Toronto, ON",
    },
    {
      label: "+1 (416) 555-1234",
      link: "tel:+14165551234",
    },
    {
      label: "info@northsteadimmigration.ca",
      link: "mailto:info@northsteadimmigration.ca",
    },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}

        <footer className="pt-[2rem] pb-[2rem] md:pt-[4rem]">
          <Wrapper>
            <div className="mb-[2rem] space-y-[2rem] lg:flex lg:justify-between">
              {/* Brand */}
              <div>
                <Logo />
              </div>

              {/* Quick links */}
              <nav>
                <p className="mb-3 font-semibold">Pages</p>
                <ul className="mt-3 space-y-2">
                  {navLinks.map((nav, index) => (
                    <li key={index}>
                      <Link className="hover:text-primary" href={nav.link}>
                        {nav.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Address */}
              <address className="not-italic">
                <p className="mb-3 font-semibold">Contact</p>
                <ul className="space-y-2">
                  {contacts.map((contact, index) => (
                    <li key={index}>
                      <Link
                        className="hover:text-primary block"
                        href={contact.link}
                        target="_blank"
                      >
                        {contact.label}
                      </Link>
                    </li>
                  ))}
                  <li>Mon–Fri: 9am–5pm</li>
                </ul>
              </address>

              {/* Social links */}
              <div>
                <p className="mb-3 font-semibold">Follow us</p>
                <ul className="space-y-2">
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <Link className="hover:text-primary" href={social.link}>
                        {social.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-[0.9rem] lg:flex lg:justify-between">
              <p className="mb-3">
                © 2025 Northstead Immigration Inc. All rights reserved.
              </p>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-[1rem]">
                <Link className="hover:text-primary" href="/privacy">
                  Privacy Policy
                </Link>
                <Link className="hover:text-primary" href="/terms">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </Wrapper>
        </footer>
      </body>
    </html>
  );
}
