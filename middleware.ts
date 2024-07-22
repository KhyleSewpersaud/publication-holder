import type { NextRequest } from "next/server";
import { auth } from "@/lib/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export function middleware(request: NextRequest) {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser && currentUser.emailVerified) {
      if (request.nextUrl.pathname.startsWith("/dashboard")) {
        return Response.redirect(new URL("/dashboard", request.url));
      }
    } else {
      if (request.nextUrl.pathname.startsWith("/dashboard")) {
        return Response.redirect(new URL("/login", request.url));
      }
    }
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
