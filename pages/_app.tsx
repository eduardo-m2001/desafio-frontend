import React from 'react';
import '../app/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
