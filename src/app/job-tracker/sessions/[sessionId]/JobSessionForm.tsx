"use client";

import {Button, Text} from "@mantine/core";
import {SessionRouteSlug} from "@/lib/models/SlugGeneric";
import {useContext, useState} from "react";
import {JobSession} from "@/lib/openapi/index";
import {TurnipContext} from "@/app/context";
import {useEffectOnce} from "@/lib/hooks/useEffectOnce";
import {createIncludePostingParams} from "@/app/api/job-tracker/sessions/[sessionId]/routeParams";

// todo: paginate events since we dont want to pull 100+ events
export default function JobSessionForm({params}: SessionRouteSlug) {
    const [session, setSession] = useState<JobSession>();
    const {api} = useContext(TurnipContext);

    useEffectOnce(() => {
        api.apiJobTrackerSessionsSessionIdGet(params.sessionId, {
            params: createIncludePostingParams()
        }).then(
            onfulfilled => {
                setSession(onfulfilled.data);
            }, onrejected => {
                console.error(onrejected);
            });
    });

    const createJobPostingClick = () => {
        api.apiJobTrackerSessionsSessionIdPostingsPost(params.sessionId, {}).then(
            onfulfilled => {
                console.log(onfulfilled.data);
            }, onrejected => {
                console.error(onrejected);
            }
        );
    };

    return <div>
        <Text>User: {params.sessionId}</Text>
        {
            session
                ? <div>
                    <Text>Session ID: {session?.id}</Text>
                    <Text>Title: {session?.title}</Text>
                    <Text>Start date: {session?.startDate}</Text>
                    <Text>End date: {session?.endDate}</Text>
                    <Text>isPublic: {session?.isPublic}</Text>
                    <Text>Postings</Text>
                    {
                        session.jobPostings?.map((posting, index) => {
                            return <div key={`posting-${index}`}>
                                <Text>{posting.id}</Text>
                            </div>;
                        })
                    }
                </div>
                : <></>
        }


        <Button onClick={createJobPostingClick}>Create new job posting</Button>
    </div>;
}