import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sukendu Besra | Portfolio",
    description: "Data-driven developer & problem solver specializing in Machine Learning, DSA, and full-stack development.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} antialiased bg-[#030014] text-gray-100 min-h-screen selection:bg-primary-500/30`}>
                {children}
            </body>
        </html>
    );
}
