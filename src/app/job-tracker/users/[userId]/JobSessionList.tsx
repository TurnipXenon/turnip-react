"use client";

import {Button, Text} from "@mantine/core";
import {UserRouteSlug} from "@/lib/models/SlugGeneric";
import {useContext, useState} from "react";
import {JobSession} from "@/lib/openapi/index";
import {TurnipContext} from "@/app/context";
import {useEffectOnce} from "@/lib/hooks/useEffectOnce";

export default function JobSessionList({params}: UserRouteSlug) {
    const [sessionList, setSessionList] = useState<JobSession[]>([]);
    const {api} = useContext(TurnipContext);

    useEffectOnce(() => {
        api.apiJobTrackerUsersUserIdSessionsGet(params.userId).then(
            onfulfilled => {
                setSessionList(onfulfilled.data);
            }, onrejected => {
                console.error(onrejected);
            });
    });

    const onCreateNewJobSession = () => {
        api.apiJobTrackerUsersUserIdSessionsPost(params.userId, {title: 'New job session'}).then(
            onfulfilled => {
                console.log(onfulfilled.data);
            }, onrejected => {
                console.error(onrejected);
            }
        );
    };

    const onButtonClick = (id: string): () => void => {
        return () => {
            window.location.href += `/sessions/${id}`;
        };
    };

    return <div>
        <Text>User: {params.userId}</Text>
        <Text>{sessionList.length}</Text>
        {
            sessionList.map(d => {
                return <div key={d.id}>
                    <Button onClick={onButtonClick(d.id)}>
                        {d.id}
                    </Button>
                </div>;
            })
        }

        <Button onClick={onCreateNewJobSession}>Create new job session</Button>
    </div>;
}