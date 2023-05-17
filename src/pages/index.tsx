import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import Script from "next/script"
import { Footer, NavbarComponent, Preface } from "@components";

const Home = () => {
  return (
    <Fragment>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-736HQ07FJM" id="googleTagmanager"></Script>
        <Script src="../constants/googlescript.js" id="googleScript" >
          
        </Script>

        {/* Google Tag Manager */}
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MZMS9BS');`}} id="gtm">
          </Script>
      <Head>
        {/*  Google tag (gtag.js)  */}
        <title>Hyge Infotech</title>
        <link rel="canonical" href="https://hygeinfotech.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hyge Infotech: Empowering businesses with comprehensive IT services. From cutting-edge software development to secure network solutions, we deliver tailored technology solutions to drive your success. Trust our expertise for seamless integration, enhanced efficiency, and unmatched support. Unlock your business's full potential with Hyge Infotech today." />
        <meta name="keywords" content="Hyge Infotech, hygeinfotech, Hyge Info Tech" />
        <meta property="og:title" content="Hyge Infotech | Catalyze your success with transformative tech" />
<meta property="og:type" content="website" />
{/* <meta property="og:image" content="" /> */}
<meta property="og:url" content="https://www.hygeinfotech.com" />


        <meta
          name="google-site-verification"
          content="yVSfOy45C1HSMNZE9S_HGJHlvIaJsqDPMfksNuMI5bo"
        />
        <link rel="icon" href="/hyge-logo.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins|Monteserrat"
        ></link>
      </Head>
      <main style={{ overflowX: "hidden" }}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZMS9BS" id="googleTM"
  height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        <NavbarComponent />
        <Preface />
        <Footer />
      </main>
    </Fragment>
  );
};

export default Home;
