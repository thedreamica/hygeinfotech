import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { Footer, NavbarComponent, Preface } from "@components";

const Home = () => {
  return (
    <Fragment>
      <Head>
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-736HQ07FJM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-736HQ07FJM');
</script>
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
        <NavbarComponent />
        <Preface />
        <Footer />
      </main>
    </Fragment>
  );
};

export default Home;
