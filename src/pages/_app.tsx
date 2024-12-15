import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Layout from '~/components/layout';

const MyApp: AppType = ({
  Component,
  pageProps,
}) => {
  return (
    <Layout className={GeistSans.className}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
