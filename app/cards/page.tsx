// Responsive design: mobile-first — base classes apply everywhere,
// sm: overrides from 640px and up
export default function CardsPage() {
  return (
    <div className="flex flex-col gap-4 p-8 sm:flex-row">
      <div className="bg-blue-100 p-6 sm:flex-1">Card 1</div>
      <div className="bg-blue-100 p-6 sm:flex-1">Card 2</div>
      <div className="bg-blue-100 p-6 sm:flex-1">Card 3</div>
    </div>
  );
}
