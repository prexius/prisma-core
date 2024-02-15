import prisma from "@/utils/prisma"

export async function GET() {
    const likeSum = await prisma.post.aggregate({
        _sum: {
            likeNum: true
        },
        _avg: {
            likeNum: true
        },
        _count: {
            id: true
        },
        _max: {
            likeNum: true
        },
        _min: {
            likeNum: true
        }
    })
    return new Response(JSON.stringify(likeSum))
}