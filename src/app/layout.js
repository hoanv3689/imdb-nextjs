import "./globals.css";
import Header from '@/components/Header';
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Imdb Clone",
  description: "This is movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
