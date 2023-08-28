import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/nunito-sans"; // Defaults to weight 400
import "@fontsource/nunito-sans/400.css"; // Specify weight
import "@fontsource/nunito-sans/400-italic.css";
import AuthProvider from "@/providers/auth";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
      <AuthProvider>
          <ChakraProvider>
              <Component {...pageProps} />
          </ChakraProvider>
      </AuthProvider>
  );
}

export default MyApp;