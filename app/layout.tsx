import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ReduxProvider from "./redux/ReduxProvider";
import { Poppins } from 'next/font/google';
import { Toaster } from "../components/ui/sonner";
import CopyEmail from "./components/CopyEmail";
import InitialLoading from "./components/InitialLoading";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ['300', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Hamad - Portfolio",
  description: "View resume, projects, and experience of Hamad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <ReduxProvider>
          <Toaster position="top-center" />
          <CopyEmail />
          <InitialLoading />
          {/* <RightClickContextMenu> */}
          <Header />
          <Navbar />
          {children}
          <Footer />
          {/* </RightClickContextMenu> */}

        </ReduxProvider>
      </body>
    </html>
  );
}
