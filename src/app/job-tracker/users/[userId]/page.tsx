import {Text} from "@mantine/core";
import JobSessionList from "@/app/job-tracker/users/[userId]/JobSessionList";
import {UserRouteSlug} from "@/lib/models/SlugGeneric";

export default async function Page({params}: UserRouteSlug) {
    return <div>
        <Text>User: {params.userId}</Text>
        <JobSessionList params={params}></JobSessionList>
    </div>;
}