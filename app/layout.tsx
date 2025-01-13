import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ReduxProvider from "./redux/ReduxProvider";
import { Poppins } from 'next/font/google';
import { Toaster } from "../components/ui/sonner";
import CopyEmail from "./components/CopyEmail";
import InitialLoading from "./components/InitialLoading";
import MobileNav from "./components/MobileNav";
import MyDetails from "./components/MyDetails";
import SocialButtons from "./components/SocialButtons";
import { Separator } from "../components/ui/separator";

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
        className={`${poppins.className} antialiased h-dvh relative p-5 max-sm:p-0 overflow-scroll sm:bg-slate-800 max-sm:bg-white`}
      >
        <Toaster position="top-center" />

        {/* <Header /> */}
        <div className="
          flex py-5 gap-5 justify-between
          bg-white border rounded-3xl
          lg:mx-24 lg:h-full lg:gap-16
          xl:mx-40
          md:p-5 md:h-fit md:mx-5 md:flex-row
          sm:p-5 sm:md:5 sm:flex-col sm:h-full
          max-sm:-bottom-5 max-sm:h-full max-sm:w-full max-sm:p-2 max-sm:flex-col max-sm:rounded-none
          lg:overflow-hidden

          ">
          <div className="
           flex flex-col gap-3 md:pb-5 max-sm:pb-0
            xl:w-fit
            lg:col-span-1 lg:relative lg:w-fit
            ">
            <MyDetails />
            <p className='text-xs sm:hidden px-5 max-sm:block'>A software engineer with 6 months of experience in building intuitive, effective and interactive user interfaces.</p>
            <div className="flex justify-center md:mt-10 sm:mt-0 max-sm:mt-0">
              <SocialButtons />
            </div>
          </div>
          <Separator orientation="vertical" />
          <ReduxProvider>
            <CopyEmail />
            <InitialLoading />
            <div className="flex flex-col gap-5 w-full max-sm:w-full max-sm:px-2 pb-5 h-full lg:overflow-hidden xl:w-full lg:w-full">
              <Navbar />
              <Separator />
              {children}

              {/* below is a dummy div to take space of mobile nav since fixed/absolute arent counted in flow */}
              <div className="w-full h-14 lg:hidden max-sm:block md:hidden sm:block" />
            </div>
          </ReduxProvider>

        </div>
        <MobileNav />

      </body>
    </html>
  );
}
