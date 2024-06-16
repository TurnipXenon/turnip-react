import {JobEvent, JobPosting, JobPostingStatusEnum} from "@/lib/openapi/index";
import {Button, Card, Select, Text, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useContext, useEffect, useState} from "react";
import {TurnipContext} from "@/app/context";
import JobEventForm from "@/app/job-tracker/sessions/[sessionId]/JobEventForm";
import styles from "./JobPostingForm.module.css";
import {MutableJobPosting} from "@/app/api/job-tracker/postings/[postingId]/routeParams";

export interface JobPostingFormProps {
    key: string;
    posting: JobPosting;
}

export default function JobPostingForm(props: JobPostingFormProps) {
    const {api} = useContext(TurnipContext);
    const [eventList, setEventList] = useState<JobEvent[]>();

    useEffect(() => {
        if (eventList) {
            return;
        }

        console.log("loading");
        api.apiJobTrackerPostingsPostingIdEventsGet(props.posting.id).then(
            onfulfilled => {
                setEventList(onfulfilled.data);
            }, onrejected => {
                console.error(onrejected);
            }
        );
    }, [api, eventList, props.posting.id]);

    const form = useForm<MutableJobPosting>({
        mode: 'uncontrolled',
        initialValues: {
            alias: props.posting.alias ?? "",
            company: props.posting.company ?? "",
            jobTitle: props.posting.jobTitle ?? "",
            jobLink: props.posting.jobLink ?? "",
            resumeLink: props.posting.resumeLink ?? "",
            status: props.posting.status ?? JobPostingStatusEnum.Queued,
            notes: props.posting.notes ?? "",
        },
    });

    const onClickSave = (values: MutableJobPosting) => {
        // todo: save all events too
        api.apiJobTrackerPostingsPostingIdPut(props.posting.id, {
            id: props.posting.id,
            ...values
        }).then(
            onfulfilled => {
                console.log(onfulfilled);
            }, onrejected => {
                console.error(onrejected);
            }
        );
    };

    const onCreateJobEvent = () => {
        api.apiJobTrackerPostingsPostingIdEventsPost(props.posting.id, {}).then(
            onfulfilled => {
                eventList?.unshift(onfulfilled.data);
                console.log("Here");
                if (eventList) {
                    console.log(eventList);
                    setEventList(eventList.slice());
                }
            }, onrejected => {
                console.error(onrejected);
            }
        );
    };

    const onClickSaveAllChanges = () => {

    };

    return <Card shadow="sm"
                 padding="lg"
                 radius="md"
                 withBorder key={props.posting.id}>
        <form onSubmit={form.onSubmit(onClickSave)}>
            <Text>ID: {props.posting.id}</Text>
            {
                props.posting.startDate
                    ? <Text>Date: {new Date(props.posting.startDate).toLocaleString()}</Text>
                    : undefined
            }
            <div className={styles.postingFormContainer}>
                <TextInput
                    className={styles.postingFormContainerChild}
                    label="Alias"
                    key={form.key('alias')}
                    {...form.getInputProps('alias')}></TextInput>
                <TextInput
                    className={styles.postingFormContainerChild}
                    label="Company"
                    key={form.key('company')}
                    {...form.getInputProps('company')}></TextInput>
                <TextInput
                    className={styles.postingFormContainerChild}
                    label="Job title"
                    key={form.key('jobTitle')}
                    {...form.getInputProps('jobTitle')}></TextInput>
                <TextInput
                    className={styles.postingFormContainerChild}
                    label="Posting link"
                    key={form.key('jobLink')}
                    {...form.getInputProps('jobLink')}></TextInput>
                <TextInput
                    className={styles.postingFormContainerChild}
                    label="Resume link"
                    key={form.key('resumeLink')}
                    {...form.getInputProps('resumeLink')}></TextInput>
                <Select label="Status"
                        className={styles.postingFormContainerChild}
                        key={form.key('status')}
                        {...form.getInputProps('status')}
                        data={Object.values(JobPostingStatusEnum)}></Select>
            </div>
            <TextInput
                label="Notes"
                key={form.key('notes')}
                {...form.getInputProps('notes')}></TextInput>
            <Button type="submit">Save metadata</Button>
        </form>

        <Button onClick={onCreateJobEvent}>Create event</Button>
        <div>
            {
                eventList?.map(e => {
                    return <JobEventForm key={e.id} event={e}></JobEventForm>;
                })
            }
        </div>

        <Button onClick={onClickSaveAllChanges}>Save all changes to posting</Button>
    </Card>;
}