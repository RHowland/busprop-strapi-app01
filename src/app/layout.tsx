import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Navbar } from "@/components/custom-ui/header/navbar/navbar";
import { Footer } from "@/components/custom-ui/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section aria-label="Navigation">
          <Navbar />
        </section>
        {children}
        <section aria-label="Footer">
          <Footer />
        </section>
      </body>
    </html>
  );
}



