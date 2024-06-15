import {NextRequest, NextResponse} from "next/server";
import {TurnipAuth} from "@/lib/auth";
import prisma from "@/lib/prisma";
import {PostingRouteSlug} from "@/lib/models/SlugGeneric";

export async function POST(
    request: NextRequest,
    {params}: PostingRouteSlug
) {
    const user = TurnipAuth.isAuthenticated(request);

    if (!user) {
        return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
    }

    const events = await prisma.jobEvents.create({
        data: {
            jobPostingId: params.postingId,
            anonymizedNotes: "",
            publicNotes: ""
        }
    });

    return NextResponse.json(events);
}

export async function GET(
    request: NextRequest,
    {params}: PostingRouteSlug
) {
    const user = TurnipAuth.isAuthenticated(request);

    if (!user) {
        return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
    }

    const jobEvents = await prisma.jobEvents.findMany({
        where: {jobPostingId: params.postingId},
        orderBy: [{eventDate: 'desc'}],
    });

    return NextResponse.json(jobEvents);
}
