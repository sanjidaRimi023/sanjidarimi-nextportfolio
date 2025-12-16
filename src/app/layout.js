import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
// import Footer from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Sanjida Akter Rimi",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full relative`}>
        <main className="bg-black">{children}</main>
      </body>
    </html>
  );
}
