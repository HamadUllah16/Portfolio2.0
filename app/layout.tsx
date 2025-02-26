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
        className={`${poppins.className} antialiased h-dvh md:h-dvh max-sm:h-full sm:h-full relative p-5 max-sm:p-0 overflow-scroll sm:bg-slate-800 max-sm:bg-white`}
      >
        <Toaster position="top-center" />

        {/* <Header /> */}
        <div className="
          flex py-5 gap-5 justify-between
          bg-white border rounded-3xl
          lg:mx-24 lg:h-full lg:gap-6
          xl:mx-40
          md:p-5 md:min-h-full md:mx-5 md:flex-row md:gap-6
          sm:p-5 sm:md:5 sm:flex-col sm:h-full sm:gap-4
          max-sm:-bottom-5 max-sm:h-full max-sm:w-full max-sm:p-2 max-sm:flex-col max-sm:rounded-none
          lg:overflow-hidden

          ">
          <div className="
           flex flex-col gap-3 md:pb-5 max-sm:pb-0
            xl:w-fit xl:min-w-[20%]
            lg:col-span-1 lg:relative lg:w-fit
            ">
            <MyDetails />
            <div className="flex justify-center md:mt-10 sm:mt-0 max-sm:mt-0">
              <SocialButtons />
            </div>
          </div>
          <Separator orientation="vertical" className="md:block max-sm:hidden sm:hidden" />
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
        <MobileNav />

      </body>
    </html>
  );
}
