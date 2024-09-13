export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <article className="prose prose-gray dark:prose-invert mx-auto">
      {children}
    </article>
  );
}
