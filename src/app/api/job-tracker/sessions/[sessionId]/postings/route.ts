import {NextRequest, NextResponse} from "next/server";
import {TurnipAuth} from "@/lib/auth";
import prisma from "@/lib/prisma";
import {SessionRouteSlug} from "@/lib/models/SlugGeneric";
import {CURSOR_PARAMS} from "@/app/api/job-tracker/sessions/[sessionId]/postings/routeParams";

export async function POST(
    request: NextRequest,
    {params}: SessionRouteSlug
) {
    const user = TurnipAuth.isAuthenticated(request);

    if (!user) {
        return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
    }

    const jobPosting = await prisma.jobPosting.create({
        data: {
            sessionId: params.sessionId,
            userId: user.id,
        }
    });

    return NextResponse.json(jobPosting);
}

export async function GET(
    request: NextRequest,
    {params}: SessionRouteSlug
) {
    const user = TurnipAuth.isAuthenticated(request);
    const cursorId = request.nextUrl.searchParams.get(CURSOR_PARAMS);

    if (!user) {
        return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
    }

    const jobSessions = await prisma.jobPosting.findMany({
        where: {sessionId: params.sessionId},
        orderBy: [{startDate: 'desc'}],
        take: 20,
        cursor: cursorId ? {
            id: cursorId
        } : undefined
    });

    return NextResponse.json(jobSessions);
}
