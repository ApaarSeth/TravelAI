import DefaultLayout from '@/components/layouts/DefaultLayout';
import '@/styles/globals.css'
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { ReactNode } from 'react';
import { Poppins } from '@next/font/google'

type NextPageWithLayout = NextPage & {
  auth?: any;
  Layout?: ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const poppins = Poppins({ subsets: ['latin'], weight: "400", display: 'swap' })

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = (Component.Layout || DefaultLayout) as React.ElementType;
  return (
    <div className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
