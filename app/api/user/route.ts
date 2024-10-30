import { NextResponse } from 'next/server';
import { getAllUsers, createUser } from '../../../services/user';

export async function GET() {
  const users = await getAllUsers();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const data = await req.json();
  const user = await createUser(data);
  return NextResponse.json(user);
}
