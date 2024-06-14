import {NextRequest, NextResponse} from "next/server";
import {ApiLoginPostRequest, PublicUser} from "@/lib/openapi/index";

export interface ITurnipAuth {
    isAuthenticated: (request: NextRequest) => PublicUser | undefined;
    login: (request: NextRequest) => Promise<NextResponse>;
}

// temporary auth class to be replaced later if we want to
// to be honest, I might need anything fancier since I'm the only user
class TurnipAuthImpl implements ITurnipAuth {
    isAuthenticated = (request: NextRequest) => {
        let token = request.cookies.get("token");
        if (token?.value === process.env.USER_TOKEN
            && process.env.USER_TOKEN
            && process.env.USER_USERNAME
            && process.env.USER_ID) {
            return {
                username: process.env.USER_USERNAME,
                id: process.env.USER_ID
            };
        }

        return undefined;
    };

    login = async (request: NextRequest) => {
        const requestData = await request.json() as ApiLoginPostRequest;
        if (process.env.USER_PASSWORD
            && process.env.USER_ID
            && requestData.email === process.env.USER_EMAIL
            && requestData.password === process.env.USER_PASSWORD) {

            const resp = NextResponse.json<PublicUser>({
                username: process.env.USER_USERNAME ?? "turnip",
                id: process.env.USER_ID ?? "turnip"
            },);

            resp.cookies.set({
                name: "token",
                value: process.env.USER_TOKEN ?? "",
                sameSite: "strict",
            });

            return resp;
        }

        return new NextResponse("Error", {
            status: 401,
        });
    };
}

export const TurnipAuth = new TurnipAuthImpl();
