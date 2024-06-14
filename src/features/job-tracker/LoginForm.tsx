'use client';

import {useForm} from "@mantine/form";
import {Button, Group, PasswordInput, TextInput} from "@mantine/core";
import {TurnipContext} from "@/app/context";
import {useContext} from "react";

interface FormValues {
    email: string,
    password: string,
}

export default function LoginForm() {
    const {api} = useContext(TurnipContext);

    const form = useForm<FormValues>({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: '',
        },
    });

    const submit = (values: FormValues) => {
        api.apiLoginPost({
            email: values.email,
            password: values.password,
        }).then(onfullfilled => {
            window.location.href = `/job-tracker/users/${onfullfilled.data.id}`;
        }, onrejected => {
            console.error(onrejected);
        });
    };

    return (
        <form onSubmit={form.onSubmit(submit)}>
            <TextInput
                label="Email"
                placeholder="user@mail.com"
                key={form.key('email')}
                {...form.getInputProps('email')}
            ></TextInput>
            <PasswordInput
                label="Password"
                placeholder="Password"
                key={form.key('password')}
                {...form.getInputProps('password')}
            ></PasswordInput>

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    );
}