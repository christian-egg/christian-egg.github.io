import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Christian Classen",
  description: "Portfolio site for Christian Classen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row">
          <Sidebar />
          <main className="min-h-0 flex-1 p-6 md:h-screen md:overflow-y-auto md:p-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
