import { Inter } from "next/font/google";
import "./globals.css";
import v from "../public/Images/V-logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio ",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <link rel="icon" href="../public/Images/V-logo.png"></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
