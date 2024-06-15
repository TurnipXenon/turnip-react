"use client";

import {Button, Text} from "@mantine/core";
import {SessionRouteSlug} from "@/lib/models/SlugGeneric";
import {useContext, useEffect, useState} from "react";
import {JobPosting, JobSession} from "@/lib/openapi/index";
import {TurnipContext} from "@/app/context";
import {useEffectOnce} from "@/lib/hooks/useEffectOnce";
import JobPostingForm from "@/app/job-tracker/sessions/[sessionId]/JobPostingForm";

// todo: paginate events since we dont want to pull 100+ events
// todo: sort if from latest by default
export default function JobSessionForm({params}: SessionRouteSlug) {
    const [session, setSession] = useState<JobSession>();
    const [jobList, setJobList] = useState<JobPosting[]>();
    const {api} = useContext(TurnipContext);

    useEffectOnce(() => {
        api.apiJobTrackerSessionsSessionIdGet(params.sessionId).then(
            onfulfilled => {
                setSession(onfulfilled.data);
            }, onrejected => {
                console.error(onrejected);
            });
    });

    useEffect(() => {
        if (!session || jobList) {
            return;
        }

        // todo: add pagination
        api.apiJobTrackerSessionsSessionIdPostingsGet(params.sessionId).then(
            onfulfilled => {
                setJobList(onfulfilled.data);
            }, onrejected => {
                console.log(onrejected);
            }
        );
    }, [session, jobList, api, params.sessionId]);

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
                        jobList?.map((posting, index) => {
                            return <JobPostingForm key={`posting-${index}`}
                                                   posting={posting}>
                            </JobPostingForm>;
                        })
                    }
                </div>
                : <></>
        }


        <Button onClick={createJobPostingClick}>Create new job posting</Button>
    </div>;
}