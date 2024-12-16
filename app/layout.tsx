import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ReduxProvider from "./redux/ReduxProvider";
import { Poppins } from 'next/font/google';
import { Toaster } from "../components/ui/sonner";
import CopyEmail from "./components/CopyEmail";
import InitialLoading from "./components/InitialLoading";
import MobileNav from "./components/MobileNav";
import MyDetails from "./components/MyDetails";
import SocialButtons from "./components/SocialButtons";

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
        className={`${poppins.className} antialiased max-h-dvh h-dvh lg:overflow-hidden inset-0 bg-gradient-to-r from-violet-400 to-purple-300 `}
      >

        <Header />
        <div className="
          py-5 grid grid-cols-3 gap-5 justify-between
          bg-white border rounded-t-3xl
          lg:mx-40 lg:h-[80%]
          md:px-5 md:h-[80%]
          sm:px-2 sm:h-full
          max-sm:-bottom-5 max-sm:w-full

          lg:overflow-hidden

          ">
          <div className="col-span-1 flex flex-col gap-3 justify-between pb-5
            max-sm:items-center sm:col-span-3 sm:items-center max-sm:col-span-3
            lg:col-span-1
            md:col-span-1
            ">
            <MyDetails />
            <SocialButtons />
          </div>

          <ReduxProvider>
            <div className="col-span-2 max-sm:col-span-3 max-sm:px-2 h-full lg:overflow-hidden">
              <Toaster position="top-center" />
              <CopyEmail />
              <InitialLoading />
              <Navbar />
              {children}

              {/* below is a dummy div to take space of mobile nav since fixed/absolute arent counted in flow */}
              <div className="w-full h-14 lg:hidden max-sm:block" />
            </div>
          </ReduxProvider>

        </div>
        <MobileNav />

      </body>
    </html>
  );
}
