import {JobPostingStatusEnum} from "@/lib/openapi/index";

export interface MutableJobPosting {
    alias: string;
    company: string;
    jobTitle: string;
    jobLink: string;
    resumeLink: string;
    status: JobPostingStatusEnum;
    notes: String;
}