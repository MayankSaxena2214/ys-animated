import { Geist, Geist_Mono,Inter } from "next/font/google";

import "./globals.css";
import AppWrapper from "@/providers/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Indium - AI Services Company",
  description: "Indium is a leading AI services company dedicated to helping businesses harness the power of artificial intelligence. We offer a wide range of AI solutions, including Gen AI, Agentic AI, AI/ML Solutions, and AI/MLOps. Our team of experts specializes in data engineering, data governance, data modernization, data streaming, and data annotation. We also provide intelligent automation services such as low-code development, process mining, smart workflows, and robotic process automation. With our industry expertise in BFSI, healthcare, technology, manufacturing, and retail, we deliver tailored AI solutions that drive innovation and business growth.",
};

export default function RootLayout({ children }) {
  
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
