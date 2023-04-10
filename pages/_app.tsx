import type { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from "../redux/store";
import "../styles/global.css";
import Layout from "@/layout/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Head>
          <title>Test Next</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(App);
