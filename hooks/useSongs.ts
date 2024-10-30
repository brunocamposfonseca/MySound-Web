import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getAllSongs,
  getSongById,
  createSong,
  deleteSong,
  updateSong,
} from '../services/song';
import { Song } from '@prisma/client';

export const useSongs = () => {
  return useQuery('songs', getAllSongs);
};

export const useSong = (id: string) => {
  return useQuery(['song', id], () => getSongById(id));
};

export const useCreateSong = () => {
  const queryClient = useQueryClient();
  return useMutation(createSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('songs');
    },
  });
};

export const useUpdateSong = () => {
    const queryClient = useQueryClient();
    return useMutation(
        ({ id, data }: { id: string; data: Partial<Song> }) => updateSong(id, data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('Songs');
            },
        }
    );
};

export const useDeleteSong = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('songs');
    },
  });
};
