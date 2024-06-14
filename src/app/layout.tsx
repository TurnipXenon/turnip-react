import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import {ColorSchemeScript, MantineProvider} from "@mantine/core";
import {theme} from "@/app/theme";
import TurnipProvider from "@/app/context";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Turnip",
    description: "Turnip's webpage (in React)",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <ColorSchemeScript/>
        </head>
        <body className={inter.className}>
        <TurnipProvider>
            <MantineProvider theme={theme}>{children}</MantineProvider>
        </TurnipProvider>
        </body>
        </html>
    );
}
