import { Artist } from '@prisma/client';
import prisma from '../lib/prisma';

export const getAllArtists = async () => {
    prisma.artist.findMany();
}

export const getArtistById = async (id: string) => {
    prisma.artist.findUnique({ 
        where: { id } 
    });
}
export const createArtist = async (data: Artist) => {
    prisma.artist.create(
        { data }
    );
}

export const updateArtist = async (id: string, data: Partial<Artist>) => {
    return await prisma.artist.update({
        where: { id },
        data,
    });
};

export const deleteArtist = async (id: string) => {
    prisma.artist.delete({
        where: { id }
    });}
