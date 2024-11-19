import api from '@/services/api';
import { User } from '@/types/User';

export async function createUser(userData: Partial<User>): Promise<User> {
    try {
        const response = await api.post<User>('/users', userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}


export async function getUsers(): Promise<User[]> {
    try {
        const response = await api.get<User[]>('/users');
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

export async function updateUser(userId: string, userData: Partial<User>): Promise<User> {
    try {
        const response = await api.put<User>(`/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

export async function deleteUser(userId: string): Promise<void> {
    try {
        await api.delete(`/users/${userId}`);
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}
