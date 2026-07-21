import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "easy-soft GmbH",
  description: "Neue Unternehmenswebsite der easy-soft GmbH"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
