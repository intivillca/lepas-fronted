import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "../components/layout/Layout";
import { DefaultSeo } from "next-seo";
import "../styles/global.css";
import SEO from "../next-seo.config";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
