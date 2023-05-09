import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
import Layout from "@/layout/Layout";
import { Provider } from "react-redux";
import { wrapper } from "@/redux/store";

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Test Next</title>
        </Head>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
