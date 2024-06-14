import {NextRequest, NextResponse} from "next/server";
import {TurnipAuth} from "@/lib/auth";
import prisma from "@/lib/prisma";
import {UserRouteSlug} from "@/lib/models/SlugGeneric";

export async function POST(
    request: NextRequest,
    {params}: UserRouteSlug
) {
    const user = TurnipAuth.isAuthenticated(request);

    if (!user) {
        return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
    }

    const jobSession = await prisma.jobSession.create({
        data: {userId: params.userId}
    });

    return NextResponse.json(jobSession);
}

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
