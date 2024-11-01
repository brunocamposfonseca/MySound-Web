"use server";

import { z } from "zod";
import prisma from '@/lib/prisma';

const userSchema = z.object({
    name: z.string().min(3, 'The name must be at least 3 characters long').trim(),
    email: z.string().email('Invalid email format').trim(),
    password: z
        .string()
        .min(8, 'The password must be at least 8 characters long')
        .regex(/[A-Z]/, 'The password must contain at least one uppercase letter')
        .regex(/\d/, 'The password must contain at least one number')
        .regex(/[^a-zA-Z0-9]/, 'The password must contain at least one special character'),
    slug: z.string().optional(),
});

export const validateUserData = (formData: FormData) => {
    const validatedFields = userSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    return validatedFields.data;
};

export const saveUserSchema = async (formData: FormData) => {
    const validatedData = validateUserData(formData);

    if ('error' in validatedData) {
        return { error: validatedData.error };
    }

    try {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: validatedData.name,
                email: validatedData.email,
                password: validatedData.password,
                slug: validatedData.slug ?? validatedData.email,
            }),
        });

        if (!response.ok) {
            throw new Error('Error to create a new user');
        }

        const result = await response.json();
        return result.message;
    } catch (error) {
        return { message: "Failed to create new user" };
    }
};

export const getUserMany = async (query: string) => {
    try {
        const request = await fetch(`/api/user?query=${query}`);

        if (!request.ok) {
            throw new Error('Error to get the user');
        }

        return await request.json();
    } catch (error) {
        console.error("Failed to fetch users:", error);
        return { message: "Failed to fetch users" };
    }
};

export const getUserById = async (id: string) => {
    try {
        const response = await fetch(`/api/user/${id}`);

        if (!response.ok) {
            throw new Error('Error fetching user');
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return { message: "Failed to fetch user" };
    }
};
