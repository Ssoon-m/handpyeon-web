import "./globals.css";
import "ui/styles.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div>ADMIN!sdfs안녕?df</div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
