import "../styles/globals.css";
import "../styles/css/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-phone-input-2/lib/style.css';
import Head from "next/head";
import Layout from "../component/common/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HSBP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home service beauty parlour" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
