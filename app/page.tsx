import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="est">Official Government Services</div>
        <h1>Access federal services, benefits, and records.</h1>
        <p className="lead">
          A single sign-in for Social Security, tax records, immigration status, veterans benefits, and federal contracting. Your gateway to 15 federal agencies.
        </p>
        <div className="hero-actions">
          <Link href="/login" className="btn-primary">Sign In with UFS</Link>
          <Link href="/search" className="btn-ghost">Browse Services</Link>
        </div>
      </section>

      <section className="stats">
                <div className="stat"><strong>330M</strong><span>Citizens served</span></div>
        <div className="stat"><strong>50</strong><span>States & territories</span></div>
        <div className="stat"><strong>15</strong><span>Federal agencies</span></div>
        <div className="stat"><strong>1789</strong><span>Continuous service since</span></div>
      </section>

      <div className="section-title">
        <h2>What You Can Do</h2>
        <div className="divider" />
        <p>Your single sign-in to federal services.</p>
      </div>

      <section className="features">
                <div className="feature">
          <div className="icon">1</div>
          <h3>Benefits & Claims</h3>
          <p>File and track Social Security, Medicare, veterans, and disability benefits online.</p>
        </div>
        <div className="feature">
          <div className="icon">2</div>
          <h3>Tax Records</h3>
          <p>Request transcripts, check refunds, and manage your IRS account in one place.</p>
        </div>
        <div className="feature">
          <div className="icon">3</div>
          <h3>Immigration Status</h3>
          <p>Track case status, schedule biometrics, and receive USCIS notices.</p>
        </div>
        <div className="feature">
          <div className="icon">4</div>
          <h3>Contracting</h3>
          <p>Register as a federal vendor, search solicitations, and manage awards.</p>
        </div>
      </section>

      <div className="section-title">
        <h2>Trusted Nationwide</h2>
        <div className="divider" />
      </div>

      <section>
                <div className="testimonial">"UFS makes interacting with the federal government the single sign-on it always should have been."<cite>— U.S. Government Accountability Office, 2023 report</cite></div>
        <div className="testimonial">"I filed my VA claim in twenty minutes without a phone call. That's never happened before."<cite>Veteran beneficiary, Ohio</cite></div>
      </section>
    </>
  );
}
