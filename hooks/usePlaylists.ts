import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
    getAllPlaylists,
    getPlaylistById,
    createPlaylist,
    deletePlaylist,
    updatePlaylist,
} from '../services/playlist';
import { Playlist } from '@prisma/client';

export const usePlaylists = () => {
    return useQuery('playlists', getAllPlaylists);
};

export const usePlaylist = (id: string) => {
    return useQuery(['playlist', id], () => getPlaylistById(id));
};

export const useCreatePlaylist = () => {
    const queryClient = useQueryClient();
    return useMutation(createPlaylist, {
        onSuccess: () => {
            queryClient.invalidateQueries('playlists');
        },
    });
};

export const useUpdatePlaylist = () => {
    const queryClient = useQueryClient();
    return useMutation(
        ({ id, data }: { id: string; data: Partial<Playlist> }) => updatePlaylist(id, data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('playlists');
            },
        }
    );
};

export const useDeletePlaylist = () => {
    const queryClient = useQueryClient();
    return useMutation(deletePlaylist, {
        onSuccess: () => {
            queryClient.invalidateQueries('playlists');
        },
    });
};
