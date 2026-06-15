import type { Metadata } from "next";
import SmoothScroll from "@/components/animations/SmoothScroll";
import GsapProvider from "@/components/animations/GsapProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axiom | High-Velocity Digital Ecosystems",
  description:
    "We engineer high-velocity digital ecosystems for Kenyan enterprises. Custom software, automation, AI agents, and scalable infrastructure.",
  openGraph: {
    title: "Axiom | Digital Solutions Partner",
    description:
      "Custom software engineering, automation & AI agents for Kenyan enterprises.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white selection:bg-[#50cc60] selection:text-black antialiased">
      <body className="bg-black text-white">
        <SmoothScroll />
        <GsapProvider>{children}</GsapProvider>
      </body>
    </html>
  );
}
