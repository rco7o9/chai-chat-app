// libs
import { useState } from "react";
import useMount from "react-use/lib/useMount";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, DarkTheme } from "baseui";

// styles
import "@/styles/globals.css";

// types
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [styletronEngine, setStyletronEngine] = useState<Styletron | null>(
    null,
  );

  useMount(() => {
    setStyletronEngine(new Styletron());
  });

  if (!styletronEngine) {
    return null;
  }

  return (
    <StyletronProvider value={styletronEngine}>
      <BaseProvider theme={DarkTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}
