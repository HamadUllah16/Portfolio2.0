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

const poppins = Poppins({
  weight: ['300', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Hamad - Portfolio",
  description: "View resume, projects, and experience of Hamad",
  other: {
    "google-site-verification": "4VExX2I7AtPUVVGGWLTbiwxVDhSo4K5GDMtLLQa4xLc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased h-dvh md:h-dvh max-sm:h-full sm:h-full relative p-5 max-sm:p-0 overflow-auto sm:bg-slate-800 max-sm:bg-white`}
      >
        <Toaster position="top-center" />

        {/* <Header /> */}
        <div className="
          flex justify-between
          bg-white border rounded-3xl
          lg:h-full lg:flex-row
          md:min-h-full md:mx-5 md:flex-col
          sm:flex-col sm:h-full
          max-sm:-bottom-5 max-sm:h-full max-sm:w-full max-sm:flex-col max-sm:rounded-none
          overflow-x-hidden
          ">
          <div className="
           p-5
           flex flex-col gap-3
            xl:w-[20%]
            lg:w-[30%] lg:relative  lg:border-r
            md:pb-5 md:border-b md:w-full
            max-sm:pb-0 max-sm:w-full
            sm:w-full
            ">
            <MyDetails />
            <div className="flex justify-center md:mt-10 sm:mt-0 max-sm:mt-0 max-sm:hidden visible">
              <SocialButtons />
            </div>
          </div>
          {/* <Separator orientation="vertical" className="md:block max-sm:hidden sm:hidden" /> */}
          <div className="h-full w-full overflow-auto lg:pl-5 md:p-5 sm:p-5 max-sm:p-5">
            <ReduxProvider>
              <CopyEmail />
              <InitialLoading />
              <div className="flex flex-col gap-5 w-full h-full rounded-lg
            sm:h-full
            max-sm:w-full max-sm:h-full max-sm:px-2 py-5 max-sm:border max-sm:bg-border
            lg:overflow-hidden xl:w-full lg:w-full"
              >
                <Navbar />
                {/* <Separator /> */}
                {children}

                {/* below is a dummy div to take space of mobile nav since fixed/absolute arent counted in flow */}
                <div className="w-full h-14 lg:hidden max-sm:block md:hidden sm:block" />
              </div>
            </ReduxProvider>
          </div>

        </div>
        <MobileNav />

      </body>
    </html>
  );
}
