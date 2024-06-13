import LoginForm from "@/features/job-tracker/LoginForm";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <LoginForm></LoginForm>
        </main>
    );
}