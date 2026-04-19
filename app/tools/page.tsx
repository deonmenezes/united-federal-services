"use client";
import { useState } from "react";

export default function Tools() {
  const [host, setHost] = useState("my.ufs.example");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    const res = await fetch(`/api/ping?host=${encodeURIComponent(host)}`);
    setOut(await res.text());
    setLoading(false);
  }

  return (
    <>
      <h1>Help & Support</h1>
      <p style={{ color: "#525252", fontStyle: "italic", maxWidth: 680 }}>
        Get help with your account or a specific service.
      </p>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Service Availability Check</h3>
        <p style={{ color: "#525252", fontSize: "0.95rem" }}>
          Verify that UFS services are reachable from your location.
        </p>
        <label>Hostname</label>
        <input value={host} onChange={(e) => setHost(e.target.value)} style={{ width: "70%", marginRight: "0.5rem" }} />
        <button onClick={run} disabled={loading}>{loading ? "Checking…" : "Check"}</button>
        {out && <pre style={{ marginTop: "1rem" }}>{out}</pre>}
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Telephone Assistance</h3>
        <table>
          <tbody>
                        <tr><th>General Help</th><td>1-800-USA-GOV1 (24/7)</td></tr>
            <tr><th>Benefits Questions</th><td>1-800-772-1213 (Mon–Fri, 8am–7pm)</td></tr>
            <tr><th>Tax Assistance</th><td>1-800-829-1040 (Mon–Fri, 7am–7pm)</td></tr>
            <tr><th>Email</th><td>help@ufs.example</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
