import "./globals.css";
import Header from '@/components/Header';

export const metadata = {
  title: "Imdb Clone",
  description: "This is movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
