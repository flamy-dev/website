import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="custom" content="flamy" />
          <meta charSet="utf-8" />
          <link href="/fonts/style.css" rel="stylesheet" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-SLEM7DLJMV"
          ></script>
          <script>
            {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SLEM7DLJMV');
`}
          </script>
        </Head>
        <body className="dark ">
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
