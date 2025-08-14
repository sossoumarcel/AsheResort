// app/layout.tsx

import { DraftAlert } from "@/components/misc/DraftAlert";
import { Header } from "@/components/organiques/Header/Header";
import { Footer } from "@/components/organiques/Footer/Footer";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next.js for Drupal",
    template: "%s | Next.js for Drupal",
  },
  description: "A Next.js site powered by a Drupal backend.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DraftAlert />
        
        {/* --- CORRECTION 1 --- */}
        {/* Le Header est maintenant un enfant direct de <body>. Il prendra toute la largeur. */}
        <Header />

        {/* --- CORRECTION 2 --- */}
        {/* Cette div ne contient plus que le <main>. */}
        {/* Elle sert à centrer UNIQUEMENT le contenu principal de la page. */}
        <div className="max-w-screen-md px-6 mx-auto">
          <main className="container py-10 mx-auto">{children}</main>
        </div>
        
        {/* --- CORRECTION 3 --- */}
        {/* Le Footer est aussi un enfant direct de <body> pour prendre toute la largeur. */}
        <Footer />
      </body>
    </html>
  );
}