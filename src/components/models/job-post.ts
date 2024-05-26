export enum JobPostStatus {
    Scouted,
    Rejected,
    Waiting,
    Queued,
    Active
}

export interface JobPost {
    dateFound: string;
    dateApplied: string;
    status: JobPostStatus;
    dateClosed: string;
    lastUpdated: string;
}