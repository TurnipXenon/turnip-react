'use client';

import {useState} from 'react';
import {TextInput} from '@mantine/core';
import classes from './FloatingLabelInput.module.css';

export interface FloatingLabelInputProps {
    label?: string;
    placeholder?: string;
}

// from https://github.com/mantinedev/ui.mantine.dev/blob/master/lib/FloatingLabelInput/FloatingLabelInput.tsx
export function FloatingLabelInput(props: FloatingLabelInputProps) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const floating = value.trim().length !== 0 || focused || undefined;

    return (
        <TextInput
            label={props.label ?? "Floating label"}
            placeholder={props.placeholder ?? "Placeholder"}
            required
            classNames={classes}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            mt="xl"
            autoComplete="nope"
            data-floating={floating}
            labelProps={{'data-floating': floating}}
        />
    );
}