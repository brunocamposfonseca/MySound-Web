import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Rubik } from 'next/font/google';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import { PlayerProvider } from "@/context/PlayerContext";
import Footer from "./components/Footer";

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
      <body className={`${rubik.className} antialiased h-full min-h-[600px] min-w-[800px] w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PlayerProvider>
            <div className="h-full relative">
              <section className="grid grid-areas-layout grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] h-full min-h-full p-2 relative w-full">
                <Navbar />
                <Sidebar />
                <Player />
                <div className="flex grid-in-main min-h-full w-full relative overflow-hidden">
                  <main className="flex flex-col gap-12 h-auto px-8 pt-4 w-full overflow-auto">
                    {children}
                    <Footer />
                  </main>
                </div>
                <div className="hidden grid-in-queue relative min-h-0"></div>
              </section>
            </div>
          </PlayerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
