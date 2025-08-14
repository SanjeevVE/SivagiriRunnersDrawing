import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sivagiri Drawing',
  description: 'Independence Day Kids Drawing Competition Information',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
