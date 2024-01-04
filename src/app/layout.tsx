import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller/SmoothScroller";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

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
        {/* <ScrollToTop> */}
        {/* TODO: Uncomment me after development  */}
        <SmoothScroller>{children}</SmoothScroller>
        {/* </ScrollToTop> */}
      </body>
    </html>
  );
}
