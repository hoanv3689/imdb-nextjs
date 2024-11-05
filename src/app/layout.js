import "./globals.css";

export const metadata = {
  title: "Imdb Clone",
  description: "This is movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
