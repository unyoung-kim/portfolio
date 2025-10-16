import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import type { Metadata } from "next";
import { Crimson_Text, Source_Serif_4 } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  variable: "--font-source-serif-4",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
});

export const metadata: Metadata = {
  title: "Wes Kim (Unyoung)",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          sourceSerif4.variable,
          crimsonText.variable,
          "font-serif flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
