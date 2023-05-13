import Script from "next/script";
import "uikit/dist/css/uikit.min.css";
import "./globals.css";
import NavBar from "./components/Nav/NavBar";
import { Inter } from "next/font/google";
import { getSession } from "./actions/getCurrentUser";

export const metadata = {
  title: "Tomigears",
  description: "Software Development and Gadget Repairs.",
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const session = await getSession();

  return (
    <html lang="en">
      <body>
        <NavBar session={session} />
        {children}
      </body>
      <Script type="text/javascript" src="/javascript/uikit.min.js"></Script>
      <Script type="text/javascript" src="/javascript/uikit-icons.min.js"></Script>
    </html>
  );
}
