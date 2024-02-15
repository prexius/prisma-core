import prisma from "@/utils/prisma"

export async function GET() {
    const groupPost = await prisma.post.groupBy({
        by: ["authorId"],
        _sum: {
            likeNum: true
        },
        _avg:{
            likeNum:true
        },
        _count:{
            likeNum:true
        }
    })
    return new Response(JSON.stringify(groupPost))
}