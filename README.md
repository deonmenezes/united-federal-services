# United Federal Services — Intentionally Vulnerable Demo

**WARNING:** This application is deliberately insecure, built for security education and bug bounty practice. Do not deploy alongside real data or real users.

## Bounty

Up to **$2,000 USD** per qualifying report. Contact: **deonmenezes04@gmail.com**

See `/bounty` and `/.well-known/security.txt`.

## Vulnerabilities

| Endpoint | Flaw |
|---|---|
| `/login` + `/api/login` | Injection-style auth bypass, `alg:none` JWT, plaintext passwords |
| `/search` | Reflected XSS |
| `/comments` | Stored XSS, no CSRF tokens, no auth |
| `/profile/[id]` | IDOR — any user's data by ID |
| `/api/users` | Full PII + credentials dump |
| `/api/secrets` | Exposed config/secrets endpoint |
| `/api/ping` | Simulated command injection |
