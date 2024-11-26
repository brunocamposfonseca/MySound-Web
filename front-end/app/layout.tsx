import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased h-full min-h-[600px] min-w-[700px] w-full`}>
            {children}
      </body>
    </html>
  );
}
