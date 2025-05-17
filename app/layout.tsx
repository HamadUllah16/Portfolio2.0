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
        className={`${poppins.className} antialiased max-h-dvh h-full md:h-dvh max-sm:h-full sm:h-full relative p-5 max-sm:p-0 sm:bg-slate-800 max-sm:bg-white`}
      >
        <Toaster position="top-center" />

        <div className="
          grid grid-cols-12 h-full
          lg:h-full
          md:h-fit
          bg-white border rounded-3xl
          ">
          <div className="
          col-span-3 overflow-auto
           p-5
           flex flex-col gap-3
            lg:relative lg:border-r lg:border-b-0 lg:col-span-3
            md:border-b-1 md:col-span-12 md:pb-0
            sm:col-span-12
            max-sm:pb-0 max-sm:col-span-12
            ">
            <MyDetails />
            <div className="flex justify-center lg:mt-5 md:mt-5 sm:mt-0 max-sm:mt-0 max-sm:hidden visible">
              <SocialButtons />
            </div>
          </div>
          {/* <Separator orientation="vertical" className="md:block max-sm:hidden sm:hidden" /> */}
          <div className="col-span-9 overflow-auto w-full lg:pl-5 lg:col-span-9 md:p-5 sm:col-span-12 sm:p-5 max-sm:p-5 max-sm:col-span-12">
            <ReduxProvider>
              <CopyEmail />
              <InitialLoading />
              <div className="flex flex-col gap-5 w-full overflow-auto rounded-lg
            sm:h-full
            max-sm:w-full max-sm:h-full max-sm:px-2 py-5 max-sm:border max-sm:bg-border
            xl:w-full lg:w-full"
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
