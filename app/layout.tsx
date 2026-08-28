// Root layout — wraps every page via children (Day 1-2)
// Fixed gotcha: globals.css import was accidentally dropped on Day 1-2 —
// without it, NO Tailwind classes apply anywhere, silently, no error
import "./globals.css";

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
