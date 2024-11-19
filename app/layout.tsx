import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RightClickContextMenu from "./components/RightClickContextMenu";
import ReduxProvider from "./redux/ReduxProvider";
import { Poppins } from 'next/font/google';
import { Toaster } from "../components/ui/sonner";
import CopyEmail from "./components/CopyEmail";
import InitialLoading from "./components/InitialLoading";

const poppins = Poppins({
  weight: ['300', '700'],
  subsets: ['latin']
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
          <RightClickContextMenu>
            <div className="flex flex-col gap-6">
              <Header />
              <Navbar />
              {children}
            </div>
          </RightClickContextMenu>

        </ReduxProvider>
      </body>
    </html>
  );
}
