'use client';

import {createContext, useState} from "react";
import {DefaultApi} from "@/lib/openapi/index";

export interface ITurnipContext {
    api: DefaultApi;
}

export const TurnipContext = createContext<ITurnipContext>({
    api: new DefaultApi(undefined, "")
});

export default function TurnipProvider({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const [api, setApi] = useState(new DefaultApi(undefined, ""));

    return <TurnipContext.Provider value={{
        api,
    }}>{children}</TurnipContext.Provider>;
}