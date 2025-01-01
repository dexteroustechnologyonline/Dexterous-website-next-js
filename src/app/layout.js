import Head from "next/head";
import Script from "next/script";
import "../../public/styles/global.css";
import "../../public/styles/assets/css/style-starter.css";
import "../../public/styles/assets/css (1)/asian.css";

import "../../public/styles/assets/css (1)/bootstrap.min.css";
import "../../public/styles/assets/css (1)/main.css";

// import Layout from "../components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Talk from "@/components/Tawk/Talk";
export const metadata = {
  title:
    "Best Mobile App Development Hyderabad | Best Mobile App Development Company Hyderabad |  Mobile App Development Company in Hyderabad - Dexterous Technology",
  description:
    "Dexterous Technology is the Best mobile app development company, web designing company, serving customers in cms, best E-commerce mobile App development, Android App Development, IOS App Development,  website design, Grocery mobile App.",
  keywords:
    "Best Mobile App Development Hyderabad, Best Mobile App Development Company Hyderabad,  Mobile App Development Company in Hyderabad, Mobile App Developers in Hyderabad",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/styles/assets/images/16x16logo.ico" />
      <body>
        <Head>
          <Script
            src="../../public/styles/assets/js/bootstrap.min.js"
            async
          ></Script>
          <Script
            src="../../public/styles/assets/js/custom-script.js"
            async
          ></Script>
          <Script
            src="../../public/styles/assets/js/jquery-3.3.1.min.js"
            async
          ></Script>
          <Script
            src="../../public/styles/assets/js/owl.carousel.js"
            async
          ></Script>
          <Script
            src="../../public/styles/assets/js/smoothscroll.js"
            async
          ></Script>
          <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5+5hb7O9q7g8r+JdLHeKtbVzzUJCC7l/cLIh9d4a"
            crossOrigin="anonymous"
          ></script>
          <script src="/path-to-your-local/owl.carousel.min.js"></script>
        </Head>

        <Header />
        {children}
        {/* <Talk /> */}
        <Footer />
      </body>
    </html>
  );
}
