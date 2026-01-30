import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hisobchi MVP",
  description: "Minimal accounting & HR operations suite"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
