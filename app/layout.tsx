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
        className={`${poppins.className} antialiased max-h-dvh h-dvh relative lg:overflow-hidden inset-0 bg-gradient-to-r from-violet-400 to-purple-300 `}
      >

        <Header />
        <div className="
          flex py-5 gap-5 justify-between
          bg-white border rounded-t-3xl
          lg:mx-24 lg:h-[80%]
          xl:mx-40
          md:px-5 md:h-[80%] md:mx-20
          sm:px-2 sm:h-full sm:md:5
          max-sm:-bottom-5 max-sm:w-full
          lg:overflow-hidden

          ">
          <div className="
           flex flex-col gap-3 justify-between pb-5
           sm:w-full sm:items-center sm:absolute sm:top-0 sm:left-0
           max-sm:items-center max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:pb-0
            xl:w-fit
            lg:col-span-1 lg:relative lg:w-fit
            md:absolute md:top-0 md:left-0
            ">
            <MyDetails />
            <div className="sm:hidden max-sm:hidden lg:block md:hidden">
              <SocialButtons />
            </div>
          </div>

          <ReduxProvider>
            <div className="max-sm:w-full max-sm:px-2 h-full lg:overflow-hidden xl:w-full lg:w-full">
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
