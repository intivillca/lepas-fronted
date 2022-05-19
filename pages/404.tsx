import Head from "next/head";

export default function Page404() {
  const statusCode = 404;
  const title = "This page could not be found";
  return (
    <>
      <Head>
        <title>
          {statusCode}: {title}
        </title>
      </Head>
      <div>404</div>
    </>
  );
}
