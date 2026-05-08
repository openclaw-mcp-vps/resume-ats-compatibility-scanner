import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume ATS Compatibility Scanner",
  description: "Test if your resume passes ATS systems. Identify formatting issues, missing keywords, and get ATS-optimized suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d9d79c3f-3e24-428a-9b8a-2a944a481f58"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
