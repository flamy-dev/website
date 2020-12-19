import Document, { Html, Head, Main, NextScript } from "next/document";

const GA_TRACKING_ID = "G-SLEM7DLJMV";
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
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="dark ">
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
