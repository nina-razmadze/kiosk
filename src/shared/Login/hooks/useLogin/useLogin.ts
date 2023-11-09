import { FormValues } from '../../Login';

import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '@src/utils/axiosPublic';

type LoginArgs = { formValues: FormValues };

export function useLogin({ formValues }: LoginArgs) {
  const { data: userData, isLoading: userLoading } = useQuery({
    queryKey: [formValues.username, formValues.password, 'books'],
    refetchOnMount: false,
    enabled:
      formValues.username !== undefined && formValues.password !== undefined,
    queryFn: async () => {
      return axiosPublic
        .get(
          `/users?username=${formValues.username}&password=${formValues.password}`
        )
        .then((resp) => resp.data)
        .catch(() => null);
    }
  });

  return { userData, userLoading };
}
