import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import ClientProvider from "./ClientProvider";
import { persistor, store } from "@/redux_store/store";
import { PersistGate } from "redux-persist/integration/react";
import Providers from "@/redux_store/provider";
import Footer from "@/components/footer/Footer";

// import { PersistGate } from "redux-persist/integration/react";
// import Provider from "@/redux_store/provider";
// import { persistor, store } from "@/redux_store/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SkillSphere",
    description: "SkillSphere Description",
    // icons: {
    //     icon: ["/favicon.ico?v=4"],
    // },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <ClientProvider> */}
                {/* <Header /> */}

                <Providers>
                    <main className="max-w-4xl  mx-auto">
                        <Header />
                        {children}
                    </main>
                    <Footer />
                </Providers>

                {/* </ClientProvider> */}
                {/* <main className="w-full h-screen ">{children}</main> */}
            </body>
        </html>
    );
}
