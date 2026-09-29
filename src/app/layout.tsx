import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
export const metadata: Metadata = { title: "HappyLanches | Cardápio digital", description: "Uma releitura moderna do meu primeiro projeto front-end: um cardápio digital responsivo.", openGraph: { title: "HappyLanches", description: "Cardápio digital, agora em uma versão moderna.", type: "website", locale: "pt_BR" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className={poppins.variable}>{children}</body></html>; }
