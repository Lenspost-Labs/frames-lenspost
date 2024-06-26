import type { Metadata } from 'next';

import {
  LENSPOST_TWITTER_USERNAME,
  LENSPOST_APP_URL,
  DESCRIPTION,
  APP_NAME,
  APP_URL,
  AUTHOR
} from '@/data';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  twitter: {
    images: [`${APP_URL}/OG_logo_1200x630.png`],
    creator: LENSPOST_TWITTER_USERNAME,
    site: LENSPOST_TWITTER_USERNAME,
    card: 'summary_large_image',
    description: DESCRIPTION,
    title: APP_NAME
  },
  openGraph: {
    images: [`${APP_URL}/OG_logo_1200x630.png`],
    description: DESCRIPTION,
    title: APP_NAME,
    url: APP_URL
  },
  keywords: ['Lenspost frame', 'Lenspost', 'Frames', 'Poster', 'Mint', 'NFT'],
  authors: [{ url: LENSPOST_APP_URL, name: AUTHOR }],
  metadataBase: new URL(APP_URL),
  description: DESCRIPTION,
  icons: ['/favicon.ico'],
  title: APP_NAME,
  creator: AUTHOR
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster
          position="bottom-center"
          duration={8000}
          closeButton
          richColors
        />
        <div className="flex h-screen items-center justify-center bg-[#B7DAEE] p-4 sm:p-10">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
