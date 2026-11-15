import { hanken } from "@/src/app/fonts"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import "@/src/styles/globals.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sully Palaia",
  description: "Sully Palaia's personal website"
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className={hanken.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html >
  );
}
