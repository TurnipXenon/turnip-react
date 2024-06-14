"use client";

import {Text} from "@mantine/core";
import {SessionRouteSlug} from "@/lib/models/SlugGeneric";
import {useContext, useState} from "react";
import {JobSession} from "@/lib/openapi/index";
import {TurnipContext} from "@/app/context";
import {useEffectOnce} from "@/lib/hooks/useEffectOnce";

export default function JobSessionForm({params}: SessionRouteSlug) {
    const [session, setSession] = useState<JobSession>();
    const {api} = useContext(TurnipContext);

    useEffectOnce(() => {
        api.apiJobTrackerUsersUserIdSessionsSessionIdGet(params.userId, params.sessionId).then(
            onfulfilled => {
                setSession(onfulfilled.data);
            }, onrejected => {
                console.error(onrejected);
            });
    });

    const onButtonClick = (id: string): () => void => {
        return () => {
            window.location.href += `/sessions/${id}`;
        };
    };

    return <div>
        <Text>User: {params.userId}</Text>
        {
            session
                ? <>
                    <Text>Session ID: {session?.id}</Text>
                    <Text>Title: {session?.title}</Text>
                    <Text>Start date: {session?.startDate}</Text>
                    <Text>End date: {session?.endDate}</Text>
                    <Text>isPublic: {session?.isPublic}</Text>
                </>
                : <></>
        }
    </div>;
}