import { useEffect } from "react";
import "../styles/globals.css";
import { axeAccessibilityReports } from "../utils/axeAccessibilityReports";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    axeAccessibilityReports();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
