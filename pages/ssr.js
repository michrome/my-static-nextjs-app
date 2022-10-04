import Head from "next/head";

export default function SSR({ date }) {
  return (
    <>
      <Head>
        <title>ssr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ssr</h1>
      <p>This page was server side rendered (SSR) at {date}.</p>
      <p>There should be a log entry showing SSR ran.</p>
    </>
  );
}

export async function getServerSideProps() {
  const date = JSON.stringify(Date.now());
  console.log(
    `This is a console.log from getServerSideProps in ssr.js. Date stamp is ${date}.`
  );
  return { props: { date } };
}
