export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>Site Navigation</nav>
        {children}
      </body>
    </html>
  );
}
