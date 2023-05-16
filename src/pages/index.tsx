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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
