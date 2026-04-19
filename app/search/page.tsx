export default function Search({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? "";
  const products = [
        { name: "Social Security Account", desc: "View your earnings record, estimate benefits, and manage direct deposit." },
    { name: "IRS Online Account", desc: "Access tax transcripts, payment history, and installment agreements." },
    { name: "VA Benefits Portal", desc: "Track disability claims, access health records, and manage GI Bill benefits." },
    { name: "USCIS Case Status", desc: "Check pending immigration case status and respond to RFEs electronically." },
    { name: "SAM.gov Registration", desc: "Register your business to contract with federal agencies." },
    { name: "Medicare Account", desc: "Review coverage, claims, and enrollment options for Medicare beneficiaries." }
  ];
  const filtered = q ? products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.desc.toLowerCase().includes(q.toLowerCase())) : products;

  return (
    <>
      <h1>Federal Services</h1>
      <p style={{ color: "#525252", fontStyle: "italic", maxWidth: 680 }}>
        Search services from 15 federal agencies.
      </p>

      <form method="get" style={{ margin: "2rem 0" }}>
        <input name="q" defaultValue={q} placeholder="Search benefits, records, forms, and agencies..." style={{ width: "70%", marginRight: "0.5rem" }} />
        <button type="submit">Search</button>
      </form>

      {q && (
        <div className="card" style={{ background: "#eaf0f8", borderTop: "3px solid #c41e3a" }}>
          <p style={{ margin: 0, color: "#525252" }}>
            Showing results for: <strong><span dangerouslySetInnerHTML={{ __html: q }} /></strong>
          </p>
        </div>
      )}

      <div>
        {filtered.map((p) => (
          <div key={p.name} className="card">
            <h3 style={{ margin: "0 0 0.5rem" }}>{p.name}</h3>
            <p style={{ margin: 0, color: "#525252" }}>{p.desc}</p>
            <p style={{ marginTop: "0.75rem", marginBottom: 0 }}>
              <a href="#">Learn more →</a>
            </p>
          </div>
        ))}
        {filtered.length === 0 && <p style={{ color: "#525252", fontStyle: "italic" }}>No results matched your search.</p>}
      </div>
    </>
  );
}
