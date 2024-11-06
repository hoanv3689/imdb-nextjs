import "./globals.css";
import Header from '@/components/Header';
import Providers from "./Providers";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
