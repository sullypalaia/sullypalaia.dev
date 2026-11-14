import { hanken } from "@/src/app/fonts"
import Navbar from "@/src/components/Navbar"
import "@/src/styles/globals.css"

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className={hanken.className}>
        <Navbar />
        {children}
      </body>
    </html >
  );
}
