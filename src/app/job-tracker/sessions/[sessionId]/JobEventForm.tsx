import {JobEvent} from "@/lib/openapi/index";
import {Button, Text, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useContext} from "react";
import {TurnipContext} from "@/app/context";
import {MutableJobEvent} from "@/app/api/job-tracker/events/[eventId]/routeParams";

export interface JobEventFormProps {
    key: string;
    event: JobEvent;
}

export default function JobEventForm(props: JobEventFormProps) {
    const {api} = useContext(TurnipContext);

    const form = useForm<MutableJobEvent>({
        mode: 'uncontrolled',
        initialValues: {
            anonymizedNotes: props.event.anonymizedNotes ?? "",
            publicNotes: props.event.publicNotes ?? "",
        },
    });

    const onClickSave = (values: MutableJobEvent) => {
        // todo: save all events too
        api.apiJobTrackerEventsEventIdPut(props.event.id, {
            id: props.event.id,
            ...values
        }).then(
            onfulfilled => {
                console.log(onfulfilled);
            }, onrejected => {
                console.error(onrejected);
            }
        );
    };

    const onClickDeleteEvent = () => {
        // todo
    };

    return <div key={props.event.id}>
        <form onSubmit={form.onSubmit(onClickSave)}>
            <Text>---</Text>
            <Text>ID: {props.event.id}</Text>
            <Text>Date: {props.event.eventDate}</Text>
            <TextInput
                label="Anonymized notes"
                key={form.key('anonymizedNotes')}
                {...form.getInputProps('anonymizedNotes')}></TextInput>
            <TextInput
                label="Public notest"
                key={form.key('publicNotes')}
                {...form.getInputProps('publicNotes')}></TextInput>
            <Button type="submit">Save event</Button>
            <Button onClick={onClickDeleteEvent}>Delete event</Button>
        </form>
    </div>;
}