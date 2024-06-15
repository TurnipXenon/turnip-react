import {JobPosting} from "@/lib/openapi/index";
import {Button, Text, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useContext} from "react";
import {TurnipContext} from "@/app/context";
import {MutableJobPosting} from "@/app/api/job-tracker/postings/[postingId]/route";

export interface JobPostingFormProps {
    key: string;
    posting: JobPosting;
}

export default function JobPostingForm(props: JobPostingFormProps) {
    const {api} = useContext(TurnipContext);

    const onClickSave = (values: MutableJobPosting) => {
        console.log(values);
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

    const form = useForm<MutableJobPosting>({
        mode: 'uncontrolled',
        initialValues: {
            alias: props.posting.alias ?? "",
            company: props.posting.company ?? "",
            jobTitle: props.posting.jobTitle ?? "",
            jobLink: props.posting.jobLink ?? "",
            resumeLink: props.posting.resumeLink ?? "",
        },
    });

    return <div key={props.posting.id}>
        <form onSubmit={form.onSubmit(onClickSave)}>
            <Text>ID: {props.posting.id}</Text>
            <Text>Date: {props.posting.startDate}</Text>
            <TextInput
                label="Alias"
                key={form.key('alias')}
                {...form.getInputProps('alias')}></TextInput>
            <TextInput
                label="Company"
                key={form.key('company')}
                {...form.getInputProps('company')}></TextInput>
            <TextInput
                label="Job title"
                key={form.key('jobTitle')}
                {...form.getInputProps('jobTitle')}></TextInput>
            <TextInput
                label="Posting link"
                key={form.key('jobLink')}
                {...form.getInputProps('jobLink')}></TextInput>
            <TextInput
                label="Resume link"
                key={form.key('resumeLink')}
                {...form.getInputProps('resumeLink')}></TextInput>
            <Button type="submit">Save</Button>
        </form>
    </div>;
}