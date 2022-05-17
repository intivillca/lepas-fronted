import type { AppProps } from "next/app";
import { fetchAPI } from "../api/api";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return <Component {...pageProps} />;
}

// export async function getServerSideProps() {
//   const globalRes = await fetchAPI("/global", {
//     populate: {
//       navigation: '*',
//       footerlinks: '*',
//     },
//   });
//   console.log({ globalRes });

//   return {
//     pageProps: { global: globalRes },
//   };
// }
export default MyApp;
