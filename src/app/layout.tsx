import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
