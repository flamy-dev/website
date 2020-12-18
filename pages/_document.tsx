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
            src="https://www.googletagmanager.com/gtag/js?id=UA-185675449-1"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            {/* @ts-ignore */}
            function gtag(){window.dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'UA-185675449-1');
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
