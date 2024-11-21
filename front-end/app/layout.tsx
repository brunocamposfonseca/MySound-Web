import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "MySound - App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${rubik.className} antialiased h-full min-h-[600px] min-w-[700px] w-full`}>
            {children}
      </body>
    </html>
  );
}
