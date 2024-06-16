import {SessionRouteSlug} from "@/lib/models/SlugGeneric";
import JobSessionForm from "@/app/job-tracker/sessions/[sessionId]/JobSessionForm";

export default async function Page({params}: SessionRouteSlug) {
    return <div>
        <JobSessionForm params={params}></JobSessionForm>
    </div>;
}