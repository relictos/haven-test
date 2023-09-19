import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyles from "./styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Haven Test</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@500;600&display=swap');`,
          }}
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
