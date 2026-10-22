const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Justin O'Boyle",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://justinoboyle.com",
  sameAs: ["https://github.com/justinoboyle"],
};

// Hoisted so the JSON-LD string and prop object are computed once at module
// level (oxlint react-perf jsx-no-new-object-as-prop).
const jsonLdScript = { __html: JSON.stringify(jsonLd) };

export default function Home() {
  return (
    <main>
      <h1>Justin O&apos;Boyle</h1>
      <p>
        This site is a work in progress. In the meantime, find me on{" "}
        <a href="https://github.com/justinoboyle">GitHub</a>.
      </p>
      {/* AgentReady AR-READ: JSON-LD for structured data. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript} />
    </main>
  );
}
