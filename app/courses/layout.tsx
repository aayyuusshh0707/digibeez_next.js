export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="inline-block   justify-center">{children}</div>
    </section>
  );
}
