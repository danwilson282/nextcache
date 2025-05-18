// app/layout.tsx
import SessionProviderWrapper from "./providers/SessionProviderWrapper";
import AppBar from "./components/AppBar";
import { AppContextProvider } from "./providers/AppContextProvider";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <SessionProviderWrapper>
            <AppBar/>
            {children}
          </SessionProviderWrapper>
        </AppContextProvider>

      </body>
    </html>
  );
}
