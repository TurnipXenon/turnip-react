import {NextRequest, NextResponse} from "next/server";
import {TurnipAuth} from "@/lib/auth";
import prisma from "@/lib/prisma";
import {SessionRouteSlug, UserRouteSlug} from "@/lib/models/SlugGeneric";

export async function GET(
    request: NextRequest,
    {params}: SessionRouteSlug
) {
    const user = TurnipAuth.isAuthenticated(request);

    if (!user) {
        return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
    }

    const jobSessions = await prisma.jobSession.findFirst({
        where: {id: params.sessionId}
    });

    if (!jobSessions) {
        return NextResponse.json({error: 'Job session not found'}, {status: 404});
    }

    return NextResponse.json(jobSessions);
}

export async function PUT(
    request: NextRequest,
    {params}: SessionRouteSlug
) {
    const user = TurnipAuth.isAuthenticated(request);

    if (!user) {
        return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
    }

    const jobSessions = await prisma.jobSession.findFirst({
        where: {id: params.sessionId}
    });

    if (!jobSessions) {
        return NextResponse.json({error: 'Job session not found'}, {status: 404});
    }

    // todo: overwrite
    // const b = await request.body;

    return NextResponse.json(jobSessions);
}
