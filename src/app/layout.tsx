import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Primitive Elite Puerto Rico CrossFit",
  description: "Puerto Rico CrossFit hero landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
