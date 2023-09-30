import "./globals.css";

import { Footer, NavBar } from "./home/index";

export const metadata = {
  title: "My Recharge NG",
  description: "Easy and reliable way to buy electricity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
