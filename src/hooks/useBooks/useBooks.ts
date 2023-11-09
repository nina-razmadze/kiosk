import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '@src/utils/axiosPublic';
import { TBook } from '@src/@types/request.types';

type useBooksArgs = { categoryId?: number };

export function useBooks({ categoryId }: useBooksArgs) {
  const { data: books, isLoading: booksLoading } = useQuery<TBook[]>({
    queryKey: [categoryId, 'books'],
    refetchOnMount: false,
    queryFn: async () => {
      return axiosPublic
        .get(`/books${categoryId ? `?categoryId=${categoryId}` : ''}`)
        .then((resp) => resp.data)
        .catch(() => null);
    }
  });

  return { books: books || [], booksLoading };
}
