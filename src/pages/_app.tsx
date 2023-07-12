import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import "node_modules/flag-icons/css/flag-icons.min.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
