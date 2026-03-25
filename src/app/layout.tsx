import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advent HealthCare – Redefining Healthcare Delivery",
  description:
    "Advent HealthCare is a patient-centric consulting group established in 2003, providing strategic advisory and operational services across India and the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
