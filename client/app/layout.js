import { Source_Sans_3 } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";

const primaryFont = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-primary",
});

export const metadata = {
  title: "Mini MERN | User Records",
  description: "A simple MERN stack application to manage user records.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.variable}>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">All Users</Link>
              </li>
              <li>
                <Link href="/new">Create Users</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
