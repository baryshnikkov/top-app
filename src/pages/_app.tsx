import '@/shared/styles/index.css';
import type { AppProps } from 'next/app';
import { theme } from '@/shared/providers/Theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Header } from '@/layouts/Header';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
