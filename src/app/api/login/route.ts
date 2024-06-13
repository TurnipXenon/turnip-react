import {NextRequest} from "next/server";
import {TurnipAuth} from "@/lib/auth";

export async function POST(request: NextRequest) {
    return TurnipAuth.login(request);
}