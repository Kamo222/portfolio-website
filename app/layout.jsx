import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});


export const metadata = {
  title: "Kamohelo Mamaregane | Portfolio",
  description: "As a solution-oriented fullstack developer, I possess a robust foundation in modern web technologies such as HTML, CSS, JavaScript, React, Java, and Node.js.",
};

 const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={jetBrains_Mono.variable}>
        <Header />
        {/* <StairTransition /> */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

export default RootLayout;
