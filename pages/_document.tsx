//root file, can control our app
//Helps to inject custom scripts, meta tags.
//Only execution on server side.

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return <Html>
      <Head>
        <meta property="custom" content="flamy" />
      </Head>
      <body>
        <Main /> 
      </body>
      <NextScript />
    </Html>
  }
}