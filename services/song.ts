import { Song } from '@prisma/client';
import prisma from '../lib/prisma';

export const getAllSongs = async () => {
    prisma.song.findMany();
}

export const getSongById = async (id: string) => {
    prisma.song.findUnique({ 
        where: { id } 
    });
}

export const createSong = async (data: Song) => {
    prisma.song.create({ data });
}

export const updateSong = async (id: string, data: Partial<Song>) => {
    return await prisma.song.update({
        where: { id },
        data,
    });
};

export const deleteSong = async (id: string) => {
    prisma.song.delete({ 
        where: { id } 
    });
}
