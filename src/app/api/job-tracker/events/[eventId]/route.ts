import {NextRequest, NextResponse} from "next/server";
import {TurnipAuth} from "@/lib/auth";
import prisma from "@/lib/prisma";
import {EventRouteSlug} from "@/lib/models/SlugGeneric";
import {JobEvent} from "@/lib/openapi/index";

// todo
// export async function GET(
//     request: NextRequest,
//     {params}: SessionRouteSlug
// ) {
//     const user = TurnipAuth.isAuthenticated(request);
//     const includePostings = request.nextUrl.searchParams.get(INCLUDE_POSTINGS_PARAMS);
//
//     if (!user) {
//         return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
//     }
//
//     const jobSession: JobSession | null = await prisma.jobSession.findFirst({
//         where: {id: params.sessionId},
//         include: {jobPostings: !!includePostings}
//     });
//
//     if (!jobSession) {
//         return NextResponse.json({error: 'Job session not found'}, {status: 404});
//     }
//
//     return NextResponse.json(jobSession);
// }

export interface MutableJobEvent {
    anonymizedNotes: string;
    publicNotes: string;
}

export async function PUT(
    request: NextRequest,
    {params}: EventRouteSlug
) {
    const user = TurnipAuth.isAuthenticated(request);

    if (!user) {
        return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
    }

    const body = await request.json() as JobEvent;

    const jobEvents = await prisma.jobEvents.update({
        where: {id: params.eventId},
        data: {
            anonymizedNotes: body.anonymizedNotes,
            publicNotes: body.publicNotes,
        }
    });


    return NextResponse.json(jobEvents);
}
