import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest, _event: NextFetchEvent) {
  const resp = NextResponse;
  const session = await getToken({
    req,
    secret: process.env.AUTH_SECRET!,
    secureCookie: process.env.NODE_ENV === "production",
    salt:
      process.env.NODE_ENV === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token",
  });
  console.log("This Session from Middleware", session);
  const url = req.nextUrl;
  const loginUrl = new URL("/auth/login", url.origin);
  const dashboardUrl = new URL("/dashboard", url.origin);
  if (url.pathname.startsWith("/dashboard") && !session) {
    return resp.redirect(loginUrl);
  }
  if (url.pathname.startsWith("/auth") && session) {
    return resp.redirect(dashboardUrl);
  }
  return resp.next();
}
