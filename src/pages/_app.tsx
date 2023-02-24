import "@/styles/globals.css";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import LinearIndeterminate from "@/components/ProgessLoader";
import { Suspense } from "react";
import { CustomMuiTheme } from "../theme/index";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname, asPath, events } = useRouter();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = (url: any) => url !== asPath && setLoading(true);
    const handleComplete = (url: any) => url === asPath && setLoading(false);

    events.on("routeChangeStart", handleStart);
    events.on("routeChangeComplete", handleComplete);
    events.on("routeChangeError", handleComplete);

    return () => {
      events.off("routeChangeStarts", handleStart);
      events.off("routeChangeComplete", handleComplete);
      events.off("routeChangeError", handleComplete);
    };
  });

  const theme = createTheme({ palette: { ...CustomMuiTheme } });
  return (
    <React.Fragment>
      {loading && <LinearIndeterminate />}
      {pathname === "/template/[id]" ? (
        <Component {...pageProps} />
      ) : (
        <Component {...pageProps} />
      )}
    </React.Fragment>
  );
}
