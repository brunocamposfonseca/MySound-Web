import { Album } from '@prisma/client';
import prisma from '../lib/prisma';

export const getAllAlbums = async () => {
    prisma.album.findMany();
}

export const getAlbumById = async (id: string) => {
    prisma.album.findUnique({ 
        where: { id } 
    });
}

export const createAlbum = async (data: Album) => {
    prisma.album.create({ data });
}

export const updateAlbum = async (id: string, data: Partial<Album>) => {
    return await prisma.album.update({
        where: { id },
        data,
    });
};

export const deleteAlbum = async (id: string) => {
    prisma.album.delete({ 
        where: { id } 
    });
}
