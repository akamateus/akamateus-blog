import { ThemeContextProvider } from "@/context/ThemeContext";
import { Footer } from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "akaMateus",
  description: "Tech blog for juniors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pjs.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
