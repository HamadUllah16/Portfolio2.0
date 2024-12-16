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
import MobileNav from "./components/MobileNav";
import MyDetails from "./components/MyDetails";

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
        className={`${poppins.className} antialiased max-h-svh`}
      >
        <ReduxProvider>
          <Toaster position="top-center" />
          <CopyEmail />
          <InitialLoading />
          {/* <RightClickContextMenu> */}
          <div className="flex flex-col max-h-svh">

            <Header>
              <div className="grid grid-cols-3 gap-2 justify-between">
                <div className="col-span-1">
                  <MyDetails />
                </div>

                <div className="col-span-2">
                  <Navbar />
                  {children}
                </div>

              </div>
            </Header>
            {/* <Footer /> */}
            <MobileNav />

          </div>
          {/* </RightClickContextMenu> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
