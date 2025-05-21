import { useMutation, useQuery } from '@emr-web/common';
import { axiosGet, axiosPost } from './axios';
import { userQueryKeyMap } from './common/user.queryKey';

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: LoginData) => {
      const res = await axiosPost('/auth/login', {
        data
      });
      return res;
    }
  });
};

export const useCurrentUser = (
  data: { isEnabled?: boolean } = { isEnabled: true }
) => {
  return useQuery({
    queryKey: userQueryKeyMap.currentUser(),
    queryFn: async () => axiosGet('/user'),
    select: (res) => res.data,
    enabled: data?.isEnabled
  });
};
