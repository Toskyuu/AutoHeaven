import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { queryClient } from '../lib/react-query.ts';
import AuthProvider from "./AuthProvider.tsx";
import NotificationsProvider from "./NotificationsProvider.tsx";
import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles} from "../themes";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense>
      <ThemeProvider theme={darkTheme}>
          <GlobalStyles />
          <Router>
            <NotificationsProvider>
              <QueryClientProvider client={queryClient}>
                <AuthProvider>{children}</AuthProvider>
              </QueryClientProvider>
            </NotificationsProvider>
          </Router>
      </ThemeProvider>
    </Suspense>
  );
};
