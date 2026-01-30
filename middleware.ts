import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { canAccessPath } from "./src/lib/rbac";

export default withAuth(
  function middleware(req) {
    const role = req.nextauth.token?.role as "ADMIN" | "MANAGER" | "EMPLOYEE" | undefined;
    const pathname = req.nextUrl.pathname;

    if (!role) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const target = pathname.split("/")[1];
    const path = target ? `/${target}` : "/dashboard";

    if (!canAccessPath(role, path)) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login"
    }
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/employees/:path*",
    "/attendance/:path*",
    "/payroll/:path*",
    "/expenses/:path*",
    "/invoices/:path*",
    "/requests/:path*",
    "/reports/:path*"
  ]
};
