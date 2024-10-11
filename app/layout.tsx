import type { Metadata } from "next";
import { Roboto, Cormorant } from "next/font/google";
import "/home/allison/my-app/app/ui/styles/globals.css";

const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cormorant.className}>{children}</body>
    </html>
  );
}
