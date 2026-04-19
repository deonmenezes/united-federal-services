export default function Bounty() {
  return (
    <>
      <h1>Security &amp; Responsible Disclosure</h1>
      <p style={{ color: "#525252", fontSize: "1.05rem", maxWidth: 720 }}>
        United Federal Services manages data belonging to hundreds of millions of Americans. We operate a coordinated vulnerability disclosure program.
      </p>
      <p style={{ color: "#525252", maxWidth: 720 }}>
        Researchers who act in good faith and comply with our disclosure policy may receive a
        reward of up to <strong>$2,000 USD</strong> per qualifying report.
      </p>

      <h2>Scope</h2>
      <div className="card">
        <ul>
          <li>Our public web properties, including all <code>/api/*</code> endpoints.</li>
          <li>Classes of issue: authentication bypass, authorization flaws, injection, XSS, SSRF, insecure deserialization, misconfiguration, sensitive information disclosure.</li>
        </ul>
      </div>

      <h2>Out of Scope</h2>
      <div className="card">
        <ul>
          <li>Denial-of-service and volumetric attacks.</li>
          <li>Social engineering, physical attacks, and attacks against our vendors.</li>
          <li>Automated scanner output without a working proof-of-concept.</li>
          <li>Issues that require a compromised device, outdated browser, or MITM on the victim's LAN.</li>
        </ul>
      </div>

      <h2>Reward Schedule</h2>
      <div className="card">
        <table>
          <thead>
            <tr><th>Severity</th><th>Example Finding</th><th>Reward</th></tr>
          </thead>
          <tbody>
            <tr><td>Critical</td><td>RCE, full authentication bypass, mass PII exposure</td><td>up to $2,000</td></tr>
            <tr><td>High</td><td>Privilege escalation, stored XSS with account takeover</td><td>up to $750</td></tr>
            <tr><td>Medium</td><td>IDOR, reflected XSS, sensitive information disclosure</td><td>up to $250</td></tr>
            <tr><td>Low</td><td>Best-practice deviations, low-impact misconfiguration</td><td>Hall of Fame</td></tr>
          </tbody>
        </table>
      </div>

      <h2>How to Submit a Report</h2>
      <div className="card">
        <p>Please email <a href="mailto:deonmenezes04@gmail.com">deonmenezes04@gmail.com</a> with:</p>
        <ol>
          <li>A concise summary and affected URL or endpoint.</li>
          <li>Step-by-step reproduction instructions.</li>
          <li>Your assessment of impact.</li>
          <li>Suggested remediation, where possible.</li>
        </ol>
        <p style={{ fontSize: "0.9rem", color: "#525252" }}>
          Machine-readable contact: <a href="/.well-known/security.txt">/.well-known/security.txt</a>.
        </p>
      </div>

      <h2>Safe Harbor</h2>
      <div className="card">
        <p>
          Good-faith research within the scope defined above will not result in legal action.
          Please do not access, modify, or retain data that is not yours, and do not pivot to
          any systems outside this application.
        </p>
      </div>
    </>
  );
}
