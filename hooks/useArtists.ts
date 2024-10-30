import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAllArtists, getArtistById, createArtist, deleteArtist, updateArtist } from '../services/artist';
import { Artist } from '@prisma/client';

export const useArtists = () => useQuery('artists', getAllArtists);
export const useArtist = (id: string) => useQuery(['artist', id], () => getArtistById(id));

export const useCreateArtist = () => {
    const queryClient = useQueryClient();
    return useMutation(createArtist, {
        onSuccess: () => queryClient.invalidateQueries('artists'),
    });
};

export const useUpdateArtist = () => {
    const queryClient = useQueryClient();
    return useMutation(
        ({ id, data }: { id: string; data: Partial<Artist> }) => updateArtist(id, data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('Artists');
            },
        }
    );
};

export const useDeleteArtist = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteArtist, {
        onSuccess: () => queryClient.invalidateQueries('artists'),
    });
};
