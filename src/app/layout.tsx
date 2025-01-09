import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';

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
      <body className={notoSansTC.className}>{children}</body>
    </html>
  );
}
