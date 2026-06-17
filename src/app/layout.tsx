import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rifky Ahamed | Futuristic Creative Developer",
  description:
    "Portfolio of Rifky Ahamed, a space-inspired creative developer and full-stack engineer. Crafting high-fidelity, interactive, and premium web systems.",
  keywords: ["Rifky Ahamed", "Creative Developer", "Next.js Developer", "Frontend Engineer", "Interactive Portfolio", "Space Theme"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">
        {/* Decorative Space Particles and Nebulae Background */}
        <div className="cosmic-background" aria-hidden="true">
          <div className="starfield" />
          <div className="starfield-deep" />
          <div className="nebula nebula-purple" />
          <div className="nebula nebula-cyan" />
          <div className="nebula nebula-pink" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
