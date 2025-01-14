import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Noto_Sans_TC } from 'next/font/google';

import type { Metadata } from 'next';

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Small Wish',
  description: '許個小願，大家幫你完成',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="z-hant">
      <body className={notoSansTC.className}>
        <AppRouterCacheProvider>{children}+ </AppRouterCacheProvider>
      </body>
    </html>
  );
}
