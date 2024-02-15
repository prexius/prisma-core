import prisma from "@/utils/prisma"

export async function GET() {
    const posts = await prisma.post.findMany({
        select:{
            title:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
    return new Response(JSON.stringify(posts))
}