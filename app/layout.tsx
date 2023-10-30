import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "moment/locale/id";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Jadwal Piala Dunia 2022",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="container min-h-screen">{children}</main>
				<footer className="p-[4px] bg-zinc-100 mt-[10px]">Made By Fahrezi</footer>
			</body>
		</html>
	);
}
