import prisma from "@/utils/prisma"

export async function GET() {
    const users = await prisma.user.findMany({
        // where: {
        //     posts: {
        //         none: {
        //             published: false
        //         }
        //     }
        // }
    })
    return new Response(JSON.stringify(users))
}