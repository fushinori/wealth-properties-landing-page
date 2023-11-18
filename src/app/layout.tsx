import { Nunito } from "next/font/google";
import Header from "./components/Header/Header";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
      </body>
    </html>
  );
}
