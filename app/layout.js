import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfitFOnt = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ovoFOnt = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Najmul Hasan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfitFOnt.className} ${ovoFOnt.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
