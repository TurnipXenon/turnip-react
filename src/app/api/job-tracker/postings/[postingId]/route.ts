import {NextRequest, NextResponse} from "next/server";
import {TurnipAuth} from "@/lib/auth";
import prisma from "@/lib/prisma";
import {PostingRouteSlug} from "@/lib/models/SlugGeneric";
import {JobPosting} from "@/lib/openapi/index";

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


export async function PUT(
    request: NextRequest,
    {params}: PostingRouteSlug
) {
    const user = TurnipAuth.isAuthenticated(request);

    if (!user) {
        return NextResponse.json({error: 'Unauthorized error'}, {status: 401});
    }

    const body = await request.json() as JobPosting;

    const posting = await prisma.jobPosting.update({
        where: {id: params.postingId},
        data: {
            alias: body.alias,
            company: body.company,
            jobTitle: body.jobTitle,
            jobLink: body.jobLink,
            resumeLink: body.resumeLink,
            status: body.status,
            notes: body.notes,
        }
    });

    return NextResponse.json(posting);
}
