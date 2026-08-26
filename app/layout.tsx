// Root layout — wraps every page via children, shared UI goes here (Day 1-2)
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
