import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body)

    try{

        const createUser = await prisma?.user.create({
            data: {
                name: body.name,
                admin: body.admin,
            }
        })
        console.log(createUser)
        return Response.json(createUser)
    }catch(error){
        console.log(error)
        return Response.json({message : "false"})
    }
}