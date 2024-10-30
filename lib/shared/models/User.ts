export interface User {
    id: string,
    name: string,
    email: string
    password: string,
    slug: string,
    cpf?: string,
    status?: boolean,
    likes?: string,
    follows?: string,
    downloads?: string
    playlists?: string
}