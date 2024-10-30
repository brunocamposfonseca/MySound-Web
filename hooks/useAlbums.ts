import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAllAlbums, getAlbumById, createAlbum, deleteAlbum, updateAlbum } from '../services/album';
import { Album } from '@prisma/client';

export const useAlbums = () => useQuery('albums', getAllAlbums);
export const useAlbum = (id: string) => useQuery(['album', id], () => getAlbumById(id));
export const useCreateAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation(createAlbum, {
    onSuccess: () => queryClient.invalidateQueries('albums'),
  });
};

export const useUpdateAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation(
      ({ id, data }: { id: string; data: Partial<Album> }) => updateAlbum(id, data),
      {
          onSuccess: () => {
              queryClient.invalidateQueries('Albums');
          },
      }
  );
};

export const useDeleteAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAlbum, {
    onSuccess: () => queryClient.invalidateQueries('albums'),
  });
};
