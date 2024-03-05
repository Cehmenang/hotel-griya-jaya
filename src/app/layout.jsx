import "./globals.css"
import Nav from '@/component/Nav'

export const metadata = {
  title: "Hotel Griya Jaya",
  description: "Sebuah Website Pemesanan Hotel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[85%] mx-auto relative">
        <Nav/>
        {children}
      </body>
    </html>
  );
}
