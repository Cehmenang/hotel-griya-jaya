import "./globals.css";

export const metadata = {
  title: "Hotel Griya Jaya",
  description: "Sebuah Website Pemesanan Hotel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
