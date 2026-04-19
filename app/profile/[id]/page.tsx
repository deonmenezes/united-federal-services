import { users } from "@/lib/db";

export default function Profile({ params }: { params: { id: string } }) {
  const user = users.find((u) => u.id === Number(params.id));
  if (!user) return <><h1>Profile not found</h1><p style={{ color: "#525252" }}>We could not locate that record.</p></>;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="avatar" style={{ width: 64, height: 64, fontSize: "1.5rem" }}>
          {user.username[0].toUpperCase()}
        </div>
        <div>
          <h1 style={{ margin: 0 }}>{user.username}</h1>
          <div style={{ color: "#525252", fontSize: "0.95rem", fontFamily: '"Helvetica Neue", Arial, sans-serif', letterSpacing: "0.05em", textTransform: "uppercase" }}>
            {user.role === "admin" ? "Federal Administrator" : "Registered Citizen"}
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Account Record</h3>
        <table>
          <tbody>
            <tr><th>Email</th><td>{user.email}</td></tr>
            <tr><th>Tax identifier</th><td>{user.ssn}</td></tr>
            <tr><th>Account type</th><td>{user.role === "admin" ? "Federal Administrator" : "Registered Citizen"}</td></tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Developer &amp; API Access</h3>
        <p style={{ color: "#525252", fontSize: "0.95rem" }}>
          API credentials for third-party integrations.
        </p>
        <table>
          <tbody>
            <tr><th>API key</th><td><code>{user.apiKey}</code></td></tr>
            <tr><th>Password hash</th><td><code>{user.password}</code></td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
