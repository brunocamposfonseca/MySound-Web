export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    slug: string;
    cpf?: string;
    genre: boolean;
    country: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    phoneNumber?: string;
}
