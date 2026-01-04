import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ajay | Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js and React Native",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
