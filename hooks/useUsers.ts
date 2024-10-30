import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAllUsers, getUserById, createUser, deleteUser, updateUser } from '../services/user';
import { User } from '@prisma/client';

//Caso haja algum problemma em relação ao backend e a conexão com o front, configure o QueryClient no projeto

export const useUsers = () => {
    return useQuery('users', getAllUsers);
  };
  
  export const useUser = (id: string) => {
    return useQuery(['user', id], () => getUserById(id));
  };
  
  export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation(createUser, {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    });
  };
  
  export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation(
        ({ id, data }: { id: string; data: Partial<User> }) => updateUser(id, data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('Users');
            },
        }
    );
};
  
  export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteUser, {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    });
  };