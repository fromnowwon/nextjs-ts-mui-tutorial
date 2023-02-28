import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/styles/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <h1>Hello world!</h1>
        <p>Welcome to my page.</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by CW</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <head />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <body>
          {header}
          {children}
          {footer}
        </body>
      </ThemeProvider>
    </html>
  );
}
