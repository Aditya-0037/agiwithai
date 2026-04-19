import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGI With AI | Building Fast, Scalable Digital Products for Startups",
  description: "We design and develop high-performance websites, SaaS dashboards, and AI-powered tools for startups and growing businesses worldwide.",
  keywords: "Web Development, SaaS, AI Integrations, Startup Agency, UI/UX Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
