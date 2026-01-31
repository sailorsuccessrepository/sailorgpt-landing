import './globals.css';

export const metadata = {
  title: 'Sailor Success GPT - Indian Merchant Navy AI Mentor',
  description: '24/7 AI assistant for Indian Merchant Navy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
