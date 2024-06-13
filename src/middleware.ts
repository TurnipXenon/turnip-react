import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {TurnipAuth} from "@/lib/auth";

export function middleware(request: NextRequest) {
    const maybeUser = TurnipAuth.isAuthenticated(request)
    if (maybeUser) {
        // no redirects
        return;
    }

    // todo: send to error page if not authorized
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: '/job-tracker/users/:path*',
};