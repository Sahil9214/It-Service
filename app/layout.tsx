import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT Proposal Helper - Your Personal IT Sales Assistant",
  description: "Generate professional IT proposals with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
