import "../styles/globals.css";
import "../styles/css/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-phone-input-2/lib/style.css';
import 'react-range-slider-input/dist/style.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import Layout from "../component/common/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
        refetchOnReconnect: false
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
      <Provider store={store}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Best Beauty parlor service at home, beautician, makeup artist in Noida, Kolakta, Pune - HSBP</title>
          <meta name="description" content="HSBP is one of the best beauty parlor service provide bridal makeup, facial, full body, leg, arm wax, hairdo, saree draping at home in Noida, Kolkata, Pune, Lucknow, Delhi"/>
          <meta name="keywords" content="Bridal makeup, ladies salon service in Noida, Delhi, Gurgaon, makeup artist, facial, waxing, spa, online, hair care, manicure, pedicure, salon services at home, hair stylist, home service beauty parlour"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Best Beauty parlor service at home, beautician, makeup artist in Noida, Kolakta, Pune" />
          <meta property="og:description" content="HSBP is best home beauty parlor services for woman’s provide bridal makeup, facial, full body, leg, arm wax, hairdo, saree draping at home in Noida, Kolkata, Pune, Lucknow, Delhi" />
          <meta property="og:url" content="https://homeservicebeautyparlour.com" />
          <meta property="og:site_name" content="Home Service Beauty Parlour - HSBP" />
        </Head>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="colored"
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}
