import type { Metadata } from "next";
import { Playfair_Display, Poppins, Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./new-components.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], variable: '--font-playfair' });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: '--font-poppins' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"], variable: '--font-cormorant' });

export const metadata: Metadata = {
  title: "Spa Rituals - Where Wellness Meets Tranquility",
  description: "Discover a sanctuary of calm where ancient healing traditions blend with modern wellness practices at Spa Rituals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${montserrat.variable} ${cormorant.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
