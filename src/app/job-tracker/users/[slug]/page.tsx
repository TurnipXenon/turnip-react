import prisma from "@/lib/prisma";
import {Text} from "@mantine/core";

export default async function Page({params}: { params: { slug: string } }) {
    const data = await prisma.jobSession.findMany();

    return <div>
        <Text>My Post: {params.slug}</Text>
        <Text>{data.length}</Text>
        {
            data.map(d => {
                return <Text key={d.id}>
                    {d.title}
                </Text>;
            })
        }
    </div>;
}