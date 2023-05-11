import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link rel="alternate" type="application/rss+xml" title="Blog Feed" href="https://blog.felipeluis.com.br/feed/" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
