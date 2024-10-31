import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; 

export async function POST(request: Request) {
  const data = await request.json();
  try {
    const newUser = await prisma.user.create({
      data,
    });
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar usuário.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar usuários.' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const { id, ...data } = await request.json();
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar usuário.' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  try {
    await prisma.user.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Usuário deletado com sucesso.' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao deletar usuário.' }, { status: 500 });
  }
}
