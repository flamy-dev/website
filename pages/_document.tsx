import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="custom" content="flamy" />
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
