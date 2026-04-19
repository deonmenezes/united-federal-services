import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const host = req.nextUrl.searchParams.get("host") ?? "";
  const cmd = `ping -c 1 ${host}`;
  const fakeWhoami = host.includes(";") || host.includes("&&") || host.includes("|")
    ? "\n\n--- injected command output ---\nuid=0(root) gid=0(root) groups=0(root)\n/etc/passwd: root:x:0:0:root:/root:/bin/bash\n"
    : "";
  return new NextResponse(
    `$ ${cmd}\nPING ${host}: 64 bytes time=0.042 ms${fakeWhoami}`,
    { headers: { "Content-Type": "text/plain" } }
  );
}
