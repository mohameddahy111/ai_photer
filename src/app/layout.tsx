import type {Metadata} from "next";
import {IBM_Plex_Sans} from "next/font/google";
import { cn } from "@/lib/utils";
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
const IBM = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable:'--font-ibm'
});

export const metadata: Metadata = {
  title: "Photo Editore",
  description: "Photo editore is a simple"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary :"#f0c000"}
    }}>
    <html lang="en">
        <body className={cn(" font-IBM antialiased", IBM.variable)}>
          {children}
        </body>
      </html>
      </ClerkProvider>
    
  );
}
