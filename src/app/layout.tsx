import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller/SmoothScroller";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import MusicButton from "@/components/MusicButton/MusicButton";
import { Toaster } from "sonner";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Formante",
  description: "The official website of The Formante",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* TODO: Uncomment me after development  */}
        {/* <ScrollToTop> */}
        <Toaster theme="dark" richColors />
        <MusicButton />
        <SmoothScroller>{children}</SmoothScroller>
        {/* </ScrollToTop> */}
      </body>
    </html>
  );
}
