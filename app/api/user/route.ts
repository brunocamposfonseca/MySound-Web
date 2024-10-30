import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"
import { User } from "@/lib/shared/models/User";

export async function GET(req: NextRequest) {
    try {
        const user = await prisma.user.findMany()
        return Response.json({user})
    } catch(error) {
        return NextResponse.json({
            message: "Error: ", error
        },
        {
            status: 500
        });
    }
}

export async function ListById(req: NextRequest) {
    try {
        const { id } = await req.json();
        if (!id) {
            return NextResponse.json({
                message: "ID is required"
            }, {
                status: 400
            });
        }
        const user = await prisma.user.findUnique({
            where: { 
                id: id,
            },
        });
        return NextResponse.json(user);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        return NextResponse.json({
            message: `Error: ${errorMessage}`
        }, {
            status: 500
        });
    }
}

export async function POST(req: Request) {
    const { id, name, email, password, slug, cpf }: User = await req.json()
    try {
        const user = await prisma.user.create({
            data: {
                id,
                name,
                email,
                password,
                slug,
                cpf,
                status: false,
                likes: "",
                follows: "",
                downloads: "",
            }
        })
        return Response.json({user})
    } catch (error) {
        return NextResponse.json({
            message: "Error: ", error
        },
        {
            status: 500
        });
    }
}

export async function DELETE(req: Request) {
    const { id } = await req.json();
    try {
        const user = await prisma.user.delete({
            where: {
                id
            }
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error: ", error
        },
        {
            status: 500
        });
    }
}

export async function PUT(req: Request)  {
    const { id, name, email, password, slug, cpf } = await req.json();
    try {
        const user = await prisma.user.update({
            where: {
                id,
            },
            data: {
                name,
                email,
                password,
                slug,
                cpf,
            }
        })
    } catch (error) {
        
    }
}