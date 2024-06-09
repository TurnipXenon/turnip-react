import {Anchor, Text, Title} from "@mantine/core";
import {ColorSchemeToggle} from "@/components/ColorSchemeToggle";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Title ta="center" mt={100}>
                Welcome to Turnip&apos;s Home (React version)
            </Title>
            <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="lg">
                Our main/apex domain (
                <Anchor href="https://turnipxenon.com/" size="lg">
                    turnipxenon.com
                </Anchor>
                ) is written in Svelte.
                The subdomain react is written in React.
            </Text>
            <Title mt="xl" order={3}>Color scheme toggle</Title>
            <ColorSchemeToggle></ColorSchemeToggle>
            <Title mt="xl" order={3}>Directory</Title>
            <ul>
                <li><Anchor href="/job-tracker">Job Tracker App</Anchor></li>
            </ul>
        </main>
    );
}
