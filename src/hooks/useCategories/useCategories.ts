import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '@src/utils/axiosPublic';

import { TCategory } from '@src/@types/request.types';

export function useCategories() {
  const { data: categories, isLoading: categoriesLoading } = useQuery<
    TCategory[]
  >({
    queryKey: ['book-categories'],
    refetchOnMount: false,
    queryFn: async () => {
      return axiosPublic
        .get(`/categories`)
        .then((resp) => resp.data)
        .catch(() => null);
    }
  });

  return { categories: categories || [], categoriesLoading };
}
