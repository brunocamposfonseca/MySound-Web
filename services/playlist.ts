import { Playlist } from '@prisma/client';
import prisma from '../lib/prisma';

export const getAllPlaylists = async () => {
    prisma.playlist.findMany();
}

export const getPlaylistById = async (id: string) => {
    prisma.playlist.findUnique({
        where: { id }
    });
}

export const createPlaylist = async (data: Playlist) => {
    prisma.playlist.create({ data });
}

export const updatePlaylist = async (id: string, data: Partial<Playlist>) => {
    return await prisma.playlist.update({
        where: { id },
        data,
    });
};

export const deletePlaylist = async (id: string) => {
    prisma.playlist.delete({
        where: { id }
    });
}
