import "./globals.css";

export const metadata = {
  title: "Cerdas UTBK",
  description: "Platform bimbel UTBK online"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
