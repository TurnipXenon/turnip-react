import {Anchor, Text, Title} from "@mantine/core";

export default async function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center">
            <Title ta="center" mt={100}>
                Job Tracker project (WIP)
            </Title>
            <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="lg">
                {/*todo: when logged in, show log out instead*/}
                <Anchor href="/job-tracker/login" size="lg">
                    Login
                </Anchor>
            </Text>
        </main>
    );
}