import {NextRequest, NextResponse} from "next/server";
import {TurnipAuth} from "@/lib/auth";
import prisma from "@/lib/prisma";
import {SessionRouteSlug, UserRouteSlug} from "@/lib/models/SlugGeneric";

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

// todo:
export async function GET(
    request: NextRequest,
    {params}: UserRouteSlug
) {
    const user = TurnipAuth.isAuthenticated(request);

    if (!user) {
        return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
    }

    const jobSessions = await prisma.jobSession.findMany({
        where: {userId: params.userId}
    });

    return NextResponse.json(jobSessions);
}
