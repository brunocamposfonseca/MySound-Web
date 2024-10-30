import prisma from '../lib/prisma';
import { User } from '@prisma/client';

export const updateUser = async (id: string, data: Partial<User>) => {
    return await prisma.user.update({
        where: { id },
        data,
    });
};

export const getAllUsers = async () => {
    const response = await fetch('/api/users');
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
};

export const getUserById = async (id: string) => {
    return await prisma.user.findUnique({ where: { id } });
};

export const createUser = async (data: User) => {
    return await prisma.user.create({ data });
};



export const deleteUser = async (id: string) => {
    return await prisma.user.delete({ where: { id } });
};
