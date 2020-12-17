import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="custom" content="flamy" />
          <meta charSet="utf-8" />
          <link href="/fonts/style.css" rel="stylesheet" />
        </Head>
        <body className="dark ">
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
