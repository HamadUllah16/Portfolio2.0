import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RightClickContextMenu from "./components/RightClickContextMenu";
import ReduxProvider from "./redux/ReduxProvider";
import { Inter, Roboto, Poppins } from 'next/font/google';

// const inter = Inter({
//   subsets: ['latin']
// })

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '700']
})

const poppins = Poppins({
  weight: ['300', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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