import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonst";


export const metadata: Metadata = {
  title: "Teslo shop",
  description: "Virtual shop of productos ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
