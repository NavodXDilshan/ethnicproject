import { Head, Html, Main, NextScript } from 'next/document';
import { ClerkProvider } from '@clerk/nextjs'

const Document = () => {
  return (
  
    <Html>
      <Head />
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>

  );
};

export default Document;
