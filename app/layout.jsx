import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { getSheetData } from "./api/getSheetData";

const inter = Inter({ subsets: ["latin"] });
const gustarydelight = localFont({
  src: "../public/fonts/GustatoryDelightRegular-rgX3L.ttf",
  variable: "--font-gustarydelight-regular",
});

export const metadata = {
  title: "Aniket | Protfolio",
  description: "A FullStack Developer. I build things for the web.",
};

export default async function RootLayout({ children }) {
  const [global] = await getSheetData("global");

  return (
    <html lang="en" className={gustarydelight.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar resumeUrl={global.resumeUrl} />
          {children}
          <Footer lastUpdated={global.lastUpdated} />
        </Providers>
      </body>
    </html>
  );
}
