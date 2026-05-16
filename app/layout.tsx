import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy Trend Opportunity Finder – Find trending products before they saturate",
  description: "Monitors Etsy search trends and competitor gaps to identify emerging product opportunities with low competition. Built for Etsy sellers and print-on-demand entrepreneurs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="61c5b116-3532-471b-8d19-f23dde194fab"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
