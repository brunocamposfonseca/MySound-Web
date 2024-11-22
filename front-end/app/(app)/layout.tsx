import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Rubik } from 'next/font/google';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import { PlayerProvider } from "@/context/PlayerContext";
import Footer from "./components/Footer";
import { ExpandProvider } from "@/context/ExpandContext"
import PopupWrapper from "./components/PopupWrapper";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "MySound - App",
  description: "",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<ThemeProvider
	  attribute="class"
	  defaultTheme="system"
	  enableSystem
	  disableTransitionOnChange
	>
	  <PlayerProvider>
	  <ExpandProvider>
		<PopupWrapper>
		  <div className="h-full relative">
			<div className="h-full relative z-0">
			  <section className="grid grid-areas-layout grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] h-full min-h-full relative w-full">
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
		  </div>
		  </PopupWrapper>
		</ExpandProvider>
	  </PlayerProvider>
	</ThemeProvider>
  );
}
